import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft, ArrowRight, Check, Dumbbell, Target, Utensils, User } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Button } from '../components/ui/Button'
import { Input, Select } from '../components/ui/Input'
import { Field } from '../components/ui/Field'
import { Segmented } from '../components/ui/Segmented'
import { cn } from '../lib/cn'
import { cmToIn, inToCm, kgToLb, lbToKg, roundTo } from '../lib/units'

const schema = z.object({
  displayName: z.string().min(1, 'Enter a name'),
  age: z.coerce.number().int().min(10).max(100),
  sex: z.enum(['male', 'female', 'other']),
  heightCm: z.coerce.number().min(80).max(260),
  startWeightKg: z.coerce.number().min(25).max(400),
  targetWeightKg: z.coerce.number().min(25).max(400),
  weightUnit: z.enum(['kg', 'lb']),
  lengthUnit: z.enum(['cm', 'in']),
  goal: z.string().min(1),
  targetDate: z.string().min(8),
  split: z.string().min(1),
  experience: z.string().min(1),
  sessionDurationMin: z.coerce.number().int().min(10).max(300),
  proteinTargetG: z.coerce.number().min(0).max(400),
  calorieTarget: z.coerce.number().min(0).max(10000),
})

type FormInput = z.input<typeof schema>
type FormValues = z.output<typeof schema>

const STEPS = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'goal', label: 'Goal', icon: Target },
  { key: 'training', label: 'Training', icon: Dumbbell },
  { key: 'nutrition', label: 'Nutrition', icon: Utensils },
] as const

