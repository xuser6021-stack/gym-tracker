import { useState } from 'react'
import { cn } from '../../lib/cn'

export interface MuscleMapProps {
  selectedMuscle: string | null
  onSelectMuscle: (muscle: string | null) => void
  exerciseCounts?: Record<string, number>
  className?: string
}

// Major muscle regions mapped to canonical primaryMuscle names
const MUSCLE_REGIONS: {
  id: string
  name: string
  view: 'front' | 'back'
  path: string
}[] = [
  // --- ANTERIOR (FRONT) ---
  {
    id: 'chest',
    name: 'Chest',
    view: 'front',
    // Pectoralis major bilateral
    path: 'M 72 82 C 85 82 98 87 100 102 C 100 115 88 122 72 122 C 56 122 44 115 44 102 C 46 87 59 82 72 82 Z',
  },
  {
    id: 'front_delts',
    name: 'Front delts',
    view: 'front',
    // Anterior deltoids L & R
    path: 'M 40 85 C 33 88 28 98 28 108 C 34 112 40 105 44 95 Z M 104 85 C 111 88 116 98 116 108 C 110 112 104 105 100 95 Z',
  },
  {
    id: 'biceps',
    name: 'Biceps',
    view: 'front',
    // Biceps brachii L & R
    path: 'M 28 112 C 24 122 23 138 29 146 C 34 146 38 136 36 122 Z M 116 112 C 120 122 121 138 115 146 C 110 146 106 136 108 122 Z',
  },
  {
    id: 'forearms',
    name: 'Forearms',
    view: 'front',
    // Anterior forearms L & R
    path: 'M 29 152 C 22 165 18 185 24 196 C 28 196 34 180 34 165 Z M 115 152 C 122 165 126 185 120 196 C 116 196 110 180 110 165 Z',
  },
  {
    id: 'abs',
    name: 'Abs',
    view: 'front',
    // Rectus abdominis central column
    path: 'M 60 126 C 60 124 84 124 84 126 L 82 178 C 82 182 62 182 62 178 Z',
  },
  {
    id: 'obliques',
    name: 'Obliques',
    view: 'front',
    // Lateral abdominal wall
    path: 'M 58 128 L 48 135 L 50 174 L 60 176 Z M 86 128 L 96 135 L 94 174 L 84 176 Z',
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    view: 'front',
    // Anterior thighs L & R
    path: 'M 48 184 C 44 205 42 245 47 265 C 57 266 65 250 67 220 L 67 186 Z M 96 184 C 100 205 102 245 97 265 C 87 266 79 250 77 220 L 77 186 Z',
  },
  {
    id: 'tibialis',
    name: 'Tibialis anterior',
    view: 'front',
    // Anterior shins
    path: 'M 48 280 C 46 300 46 325 50 338 L 56 338 C 58 318 57 295 56 280 Z M 96 280 C 98 300 98 325 94 338 L 88 338 C 86 318 87 295 88 280 Z',
  },

  // --- POSTERIOR (BACK) ---
  {
    id: 'upper_traps',
    name: 'Upper traps',
    view: 'back',
    // Trapezius superior
    path: 'M 72 66 L 56 78 L 46 84 L 56 90 L 72 108 L 88 90 L 98 84 L 88 78 Z',
  },
  {
    id: 'rear_delts',
    name: 'Rear delts',
    view: 'back',
    // Posterior deltoids L & R
    path: 'M 42 85 C 33 88 28 98 28 108 C 34 112 40 106 44 95 Z M 102 85 C 111 88 116 98 116 108 C 110 112 104 106 100 95 Z',
  },
  {
    id: 'triceps',
    name: 'Triceps',
    view: 'back',
    // Triceps brachii L & R
    path: 'M 28 110 C 23 124 23 140 29 148 C 35 148 38 136 36 118 Z M 116 110 C 121 124 121 140 115 148 C 109 148 106 136 108 118 Z',
  },
  {
    id: 'lats',
    name: 'Lats',
    view: 'back',
    // Latissimus dorsi wings
    path: 'M 48 108 C 42 125 46 154 58 165 L 60 140 L 68 115 Z M 96 108 C 102 125 98 154 86 165 L 84 140 L 76 115 Z',
  },
  {
    id: 'lower_back',
    name: 'Lower back',
    view: 'back',
    // Lumbar erector spinae
    path: 'M 64 145 L 80 145 L 80 180 L 64 180 Z',
  },
  {
    id: 'glutes',
    name: 'Glutes',
    view: 'back',
    // Gluteus maximus L & R
    path: 'M 46 182 C 43 205 52 222 71 222 L 71 182 Z M 98 182 C 101 205 92 222 73 222 L 73 182 Z',
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    view: 'back',
    // Posterior thighs
    path: 'M 48 226 C 45 245 44 265 50 274 L 66 274 C 69 255 69 238 67 226 Z M 96 226 C 99 245 100 265 94 274 L 78 274 C 75 255 75 238 77 226 Z',
  },
  {
    id: 'calves',
    name: 'Calves',
    view: 'back',
    // Gastrocnemius & Soleus
    path: 'M 48 280 C 44 298 44 322 52 336 L 60 336 C 64 320 62 296 58 280 Z M 96 280 C 100 298 100 322 92 336 L 84 336 C 80 320 82 296 86 280 Z',
  },
]

