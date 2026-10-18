import { useState } from 'react'
import { ArrowDown, ArrowUp, Plus, Trash } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Dialog } from './ui/Dialog'
import { Button } from './ui/Button'
import { Input, Select } from './ui/Input'
import { Field } from './ui/Field'
import { Switch } from './ui/Switch'
import { ConfirmDialog } from './ui/ConfirmDialog'
import { ExercisePickerDialog } from './ExercisePickerDialog'
import { ExerciseImage } from './exercise/ExerciseImage'
import { DAYS_OF_WEEK } from '../data/templates'

export function TemplateEditor({
  templateId,
  open,
  onClose,
}: {
  templateId: string | null
  open: boolean
  onClose: () => void
}) {
  const {
    data,
    exercisesById,
    updateTemplate,
    updateTemplateExercise,
    removeTemplateExercise,
    addExerciseToTemplate,
    moveTemplateExercise,
    deleteTemplate,
  } = useApp()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const template = data.templates.find((t) => t.id === templateId)
  if (!template) return null

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        size="lg"
        title={`Edit ${template.name}`}
        description="Changes apply to future workouts only — completed sessions keep the plan used at the time."
        footer={
          <>
            <Button
              variant="ghost"
              className="text-danger hover:bg-dangersoft sm:mr-auto"
              onClick={() => setConfirmDelete(true)}
            >
              <Trash size={16} /> Delete template
            </Button>
            <Button onClick={onClose}>Done</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name" htmlFor="tpl-name">
              <Input
                id="tpl-name"
                value={template.name}
                onChange={(e) => updateTemplate(template.id, { name: e.target.value })}
              />
            </Field>
            <Field label="Day" htmlFor="tpl-day">
              <Select
                id="tpl-day"
                value={template.day}
                onChange={(e) => updateTemplate(template.id, { day: e.target.value })}
              >
                {DAYS_OF_WEEK.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <label className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3.5 py-3">
            <span>
              <span className="block text-sm font-semibold text-ink">Rest day</span>
              <span className="block text-xs text-muted">No scheduled lifting on this day</span>
            </span>
            <Switch
              checked={template.isRestDay}
              onChange={(v) => updateTemplate(template.id, { isRestDay: v })}
            />
          </label>

          {!template.isRestDay ? (
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-ink">Exercises ({template.exercises.length})</h3>
                <Button variant="secondary" size="sm" onClick={() => setPickerOpen(true)}>
                  <Plus size={15} /> Add
                </Button>
              </div>
              <div className="space-y-2">
                {template.exercises.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-line px-3 py-4 text-center text-sm text-muted">
                    No exercises yet. Add some from the library.
                  </p>
                ) : null}
                {template.exercises.map((te, index) => {
                  const exercise = exercisesById.get(te.exerciseId)
                  return (
                    <div key={te.id} className="rounded-xl border border-line bg-surface2 p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 items-start gap-2.5">
                          {exercise ? (
                            <ExerciseImage
                              exercise={exercise}
                              kind="thumbnail"
                              compact
                              className="h-10 w-10 shrink-0 rounded-lg"
                            />
                          ) : null}
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-ink">
                              {index + 1}. {exercise?.name ?? 'Unknown exercise'}
                            </p>
                            <p className="text-xs text-muted">{exercise?.primaryMuscle}</p>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-0.5">
                          <button
                            type="button"
                            aria-label="Move up"
                            disabled={index === 0}
                            onClick={() => moveTemplateExercise(template.id, te.id, -1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-surface3 disabled:opacity-30"
                          >
                            <ArrowUp size={15} />
                          </button>
                          <button
                            type="button"
                            aria-label="Move down"
                            disabled={index === template.exercises.length - 1}
                            onClick={() => moveTemplateExercise(template.id, te.id, 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-surface3 disabled:opacity-30"
                          >
                            <ArrowDown size={15} />
                          </button>
                          <button
                            type="button"
                            aria-label="Remove exercise"
                            onClick={() => removeTemplateExercise(template.id, te.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
                          >
                            <Trash size={15} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <label className="text-[11px] font-semibold uppercase text-muted">
                          Sets
                          <Input
                            type="number"
                            inputMode="numeric"
                            min={1}
                            max={20}
                            value={te.sets}
                            onChange={(e) =>
                              updateTemplateExercise(template.id, te.id, {
                                sets: Math.max(1, Math.min(20, Number(e.target.value) || 1)),
                              })
                            }
                            className="mt-1 h-10"
                          />
                        </label>
                        <label className="text-xs font-semibold uppercase text-muted">
                          Min reps
                          <Input
                            type="number"
                            inputMode="numeric"
                            min={0}
                            value={te.repsMin}
                            onChange={(e) =>
                              updateTemplateExercise(template.id, te.id, {
                                repsMin: Math.max(0, Number(e.target.value) || 0),
                              })
                            }
                            className="mt-1 h-10"
                          />
                        </label>
                        <label className="text-xs font-semibold uppercase text-muted">
                          Max reps
                          <Input
                            type="number"
                            inputMode="numeric"
                            min={0}
                            value={te.repsMax}
                            onChange={(e) =>
                              updateTemplateExercise(template.id, te.id, {
                                repsMax: Math.max(0, Number(e.target.value) || 0),
                              })
                            }
                            className="mt-1 h-10"
                          />
                        </label>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </Dialog>

      <ExercisePickerDialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onPick={(exerciseId) => {
          addExerciseToTemplate(template.id, exerciseId)
          setPickerOpen(false)
        }}
      />

      <ConfirmDialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          deleteTemplate(template.id)
          setConfirmDelete(false)
          onClose()
        }}
        title={`Delete "${template.name}"?`}
        description="This removes the template. Completed workouts in your history are not affected."
        confirmLabel="Delete template"
        destructive
      />
    </>
  )
}