export function Onboarding() {
  const { data, updateProfile, updateSettings, addMeasurement } = useApp()
  const [step, setStep] = useState(0)
  const unitRef = useRef({ weight: data.settings.units.weight, length: data.settings.units.length })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: data.profile.displayName === 'Athlete' ? '' : data.profile.displayName,
      age: data.profile.age,
      sex: data.profile.sex,
      heightCm: data.profile.heightCm,
      startWeightKg: data.profile.startWeightKg,
      targetWeightKg: data.profile.targetWeightKg,
      weightUnit: data.settings.units.weight,
      lengthUnit: data.settings.units.length,
      goal: data.profile.goal,
      targetDate: data.profile.targetDate,
      split: data.profile.split,
      experience: data.profile.experience,
      sessionDurationMin: data.profile.sessionDurationMin,
      proteinTargetG: data.settings.proteinTargetG,
      calorieTarget: data.settings.calorieTarget,
    },
  })

  const weightUnit = watch('weightUnit')
  const lengthUnit = watch('lengthUnit')

  useEffect(() => {
    if (weightUnit === unitRef.current.weight) return
    const { startWeightKg, targetWeightKg } = getValues()
    const convert = unitRef.current.weight === 'kg' ? kgToLb : lbToKg
    setValue('startWeightKg', roundTo(convert(Number(startWeightKg) || 0), 1))
    setValue('targetWeightKg', roundTo(convert(Number(targetWeightKg) || 0), 1))
    unitRef.current.weight = weightUnit
  }, [weightUnit, getValues, setValue])

  useEffect(() => {
    if (lengthUnit === unitRef.current.length) return
    const height = Number(getValues('heightCm')) || 0
    const convert = unitRef.current.length === 'cm' ? cmToIn : inToCm
    setValue('heightCm', roundTo(convert(height), 1))
    unitRef.current.length = lengthUnit
  }, [lengthUnit, getValues, setValue])

  const next = async () => {
    const fieldsByStep: (keyof FormValues)[][] = [
      ['displayName', 'age', 'sex', 'heightCm', 'weightUnit', 'lengthUnit'],
      ['startWeightKg', 'targetWeightKg', 'targetDate', 'goal'],
      ['split', 'experience', 'sessionDurationMin'],
      ['proteinTargetG', 'calorieTarget'],
    ]
    const valid = await trigger(fieldsByStep[step])
    if (valid) setStep((s) => Math.min(STEPS.length - 1, s + 1))
  }

  const onSubmit = (values: FormValues) => {
    const startKg = values.weightUnit === 'lb' ? (lbToKg(values.startWeightKg) as number) : values.startWeightKg
    const targetKg = values.weightUnit === 'lb' ? (lbToKg(values.targetWeightKg) as number) : values.targetWeightKg
    const heightCmV = values.lengthUnit === 'in' ? (inToCm(values.heightCm) as number) : values.heightCm

    updateSettings({
      units: { weight: values.weightUnit, length: values.lengthUnit },
      proteinTargetG: values.proteinTargetG,
      calorieTarget: values.calorieTarget,
    })
    updateProfile({
      displayName: values.displayName,
      age: values.age,
      sex: values.sex,
      heightCm: roundTo(heightCmV, 1),
      startWeightKg: roundTo(startKg, 2),
      targetWeightKg: roundTo(targetKg, 2),
      goal: values.goal,
      targetDate: values.targetDate,
      split: values.split,
      experience: values.experience,
      sessionDurationMin: values.sessionDurationMin,
      onboarded: true,
    })
    addMeasurement({
      date: data.profile.startWeightDate,
      weightKg: roundTo(startKg, 2),
      waistCm: null,
      chestCm: null,
      armCm: null,
      thighCm: null,
      hipCm: null,
      photos: [],
      note: 'Starting weight',
    })
  }

  return (
    <div className="min-h-dvh bg-app text-ink">
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col gap-8 p-5 lg:flex-row lg:items-center lg:gap-12 lg:p-10">
        <div className="lg:w-2/5">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accentfg">
              <Dumbbell size={20} strokeWidth={2.5} />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Iron<span className="text-accent">Track</span>
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Set up your training in under a minute.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Sensible defaults are pre-filled for a six-day Push / Pull / Legs program. Everything here can be
            changed later in Settings — nothing is locked in.
          </p>
          <ol className="mt-8 hidden space-y-3 lg:block">
            {STEPS.map((s, i) => (
              <li key={s.key} className="flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold',
                    i < step
                      ? 'border-transparent bg-accent text-accentfg'
                      : i === step
                        ? 'border-accent text-accent'
                        : 'border-line text-faint',
                  )}
                >
                  {i < step ? <Check size={15} /> : i + 1}
                </span>
                <span className={cn('text-sm font-semibold', i === step ? 'text-ink' : 'text-muted')}>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="w-full lg:w-3/5">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s.key}
                  className={cn('h-1.5 flex-1 rounded-full', i <= step ? 'bg-accent' : 'bg-surface3')}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {step === 0 ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Your profile</h2>
                  <Field label="Name" htmlFor="displayName" error={errors.displayName?.message}>
                    <Input id="displayName" placeholder="Alex" autoComplete="name" {...register('displayName')} />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Age" htmlFor="age" error={errors.age?.message}>
                      <Input id="age" type="number" inputMode="numeric" {...register('age', { valueAsNumber: true })} />
                    </Field>
                    <Field label="Sex" htmlFor="sex">
                      <Select id="sex" {...register('sex')}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other / prefer not to say</option>
                      </Select>
                    </Field>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label={`Height (${lengthUnit})`}
                      htmlFor="heightCm"
                      error={errors.heightCm?.message}
                    >
                      <Input
                        id="heightCm"
                        type="number"
                        step="0.1"
                        inputMode="decimal"
                        {...register('heightCm', { valueAsNumber: true })}
                      />
                    </Field>
                    <Field label="Units">
                      <div className="grid grid-cols-2 gap-2">
                        <Segmented
                          size="sm"
                          value={weightUnit}
                          onChange={(v) => setValue('weightUnit', v)}
                          options={[
                            { value: 'kg', label: 'kg' },
                            { value: 'lb', label: 'lb' },
                          ]}
                        />
                        <Segmented
                          size="sm"
                          value={lengthUnit}
                          onChange={(v) => setValue('lengthUnit', v)}
                          options={[
                            { value: 'cm', label: 'cm' },
                            { value: 'in', label: 'in' },
                          ]}
                        />
                      </div>
                    </Field>
                  </div>
                  <input type="hidden" {...register('weightUnit')} />
                  <input type="hidden" {...register('lengthUnit')} />
                </div>
              ) : null}

              {step === 1 ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Your goal</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label={`Current weight (${weightUnit})`}
                      htmlFor="startWeightKg"
                      error={errors.startWeightKg?.message}
                    >
                      <Input
                        id="startWeightKg"
                        type="number"
                        step="0.1"
                        inputMode="decimal"
                        {...register('startWeightKg', { valueAsNumber: true })}
                      />
                    </Field>
                    <Field
                      label={`Target weight (${weightUnit})`}
                      htmlFor="targetWeightKg"
                      error={errors.targetWeightKg?.message}
                    >
                      <Input
                        id="targetWeightKg"
                        type="number"
                        step="0.1"
                        inputMode="decimal"
                        {...register('targetWeightKg', { valueAsNumber: true })}
                      />
                    </Field>
                  </div>
                  <Field label="Target date" htmlFor="targetDate" error={errors.targetDate?.message}>
                    <Input id="targetDate" type="date" {...register('targetDate')} />
                  </Field>
                  <Field label="Goal" htmlFor="goal" error={errors.goal?.message}>
                    <Input id="goal" {...register('goal')} />
                  </Field>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Training setup</h2>
                  <Field label="Split" htmlFor="split" error={errors.split?.message}>
                    <Input id="split" {...register('split')} />
                  </Field>
                  <Field label="Training experience" htmlFor="experience" error={errors.experience?.message}>
                    <Input id="experience" {...register('experience')} />
                  </Field>
                  <Field
                    label="Typical session length (minutes)"
                    htmlFor="sessionDurationMin"
                    error={errors.sessionDurationMin?.message}
                  >
                    <Input
                      id="sessionDurationMin"
                      type="number"
                      inputMode="numeric"
                      {...register('sessionDurationMin', { valueAsNumber: true })}
                    />
                  </Field>
                  <div className="rounded-xl border border-line bg-surface2 p-3 text-sm text-muted">
                    A six-day Push / Pull / Legs template will be loaded. You can reorder exercises, change sets
                    and rep ranges, or create custom workouts at any time.
                  </div>
                </div>
              ) : null}

              {step === 2 ? null : null}

              {STEPS[step].key === 'nutrition' ? (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Nutrition targets</h2>
                  <p className="text-sm text-muted">
                    Start with a reasonable target — you can adjust it based on your body-weight trend. We do not
                    guess exact calorie needs from your profile alone.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Protein target (g)" htmlFor="proteinTargetG" error={errors.proteinTargetG?.message}>
                      <Input
                        id="proteinTargetG"
                        type="number"
                        inputMode="numeric"
                        {...register('proteinTargetG', { valueAsNumber: true })}
                      />
                    </Field>
                    <Field label="Calorie target" htmlFor="calorieTarget" error={errors.calorieTarget?.message}>
                      <Input
                        id="calorieTarget"
                        type="number"
                        inputMode="numeric"
                        {...register('calorieTarget', { valueAsNumber: true })}
                      />
                    </Field>
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-between gap-3 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                >
                  <ArrowLeft size={16} /> Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button type="button" onClick={next}>
                    Continue <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button type="submit">
                    Start training <Check size={16} />
                  </Button>
                )}
              </div>
            </form>
          </div>
          <p className="mt-3 text-center text-xs text-faint">
            IronTrack stores everything locally in this browser. Export a backup any time from Settings.
          </p>
        </div>
      </div>
    </div>
  )
}
