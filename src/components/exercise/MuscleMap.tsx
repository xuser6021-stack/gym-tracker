import { useState } from 'react'
import { cn } from '../../lib/cn'

export interface MuscleMapProps {
  selectedMuscle: string | null
  onSelectMuscle: (muscle: string | null) => void
  exerciseCounts?: Record<string, number>
  muscleFilterMode?: 'primary' | 'involves'
  onToggleFilterMode?: (mode: 'primary' | 'involves') => void
  className?: string
}

export type ModelGender = 'male' | 'female'
export type ModelView = 'front' | 'back'

interface MuscleRegion {
  id: string
  name: string
  view: ModelView
  // Normalized SVG paths matching 200x440 viewBox
  malePaths: string[]
  femalePaths: string[]
  labelX: number
  labelY: number
}

// Muscle regions mapped to actual database & taxonomy names
const MUSCLE_REGIONS: MuscleRegion[] = [
  // ══════════════════════════ ANTERIOR (FRONT) ═══════════════════════════
  {
    id: 'chest',
    name: 'Chest',
    view: 'front',
    labelX: 100,
    labelY: 114,
    malePaths: [
      // Left pec (screen right)
      `M 100 98 C 97 95 90 91 83 91 C 76 90 67 91 61 95 C 55 99 52 105 51 112
       C 50 118 53 124 58 127 C 63 130 70 130 77 127 C 84 124 92 118 97 110
       C 100 106 101 101 100 98 Z`,
      // Right pec (screen left)
      `M 100 98 C 103 95 110 91 117 91 C 124 90 133 91 139 95 C 145 99 148 105 149 112
       C 150 118 147 124 142 127 C 137 130 130 130 123 127 C 116 124 108 118 103 110
       C 100 106 99 101 100 98 Z`,
    ],
    femalePaths: [
      `M 100 96 C 96 93 89 90 82 90 C 76 89 68 91 63 95 C 58 98 55 104 54 110
       C 53 116 56 122 61 125 C 66 128 73 128 79 125 C 86 122 93 116 97 109
       C 99 105 100 100 100 96 Z`,
      `M 100 96 C 104 93 111 90 118 90 C 124 89 132 91 137 95 C 142 98 145 104 146 110
       C 147 116 144 122 139 125 C 134 128 127 128 121 125 C 114 122 107 116 103 109
       C 101 105 100 100 100 96 Z`,
    ],
  },
  {
    id: 'front_delts',
    name: 'Front delts',
    view: 'front',
    labelX: 100,
    labelY: 95,
    malePaths: [
      `M 54 88 C 49 84 44 83 40 86 C 36 90 35 97 37 104 C 39 111 44 116 50 117
       C 55 117 60 113 62 107 C 64 101 62 93 58 89 Z`,
      `M 146 88 C 151 84 156 83 160 86 C 164 90 165 97 163 104 C 161 111 156 116 150 117
       C 145 117 140 113 138 107 C 136 101 138 93 142 89 Z`,
    ],
    femalePaths: [
      `M 58 89 C 54 85 49 84 46 87 C 42 91 42 98 43 105 C 45 111 49 116 54 117
       C 58 117 63 113 65 107 C 66 101 63 94 60 90 Z`,
      `M 142 89 C 146 85 151 84 154 87 C 158 91 158 98 157 105 C 155 111 151 116 146 117
       C 142 117 137 113 135 107 C 134 101 137 94 140 90 Z`,
    ],
  },
  {
    id: 'side_delts',
    name: 'Side delts',
    view: 'front',
    labelX: 100,
    labelY: 100,
    malePaths: [
      `M 40 86 C 35 84 31 86 30 91 C 29 96 31 104 35 109 C 38 113 42 114 46 112
       C 43 106 41 98 41 91 Z`,
      `M 160 86 C 165 84 169 86 170 91 C 171 96 169 104 165 109 C 162 113 158 114 154 112
       C 157 106 159 98 159 91 Z`,
    ],
    femalePaths: [
      `M 46 87 C 42 85 38 87 37 92 C 36 97 38 104 42 109 C 45 113 48 114 52 112
       C 49 106 47 98 47 92 Z`,
      `M 154 87 C 158 85 162 87 163 92 C 164 97 162 104 158 109 C 155 113 152 114 148 112
       C 151 106 153 98 153 92 Z`,
    ],
  },
  {
    id: 'biceps',
    name: 'Biceps',
    view: 'front',
    labelX: 100,
    labelY: 148,
    malePaths: [
      `M 35 119 C 31 124 28 133 27 143 C 26 152 28 161 33 165 C 37 168 43 167 47 162
       C 51 157 52 147 51 137 C 50 127 47 118 43 116 C 39 114 37 115 35 119 Z`,
      `M 165 119 C 169 124 172 133 173 143 C 174 152 172 161 167 165 C 163 168 157 167 153 162
       C 149 157 148 147 149 137 C 150 127 153 118 157 116 C 161 114 163 115 165 119 Z`,
    ],
    femalePaths: [
      `M 40 119 C 37 124 34 133 33 143 C 32 152 34 161 38 165 C 42 168 47 167 50 162
       C 53 157 54 147 53 137 C 52 127 49 118 46 116 C 43 114 41 115 40 119 Z`,
      `M 160 119 C 163 124 166 133 167 143 C 168 152 166 161 162 165 C 158 168 153 167 150 162
       C 147 157 146 147 147 137 C 148 127 151 118 154 116 C 157 114 159 115 160 119 Z`,
    ],
  },
  {
    id: 'forearms',
    name: 'Forearms',
    view: 'front',
    labelX: 100,
    labelY: 196,
    malePaths: [
      `M 28 170 C 25 178 22 190 21 201 C 20 211 22 220 26 224 C 29 227 34 225 37 220
       C 40 214 41 202 40 191 C 39 180 37 170 33 167 C 30 165 29 166 28 170 Z`,
      `M 172 170 C 175 178 178 190 179 201 C 180 211 178 220 174 224 C 171 227 166 225 163 220
       C 160 214 159 202 160 191 C 161 180 163 170 167 167 C 170 165 171 166 172 170 Z`,
    ],
    femalePaths: [
      `M 34 170 C 31 178 29 190 28 201 C 27 211 29 220 32 224 C 35 227 39 225 42 220
       C 44 214 45 202 44 191 C 43 180 41 170 38 167 C 36 165 35 166 34 170 Z`,
      `M 166 170 C 169 178 171 190 172 201 C 173 211 171 220 168 224 C 165 227 161 225 158 220
       C 156 214 155 202 156 191 C 157 180 159 170 162 167 C 164 165 165 166 166 170 Z`,
    ],
  },
  {
    id: 'abs',
    name: 'Abs',
    view: 'front',
    labelX: 100,
    labelY: 163,
    malePaths: [
      `M 86 131 C 85 130 100 129 100 129 C 100 129 115 130 114 131
       L 113 196 C 113 199 108 201 100 201 C 92 201 87 199 87 196 Z`,
    ],
    femalePaths: [
      `M 88 135 C 87 134 100 133 100 133 C 100 133 113 134 112 135
       L 111 193 C 111 196 107 198 100 198 C 93 198 89 196 89 193 Z`,
    ],
  },
  {
    id: 'obliques',
    name: 'Obliques',
    view: 'front',
    labelX: 100,
    labelY: 163,
    malePaths: [
      `M 84 133 C 80 135 74 139 69 146 C 64 153 61 164 61 175 C 61 184 63 192 68 196
       C 72 199 78 197 83 191 C 88 184 89 172 89 161 C 89 149 87 139 84 133 Z`,
      `M 116 133 C 120 135 126 139 131 146 C 136 153 139 164 139 175 C 139 184 137 192 132 196
       C 128 199 122 197 117 191 C 112 184 111 172 111 161 C 111 149 113 139 116 133 Z`,
    ],
    femalePaths: [
      `M 86 136 C 82 138 78 142 74 148 C 70 155 68 165 68 174 C 68 182 70 189 74 193
       C 78 196 82 194 86 189 C 89 183 90 172 90 162 C 90 151 88 141 86 136 Z`,
      `M 114 136 C 118 138 122 142 126 148 C 130 155 132 165 132 174 C 132 182 130 189 126 193
       C 122 196 118 194 114 189 C 111 183 110 172 110 162 C 110 151 112 141 114 136 Z`,
    ],
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    view: 'front',
    labelX: 100,
    labelY: 278,
    malePaths: [
      `M 74 236 C 70 234 65 234 60 237 C 55 240 52 248 50 258 C 48 269 49 283 52 295
       C 55 307 60 318 66 323 C 71 327 77 325 81 319 C 85 312 87 299 87 286
       C 87 272 85 259 81 248 C 78 239 76 236 74 236 Z`,
      `M 126 236 C 130 234 135 234 140 237 C 145 240 148 248 150 258 C 152 269 151 283 148 295
       C 145 307 140 318 134 323 C 129 327 123 325 119 319 C 115 312 113 299 113 286
       C 113 272 115 259 119 248 C 122 239 124 236 126 236 Z`,
    ],
    femalePaths: [
      `M 77 236 C 73 234 68 234 64 237 C 60 240 57 248 55 258 C 53 269 54 283 57 295
       C 60 307 64 318 70 323 C 74 327 79 325 83 319 C 86 312 88 299 88 286
       C 88 272 86 259 83 248 C 80 239 78 236 77 236 Z`,
      `M 123 236 C 127 234 132 234 136 237 C 140 240 143 248 145 258 C 147 269 146 283 143 295
       C 140 307 136 318 130 323 C 126 327 121 325 117 319 C 114 312 112 299 112 286
       C 112 272 114 259 117 248 C 120 239 122 236 123 236 Z`,
    ],
  },
  {
    id: 'hip_adductors',
    name: 'Hip Adductors',
    view: 'front',
    labelX: 100,
    labelY: 262,
    malePaths: [
      `M 89 234 C 93 236 96 240 97 246 C 98 254 97 265 95 275 C 93 284 90 292 87 298
       C 90 293 93 285 94 274 C 95 263 95 252 92 244 C 91 238 90 235 89 234 Z`,
      `M 111 234 C 107 236 104 240 103 246 C 102 254 103 265 105 275 C 107 284 110 292 113 298
       C 110 293 107 285 106 274 C 105 263 105 252 108 244 C 109 238 110 235 111 234 Z`,
    ],
    femalePaths: [
      `M 90 234 C 94 236 96 240 97 246 C 98 254 97 265 95 275 C 93 284 91 292 88 298
       C 91 293 93 285 94 274 C 95 263 95 252 92 244 C 91 238 91 235 90 234 Z`,
      `M 110 234 C 106 236 104 240 103 246 C 102 254 103 265 105 275 C 107 284 109 292 112 298
       C 109 293 107 285 106 274 C 105 263 105 252 108 244 C 109 238 109 235 110 234 Z`,
    ],
  },
  {
    id: 'hip_abductors',
    name: 'Hip Abductors',
    view: 'front',
    labelX: 100,
    labelY: 236,
    malePaths: [
      `M 56 226 C 52 232 49 242 48 252 C 52 248 57 242 62 238 Z`,
      `M 144 226 C 148 232 151 242 152 252 C 148 248 143 242 138 238 Z`,
    ],
    femalePaths: [
      `M 58 226 C 54 232 52 242 51 252 C 55 248 60 242 64 238 Z`,
      `M 142 226 C 146 232 148 242 149 252 C 145 248 140 242 136 238 Z`,
    ],
  },
  {
    id: 'tibialis',
    name: 'Tibialis anterior',
    view: 'front',
    labelX: 100,
    labelY: 372,
    malePaths: [
      `M 59 330 C 56 334 54 341 53 350 C 52 360 53 371 56 380 C 58 387 62 391 65 390
       C 68 389 71 385 72 378 C 73 371 72 361 70 352 C 68 344 65 336 62 330 Z`,
      `M 141 330 C 144 334 146 341 147 350 C 148 360 147 371 144 380 C 142 387 138 391 135 390
       C 132 389 129 385 128 378 C 127 371 128 361 130 352 C 132 344 135 336 138 330 Z`,
    ],
    femalePaths: [
      `M 62 330 C 59 334 57 341 56 350 C 55 360 56 371 59 380 C 61 387 64 391 67 390
       C 70 389 73 385 74 378 C 75 371 74 361 72 352 C 70 344 68 336 65 330 Z`,
      `M 138 330 C 141 334 143 341 144 350 C 145 360 144 371 141 380 C 139 387 136 391 133 390
       C 130 389 127 385 126 378 C 125 371 126 361 128 352 C 130 344 132 336 135 330 Z`,
    ],
  },

  // ══════════════════════════ POSTERIOR (BACK) ═══════════════════════════
  {
    id: 'upper_traps',
    name: 'Traps',
    view: 'back',
    labelX: 100,
    labelY: 84,
    malePaths: [
      `M 100 72 C 93 74 82 79 72 84 C 62 89 55 94 54 101 C 57 107 65 108 74 106
       C 83 104 92 100 100 98 C 108 100 117 104 126 106 C 135 108 143 107 146 101
       C 145 94 138 89 128 84 C 118 79 107 74 100 72 Z`,
    ],
    femalePaths: [
      `M 100 75 C 95 77 86 81 78 85 C 70 89 64 94 63 100 C 66 105 73 106 80 104
       C 87 102 94 99 100 97 C 106 99 113 102 120 104 C 127 106 134 105 137 100
       C 136 94 130 89 122 85 C 114 81 105 77 100 75 Z`,
    ],
  },
  {
    id: 'rear_delts',
    name: 'Rear delts',
    view: 'back',
    labelX: 100,
    labelY: 97,
    malePaths: [
      `M 53 89 C 48 85 43 83 40 87 C 36 91 35 99 37 107 C 39 113 44 117 50 118
       C 55 118 60 114 62 108 C 64 101 62 93 57 89 Z`,
      `M 147 89 C 152 85 157 83 160 87 C 164 91 165 99 163 107 C 161 113 156 117 150 118
       C 145 118 140 114 138 108 C 136 101 138 93 143 89 Z`,
    ],
    femalePaths: [
      `M 57 90 C 53 86 49 84 46 88 C 43 92 42 99 43 106 C 45 112 49 116 54 117
       C 58 117 62 114 64 108 C 65 101 64 94 60 90 Z`,
      `M 143 90 C 147 86 151 84 154 88 C 157 92 158 99 157 106 C 155 112 151 116 146 117
       C 142 117 138 114 136 108 C 135 101 136 94 140 90 Z`,
    ],
  },
  {
    id: 'upper_back',
    name: 'Upper Back',
    view: 'back',
    labelX: 100,
    labelY: 120,
    malePaths: [
      `M 78 102 C 82 106 88 109 94 111 C 97 112 100 112 100 112
       C 100 112 103 112 106 111 C 112 109 118 106 122 102
       L 122 142 C 116 145 109 147 104 148 C 102 148 101 148 100 148
       C 99 148 98 148 96 148 C 91 147 84 145 78 142 Z`,
    ],
    femalePaths: [
      `M 81 104 C 84 107 89 110 94 112 C 97 113 100 113 100 113
       C 100 113 103 113 106 112 C 111 110 116 107 119 104
       L 119 140 C 114 143 108 145 103 146 C 102 146 101 146 100 146
       C 99 146 98 146 97 146 C 92 145 86 143 81 140 Z`,
    ],
  },
  {
    id: 'lats',
    name: 'Lats',
    view: 'back',
    labelX: 100,
    labelY: 150,
    malePaths: [
      `M 54 110 C 49 115 45 124 43 135 C 41 148 44 165 51 175 C 56 182 64 185 71 181
       C 78 176 82 165 82 152 C 82 139 79 126 74 117 C 70 109 62 106 56 108 Z`,
      `M 146 110 C 151 115 155 124 157 135 C 159 148 156 165 149 175 C 144 182 136 185 129 181
       C 122 176 118 165 118 152 C 118 139 121 126 126 117 C 130 109 138 106 144 108 Z`,
    ],
    femalePaths: [
      `M 60 112 C 56 116 53 124 51 134 C 49 146 51 161 57 170 C 61 177 67 179 73 176
       C 79 171 82 161 82 149 C 82 137 80 126 76 118 C 72 111 66 108 61 110 Z`,
      `M 140 112 C 144 116 147 124 149 134 C 151 146 149 161 143 170 C 139 177 133 179 127 176
       C 121 171 118 161 118 149 C 118 137 120 126 124 118 C 128 111 134 108 139 110 Z`,
    ],
  },
  {
    id: 'lower_back',
    name: 'Lower Back',
    view: 'back',
    labelX: 100,
    labelY: 186,
    malePaths: [
      `M 87 150 C 87 150 93 151 100 151 C 107 151 113 150 113 150
       L 113 215 C 109 217 105 218 100 218 C 95 218 91 217 87 215 Z`,
    ],
    femalePaths: [
      `M 89 150 C 89 150 94 151 100 151 C 106 151 111 150 111 150
       L 111 212 C 108 214 104 215 100 215 C 96 215 92 214 89 212 Z`,
    ],
  },
  {
    id: 'triceps',
    name: 'Triceps',
    view: 'back',
    labelX: 100,
    labelY: 149,
    malePaths: [
      `M 35 116 C 31 122 28 132 27 143 C 26 153 28 163 33 168 C 37 172 43 171 47 166
       C 51 160 52 149 51 138 C 50 128 47 118 42 114 C 38 112 36 113 35 116 Z`,
      `M 165 116 C 169 122 172 132 173 143 C 174 153 172 163 167 168 C 163 172 157 171 153 166
       C 149 160 148 149 149 138 C 150 128 153 118 158 114 C 162 112 164 113 165 116 Z`,
    ],
    femalePaths: [
      `M 40 116 C 37 122 34 132 33 143 C 32 153 34 163 38 168 C 42 172 47 171 50 166
       C 53 160 54 149 53 138 C 52 128 49 118 46 114 C 43 112 41 113 40 116 Z`,
      `M 160 116 C 163 122 166 132 167 143 C 168 153 166 163 162 168 C 158 172 153 171 150 166
       C 147 160 146 149 147 138 C 148 128 151 118 154 114 C 157 112 159 113 160 116 Z`,
    ],
  },
  {
    id: 'glutes',
    name: 'Glutes',
    view: 'back',
    labelX: 100,
    labelY: 240,
    malePaths: [
      `M 100 218 C 96 217 89 217 82 220 C 74 223 67 229 64 238 C 61 247 63 257 68 264
       C 73 270 81 273 89 271 C 97 269 102 262 104 253 C 106 244 105 234 103 226
       C 102 221 101 218 100 218 Z`,
      `M 100 218 C 104 217 111 217 118 220 C 126 223 133 229 136 238 C 139 247 137 257 132 264
       C 127 270 119 273 111 271 C 103 269 98 262 96 253 C 94 244 95 234 97 226
       C 98 221 99 218 100 218 Z`,
    ],
    femalePaths: [
      `M 100 218 C 95 217 88 217 80 220 C 72 224 64 231 61 240 C 58 249 60 260 66 267
       C 71 273 80 276 89 274 C 98 271 103 264 105 254 C 107 244 106 234 104 226
       C 102 221 101 218 100 218 Z`,
      `M 100 218 C 105 217 112 217 120 220 C 128 224 136 231 139 240 C 142 249 140 260 134 267
       C 129 273 120 276 111 274 C 102 271 97 264 95 254 C 93 244 94 234 96 226
       C 98 221 99 218 100 218 Z`,
    ],
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    view: 'back',
    labelX: 100,
    labelY: 298,
    malePaths: [
      `M 71 273 C 66 272 61 274 57 279 C 53 285 51 294 51 305 C 51 316 54 327 59 334
       C 63 340 69 343 75 340 C 80 337 84 329 85 318 C 86 307 84 295 81 285
       C 78 276 74 272 71 273 Z`,
      `M 129 273 C 134 272 139 274 143 279 C 147 285 149 294 149 305 C 149 316 146 327 141 334
       C 137 340 131 343 125 340 C 120 337 116 329 115 318 C 114 307 116 295 119 285
       C 122 276 126 272 129 273 Z`,
    ],
    femalePaths: [
      `M 74 273 C 70 272 65 274 61 279 C 57 285 55 294 55 305 C 55 316 57 327 62 334
       C 66 340 71 343 77 340 C 81 337 85 329 86 318 C 87 307 85 295 83 285
       C 80 276 77 272 74 273 Z`,
      `M 126 273 C 130 272 135 274 139 279 C 143 285 145 294 145 305 C 145 316 143 327 138 334
       C 134 340 129 343 123 340 C 119 337 115 329 114 318 C 113 307 115 295 117 285
       C 120 276 123 272 126 273 Z`,
    ],
  },
  {
    id: 'calves',
    name: 'Calves',
    view: 'back',
    labelX: 100,
    labelY: 378,
    malePaths: [
      `M 57 345 C 53 349 50 357 49 366 C 48 376 50 387 54 396 C 58 404 64 408 70 406
       C 76 404 80 397 82 388 C 84 378 82 366 79 357 C 75 348 70 343 64 343
       C 60 343 58 344 57 345 Z`,
      `M 143 345 C 147 349 150 357 151 366 C 152 376 150 387 146 396 C 142 404 136 408 130 406
       C 124 404 120 397 118 388 C 116 378 118 366 121 357 C 125 348 130 343 136 343
       C 140 343 142 344 143 345 Z`,
    ],
    femalePaths: [
      `M 61 345 C 57 349 54 357 53 366 C 52 376 54 387 57 396 C 61 404 66 408 71 406
       C 76 404 80 397 82 388 C 83 378 82 366 79 357 C 76 348 72 343 67 343
       C 63 343 62 344 61 345 Z`,
      `M 139 345 C 143 349 146 357 147 366 C 148 376 146 387 143 396 C 139 404 134 408 129 406
       C 124 404 120 397 118 388 C 117 378 118 366 121 357 C 124 348 128 343 133 343
       C 137 343 138 344 139 345 Z`,
    ],
  },
]

