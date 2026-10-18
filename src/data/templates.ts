import type { TemplateExercise, WorkoutTemplate } from '../types'

function te(
  id: string,
  exerciseId: string,
  sets: number,
  repsMin: number,
  repsMax: number,
  restSeconds?: number,
): TemplateExercise {
  return { id, exerciseId, sets, repsMin, repsMax, restSeconds }
}

export const SEED_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'tpl_mon_push_a',
    name: 'Push A',
    day: 'Monday',
    isRestDay: false,
    exercises: [
      te('te_pusha_1', 'ex_barbell_bench_press', 3, 6, 10, 150),
      te('te_pusha_2', 'ex_incline_dumbbell_press', 3, 8, 12, 120),
      te('te_pusha_3', 'ex_seated_db_shoulder_press', 2, 8, 12, 120),
      te('te_pusha_4', 'ex_db_lateral_raise', 2, 12, 15, 60),
      te('te_pusha_5', 'ex_rope_triceps_pushdown', 2, 10, 15, 60),
      te('te_pusha_6', 'ex_overhead_cable_triceps_extension', 2, 10, 15, 60),
    ],
  },
  {
    id: 'tpl_tue_pull_a',
    name: 'Pull A',
    day: 'Tuesday',
    isRestDay: false,
    exercises: [
      te('te_pulla_1', 'ex_lat_pulldown', 3, 8, 12, 120),
      te('te_pulla_2', 'ex_seated_cable_row', 3, 8, 12, 120),
      te('te_pulla_3', 'ex_chest_supported_row', 2, 10, 12, 90),
      te('te_pulla_4', 'ex_reverse_pec_deck', 2, 12, 15, 60),
      te('te_pulla_5', 'ex_dumbbell_biceps_curl', 2, 10, 15, 60),
      te('te_pulla_6', 'ex_hammer_curl', 2, 10, 15, 60),
    ],
  },
  {
    id: 'tpl_wed_legs_a',
    name: 'Legs A',
    day: 'Wednesday',
    isRestDay: false,
    exercises: [
      te('te_legsa_1', 'ex_leg_press', 3, 8, 12, 150),
      te('te_legsa_2', 'ex_db_romanian_deadlift', 3, 8, 12, 120),
      te('te_legsa_3', 'ex_leg_extension', 2, 10, 15, 90),
      te('te_legsa_4', 'ex_seated_leg_curl', 2, 10, 15, 90),
      te('te_legsa_5', 'ex_standing_calf_raise', 3, 12, 20, 60),
      te('te_legsa_6', 'ex_plank', 3, 30, 45, 60),
    ],
  },
  {
    id: 'tpl_thu_push_b',
    name: 'Push B',
    day: 'Thursday',
    isRestDay: false,
    exercises: [
      te('te_pushb_1', 'ex_incline_dumbbell_press', 3, 8, 12, 120),
      te('te_pushb_2', 'ex_machine_chest_press', 3, 8, 12, 120),
      te('te_pushb_3', 'ex_machine_shoulder_press', 2, 10, 12, 90),
      te('te_pushb_4', 'ex_cable_lateral_raise', 3, 12, 15, 60),
      te('te_pushb_5', 'ex_rope_triceps_pushdown', 2, 10, 15, 60),
      te('te_pushb_6', 'ex_overhead_cable_triceps_extension', 2, 10, 15, 60),
    ],
  },
  {
    id: 'tpl_fri_pull_b',
    name: 'Pull B',
    day: 'Friday',
    isRestDay: false,
    exercises: [
      te('te_pullb_1', 'ex_lat_pulldown_alt_grip', 3, 8, 12, 120),
      te('te_pullb_2', 'ex_chest_supported_row', 3, 8, 12, 120),
      te('te_pullb_3', 'ex_single_arm_cable_row', 2, 10, 12, 90),
      te('te_pullb_4', 'ex_reverse_pec_deck', 2, 12, 15, 60),
      te('te_pullb_5', 'ex_ez_bar_curl', 2, 10, 12, 60),
      te('te_pullb_6', 'ex_incline_dumbbell_curl', 2, 10, 15, 60),
    ],
  },
  {
    id: 'tpl_sat_legs_b',
    name: 'Legs B',
    day: 'Saturday',
    isRestDay: false,
    exercises: [
      te('te_legsb_1', 'ex_goblet_squat', 3, 8, 12, 150),
      te('te_legsb_2', 'ex_hip_thrust_machine', 3, 8, 12, 120),
      te('te_legsb_3', 'ex_lying_leg_curl', 3, 10, 15, 90),
      te('te_legsb_4', 'ex_leg_extension', 2, 12, 15, 90),
      te('te_legsb_5', 'ex_seated_calf_raise', 3, 12, 20, 60),
      te('te_legsb_6', 'ex_dead_bug', 3, 8, 12, 60),
    ],
  },
  {
    id: 'tpl_sun_rest',
    name: 'Rest',
    day: 'Sunday',
    isRestDay: true,
    exercises: [],
    notes: 'No scheduled lifting. Optional light recovery activity such as walking or mobility work.',
  },
]

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const

export function templateForDay(templates: WorkoutTemplate[], day: string): WorkoutTemplate | undefined {
  return templates.find((t) => t.day === day)
}
