import type { Exercise } from '../types'

export interface ExerciseGuide {
  /** Starting position, in one clear sentence. */
  starting: string
  /** Ordered performance steps. */
  steps: string[]
  /** When to inhale / exhale. */
  breathing: string
  /** Concise, exercise-specific precaution. Not medical advice. */
  safety: string
}

/**
 * Curated, plain-language technique guides for the built-in library.
 * Kept as data (not AI-generated at runtime) so the wording stays stable and
 * reviewable. Exercises without an entry fall back to their `instructions`.
 */
export const EXERCISE_GUIDES: Record<string, ExerciseGuide> = {
  ex_barbell_bench_press: {
    starting: 'Lie flat with feet planted, shoulder blades pinched back and down, eyes under the bar.',
    steps: [
      'Grip the bar slightly wider than shoulder width.',
      'Unrack with a spotter or safeties and bring the bar over your mid-chest.',
      'Lower the bar under control to touch the mid-chest, elbows at roughly 45–60°.',
      'Press up and slightly back until the arms are extended.',
    ],
    breathing: 'Inhale as you lower, brace, then exhale as you press up.',
    safety: 'Use a spotter or safety pins for heavy sets; never bounce the bar off the chest.',
  },
  ex_incline_dumbbell_press: {
    starting: 'Set the bench to about 30° and start with dumbbells at shoulder height.',
    steps: [
      'Press the dumbbells up and slightly together without clanking them.',
      'Stop just short of locking out with the chest still engaged.',
      'Lower under control until you feel a stretch across the upper chest.',
    ],
    breathing: 'Inhale on the way down, exhale as you press.',
    safety: 'Keep the bench angle moderate — too steep shifts the load to the shoulders.',
  },
  ex_seated_db_shoulder_press: {
    starting: 'Sit upright with back support and dumbbells at ear height, elbows under wrists.',
    steps: [
      'Press the dumbbells overhead in a smooth arc.',
      'Keep the ribs down and avoid arching the lower back.',
      'Lower to ear height under control and repeat.',
    ],
    breathing: 'Inhale as you lower, exhale as you press.',
    safety: 'If overhead pressing bothers the shoulders, use a neutral grip or reduce range.',
  },
  ex_db_lateral_raise: {
    starting: 'Stand with a slight forward lean and a small bend in the elbows, dumbbells at your sides.',
    steps: [
      'Raise the dumbbells out and up, leading with the elbows.',
      'Stop at shoulder height.',
      'Lower slowly back to your sides.',
    ],
    breathing: 'Exhale as you raise, inhale as you lower.',
    safety: 'Use light load and no momentum — swinging shifts stress to the traps and joints.',
  },
  ex_cable_lateral_raise: {
    starting: 'Stand side-on to a low pulley with the handle in the outside hand.',
    steps: [
      'Raise the arm out to shoulder height with a soft elbow.',
      'Pause briefly at the top.',
      'Lower under control and repeat for both sides.',
    ],
    breathing: 'Exhale on the raise, inhale on the return.',
    safety: 'Resist leaning away to cheat the weight.',
  },
  ex_machine_chest_press: {
    starting: 'Adjust the seat so the handles sit at mid-chest.',
    steps: [
      'Press forward until the arms are extended.',
      'Squeeze the chest briefly.',
      'Return under control without letting the stack slam.',
    ],
    breathing: 'Inhale on the return, exhale as you press.',
    safety: 'Avoid rolling the shoulders forward at the bottom.',
  },
  ex_machine_shoulder_press: {
    starting: 'Set the seat so the handles start around ear height.',
    steps: ['Press overhead smoothly.', 'Stop before a hard lockout.', 'Lower to a comfortable stretch.'],
    breathing: 'Exhale as you press, inhale on the return.',
    safety: 'Do not bounce out of the bottom or force an uncomfortable range.',
  },
  ex_rope_triceps_pushdown: {
    starting: 'Stand at a high pulley with elbows pinned to your sides and a slight forward lean.',
    steps: [
      'Push the rope down and spread the ends at the bottom.',
      'Squeeze the triceps briefly.',
      'Return to about a 90° elbow angle under control.',
    ],
    breathing: 'Exhale as you push down, inhale on the return.',
    safety: 'Keep the elbows still — they should not drift forward or flare out.',
  },
  ex_overhead_cable_triceps_extension: {
    starting: 'Face away from a low/mid pulley with the rope overhead and elbows narrow.',
    steps: ['Extend the arms fully overhead.', 'Feel a stretch in the long head at the bottom.', 'Return under control.'],
    breathing: 'Exhale on the extension, inhale on the return.',
    safety: 'Keep the elbows narrow and avoid arching the lower back.',
  },
  ex_lat_pulldown: {
    starting: 'Sit tall with the thighs secured, gripping the bar slightly wider than shoulders.',
    steps: [
      'Lean back slightly and pull the bar to your upper chest.',
      'Drive the elbows down and back.',
      'Control the bar back up until the lats stretch.',
    ],
    breathing: 'Exhale as you pull down, inhale as the bar rises.',
    safety: 'Never pull behind the neck — always in front to the upper chest.',
  },
  ex_lat_pulldown_alt_grip: {
    starting: 'Attach a neutral/close handle and sit tall with the chest lifted.',
    steps: [
      'Pull the handle to the upper chest, driving the elbows straight down.',
      'Pause and squeeze.',
      'Extend under control to a full stretch.',
    ],
    breathing: 'Exhale on the pull, inhale on the return.',
    safety: 'Avoid rounding the lower back or letting the shoulders shrug up at the top.',
  },
  ex_seated_cable_row: {
    starting: 'Sit tall with a slight knee bend and a neutral spine.',
    steps: [
      'Pull the handle to your lower ribs, elbows driving back.',
      'Pull the shoulder blades together.',
      'Return with control to a full stretch.',
    ],
    breathing: 'Exhale as you row, inhale on the return.',
    safety: 'Keep the torso still — avoid rocking back and forth for momentum.',
  },
  ex_chest_supported_row: {
    starting: 'Set the chest against the pad with your feet planted.',
    steps: [
      'Row the handles back by squeezing the shoulder blades together.',
      'Pause at the top.',
      'Lower under control without losing chest contact.',
    ],
    breathing: 'Exhale on the row, inhale on the return.',
    safety: 'Do not lift the chest off the pad or use leg drive.',
  },
  ex_single_arm_cable_row: {
    starting: 'Stagger your stance and brace the free hand on the frame.',
    steps: [
      'Pull the handle to your hip.',
      'Let the shoulder blade travel forward at the stretch and back fully at the squeeze.',
      'Match reps on each side.',
    ],
    breathing: 'Exhale on the pull, inhale on the return.',
    safety: 'Avoid rotating the torso to cheat the weight up.',
  },
  ex_reverse_pec_deck: {
    starting: 'Face the pad with handles in front and a soft bend in the elbows.',
    steps: [
      'Sweep the arms out and back to shoulder level, leading with the pinkies.',
      'Squeeze briefly.',
      'Return slowly to the start.',
    ],
    breathing: 'Exhale as you sweep back, inhale on the return.',
    safety: 'Keep the elbow bend modest so it stays a rear-delt fly, not a row.',
  },
  ex_dumbbell_biceps_curl: {
    starting: 'Stand tall with dumbbells at your sides and elbows near your ribs.',
    steps: ['Curl the dumbbells up without swinging.', 'Squeeze at the top.', 'Lower for a slow count of two to full extension.'],
    breathing: 'Exhale as you curl, inhale as you lower.',
    safety: 'Keep the elbows from drifting forward; avoid using the hips to swing.',
  },
  ex_hammer_curl: {
    starting: 'Hold the dumbbells with a neutral (palms-facing) grip.',
    steps: ['Curl up keeping the wrists neutral.', 'Keep the elbows pinned to your sides.', 'Lower under control.'],
    breathing: 'Exhale on the curl, inhale on the descent.',
    safety: 'Do not turn it into a swing or let the elbows flare.',
  },
  ex_ez_bar_curl: {
    starting: 'Grip the angled portion of the EZ-bar with the elbows close to your sides.',
    steps: ['Curl up smoothly.', 'Squeeze the biceps.', 'Lower to full extension without bouncing.'],
    breathing: 'Exhale on the curl, inhale as you lower.',
    safety: 'Avoid leaning back to move heavier weight.',
  },
  ex_incline_dumbbell_curl: {
    starting: 'Sit back on a bench set to 45–60° with the arms hanging behind the torso.',
    steps: ['Curl up keeping the upper arm still.', 'Squeeze at the top.', 'Lower fully for a long stretch.'],
    breathing: 'Exhale on the curl, inhale as you lower.',
    safety: 'Keep the shoulders from rolling forward during the curl.',
  },
  ex_leg_press: {
    starting: 'Sit with your back flat against the pad and feet shoulder-width on the platform.',
    steps: ['Lower until the knees reach about 90°.', 'Keep the lower back flat.', 'Press through the whole foot without locking the knees hard.'],
    breathing: 'Inhale as you lower, exhale as you press.',
    safety: 'Do not let the lower back round off the pad.',
  },
  ex_db_romanian_deadlift: {
    starting: 'Stand tall holding the dumbbells in front of the thighs with a slight knee bend.',
    steps: ['Push the hips back and lower the weight along the legs.', 'Stop at a hamstring stretch.', 'Drive the hips forward to stand tall.'],
    breathing: 'Inhale as you hinge, exhale as you stand.',
    safety: 'Keep the back flat and the weight close to the legs — never round the spine.',
  },
  ex_barbell_squat: {
    starting: 'Bar on the upper back, feet shoulder-width, toes slightly out, core braced.',
    steps: ['Squat down between the hips.', 'Descend to near-parallel (or your controlled depth).', 'Drive up through mid-foot.'],
    breathing: 'Inhale and brace before descending, exhale on the way up.',
    safety: 'Use safety pins or a spotter; never let the knees cave in.',
  },
  ex_goblet_squat: {
    starting: 'Hold a dumbbell vertically at your chest with the torso tall.',
    steps: ['Squat down between the hips to a comfortable depth.', 'Keep the chest up.', 'Stand tall.'],
    breathing: 'Inhale as you descend, exhale as you stand.',
    safety: 'Do not let the chest collapse or the heels lift.',
  },
  ex_leg_extension: {
    starting: 'Align the knees with the machine pivot and set the back pad snug.',
    steps: ['Extend the legs until almost straight.', 'Squeeze the quads.', 'Lower under control.'],
    breathing: 'Exhale as you extend, inhale as you lower.',
    safety: 'Avoid kicking with momentum or slamming the stack.',
  },
  ex_seated_leg_curl: {
    starting: 'Set the lap pad snug and align the knee joint with the pivot.',
    steps: ['Curl the legs down and under.', 'Squeeze the hamstrings.', 'Return slowly.'],
    breathing: 'Exhale on the curl, inhale on the return.',
    safety: 'Keep the hips planted — do not lift off the seat to help.',
  },
  ex_lying_leg_curl: {
    starting: 'Lie face down with the ankle pad on the lower calves.',
    steps: ['Curl the heels toward your glutes.', 'Pause.', 'Lower under control without the hips rising.'],
    breathing: 'Exhale on the curl, inhale on the return.',
    safety: 'If the hips lift to help, the weight is too heavy — reduce it.',
  },
  ex_hip_thrust_machine: {
    starting: 'Set the pad across the hips with feet flat and shoulder-width.',
    steps: ['Drive the hips forward until the body is straight.', 'Squeeze the glutes hard.', 'Lower with control.'],
    breathing: 'Exhale as you drive up, inhale as you lower.',
    safety: 'Do not over-arch the lower back at the top.',
  },
  ex_standing_calf_raise: {
    starting: 'Place the balls of your feet on the platform with soft knees.',
    steps: ['Rise as high as possible onto the toes.', 'Pause at the top.', 'Lower until the calves stretch fully.'],
    breathing: 'Exhale as you rise, inhale as you lower.',
    safety: 'Avoid bouncing; use a full range of motion.',
  },
  ex_seated_calf_raise: {
    starting: 'Sit with the pads on the thighs and the balls of the feet on the platform.',
    steps: ['Press up onto the toes.', 'Pause at the top.', 'Lower to a deep stretch.'],
    breathing: 'Exhale as you press, inhale as you lower.',
    safety: 'Control the range — do not let the weight rest between reps.',
  },
  ex_plank: {
    starting: 'Forearms under the shoulders with the body in a straight line from head to heels.',
    steps: ['Brace the abs and glutes.', 'Hold the position for the target time.', 'Keep the hips level — no sagging or piking.'],
    breathing: 'Breathe steadily throughout; do not hold your breath.',
    safety: 'Stop the set when you can no longer keep a straight line.',
  },
  ex_dead_bug: {
    starting: 'Lie on your back with arms up and knees stacked over the hips.',
    steps: ['Press the lower back gently into the floor.', 'Extend the opposite arm and leg, then return.', 'Alternate sides with control.'],
    breathing: 'Exhale as you extend, inhale as you return.',
    safety: 'Keep the lower back flat — reduce range if it arches off the floor.',
  },
}

/** Resolve a guide for any exercise, falling back to its stored text. */
export function getExerciseGuide(exercise: Exercise): ExerciseGuide {
  const curated = EXERCISE_GUIDES[exercise.id]
  if (curated) return curated
  const fromInstructions = exercise.instructions
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
  return {
    starting: 'Set up as described below for this exercise.',
    steps: fromInstructions.length ? fromInstructions : ['Perform the movement under control for the target reps.'],
    breathing: 'Inhale on the easier phase, exhale on the effort.',
    safety: exercise.mistakes
      ? `Avoid these common errors: ${exercise.mistakes}`
      : 'Use a load and range you can control with clean technique.',
  }
}