export function MuscleMap({
  selectedMuscle,
  onSelectMuscle,
  exerciseCounts = {},
  className,
}: MuscleMapProps) {
  const [view, setView] = useState<'front' | 'back'>('front')

  const currentRegions = MUSCLE_REGIONS.filter((r) => r.view === view)

  return (
    <div className={cn('flex flex-col items-center rounded-2xl border border-line bg-surface p-4', className)}>
      {/* View Switcher Pills */}
      <div className="flex items-center gap-2 mb-3">
        <button
          type="button"
          onClick={() => setView('front')}
          className={cn(
            'px-3 py-1 text-xs font-bold rounded-lg transition-colors',
            view === 'front'
              ? 'bg-accent text-slate-950 shadow-sm'
              : 'bg-surface2 text-muted hover:text-ink'
          )}
        >
          Anterior (Front)
        </button>
        <button
          type="button"
          onClick={() => setView('back')}
          className={cn(
            'px-3 py-1 text-xs font-bold rounded-lg transition-colors',
            view === 'back'
              ? 'bg-accent text-slate-950 shadow-sm'
              : 'bg-surface2 text-muted hover:text-ink'
          )}
        >
          Posterior (Back)
        </button>
        {selectedMuscle && (
          <button
            type="button"
            onClick={() => onSelectMuscle(null)}
            className="ml-2 text-xs text-faint underline hover:text-accent"
          >
            Clear selection
          </button>
        )}
      </div>

      {/* SVG Interactive Silhouette */}
      <div className="relative w-full max-w-[260px] aspect-[144/360] flex items-center justify-center">
        <svg
          viewBox="0 0 144 360"
          className="h-full w-full select-none"
          role="img"
          aria-label={`Interactive anatomical muscle map - ${view === 'front' ? 'Anterior view' : 'Posterior view'}`}
        >
          <defs>
            <filter id="muscleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Neutral Anatomical Body Silhouette Base */}
          <g fill="#27272a" stroke="#3f3f46" strokeWidth="1" opacity="0.8">
            {/* Head & Neck */}
            <ellipse cx="72" cy="38" rx="15" ry="20" />
            <path d="M 66 57 L 78 57 L 81 74 L 63 74 Z" />

            {/* Torso Outline */}
            <path d="M 44 80 Q 72 75 100 80 L 94 182 Q 72 186 50 182 Z" />

            {/* Arms Outline */}
            <path d="M 42 82 Q 22 130 18 198 Q 28 202 36 194 Q 38 135 46 86 Z" />
            <path d="M 102 82 Q 122 130 126 198 Q 116 202 108 194 Q 106 135 98 86 Z" />

            {/* Legs Outline */}
            <path d="M 46 182 Q 38 260 46 342 Q 58 344 64 340 Q 72 260 70 184 Z" />
            <path d="M 98 182 Q 106 260 98 342 Q 86 344 80 340 Q 72 260 74 184 Z" />
          </g>

          {/* Interactive Muscle Group Overlays */}
          {currentRegions.map((region) => {
            const isSelected = selectedMuscle?.toLowerCase() === region.name.toLowerCase()
            const count = exerciseCounts[region.name] || 0

            return (
              <g
                key={region.id}
                onClick={() => onSelectMuscle(isSelected ? null : region.name)}
                className="cursor-pointer transition-all duration-200"
              >
                <path
                  d={region.path}
                  className={cn(
                    'transition-all duration-200',
                    isSelected
                      ? 'fill-lime-400 stroke-lime-300 stroke-2 opacity-95'
                      : 'fill-zinc-700/80 stroke-zinc-600/90 hover:fill-lime-500/60 hover:stroke-lime-400'
                  )}
                  filter={isSelected ? 'url(#muscleGlow)' : undefined}
                >
                  <title>{`${region.name} (${count} exercises)`}</title>
                </path>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Selected Muscle Indicator Banner */}
      <div className="mt-3 text-center min-h-[36px]">
        {selectedMuscle ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface2 border border-accent/30">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-ink">{selectedMuscle}</span>
            <span className="text-[11px] font-semibold text-accent">
              {exerciseCounts[selectedMuscle] || 0} exercises
            </span>
          </div>
        ) : (
          <p className="text-xs text-muted">
            Tap a muscle on the anatomy map to filter movements
          </p>
        )}
      </div>

      {/* Accessible Text Fallback / Selector */}
      <div className="mt-2 w-full pt-2 border-t border-line">
        <label htmlFor="muscle-select-accessible" className="sr-only">
          Select target muscle group
        </label>
        <select
          id="muscle-select-accessible"
          value={selectedMuscle || ''}
          onChange={(e) => onSelectMuscle(e.target.value || null)}
          className="w-full text-xs bg-surface2 text-ink border border-line rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-accent"
        >
          <option value="">All Muscles (or pick from list)</option>
          {Object.keys(exerciseCounts)
            .sort()
            .map((m) => (
              <option key={m} value={m}>
                {m} ({exerciseCounts[m]} exercises)
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}
