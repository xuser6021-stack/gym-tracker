import { useState } from 'react'
import { Plus, Trash, BookOpen } from 'lucide-react'
import { Dialog } from '../ui/Dialog'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useToast } from '../ui/Toast'
import type { FoodItem, Recipe } from '../../types'

interface RecipeDialogProps {
  open: boolean
  onClose: () => void
  recipes: Recipe[]
  date: string
  mealNames: string[]
  onAddRecipe: (recipe: Omit<Recipe, 'id'>) => Recipe
  onDeleteRecipe: (id: string) => void
  onApplyRecipe: (recipeId: string, date: string, mealName: string, servingsMultiplier: number) => void
}

export function RecipeDialog({
  open,
  onClose,
  recipes,
  date,
  mealNames,
  onAddRecipe,
  onDeleteRecipe,
  onApplyRecipe,
}: RecipeDialogProps) {
  const toast = useToast()
  const [activeTab, setActiveTab] = useState<'browse' | 'create'>('browse')
  const [selectedMeal, setSelectedMeal] = useState(mealNames[0] || 'Lunch')
  const [servingsMultiplier, setServingsMultiplier] = useState(1)

  // New recipe state
  const [recipeName, setRecipeName] = useState('')
  const [servings, setServings] = useState(1)
  const [instructions, setInstructions] = useState('')
  const [items, setItems] = useState<Omit<FoodItem, 'id'>[]>([])

  // New ingredient item
  const [itemName, setItemName] = useState('')
  const [itemQuantity, setItemQuantity] = useState('')
  const [itemCals, setItemCals] = useState('')
  const [itemProtein, setItemProtein] = useState('')
  const [itemCarbs, setItemCarbs] = useState('')
  const [itemFat, setItemFat] = useState('')

  const handleAddIngredient = () => {
    if (!itemName.trim() || !itemCals) return
    setItems((prev) => [
      ...prev,
      {
        name: itemName.trim(),
        quantity: itemQuantity.trim(),
        calories: Number(itemCals) || 0,
        proteinG: Number(itemProtein) || 0,
        carbsG: Number(itemCarbs) || 0,
        fatG: Number(itemFat) || 0,
        estimated: false,
      },
    ])
    setItemName('')
    setItemQuantity('')
    setItemCals('')
    setItemProtein('')
    setItemCarbs('')
    setItemFat('')
  }

  const handleSaveRecipe = () => {
    if (!recipeName.trim() || items.length === 0) return
    onAddRecipe({
      name: recipeName.trim(),
      servings: Math.max(1, servings),
      instructions: instructions.trim() || undefined,
      items: items.map((it, idx) => ({ ...it, id: `it_${idx}` })),
    })
    toast.success('Recipe created', `${recipeName} is ready to log anytime.`)
    setRecipeName('')
    setServings(1)
    setInstructions('')
    setItems([])
    setActiveTab('browse')
  }

  const handleApply = (recipeId: string) => {
    onApplyRecipe(recipeId, date, selectedMeal, servingsMultiplier)
    toast.success('Added to log', `Applied to ${selectedMeal} for today.`)
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Saved Recipes & Meal Prep"
      description="Create reusable recipes with automatic macro scaling and one-tap logging."
      footer={
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      }
    >
      <div className="space-y-4">
        <div className="flex border-b border-line pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('browse')}
            className={`flex-1 py-1.5 text-center text-sm font-bold ${
              activeTab === 'browse' ? 'border-b-2 border-accent text-accent' : 'text-muted'
            }`}
          >
            Saved Recipes ({recipes.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-1.5 text-center text-sm font-bold ${
              activeTab === 'create' ? 'border-b-2 border-accent text-accent' : 'text-muted'
            }`}
          >
            + Create Recipe
          </button>
        </div>

        {activeTab === 'browse' ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-[11px] font-bold uppercase text-muted">Log Into Meal</label>
                <select
                  value={selectedMeal}
                  onChange={(e) => setSelectedMeal(e.target.value)}
                  className="mt-1 h-9 w-full rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                >
                  {mealNames.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-24">
                <label className="text-[11px] font-bold uppercase text-muted">Servings</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={servingsMultiplier}
                  onChange={(e) => setServingsMultiplier(Number(e.target.value) || 1)}
                  className="mt-1 h-9 w-full rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
              </div>
            </div>

            {recipes.length === 0 ? (
              <div className="py-8 text-center">
                <BookOpen size={28} className="mx-auto text-muted" />
                <p className="mt-2 text-sm font-bold text-ink">No saved recipes</p>
                <p className="mt-1 text-xs text-muted">Build a custom recipe to batch log meals.</p>
                <Button size="sm" className="mt-3" onClick={() => setActiveTab('create')}>
                  Create your first recipe
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                {recipes.map((r) => {
                  const totalCals = r.items.reduce((s, it) => s + it.calories, 0)
                  const totalP = r.items.reduce((s, it) => s + it.proteinG, 0)
                  const perServingCals = Math.round(totalCals / Math.max(r.servings, 1))
                  const perServingP = Math.round(totalP / Math.max(r.servings, 1))

                  return (
                    <div
                      key={r.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface2 p-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-ink">{r.name}</p>
                        <p className="text-xs text-muted">
                          {r.servings} serving{r.servings === 1 ? '' : 's'} · {perServingCals} kcal / {perServingP}g P per serving
                        </p>
                        <p className="mt-0.5 text-[11px] text-faint">
                          {r.items.length} ingredients ({r.items.map((i) => i.name).join(', ')})
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Button size="sm" onClick={() => handleApply(r.id)}>
                          Add
                        </Button>
                        <button
                          type="button"
                          onClick={() => onDeleteRecipe(r.id)}
                          aria-label={`Delete ${r.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-dangersoft hover:text-danger"
                        >
                          <Trash size={14} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <label className="text-[11px] font-bold uppercase text-muted">Recipe Name</label>
                <Input
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  placeholder="e.g. Protein Oatmeal Bowl"
                  className="h-9 text-xs"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-muted">Servings</label>
                <Input
                  type="number"
                  min="1"
                  value={servings}
                  onChange={(e) => setServings(Number(e.target.value) || 1)}
                  className="h-9 text-xs"
                />
              </div>
            </div>

            {/* Ingredients builder */}
            <div className="rounded-xl border border-line bg-surface p-3">
              <p className="text-xs font-bold uppercase text-muted">Add Ingredient</p>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <input
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="Name (e.g. Whey)"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
                <input
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  placeholder="Qty (e.g. 30g)"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
                <input
                  type="number"
                  value={itemCals}
                  onChange={(e) => setItemCals(e.target.value)}
                  placeholder="Calories"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
                <input
                  type="number"
                  value={itemProtein}
                  onChange={(e) => setItemProtein(e.target.value)}
                  placeholder="Protein (g)"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
                <input
                  type="number"
                  value={itemCarbs}
                  onChange={(e) => setItemCarbs(e.target.value)}
                  placeholder="Carbs (g)"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
                <input
                  type="number"
                  value={itemFat}
                  onChange={(e) => setItemFat(e.target.value)}
                  placeholder="Fat (g)"
                  className="h-8 rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
                />
              </div>
              <Button size="sm" variant="secondary" className="mt-2 w-full" onClick={handleAddIngredient}>
                <Plus size={14} /> Add Ingredient
              </Button>
            </div>

            {items.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs font-bold text-ink">Ingredients ({items.length})</p>
                {items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-surface2 px-2 py-1 text-xs">
                    <span>
                      {it.name} ({it.quantity || `${it.calories} kcal`})
                    </span>
                    <button
                      type="button"
                      onClick={() => setItems((prev) => prev.filter((_, i) => i !== idx))}
                      className="text-danger hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Button className="w-full" onClick={handleSaveRecipe} disabled={!recipeName.trim() || items.length === 0}>
              Save Recipe
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  )
}
