import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Image as ImageIcon, Upload } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { validateImageFile } from '../storage/repositories/assetRepository'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input, Select, Textarea } from './ui/Input'
import { Field } from './ui/Field'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  primaryMuscle: z.string().min(1, 'Required'),
  secondaryMuscles: z.string().optional(),
  equipment: z.string().min(1, 'Required'),
  category: z.enum(['push', 'pull', 'legs', 'core']),
  exerciseClass: z.enum(['compound', 'isolation']),
  repRange: z.string().min(1, 'Required'),
  instructions: z.string().optional(),
  mistakes: z.string().optional(),
  usesBodyweight: z.boolean().optional(),
  unilateral: z.boolean().optional(),
})

type FormValues = z.infer<typeof schema>

const EMPTY: FormValues = {
  name: '',
  primaryMuscle: '',
  secondaryMuscles: '',
  equipment: '',
  category: 'push',
  exerciseClass: 'compound',
  repRange: '8-12',
  instructions: '',
  mistakes: '',
  usesBodyweight: false,
  unilateral: false,
}

export function CustomExerciseDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { addExercise, setExerciseImage } = useApp()
  const [pendingImage, setPendingImage] = useState<File | null>(null)
  const [imageError, setImageError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: EMPTY })

  useEffect(() => {
    if (open) reset(EMPTY)
  }, [open, reset])

  const clearImage = () => {
    setPendingImage(null)
    setImageError(null)
  }

  const handleClose = () => {
    if (saving) return
    clearImage()
    onClose()
  }

  const previewUrl = useMemo(
    () => (pendingImage ? URL.createObjectURL(pendingImage) : null),
    [pendingImage],
  )
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const onPickImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    const result = validateImageFile(file)
    if (!result.ok) {
      setImageError(result.error)
      setPendingImage(null)
      return
    }
    setImageError(null)
    setPendingImage(file)
  }

  const onSubmit = async (values: FormValues) => {
    setSaving(true)
    const created = addExercise({
      name: values.name,
      primaryMuscle: values.primaryMuscle,
      secondaryMuscles: values.secondaryMuscles
        ? values.secondaryMuscles.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
      equipment: values.equipment,
      category: values.category,
      exerciseClass: values.exerciseClass,
      repRange: values.repRange,
      instructions: values.instructions ?? '',
      mistakes: values.mistakes ?? '',
      usesBodyweight: values.usesBodyweight ?? false,
      unilateral: values.unilateral ?? false,
    })
    if (pendingImage) {
      const result = await setExerciseImage(created.id, pendingImage)
      if (!result.ok) {
        setImageError(result.error ?? 'Could not save the image.')
        setSaving(false)
        return
      }
    }
    setSaving(false)
    clearImage()
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      size="lg"
      title="Create custom exercise"
      description="Custom exercises behave exactly like the built-in ones and can be added to any template."
      footer={
        <>
          <Button variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" form="custom-exercise-form" disabled={saving}>
            {saving ? 'Creating…' : 'Create exercise'}
          </Button>
        </>
      }
    >
      <form id="custom-exercise-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Field label="Name" htmlFor="ce-name" error={errors.name?.message}>
          <Input id="ce-name" placeholder="e.g. Pec deck fly" {...register('name')} />
        </Field>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Primary muscle" htmlFor="ce-primary" error={errors.primaryMuscle?.message}>
            <Input id="ce-primary" placeholder="Chest" {...register('primaryMuscle')} />
          </Field>
          <Field label="Secondary muscles" htmlFor="ce-secondary" hint="Comma separated">
            <Input id="ce-secondary" placeholder="Front delts, Triceps" {...register('secondaryMuscles')} />
          </Field>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Field label="Equipment" htmlFor="ce-equipment" error={errors.equipment?.message}>
            <Input id="ce-equipment" placeholder="Cable" {...register('equipment')} />
          </Field>
          <Field label="Movement" htmlFor="ce-category">
            <Select id="ce-category" {...register('category')}>
              <option value="push">Push</option>
              <option value="pull">Pull</option>
              <option value="legs">Legs</option>
              <option value="core">Core</option>
            </Select>
          </Field>
          <Field label="Type" htmlFor="ce-class">
            <Select id="ce-class" {...register('exerciseClass')}>
              <option value="compound">Compound</option>
              <option value="isolation">Isolation</option>
            </Select>
          </Field>
        </div>
        <Field label="Rep range" htmlFor="ce-reps" error={errors.repRange?.message} hint="e.g. 8-12 or 30-45s">
          <Input id="ce-reps" {...register('repRange')} />
        </Field>
        <Field
          label="Photo (optional)"
          htmlFor="ce-image"
          hint="PNG, JPEG, WebP or AVIF — up to 2 MB"
          error={imageError ?? undefined}
        >
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line bg-surface2">
              {previewUrl ? (
                <img src={previewUrl} alt="Selected exercise" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-faint">
                  <ImageIcon size={20} aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-surface2 px-3 py-2 text-sm font-semibold text-ink hover:bg-surface3">
                <Upload size={15} aria-hidden="true" />
                {pendingImage ? 'Change image' : 'Choose image'}
                <input
                  id="ce-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
                  className="sr-only"
                  onChange={onPickImage}
                />
              </label>
              {pendingImage ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setPendingImage(null)
                    setImageError(null)
                  }}
                >
                  Remove
                </Button>
              ) : null}
            </div>
          </div>
        </Field>
        <Field label="Instructions" htmlFor="ce-instructions">
          <Textarea id="ce-instructions" rows={3} placeholder="How to perform the movement…" {...register('instructions')} />
        </Field>
        <Field label="Common mistakes" htmlFor="ce-mistakes">
          <Textarea id="ce-mistakes" rows={2} {...register('mistakes')} />
        </Field>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-[var(--app-accent)]" {...register('usesBodyweight')} />
            Bodyweight exercise
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-[var(--app-accent)]" {...register('unilateral')} />
            Performed per side
          </label>
        </div>
      </form>
    </Dialog>
  )
}
