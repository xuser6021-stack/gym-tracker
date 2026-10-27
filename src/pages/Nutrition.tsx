import { useMemo, useState } from 'react'
import { BookOpen, ChevronLeft, ChevronRight, Copy, Droplet, Flame, Plus, Save, Trash, Utensils, X } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { PageHeader, Notice } from '../components/ui/PageHeader'
import { Card, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Dialog } from '../components/ui/Dialog'
import { Input } from '../components/ui/Input'
import { Progress } from '../components/ui/Progress'
import { Stat } from '../components/ui/Stat'
import { FoodDialog } from '../components/FoodDialog'
import { RecipeDialog } from '../components/nutrition/RecipeDialog'
import { BarsChart } from '../components/charts/Charts'
import { isoDate, parseDate, addDays } from '../lib/stats'
import { formatDate, formatDayShort, relativeDay } from '../lib/format'
import { useToday } from '../lib/useNow'
import { cn } from '../lib/cn'

const DEFAULT_MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

export function Nutrition() {
  const {
    data,
    getNutritionDay,
    deleteFood,
    addMeal,
    updateWater,
    copyDayMeals,
    saveMealTemplate,
    applyMealTemplate,
    deleteMealTemplate,
    addRecipe,
    deleteRecipe,
    applyRecipeToMeal,
  } = useApp()
  const today = useToday()
  const [date, setDate] = useState(isoDate(today))
  const [foodTarget, setFoodTarget] = useState<{ meal: string } | null>(null)
  const [newMealOpen, setNewMealOpen] = useState(false)
  const [newMealName, setNewMealName] = useState('')
  const [saveTplOpen, setSaveTplOpen] = useState(false)
  const [saveTplName, setSaveTplName] = useState('')
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false)

  const day = getNutritionDay(date)
  const yesterday = isoDate(addDays(parseDate(date), -1))
  const hasYesterday = data.nutrition.some((d) => d.date === yesterday && d.meals.some((m) => m.items.length))
  const hasTodayItems = day.meals.some((m) => m.items.length)
  const templatesEnabled = data.settings.mealTemplatesEnabled
  const targets = {
    calories: data.settings.calorieTarget,
    protein: data.settings.proteinTargetG,
    water: data.settings.waterTargetMl,
  }

  const totals = useMemo(() => {
    let calories = 0
    let proteinG = 0
    let carbsG = 0
    let fatG = 0
    for (const meal of day.meals) {
      for (const item of meal.items) {
        calories += item.calories
        proteinG += item.proteinG
        carbsG += item.carbsG
        fatG += item.fatG
      }
    }
    return { calories, proteinG, carbsG, fatG }
  }, [day])

  const mealNames = useMemo(() => {
    const extra = day.meals.map((m) => m.name).filter((n) => !DEFAULT_MEALS.includes(n))
    return [...DEFAULT_MEALS, ...extra]
  }, [day])

  const itemsFor = (name: string) => day.meals.find((m) => m.name === name)?.items ?? []

  const weekData = useMemo(() => {
    const out: { label: string; calories: number; protein: number }[] = []
    for (let i = 6; i >= 0; i--) {
      const d = isoDate(addDays(parseDate(date), -i))
      const entry = data.nutrition.find((n) => n.date === d)
      const cals = entry ? entry.meals.reduce((s, m) => s + m.items.reduce((a, it) => a + it.calories, 0), 0) : 0
      const prot = entry ? entry.meals.reduce((s, m) => s + m.items.reduce((a, it) => a + it.proteinG, 0), 0) : 0
      out.push({
        label: `${formatDayShort(d)} ${parseDate(d).getDate()}`,
        calories: cals,
        protein: prot,
      })
    }
    return out
  }, [data.nutrition, date])

  return (
    <div>
      <PageHeader
        title="Nutrition"
        subtitle="Hit your lean-bulk calories and protein consistently"
      />

      <div className="mb-4 flex items-center justify-between gap-2 rounded-2xl border border-line bg-surface p-2">
        <Button variant="ghost" size="icon" aria-label="Previous day" onClick={() => setDate(isoDate(addDays(parseDate(date), -1)))}>
          <ChevronLeft size={18} />
        </Button>
        <div className="text-center">
          <p className="text-sm font-bold text-ink">{formatDate(date)}</p>
          <p className="text-xs text-faint">
            {relativeDay(date)}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Next day"
          onClick={() => setDate(isoDate(addDays(parseDate(date), 1)))}
          disabled={date >= isoDate(today)}
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat
          label="Calories"
          value={Math.round(totals.calories)}
          sub={`of ${targets.calories} kcal`}
          tone={totals.calories >= targets.calories ? 'success' : 'default'}
        />
        <Stat
          label="Protein"
          value={`${Math.round(totals.proteinG)}g`}
          sub={`of ${targets.protein}g`}
          tone={totals.proteinG >= targets.protein ? 'success' : 'default'}
        />
        <Stat label="Carbs" value={`${Math.round(totals.carbsG)}g`} sub="today" />
        <Stat label="Fat" value={`${Math.round(totals.fatG)}g`} sub="today" />
      </div>

      <Card className="mt-4">
        <CardHeader title="Daily targets" subtitle="Aim to land close to each bar by the end of the day" />
        <div className="space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>Calories</span>
              <span>
                {Math.round(totals.calories)} / {targets.calories} kcal
              </span>
            </div>
            <Progress value={totals.calories} max={targets.calories} tone={totals.calories >= targets.calories ? 'success' : 'accent'} />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>Protein</span>
              <span>
                {Math.round(totals.proteinG)} / {targets.protein} g
              </span>
            </div>
            <Progress value={totals.proteinG} max={targets.protein} tone={totals.proteinG >= targets.protein ? 'success' : 'accent'} />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted">
              <span>Water</span>
              <span>
                {(day.waterMl / 1000).toFixed(2)} / {(targets.water / 1000).toFixed(1)} L
              </span>
            </div>
            <Progress value={day.waterMl} max={targets.water} tone="accent" />
            <div className="mt-2 flex flex-wrap gap-2">
              {[250, 500, 750].map((ml) => (
                <Button key={ml} variant="secondary" size="sm" onClick={() => updateWater(date, day.waterMl + ml)}>
                  <Droplet size={14} /> +{ml} ml
                </Button>
              ))}
              <Button variant="ghost" size="sm" onClick={() => updateWater(date, 0)} disabled={day.waterMl === 0}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasYesterday}
          onClick={() => copyDayMeals(yesterday, date)}
        >
          <Copy size={15} /> Copy yesterday
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setRecipeDialogOpen(true)}>
          <BookOpen size={15} /> Recipes & Prep
        </Button>
        {templatesEnabled ? (
          <Button variant="secondary" size="sm" disabled={!hasTodayItems} onClick={() => setSaveTplOpen(true)}>
            <Save size={15} /> Save as template
          </Button>
        ) : null}
      </div>

      {templatesEnabled && data.mealTemplates.length ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wide text-faint">Templates</span>
          {data.mealTemplates.map((t) => (
            <span
              key={t.id}
              className="flex items-center gap-1 rounded-full border border-line bg-surface py-1 pl-3 pr-1.5"
            >
              <button
                type="button"
                onClick={() => applyMealTemplate(t.id, date)}
                className="text-xs font-semibold text-ink hover:text-accent"
              >
                {t.name}
              </button>
              <button
                type="button"
                aria-label={`Delete template ${t.name}`}
                onClick={() => deleteMealTemplate(t.id)}
                className="flex h-5 w-5 items-center justify-center rounded-full text-faint hover:bg-dangersoft hover:text-danger"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-4 space-y-3">
        {mealNames.map((name) => {
          const items = itemsFor(name)
          const mealCals = items.reduce((s, it) => s + it.calories, 0)
          const mealProtein = items.reduce((s, it) => s + it.proteinG, 0)
          return (
            <Card key={name}>
              <CardHeader
                title={name}
                subtitle={
                  items.length
                    ? `${Math.round(mealCals)} kcal · ${Math.round(mealProtein)}g protein`
                    : 'Nothing logged'
                }
                action={
                  <Button variant="secondary" size="sm" onClick={() => setFoodTarget({ meal: name })}>
                    <Plus size={15} /> Food
                  </Button>
                }
              />
              {items.length ? (
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2"
                    >
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 truncate text-sm font-semibold text-ink">
                          {item.name}
                          {item.estimated ? <span className="text-xs font-normal text-faint">~est</span> : null}
                        </p>
                        <p className="truncate text-xs text-muted">
                          {item.quantity ? `${item.quantity} · ` : ''}
                          {Math.round(item.calories)} kcal · P{Math.round(item.proteinG)} C
                          {Math.round(item.carbsG)} F{Math.round(item.fatG)}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => deleteFood(date, name, item.id)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
                      >
                        <Trash size={15} />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <button
                  type="button"
                  onClick={() => setFoodTarget({ meal: name })}
                  className={cn(
                    'flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line px-3 py-3 text-sm text-muted hover:border-linestrong hover:text-ink',
                  )}
                >
                  <Utensils size={15} /> Add food to {name}
                </button>
              )}
            </Card>
          )
        })}

        {newMealOpen ? (
          <Card>
            <div className="flex gap-2">
              <input
                autoFocus
                value={newMealName}
                onChange={(e) => setNewMealName(e.target.value)}
                placeholder="Meal name (e.g. Pre-workout)"
                className="h-11 flex-1 rounded-xl border border-line bg-surface2 px-3 text-sm text-ink outline-none placeholder:text-faint focus:border-linestrong"
              />
              <Button
                onClick={() => {
                  if (newMealName.trim()) addMeal(date, newMealName.trim())
                  setNewMealName('')
                  setNewMealOpen(false)
                }}
              >
                Add
              </Button>
              <Button variant="ghost" onClick={() => setNewMealOpen(false)}>
                Cancel
              </Button>
            </div>
          </Card>
        ) : (
          <Button variant="secondary" className="w-full" onClick={() => setNewMealOpen(true)}>
            <Plus size={16} /> Add meal
          </Button>
        )}
      </div>

      <Card className="mt-4">
        <CardHeader title="Last 7 days" subtitle="Calories per day" action={<Flame size={16} className="text-accent" />} />
        <BarsChart
          data={weekData}
          xKey="label"
          unit="kcal"
          series={[{ key: 'calories', label: 'Calories', color: 'var(--app-accent)' }]}
          valueFormatter={(v) => `${v.toLocaleString()} kcal`}
        />
      </Card>

      {totals.proteinG < targets.protein * 0.6 && date === isoDate(today) ? (
        <Notice tone="warn" className="mt-3">
          Protein is well below target for today. A protein-rich meal or shake will help you keep building muscle.
        </Notice>
      ) : null}

      <Dialog
        open={saveTplOpen}
        onClose={() => setSaveTplOpen(false)}
        title="Save day as template"
        description="Reusable meal plan — applying a template adds its items to the selected day."
        footer={
          <>
            <Button variant="ghost" onClick={() => setSaveTplOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                const name = saveTplName.trim()
                if (name) saveMealTemplate(date, name)
                setSaveTplName('')
                setSaveTplOpen(false)
              }}
            >
              Save template
            </Button>
          </>
        }
      >
        <Input
          autoFocus
          value={saveTplName}
          onChange={(e) => setSaveTplName(e.target.value)}
          placeholder="e.g. Typical training day"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const name = saveTplName.trim()
              if (name) saveMealTemplate(date, name)
              setSaveTplName('')
              setSaveTplOpen(false)
            }
          }}
        />
      </Dialog>

      <FoodDialog open={foodTarget !== null} onClose={() => setFoodTarget(null)} date={date} mealName={foodTarget?.meal ?? ''} />

      <RecipeDialog
        open={recipeDialogOpen}
        onClose={() => setRecipeDialogOpen(false)}
        recipes={data.recipes ?? []}
        date={date}
        mealNames={mealNames}
        onAddRecipe={addRecipe}
        onDeleteRecipe={deleteRecipe}
        onApplyRecipe={applyRecipeToMeal}
      />
    </div>
  )
}