// ─── Tooltip Component ────────────────────────────────────────────────────────
function MuscleTooltip({
  x,
  y,
  name,
  count,
}: {
  x: number
  y: number
  name: string
  count: number
}) {
  const w = 118
  const h = 38
  const tx = Math.min(Math.max(x - w / 2, 4), 196 - w)
  const ty = y < 70 ? y + 14 : y - h - 12
  return (
    <g pointerEvents="none" className="transition-all duration-150">
      <rect
        x={tx}
        y={ty}
        width={w}
        height={h}
        rx={7}
        fill="#0a0a0c"
        stroke="#a3e635"
        strokeWidth="1.4"
        opacity="0.98"
      />
      <text
        x={tx + w / 2}
        y={ty + 14}
        textAnchor="middle"
        fill="#f4f4f5"
        fontSize="9.5"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {name}
      </text>
      <text
        x={tx + w / 2}
        y={ty + 28}
        textAnchor="middle"
        fill="#a3e635"
        fontSize="8.5"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {count} exercise{count !== 1 ? 's' : ''}
      </text>
    </g>
  )
}

// ─── Main MuscleMap Component ─────────────────────────────────────────────────
export function MuscleMap({
  selectedMuscle,
  onSelectMuscle,
  exerciseCounts = {},
  muscleFilterMode = 'primary',
  onToggleFilterMode,
  className,
}: MuscleMapProps) {
  const [gender, setGender] = useState<ModelGender>('male')
  const [view, setView] = useState<ModelView>('front')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Current regions filtered by view (front vs back)
  const currentRegions = MUSCLE_REGIONS.filter((r) => r.view === view)
  const hoveredRegion = currentRegions.find((r) => r.id === hoveredId) ?? null

  // Check if selected muscle belongs to current view or opposite view
  const selectedRegion = MUSCLE_REGIONS.find(
    (r) => selectedMuscle && r.name.toLowerCase() === selectedMuscle.toLowerCase(),
  )
  const isSelectedVisibleInCurrentView = selectedRegion ? selectedRegion.view === view : true

  const isSelected = (region: MuscleRegion) => {
    if (!selectedMuscle) return false
    return selectedMuscle.toLowerCase() === region.name.toLowerCase()
  }

  const handleClick = (region: MuscleRegion) => {
    onSelectMuscle(isSelected(region) ? null : region.name)
  }

  // Photography image asset path
  const imageSrc = `/muscle-map/${gender}/${view === 'front' ? 'anterior' : 'posterior'}.webp`

  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-2xl border border-line bg-surface p-4 shadow-sm',
        className,
      )}
    >
      {/* ── Control Bar: Model Gender & View Selectors ── */}
      <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
        {/* Model Gender Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-semibold text-muted">Model:</span>
          <div className="flex rounded-xl border border-line bg-surface2 p-0.5">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={cn(
                'rounded-lg px-3 py-1 text-xs font-bold transition-all duration-200',
                gender === 'male'
                  ? 'bg-accent text-slate-950 shadow-sm'
                  : 'text-muted hover:text-ink',
              )}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              className={cn(
                'rounded-lg px-3 py-1 text-xs font-bold transition-all duration-200',
                gender === 'female'
                  ? 'bg-accent text-slate-950 shadow-sm'
                  : 'text-muted hover:text-ink',
              )}
            >
              Female
            </button>
          </div>
        </div>

        {/* View Selector: Anterior (Front) vs Posterior (Back) */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-semibold text-muted">View:</span>
          <div className="flex rounded-xl border border-line bg-surface2 p-0.5">
            <button
              type="button"
              onClick={() => setView('front')}
              className={cn(
                'rounded-lg px-3 py-1 text-xs font-bold transition-all duration-200',
                view === 'front'
                  ? 'bg-accent text-slate-950 shadow-sm'
                  : 'text-muted hover:text-ink',
              )}
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => setView('back')}
              className={cn(
                'rounded-lg px-3 py-1 text-xs font-bold transition-all duration-200',
                view === 'back'
                  ? 'bg-accent text-slate-950 shadow-sm'
                  : 'text-muted hover:text-ink',
              )}
            >
              Posterior
            </button>
          </div>
        </div>

        {/* Clear selection action */}
        {selectedMuscle && (
          <button
            type="button"
            onClick={() => onSelectMuscle(null)}
            className="text-xs text-faint underline transition-colors hover:text-accent"
          >
            Clear selection
          </button>
        )}
      </div>

      {/* ── Main Container: Real Photography Base + Interactive SVG Overlays ── */}
      <div
        className="relative mx-auto w-full select-none overflow-hidden rounded-2xl border border-line bg-zinc-950 shadow-inner"
        style={{ maxWidth: '280px', aspectRatio: '200 / 440' }}
      >
        {/* Layer 1: Real human fitness studio photography */}
        <img
          src={imageSrc}
          alt={`${gender === 'male' ? 'Male' : 'Female'} ${view === 'front' ? 'Anterior (Front)' : 'Posterior (Back)'} athletic model`}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          loading="eager"
        />

        {/* Layer 2, 3, 4: Interactive SVG overlays mapped to underlying photograph */}
        <svg
          viewBox="0 0 200 440"
          className="absolute inset-0 h-full w-full select-none"
          role="img"
          aria-label={`Interactive human muscle overlay - ${gender} ${view}`}
        >
          <defs>
            {/* Glow effect for selected muscle */}
            <filter id="photoMuscleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Interactive Muscle Regions */}
          {currentRegions.map((region) => {
            const sel = isSelected(region)
            const hov = hoveredId === region.id
            const count = exerciseCounts[region.name] ?? 0
            const paths = gender === 'male' ? region.malePaths : region.femalePaths

            return (
              <g
                key={region.id}
                onClick={() => handleClick(region)}
                onMouseEnter={() => setHoveredId(region.id)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={(e) => {
                  e.preventDefault()
                  setHoveredId(region.id)
                  handleClick(region)
                }}
                onTouchEnd={() => setTimeout(() => setHoveredId(null), 800)}
                className="cursor-pointer"
                role="button"
                aria-label={`${region.name}: ${count} exercises`}
                aria-pressed={sel}
              >
                {/* Visual highlight path */}
                {paths.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    style={{
                      transition: 'fill 0.18s ease, stroke 0.18s ease, opacity 0.18s ease',
                      fill: sel
                        ? 'rgba(163, 230, 53, 0.72)' // IronTrack Lime Green
                        : hov
                          ? 'rgba(163, 230, 53, 0.38)'
                          : 'rgba(255, 255, 255, 0.04)',
                      stroke: sel
                        ? '#bef264'
                        : hov
                          ? 'rgba(190, 242, 100, 0.9)'
                          : 'rgba(255, 255, 255, 0.15)',
                      strokeWidth: sel ? 2 : hov ? 1.5 : 0.8,
                      filter: sel ? 'url(#photoMuscleGlow)' : undefined,
                    }}
                  />
                ))}

                {/* Expanded invisible hit region for responsive mobile touches */}
                {paths.map((d, i) => (
                  <path
                    key={`hit-${i}`}
                    d={d}
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="10"
                  />
                ))}
              </g>
            )
          })}

          {/* Tooltip rendered on top of all muscles */}
          {hoveredRegion && (
            <MuscleTooltip
              x={hoveredRegion.labelX}
              y={hoveredRegion.labelY}
              name={hoveredRegion.name}
              count={exerciseCounts[hoveredRegion.name] ?? 0}
            />
          )}
        </svg>
      </div>

      {/* ── Selected Muscle Info & Filter Mode Toggle ── */}
      <div className="mt-3 flex min-h-[44px] w-full flex-col items-center justify-center gap-2">
        {selectedMuscle ? (
          <div className="flex w-full flex-wrap items-center justify-between gap-2 rounded-xl border border-accent/40 bg-surface2 px-3 py-2 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 flex-shrink-0 animate-pulse rounded-full bg-accent" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-ink">{selectedMuscle}</span>
                {!isSelectedVisibleInCurrentView && selectedRegion && (
                  <span className="text-[10px] text-amber-500 font-semibold">
                    (Located on {selectedRegion.view === 'front' ? 'Anterior' : 'Posterior'} view — switch view to inspect)
                  </span>
                )}
              </div>
              <span className="ml-1 text-xs font-semibold text-accent">
                {exerciseCounts[selectedMuscle] ?? 0} exercises
              </span>
            </div>

            {/* Primary vs Involves Mode Switcher */}
            {onToggleFilterMode && (
              <div className="flex rounded-lg border border-line bg-surface p-0.5 text-[10px] font-bold">
                {(['primary', 'involves'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => onToggleFilterMode(mode)}
                    className={cn(
                      'rounded-md px-2 py-0.5 capitalize transition-colors',
                      muscleFilterMode === mode
                        ? 'bg-accent text-slate-950 shadow-sm'
                        : 'text-muted hover:text-ink',
                    )}
                  >
                    {mode === 'primary' ? 'Primary' : 'Involves'}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-xs text-muted">
            Tap any muscle on the model to highlight and filter exercises
          </p>
        )}
      </div>

      {/* ── Accessible Muscle Dropdown ── */}
      <div className="mt-2 w-full border-t border-line pt-2">
        <label htmlFor="muscle-select-accessible" className="sr-only">
          Select target muscle group
        </label>
        <select
          id="muscle-select-accessible"
          value={selectedMuscle ?? ''}
          onChange={(e) => onSelectMuscle(e.target.value || null)}
          className="w-full rounded-lg border border-line bg-surface2 px-2.5 py-1.5 text-xs text-ink focus:border-accent focus:outline-none"
        >
          <option value="">All Muscles (or select from list)</option>
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
