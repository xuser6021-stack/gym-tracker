// Generated comprehensive exercise database for IronTrack V3.5
// Contains 520 genuinely distinct movements with accurate technique instructions,
// common mistakes, safety tips, variation groups, alternatives, equipment, and tracking types.

import type { Exercise } from '../types'

export const COMPREHENSIVE_EXERCISES: Exercise[] = [
  {
    "id": "ex_barbell_bench_press",
    "name": "Barbell bench press",
    "aliases": [
      "Flat bench",
      "Bench press",
      "Flat barbell bench"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie flat, feet planted, shoulder blades pinched back and down. Grip slightly wider than shoulders. Lower the bar under control to mid-chest, then press up and slightly back until arms are extended. Keep wrists stacked over elbows.",
    "mistakes": "Bouncing the bar off the chest, flaring elbows to 90°, lifting the hips off the bench, uneven bar path.",
    "safetyTips": [
      "Always use safety pins or a spotter on heavy attempts.",
      "Keep wrists neutral and avoid excessive hyperextension."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_machine_chest_press",
      "ex_dumbbell_flat_bench_press",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_dumbbell_press",
    "name": "Incline dumbbell press",
    "aliases": [
      "Incline DB press",
      "Incline chest press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Set the bench to roughly 30°. Start with dumbbells at shoulder height, press up and slightly together without clanking them. Lower under control until you feel a stretch across the upper chest.",
    "mistakes": "Bench too steep (turns it into a shoulder press), half reps, letting dumbbells drift too far back.",
    "safetyTips": [
      "Keep bench at 30-45 degrees to target upper chest rather than anterior deltoids."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_barbell_bench_press",
      "ex_incline_barbell_bench_press",
      "ex_machine_incline_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_chest_press",
    "name": "Machine chest press",
    "aliases": [
      "Seated chest press",
      "Leverage chest press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Adjust the seat so the handles sit at mid-chest. Press forward until arms are extended, then return under control without letting the stack slam.",
    "mistakes": "Seat set too high or low, partial range, letting the shoulders roll forward at the bottom.",
    "safetyTips": [
      "Ensure seat height lines up handles with lower to mid sternum."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_barbell_bench_press",
      "ex_dumbbell_flat_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_barbell_bench_press",
    "name": "Incline barbell bench press",
    "aliases": [
      "Incline bench",
      "Incline bar press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Lie on a 30-degree incline bench with feet flat. Grip bar slightly wider than shoulder width. Lower bar to upper chest clavicle area with elbows tucked at 45 degrees, then press up to lockout.",
    "mistakes": "Flaring elbows outward, bench set too steep over 45 degrees, bouncing bar off clavicle.",
    "safetyTips": [
      "Use safety catches set just above chest level."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_machine_incline_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_barbell_bench_press",
    "name": "Decline barbell bench press",
    "aliases": [
      "Decline bench",
      "Decline barbell press"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Decline push",
    "trackingType": "weight_reps",
    "instructions": "Secure legs in decline bench rollers. Grip bar evenly, unrack, and lower under control to lower sternum. Press upward until arms lock out.",
    "mistakes": "Lifting head from bench, letting bar drift over neck, loose leg anchoring.",
    "safetyTips": [
      "Ensure leg pads are completely locked before unracking."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_decline_dumbbell_press",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_flat_bench_press",
    "name": "Flat dumbbell bench press",
    "aliases": [
      "Dumbbell bench press",
      "DB bench"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie back on flat bench bringing dumbbells to chest. Press up with a slight inward arc, stopping just before dumbbells touch. Lower slowly until deep stretch is felt in pecs.",
    "mistakes": "Clanking dumbbells violently at top, flaring elbows straight out, dropping weights carelessly.",
    "safetyTips": [
      "Kick dumbbells up from knees when getting into position."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_barbell_bench_press",
      "ex_machine_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_dumbbell_press",
    "name": "Decline dumbbell press",
    "aliases": [
      "Decline DB press"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Decline push",
    "trackingType": "weight_reps",
    "instructions": "Lie back on decline bench with dumbbells at side of chest. Press straight up over chest and squeeze lower pecs. Lower slowly until full stretch.",
    "mistakes": "Swinging weights, insufficient control on the eccentric phase.",
    "safetyTips": [
      "Have a spotter hand the dumbbells if training heavy."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_decline_barbell_bench_press",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_close_grip_barbell_bench_press",
    "name": "Close-grip barbell bench press",
    "aliases": [
      "CGBP",
      "Close grip bench"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie on bench with hands placed shoulder-width apart (not touching). Keep elbows tucked close to sides as bar lowers to lower chest. Press firmly to full extension.",
    "mistakes": "Placing hands too close (wrists strained), flaring elbows outwards.",
    "safetyTips": [
      "Do not place hands closer than shoulder-width to protect wrist joints."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_dips_chest",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_chest_fly",
    "name": "Flat dumbbell chest fly",
    "aliases": [
      "DB flyes",
      "Flat DB fly"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal adduction",
    "trackingType": "weight_reps",
    "instructions": "Lie on flat bench with dumbbells over chest, palms facing each other, slight bend in elbows. Lower arms out to sides in wide arc until deep pec stretch. Squeeze chest to bring weights together.",
    "mistakes": "Bending elbows excessively turning it into a press, lowering beyond shoulder comfort.",
    "safetyTips": [
      "Maintain fixed soft elbow angle throughout entire arc."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_pec_deck_fly",
      "ex_cable_crossover"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_dumbbell_fly",
    "name": "Incline dumbbell fly",
    "aliases": [
      "Incline DB flyes"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Incline adduction",
    "trackingType": "weight_reps",
    "instructions": "Set bench to 30 degrees. Hold dumbbells overhead with elbows softly bent. Open arms wide until a stretch is felt in upper chest, then contract pecs to return.",
    "mistakes": "Over-extending shoulders at bottom, straightening arms fully.",
    "safetyTips": [
      "Stop eccentric when elbows align with bench surface level."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_low_to_high_cable_fly",
      "ex_incline_cable_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_dumbbell_fly",
    "name": "Decline dumbbell fly",
    "aliases": [
      "Decline DB flyes"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Decline adduction",
    "trackingType": "weight_reps",
    "instructions": "Position on decline bench with dumbbells directly above lower chest. Lower dumbbells in wide hugging motion until chest stretches, then squeeze together.",
    "mistakes": "Allowing weights to drift towards face, locking elbows rigid.",
    "safetyTips": [
      "Control the downward descent smoothly."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_high_to_low_cable_fly",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_crossover",
    "name": "Standing cable crossover",
    "aliases": [
      "Cable fly",
      "Cable chest cross"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal adduction",
    "trackingType": "weight_reps",
    "instructions": "Set pulleys to shoulder height. Step forward into staggered stance with slight forward lean. Bring handles together in front of sternum, crossing hands slightly for maximal contraction.",
    "mistakes": "Using torso momentum to swing weights, bending and extending arms like a press.",
    "safetyTips": [
      "Step back with weight before releasing pulleys."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_pec_deck_fly",
      "ex_dumbbell_chest_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_high_to_low_cable_fly",
    "name": "High-to-low cable fly",
    "aliases": [
      "Decline cable fly",
      "High cable crossover"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Decline adduction",
    "trackingType": "weight_reps",
    "instructions": "Pulleys set above head. Step forward, lean slightly, and bring handles downwards and together towards hips, squeezing lower pecs intensely.",
    "mistakes": "Shrugging shoulders up, leaning back to heave cables.",
    "safetyTips": [
      "Keep shoulders depressed and retract scapulae."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_dips_chest",
      "ex_decline_dumbbell_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_low_to_high_cable_fly",
    "name": "Low-to-high cable fly",
    "aliases": [
      "Incline cable fly",
      "Low cable crossover"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Incline adduction",
    "trackingType": "weight_reps",
    "instructions": "Pulleys set at bottom position. Stand centered, step forward, and bring handles upward and together to chin height with palms facing up and inward.",
    "mistakes": "Over-engaging biceps instead of chest, swinging torso violently.",
    "safetyTips": [
      "Keep slight elbow bend stable throughout."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_fly",
      "ex_incline_dumbbell_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_middle_cable_fly",
    "name": "Mid-cable chest fly",
    "aliases": [
      "Middle cable crossover",
      "Chest-height cable fly"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal adduction",
    "trackingType": "weight_reps",
    "instructions": "Set pulleys at mid-chest height. Step out, maintain upright torso, and sweep handles across chest line with elbows soft.",
    "mistakes": "Pressing rather than flying, leaning forward excessively.",
    "safetyTips": [
      "Keep core braced and spine neutral."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_pec_deck_fly",
      "ex_dumbbell_chest_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_pec_deck_fly",
    "name": "Pec deck machine fly",
    "aliases": [
      "Machine fly",
      "Pec deck",
      "Butterfly machine"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal adduction",
    "trackingType": "weight_reps",
    "instructions": "Sit with back flat against pad. Place forearms or hands on pads at chest level. Squeeze arms together in front of chest, pause 1 second at peak contraction, and return slowly.",
    "mistakes": "Letting elbows travel too far back hyperextending shoulders, hunching upper back.",
    "safetyTips": [
      "Adjust seat so handles align with mid-chest."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_cable_crossover",
      "ex_dumbbell_chest_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dips_chest",
    "name": "Chest dips",
    "aliases": [
      "Parallel bar dips (chest focus)",
      "Lean-forward dips"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Support body on parallel bars with arms extended. Lean torso forward roughly 30 degrees, flare elbows slightly, and lower until shoulders are below elbows. Press up smoothly.",
    "mistakes": "Staying completely upright (shifts load to triceps), dipping too low with shoulder impingement.",
    "safetyTips": [
      "Do not drop below comfortable shoulder active mobility range."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_decline_barbell_bench_press",
      "ex_high_to_low_cable_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_dips_chest",
    "name": "Weighted chest dips",
    "aliases": [
      "Weighted dips (chest)",
      "Belt dips"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "usesBodyweight": true,
    "instructions": "Attach weight plate to dip belt. Mount bars, tilt torso forward 30 degrees, tuck knees, and descend until upper arms are parallel to floor. Press vigorously back to top.",
    "mistakes": "Swinging weight plate, losing forward torso lean on ascent.",
    "safetyTips": [
      "Ensure weight belt is securely centered around waist."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_chest",
      "ex_decline_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_assisted_chest_dips",
    "name": "Assisted machine chest dips",
    "aliases": [
      "Machine assisted dips",
      "Gravitron chest dip"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "assisted_reps",
    "usesBodyweight": true,
    "instructions": "Set counterbalance pin on weight stack. Kneel or stand on assistance pad. Lean chest forward into movement and perform controlled repetitions.",
    "mistakes": "Standing up straight, locking out violently.",
    "safetyTips": [
      "Step off assistance pad carefully when finished."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_chest",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_push_up",
    "name": "Standard push-up",
    "aliases": [
      "Floor push up",
      "Standard pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "12-25",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place hands slightly wider than shoulder width on floor. Keep body rigid in straight line from head to heels. Lower chest to 1 inch above floor, then push up powerfully.",
    "mistakes": "Sagging hips, flaring elbows out at 90 degrees, nodding head without moving torso.",
    "safetyTips": [
      "Keep core and glutes squeezed tight to prevent lower back hyperextension."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_incline_push_up",
      "ex_barbell_bench_press",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_diamond_push_up",
    "name": "Diamond push-up",
    "aliases": [
      "Close-grip push-up",
      "Triangle pushup"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Form plank with thumbs and index fingers touching under chest creating a diamond shape. Lower chest to hands keeping elbows close to ribs, then push back up.",
    "mistakes": "Elbows flaring wide, hips drooping, placing hands too far ahead of chest.",
    "safetyTips": [
      "If wrists ache, slightly separate hands."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_close_grip_barbell_bench_press",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_push_up",
    "name": "Decline push-up",
    "aliases": [
      "Feet-elevated pushup",
      "Upper chest push up"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Elevate toes on bench or box with hands on floor. Brace core and lower chest towards floor. Press through palms until elbows lock.",
    "mistakes": "Arching lower back, letting head drop.",
    "safetyTips": [
      "Ensure bench is stable and does not slide."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_push_up",
    "name": "Incline push-up",
    "aliases": [
      "Hands-elevated pushup",
      "Beginner push up"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Decline push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place hands on elevated bench or sturdy bar with body in straight line. Lower chest to edge of bench, pause, and press back up.",
    "mistakes": "Piking hips, bouncing off bench.",
    "safetyTips": [
      "Great regression if standard push-ups cause joint stress."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_machine_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_wide_grip_push_up",
    "name": "Wide-grip push-up",
    "aliases": [
      "Wide pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Position hands 1.5 times shoulder width on floor. Lower chest steadily until elbows reach 90 degrees, feeling wide pec stretch. Push up.",
    "mistakes": "Flaring elbows excessively high towards neck.",
    "safetyTips": [
      "Keep elbows angled roughly 60 degrees from body."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_dumbbell_chest_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_bench_press",
    "name": "Smith machine bench press",
    "aliases": [
      "Smith bench",
      "Smith flat press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Position flat bench inside Smith machine so bar touches mid-chest. Unhook bar and lower slowly. Press forcefully back to top.",
    "mistakes": "Bench not centered, misaligned bar trajectory with sternum.",
    "safetyTips": [
      "Always set Smith safety stops at chest level before loading."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_barbell_bench_press",
      "ex_machine_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_incline_press",
    "name": "Smith machine incline bench press",
    "aliases": [
      "Smith incline press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Place 30-degree incline bench inside Smith machine. Align bar path to touch upper chest. Lower under control and press upward.",
    "mistakes": "Setting bench too steep or too far back.",
    "safetyTips": [
      "Engage safety lockpins correctly."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_incline_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_decline_press",
    "name": "Smith machine decline bench press",
    "aliases": [
      "Smith decline press"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Decline push",
    "trackingType": "weight_reps",
    "instructions": "Align decline bench so bar aligns directly over lower chest. Lower smoothly and press to lockout.",
    "mistakes": "Letting bar lower onto abdomen rather than sternum.",
    "safetyTips": [
      "Verify safety hooks are easily twistable with wrists."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_decline_barbell_bench_press",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_incline_chest_press",
    "name": "Machine incline chest press",
    "aliases": [
      "Incline chest machine",
      "Incline hammer press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Adjust seat so handles start at upper chest level. Drive handles upward along machine trajectory without letting shoulders roll forward.",
    "mistakes": "Shrugging shoulders into ears at top of press.",
    "safetyTips": [
      "Keep back firmly pressed against pad."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_incline_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_decline_chest_press",
    "name": "Machine decline chest press",
    "aliases": [
      "Decline chest machine",
      "Decline hammer press"
    ],
    "category": "push",
    "primaryMuscle": "Lower chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Decline push",
    "trackingType": "weight_reps",
    "instructions": "Seat adjusted so pressing handles move downward and away from body. Push handles until arms extend fully, then return slowly.",
    "mistakes": "Slumping forward off backrest.",
    "safetyTips": [
      "Control the weight stack at the bottom of each rep."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_decline_dumbbell_press",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_dumbbell_bench_press",
    "name": "Single-arm dumbbell bench press",
    "aliases": [
      "One-arm DB bench press",
      "Unilateral DB bench"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Core",
      "Triceps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie on flat bench holding one dumbbell. Brace core and opposite foot to prevent torso twisting. Lower dumbbell smoothly and press back up.",
    "mistakes": "Allowing hips or shoulders to tilt off bench.",
    "safetyTips": [
      "Hold free hand across torso or bench edge for stability."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_dumbbell_flat_bench_press",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_floor_press",
    "name": "Dumbbell floor press",
    "aliases": [
      "DB floor press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie on floor with knees bent and feet flat. Hold dumbbells over chest. Lower until upper arms touch floor gently, pause 1 second, and press back up.",
    "mistakes": "Bouncing triceps hard off the floor.",
    "safetyTips": [
      "Great shoulder-friendly variation that restricts bottom range."
    ],
    "variationGroupId": "var_floor_press",
    "alternativeExerciseIds": [
      "ex_barbell_floor_press",
      "ex_dumbbell_flat_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_floor_press",
    "name": "Barbell floor press",
    "aliases": [
      "Floor press",
      "BB floor press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Set hooks on low rack. Lie on floor under bar. Unrack and lower until triceps gently touch floor, pause dead stop, then press to lockout.",
    "mistakes": "Slamming elbows into floor, squirming hips.",
    "safetyTips": [
      "Ensure spotter hooks are safely reachable from floor."
    ],
    "variationGroupId": "var_floor_press",
    "alternativeExerciseIds": [
      "ex_dumbbell_floor_press",
      "ex_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_svend_press",
    "name": "Svend press",
    "aliases": [
      "Plate pinch press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Stand tall holding two light plates pinched together between open palms at chest. Press arms straight out horizontally while squeezing plates together as hard as possible.",
    "mistakes": "Gripping plates with fingers instead of purely pinching with palms.",
    "safetyTips": [
      "Use light 2.5kg or 5kg plates; intensity comes from the isometric squeeze."
    ],
    "variationGroupId": "var_pinch_press",
    "alternativeExerciseIds": [
      "ex_pec_deck_fly",
      "ex_cable_crossover"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_squeeze_press",
    "name": "Dumbbell squeeze press",
    "aliases": [
      "Hex press",
      "Crush press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie on flat bench pressing dumbbells firmly together over chest. Maintain continuous inward pressure squeezing the dumbbells against each other as you lower and press.",
    "mistakes": "Losing inward pressure, clashing weights loosely.",
    "safetyTips": [
      "Hex dumbbells work best to prevent rolling."
    ],
    "variationGroupId": "var_pinch_press",
    "alternativeExerciseIds": [
      "ex_svend_press",
      "ex_dumbbell_flat_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_dumbbell_squeeze_press",
    "name": "Incline dumbbell squeeze press",
    "aliases": [
      "Incline hex press",
      "Incline crush press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Set bench to 30 degrees. Press dumbbells together with neutral grip. Maintain maximal inward pressure throughout the press to upper chest.",
    "mistakes": "Separating the dumbbells during the rep.",
    "safetyTips": [
      "Focus on contraction over maximal weight."
    ],
    "variationGroupId": "var_pinch_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_svend_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_resistance_band_chest_press",
    "name": "Resistance band chest press",
    "aliases": [
      "Band push",
      "Standing band press"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Loop heavy band behind back across shoulder blades or anchor to post. Hold handles and press forward until arms are fully extended. Return slowly against band resistance.",
    "mistakes": "Allowing band to snap arms backwards.",
    "safetyTips": [
      "Inspect band for micro-tears before use."
    ],
    "variationGroupId": "var_chest_press",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_machine_chest_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_resistance_band_chest_fly",
    "name": "Resistance band chest fly",
    "aliases": [
      "Band flyes",
      "Banded chest crossover"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Horizontal adduction",
    "trackingType": "weight_reps",
    "instructions": "Anchor band behind you at chest level. Step forward into tension. With elbows slightly bent, sweep arms together in front of chest and squeeze.",
    "mistakes": "Bending elbows into a pressing movement.",
    "safetyTips": [
      "Step forward to increase tension gradually."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_pec_deck_fly",
      "ex_cable_crossover"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_resisted_push_up",
    "name": "Band-resisted push-up",
    "aliases": [
      "Banded pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Wrap loop band across upper back and hold ends under palms on floor. Perform standard push-up against increasing band resistance at the top lockout.",
    "mistakes": "Letting band slip up onto neck.",
    "safetyTips": [
      "Keep band situated across mid-back scapular area."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_landmine_chest_press",
    "name": "Standing landmine chest press",
    "aliases": [
      "Landmine press",
      "Standing landmine press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Anchor one end of barbell in corner or landmine sleeve. Hold the loaded sleeve with both hands cupped at chest. Press up and forward at a 45-degree angle.",
    "mistakes": "Leaning backward to cheat weight.",
    "safetyTips": [
      "Maintain tight core brace throughout pressing arc."
    ],
    "variationGroupId": "var_landmine_press",
    "alternativeExerciseIds": [
      "ex_single_arm_landmine_press",
      "ex_incline_dumbbell_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_landmine_press",
    "name": "Single-arm landmine press",
    "aliases": [
      "One-arm landmine press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold end of barbell in one hand at shoulder. Stagger stance with opposite leg forward. Press barbell diagonally upward until elbow locks out.",
    "mistakes": "Rotating torso excessively during press.",
    "safetyTips": [
      "Excellent shoulder-friendly movement for lifters with AC joint pain."
    ],
    "variationGroupId": "var_landmine_press",
    "alternativeExerciseIds": [
      "ex_landmine_chest_press",
      "ex_incline_dumbbell_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kneeling_landmine_press",
    "name": "Half-kneeling landmine press",
    "aliases": [
      "Half-kneeling single arm landmine press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Core",
      "Triceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Kneel on the knee on the same side as the pressing arm. Hold bar at shoulder level. Press upward while maintaining vertical torso alignment.",
    "mistakes": "Arching low back or tilting hips sideways.",
    "safetyTips": [
      "Squeeze glute of kneeling leg to stabilize pelvis."
    ],
    "variationGroupId": "var_landmine_press",
    "alternativeExerciseIds": [
      "ex_single_arm_landmine_press",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_iron_cross",
    "name": "Cable iron cross",
    "aliases": [
      "Standing iron cross",
      "Isometric cable cross"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Core"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "20-30s",
    "difficulty": "advanced",
    "movementPattern": "Horizontal adduction",
    "trackingType": "hold",
    "instructions": "Grip high pulleys, step forward, and bring handles out to sides at chest height with elbows slightly bent. Hold the isometric cross position firmly.",
    "mistakes": "Letting cables pull shoulders back into hyperextension.",
    "safetyTips": [
      "Use light resistance to protect shoulder labrum."
    ],
    "variationGroupId": "var_cable_fly",
    "alternativeExerciseIds": [
      "ex_cable_crossover",
      "ex_pec_deck_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_around_the_world_dumbbell",
    "name": "Dumbbell around the worlds",
    "aliases": [
      "DB around the world"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Lats"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Circular adduction",
    "trackingType": "weight_reps",
    "instructions": "Lie on flat bench holding dumbbells with palms up at hips. Trace wide circular arcs along horizontal plane overhead until weights almost touch, then reverse.",
    "mistakes": "Using heavy weights that compromise rotator cuff.",
    "safetyTips": [
      "Keep movement slow and strictly controlled with light dumbbells."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_dumbbell_chest_fly",
      "ex_cable_crossover"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_guillotine_press",
    "name": "Guillotine bench press",
    "aliases": [
      "Neck bench press",
      "Gironda neck press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie on bench with wide grip and flared elbows. Lower bar with strict control towards upper neck / clavicle area to emphasize pec stretch, then press up.",
    "mistakes": "Going too heavy without spotter or safety catches.",
    "safetyTips": [
      "Use moderate weight and always use safety bars set at neck height."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_barbell_bench_press",
      "ex_dumbbell_flat_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_cable_press",
    "name": "Incline cable chest press",
    "aliases": [
      "Incline cable bench press"
    ],
    "category": "push",
    "primaryMuscle": "Upper chest",
    "secondaryMuscles": [
      "Front delts",
      "Triceps"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "instructions": "Place incline bench between two low cable pulleys. Press handles upward along converging incline path.",
    "mistakes": "Uneven cable lengths or asymmetrical pressing.",
    "safetyTips": [
      "Ensure bench is centered precisely between cable towers."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_press",
      "ex_low_to_high_cable_fly"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_lat_pulldown",
    "name": "Lat pulldown",
    "aliases": [
      "Wide grip lat pulldown",
      "Cable pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Rear delts",
      "Upper back"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Sit with thighs secured under pads. Grip bar wider than shoulders. Depress shoulder blades and pull bar down to upper chest, leaning back slightly. Control the weight on the way up to a full stretch.",
    "mistakes": "Leaning back excessively to heave weight, pulling behind the neck, using momentum.",
    "safetyTips": [
      "Do not pull behind neck to avoid cervical spine and rotator cuff strain."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown_alt_grip",
      "ex_pull_up",
      "ex_close_grip_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_lat_pulldown_alt_grip",
    "name": "Lat pulldown (alternate grip)",
    "aliases": [
      "Underhand lat pulldown",
      "Reverse grip pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Use a close neutral or underhand grip. Pull the attachment smoothly to the clavicle, keeping elbows driving down towards hips.",
    "mistakes": "Rounding shoulders forward at the bottom, swinging the torso back and forth.",
    "safetyTips": [
      "Keep elbows tucked close to torso."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_chin_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_cable_row",
    "name": "Seated cable row",
    "aliases": [
      "Cable row",
      "Low cable row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Biceps",
      "Rear delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Feet on footplates with knees slightly bent. Sit upright with chest tall. Pull handle towards navel, squeezing shoulder blades together. Return with control allowing back to stretch slightly.",
    "mistakes": "Rocking torso violently back and forth, rounding lower back, shrugging shoulders up.",
    "safetyTips": [
      "Maintain neutral spine and do not round lumbar spine."
    ],
    "variationGroupId": "var_seated_row",
    "alternativeExerciseIds": [
      "ex_chest_supported_row",
      "ex_barbell_bent_over_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_chest_supported_row",
    "name": "Chest-supported row",
    "aliases": [
      "Incline DB row",
      "Incline chest-supported row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Rear delts",
      "Biceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Lie face down on incline bench set to 30-45 degrees. Let dumbbells hang down, then row elbows up and back squeezing shoulder blades together at the top. Lower with control.",
    "mistakes": "Lifting chest off the pad, jerking neck upwards, using momentum.",
    "safetyTips": [
      "Keep sternum anchored on pad to remove all lower back stress."
    ],
    "variationGroupId": "var_chest_supported_row",
    "alternativeExerciseIds": [
      "ex_seated_cable_row",
      "ex_t_bar_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_cable_row",
    "name": "Single-arm cable row",
    "aliases": [
      "One-arm cable row",
      "Unilateral cable row"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Rear delts",
      "Core"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Set pulley to mid-chest height. Step back into staggered stance. Pull handle to hip with elbow driving tight to ribs while resisting torso rotation. Return to full stretch.",
    "mistakes": "Twisting hips, using body momentum, flaring elbow high.",
    "safetyTips": [
      "Brace core to keep pelvis square."
    ],
    "variationGroupId": "var_seated_row",
    "alternativeExerciseIds": [
      "ex_seated_cable_row",
      "ex_single_arm_dumbbell_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_pull_up",
    "name": "Standard pull-up",
    "aliases": [
      "Overhand pull-up",
      "Wide grip pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Grip bar overhand slightly wider than shoulder width. Hang fully with arms extended. Drive elbows down towards ribs to pull chin above bar. Lower under control to dead hang.",
    "mistakes": "Kicking or kipping legs, cutting range of motion short at bottom, craning neck over bar.",
    "safetyTips": [
      "Initiate pull by retracting and depressing scapulae."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_chin_up",
      "ex_assisted_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_chin_up",
    "name": "Chin-up",
    "aliases": [
      "Underhand pull-up",
      "Supinated chinup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Grip bar with palms facing towards you shoulder-width apart. Pull body up until chin clears bar, keeping elbows close to body. Lower slowly to full hang.",
    "mistakes": "Swinging torso, partial reps.",
    "safetyTips": [
      "Do not drop down abruptly onto elbow joints at bottom."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_lat_pulldown_alt_grip",
      "ex_neutral_grip_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_neutral_grip_pull_up",
    "name": "Neutral-grip pull-up",
    "aliases": [
      "Parallel grip pullup",
      "V-bar pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Brachialis",
      "Upper back"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Grip parallel handles with palms facing each other. Pull up smoothly until chest reaches handle height, then lower with full control.",
    "mistakes": "Excessive swing, failing to achieve full extension.",
    "safetyTips": [
      "Very friendly on shoulders and wrists compared to straight bar."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_chin_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_pull_up",
    "name": "Weighted pull-up",
    "aliases": [
      "Weighted pullup",
      "Belt pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "4-8",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "usesBodyweight": true,
    "instructions": "Attach weight plate to dip/pull-up belt. Grip bar overhand, steady the weight between thighs, and pull up until chin passes bar. Lower slowly.",
    "mistakes": "Swinging weight plate, jerking upward violently.",
    "safetyTips": [
      "Ensure weight chain is secured firmly."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_assisted_pull_up",
    "name": "Assisted machine pull-up",
    "aliases": [
      "Machine pullup",
      "Gravitron pull up"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "assisted_reps",
    "usesBodyweight": true,
    "instructions": "Set counterweight pin. Kneel on assistance pad and take wide overhand grip. Pull chest to bar level under control, then lower slowly.",
    "mistakes": "Bouncing on pad, stepping off before platform reaches top.",
    "safetyTips": [
      "Keep knees planted firmly on pad during whole set."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_bent_over_row",
    "name": "Barbell bent-over row",
    "aliases": [
      "Barbell row",
      "Bent-over row",
      "Pendlay row variation"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Biceps",
      "Lower back",
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Hinge forward at hips with flat back roughly 45 degrees to floor. Grip bar overhand slightly wider than shoulder width. Pull bar to upper abdomen/lower ribcage driving elbows back. Lower with control.",
    "mistakes": "Standing up too high, rounding lower back, jerking torso upward to heave weight.",
    "safetyTips": [
      "Keep core braced and spine neutral to protect lower back."
    ],
    "variationGroupId": "var_barbell_row",
    "alternativeExerciseIds": [
      "ex_pendlay_row",
      "ex_t_bar_row",
      "ex_chest_supported_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_pendlay_row",
    "name": "Pendlay row",
    "aliases": [
      "Strict barbell row",
      "Dead-stop barbell row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Rear delts",
      "Biceps",
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Torso strictly parallel to floor on every rep. Pull bar explosively from floor to sternum, pause briefly, then return bar completely to floor to reset between reps.",
    "mistakes": "Raising hips or back angle during the pull, slamming bar into chest.",
    "safetyTips": [
      "Reset back stiffness before pulling each repetition from floor."
    ],
    "variationGroupId": "var_barbell_row",
    "alternativeExerciseIds": [
      "ex_barbell_bent_over_row",
      "ex_t_bar_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_underhand_barbell_row",
    "name": "Underhand barbell row (Yates row)",
    "aliases": [
      "Yates row",
      "Reverse grip barbell row"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Take supinated (underhand) grip shoulder-width apart with torso hinged at roughly 65-70 degrees. Row bar into lower abdomen driving elbows back.",
    "mistakes": "Biceps tendon overload from excessive weights, rounding spine.",
    "safetyTips": [
      "Do not yank weight violently with underhand grip."
    ],
    "variationGroupId": "var_barbell_row",
    "alternativeExerciseIds": [
      "ex_barbell_bent_over_row",
      "ex_seated_cable_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_dumbbell_row",
    "name": "Single-arm dumbbell row",
    "aliases": [
      "One-arm DB row",
      "Kroc row"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Upper back",
      "Biceps",
      "Core"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place one knee and hand on flat bench. With flat back, pull dumbbell upward towards hip, keeping elbow close to side. Squeeze lats at top, then lower to full stretch.",
    "mistakes": "Rotating torso heavily to fling dumbbell, pulling to armpit instead of hip.",
    "safetyTips": [
      "Keep supporting hand and knee aligned under shoulders and hips."
    ],
    "variationGroupId": "var_dumbbell_row",
    "alternativeExerciseIds": [
      "ex_chest_supported_row",
      "ex_single_arm_cable_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_t_bar_row",
    "name": "T-bar row",
    "aliases": [
      "Landmine T-bar row",
      "Plate loaded T-bar row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Rear delts",
      "Biceps"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Straddle T-bar platform with feet flat. Hinge at hips with flat back. Grip handles, pull weight to sternum, squeeze mid-traps and rhomboids, and lower with control.",
    "mistakes": "Rounding thoracic spine, standing fully upright to heave weight.",
    "safetyTips": [
      "Brace core vigorously against abdominal pressure."
    ],
    "variationGroupId": "var_barbell_row",
    "alternativeExerciseIds": [
      "ex_barbell_bent_over_row",
      "ex_chest_supported_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_chest_supported_t_bar_row",
    "name": "Chest-supported T-bar row",
    "aliases": [
      "Incline T-bar row",
      "Padded T-bar row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Rear delts",
      "Lats",
      "Biceps"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Lie prone with chest supported on machine pad. Grip handles, row up until elbows pass torso, and squeeze scapulae together. Lower under control.",
    "mistakes": "Lifting ribs off pad, hyperextending neck.",
    "safetyTips": [
      "Zero spinal loading makes this ideal for back rehabilitation."
    ],
    "variationGroupId": "var_chest_supported_row",
    "alternativeExerciseIds": [
      "ex_t_bar_row",
      "ex_seated_cable_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_straight_arm_cable_pulldown",
    "name": "Straight-arm cable pulldown",
    "aliases": [
      "Cable lat pushdown",
      "Straight arm lat pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Triceps",
      "Core",
      "Teres major"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder extension",
    "trackingType": "weight_reps",
    "instructions": "Attach straight bar or rope to high pulley. Step back with slight forward hip hinge. With arms straight and elbows soft, sweep bar down in an arc to thighs, squeezing lats.",
    "mistakes": "Bending elbows into a triceps pushdown, using momentum.",
    "safetyTips": [
      "Keep elbows locked in slight fixed bend throughout movement."
    ],
    "variationGroupId": "var_lat_pullover",
    "alternativeExerciseIds": [
      "ex_dumbbell_pullover",
      "ex_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_pullover",
    "name": "Dumbbell pullover",
    "aliases": [
      "DB pullover",
      "Cross-bench pullover"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Serratus"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder extension",
    "trackingType": "weight_reps",
    "instructions": "Lie across flat bench with only upper back supported, hips lowered. Cup dumbbell under top plate. Lower dumbbell back over head in smooth arc until lats stretch deeply, then pull back over chest.",
    "mistakes": "Bending elbows into a skull crusher, overstretching shoulders beyond active range.",
    "safetyTips": [
      "Keep hips low to maximize lat stretch and stabilize spine."
    ],
    "variationGroupId": "var_lat_pullover",
    "alternativeExerciseIds": [
      "ex_straight_arm_cable_pulldown",
      "ex_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_close_grip_lat_pulldown",
    "name": "Close-grip V-bar lat pulldown",
    "aliases": [
      "V-bar pulldown",
      "Triangle grip pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Attach V-bar handle to pulldown cable. Lean back slightly, pull attachment down to upper sternum driving elbows down, and return with control to full stretch.",
    "mistakes": "Rocking backwards to momentum-pull, pulling down to stomach.",
    "safetyTips": [
      "Control the eccentric stretch at the top of each rep."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_neutral_grip_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_wide_grip_cable_row",
    "name": "Wide-grip seated cable row",
    "aliases": [
      "Wide seated row",
      "Lat spread cable row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Rear delts",
      "Traps",
      "Lats"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Attach wide lat bar to low cable row. Take overhand wide grip. Pull bar towards sternum with elbows flared wide at 60-70 degrees to target mid traps and rhomboids.",
    "mistakes": "Shrugging shoulders into ears, pulling with narrow elbows.",
    "safetyTips": [
      "Retract shoulder blades actively at contraction."
    ],
    "variationGroupId": "var_seated_row",
    "alternativeExerciseIds": [
      "ex_seated_cable_row",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_face_pull",
    "name": "Cable face pull",
    "aliases": [
      "Rope face pull",
      "Rear delt face pull"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Traps",
      "Rotator cuff",
      "Upper back"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Set rope attachment at eye height. Grip rope with thumbs pointing backward. Step back, pull rope towards forehead while rotating hands back and flaring elbows high. Squeeze rear delts.",
    "mistakes": "Pulling to chin instead of eyes, leaning back heavily, using too much weight.",
    "safetyTips": [
      "Crucial exercise for shoulder health and posture; focus on external rotation."
    ],
    "variationGroupId": "var_face_pull",
    "alternativeExerciseIds": [
      "ex_reverse_pec_deck",
      "ex_band_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_shrug",
    "name": "Barbell shrug",
    "aliases": [
      "Trap shrug",
      "Heavy BB shrug"
    ],
    "category": "pull",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular elevation",
    "trackingType": "weight_reps",
    "instructions": "Hold barbell in front of thighs with shoulder-width grip. Elevate shoulders straight up towards ears as high as possible, pause 1 second at top, then lower with control.",
    "mistakes": "Rolling shoulders in circles (injures rotator cuff), bending elbows to lift bar.",
    "safetyTips": [
      "Move strictly vertically straight up and down; never roll shoulders."
    ],
    "variationGroupId": "var_shrugs",
    "alternativeExerciseIds": [
      "ex_dumbbell_shrug",
      "ex_smith_machine_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_shrug",
    "name": "Dumbbell shrug",
    "aliases": [
      "DB shrugs"
    ],
    "category": "pull",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular elevation",
    "trackingType": "weight_reps",
    "instructions": "Hold dumbbells at sides with neutral grip. Shrug shoulders straight up towards ears, hold peak contraction for 1-2 seconds, and lower smoothly.",
    "mistakes": "Using head craning to fake height, using momentum.",
    "safetyTips": [
      "Keep arms relaxed like ropes; only traps should contract."
    ],
    "variationGroupId": "var_shrugs",
    "alternativeExerciseIds": [
      "ex_barbell_shrug",
      "ex_trap_bar_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_trap_bar_shrug",
    "name": "Trap bar shrug",
    "aliases": [
      "Hex bar shrug"
    ],
    "category": "pull",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Trap bar",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Scapular elevation",
    "trackingType": "weight_reps",
    "instructions": "Step inside trap bar and grip neutral handles. Stand tall, elevate shoulders straight towards ears, hold peak squeeze, and lower slowly.",
    "mistakes": "Bending knees to bounce weight up.",
    "safetyTips": [
      "Neutral handles eliminate thigh friction for optimal trap loading."
    ],
    "variationGroupId": "var_shrugs",
    "alternativeExerciseIds": [
      "ex_dumbbell_shrug",
      "ex_barbell_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_shrug",
    "name": "Smith machine shrug",
    "aliases": [
      "Smith shrug"
    ],
    "category": "pull",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular elevation",
    "trackingType": "weight_reps",
    "instructions": "Unhook bar at thigh height. Shrug vertically along the fixed track, squeeze traps at apex, and lower under control.",
    "mistakes": "Leaning excessively on bar.",
    "safetyTips": [
      "Keep bar close to body."
    ],
    "variationGroupId": "var_shrugs",
    "alternativeExerciseIds": [
      "ex_barbell_shrug",
      "ex_dumbbell_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_deadlift",
    "name": "Conventional barbell deadlift",
    "aliases": [
      "Deadlift",
      "Conventional deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Traps",
      "Lats",
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "3-6",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Feet hip-width with barbell over mid-foot. Hinge at hips, grip bar outside shins, pull chest tall, brace core, and pull bar up in vertical line dragging against shins to full hip lockout.",
    "mistakes": "Rounding lower back, allowing bar to drift forward away from shins, hyperextending at lockout.",
    "safetyTips": [
      "Never pull with a rounded lumbar spine. Engage lats before breaking floor."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_trap_bar_deadlift",
      "ex_sumo_deadlift",
      "ex_barbell_rack_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_sumo_deadlift",
    "name": "Sumo barbell deadlift",
    "aliases": [
      "Sumo deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Lower back",
      "Hamstrings",
      "Adductors",
      "Traps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "3-6",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Wide stance with toes pointed out towards plates. Grip bar inside knees with arms straight down. Keep torso more upright than conventional, drive through floor, and lock out hips.",
    "mistakes": "Hips shooting up before chest, knees collapsing inward.",
    "safetyTips": [
      "Keep knees tracking strictly over toes."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_barbell_deadlift",
      "ex_trap_bar_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_trap_bar_deadlift",
    "name": "Trap bar deadlift (hex bar)",
    "aliases": [
      "Hex bar deadlift",
      "Trap bar pull"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes",
      "Hamstrings",
      "Traps"
    ],
    "equipment": "Trap bar",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand centered inside trap bar. Hinge down and grip neutral handles. Push the floor away through mid-foot, driving hips forward into lockout.",
    "mistakes": "Squatting too deep instead of hinging, losing spinal neutrality.",
    "safetyTips": [
      "Significantly reduces shear stress on lumbar spine compared to straight barbell."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_barbell_deadlift",
      "ex_barbell_rack_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_rack_pull",
    "name": "Barbell rack pull",
    "aliases": [
      "Rack deadlift",
      "Block pull"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Traps",
      "Lower back",
      "Glutes",
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Set safety pins in rack just below knee level. Hinge down, grip bar, pack lats, and pull bar up locking hips cleanly.",
    "mistakes": "Bouncing bar hard off pins, leaning back excessively at top.",
    "safetyTips": [
      "Focus on lat and trap tension without hyperextending spine."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_barbell_deadlift",
      "ex_trap_bar_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_back_hyperextension",
    "name": "45-degree back extension",
    "aliases": [
      "Hyperextension",
      "Back raise"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Hip hinge",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Position hips against pad with ankles secured in rollers. Fold torso down at hips with neutral spine, then raise body until aligned with legs. Squeeze glutes and erectors.",
    "mistakes": "Hyperextending spine backwards past straight line, jerking with neck.",
    "safetyTips": [
      "Stop extension when torso aligns straight with legs."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_barbell_good_morning",
      "ex_superman_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_back_extension",
    "name": "Weighted 45-degree back extension",
    "aliases": [
      "Weighted hyperextension"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "usesBodyweight": true,
    "instructions": "Hold weight plate across chest. Hinge forward at waist, then contract glutes and hamstrings to lift torso back in line with thighs.",
    "mistakes": "Holding plate away from chest creating awkward lever on neck.",
    "safetyTips": [
      "Secure plate tight against chest sternum."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_barbell_good_morning"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_good_morning",
    "name": "Barbell good morning",
    "aliases": [
      "Good mornings",
      "BB good morning"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Rest bar across upper traps. With soft knees, push hips backward hinging torso forward until parallel to floor with flat back. Drive hips forward to stand.",
    "mistakes": "Rounding lumbar spine, turning into a squat by bending knees excessively.",
    "safetyTips": [
      "Always perform in power rack with safety bars set at waist level."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_inverted_row",
    "name": "Inverted bodyweight row",
    "aliases": [
      "Australian pull-up",
      "Bar horizontal row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Biceps",
      "Rear delts",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Set barbell in rack at waist height. Hang underneath with heels on floor and body in rigid straight plank. Pull chest up to touch bar, then lower slowly.",
    "mistakes": "Hips sagging towards floor, pulling to neck instead of sternum.",
    "safetyTips": [
      "Keep core and glutes engaged to maintain plank integrity."
    ],
    "variationGroupId": "var_bodyweight_row",
    "alternativeExerciseIds": [
      "ex_seated_cable_row",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_inverted_row_feet_elevated",
    "name": "Inverted row (feet elevated)",
    "aliases": [
      "Elevated Australian pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Biceps",
      "Rear delts",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place heels on bench with body horizontal under bar. Pull chest to bar, squeeze rhomboids, and lower with control.",
    "mistakes": "Losing core stiffness and letting hips drop.",
    "safetyTips": [
      "Ensure bench is weighted and stable."
    ],
    "variationGroupId": "var_bodyweight_row",
    "alternativeExerciseIds": [
      "ex_inverted_row",
      "ex_barbell_bent_over_row"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_meadows_row",
    "name": "Meadows row",
    "aliases": [
      "Landmine Meadows row",
      "Single-arm landmine row"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Upper back",
      "Rear delts",
      "Biceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand perpendicular to landmine barbell. Hinge over and grip thick collar end with overhand grip. Row elbow up and back towards hip, squeezing lat.",
    "mistakes": "Excessive torso rotation, standing too upright.",
    "safetyTips": [
      "Use lifting strap if grip fails on thick barbell collar."
    ],
    "variationGroupId": "var_dumbbell_row",
    "alternativeExerciseIds": [
      "ex_single_arm_dumbbell_row",
      "ex_single_arm_cable_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_seal_row",
    "name": "Barbell seal row",
    "aliases": [
      "Bench seal row",
      "Cambered seal row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Rear delts",
      "Biceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Lie prone on elevated high horizontal bench with bar underneath. Grip bar and row up until it contacts bench underside. Squeeze upper back and lower.",
    "mistakes": "Kicking legs or lifting chest off bench.",
    "safetyTips": [
      "Strict isolation that eliminates all cheating and lower back momentum."
    ],
    "variationGroupId": "var_chest_supported_row",
    "alternativeExerciseIds": [
      "ex_chest_supported_row",
      "ex_chest_supported_t_bar_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_lat_pulldown",
    "name": "Single-arm cable lat pulldown",
    "aliases": [
      "One-arm pulldown",
      "Unilateral lat pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Rear delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Attach single D-handle to high pulley. Kneel or sit sideways. Drive elbow down tight to hip in frontal plane, getting maximal lat contraction.",
    "mistakes": "Side bending excessively at waist.",
    "safetyTips": [
      "Focus on driving elbow towards pocket."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_single_arm_cable_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kneeling_cable_lat_pulldown",
    "name": "Half-kneeling cable lat pulldown",
    "aliases": [
      "Kneeling lat pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Core"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Kneel on floor facing high pulley. Brace abs and pull handle down in diagonal path to upper chest, pinching lats.",
    "mistakes": "Arching low back excessively.",
    "safetyTips": [
      "Place mat under knees for comfort."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_single_arm_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_lat_pulldown",
    "name": "Plate-loaded machine lat pulldown",
    "aliases": [
      "Hammer strength lat pulldown",
      "Iso-lateral pulldown"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Adjust thigh pad. Grip handles, sit down, and pull handles downward along diverging arc. Squeeze lats at bottom and return smoothly.",
    "mistakes": "Letting weight stack or plates crash at top.",
    "safetyTips": [
      "Ensure seat height allows full elbow extension without rising from seat."
    ],
    "variationGroupId": "var_lat_pulldown",
    "alternativeExerciseIds": [
      "ex_lat_pulldown",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_row",
    "name": "Machine seated row",
    "aliases": [
      "Leverage row machine",
      "Plate loaded seated row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Biceps",
      "Rear delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Adjust seat and chest pad so handles align with lower chest. Pull handles back, squeezing shoulder blades together, then return slowly.",
    "mistakes": "Lifting off chest pad to heave weight.",
    "safetyTips": [
      "Keep chest firmly against pad throughout repetition."
    ],
    "variationGroupId": "var_seated_row",
    "alternativeExerciseIds": [
      "ex_seated_cable_row",
      "ex_chest_supported_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_renegade_row",
    "name": "Dumbbell renegade row",
    "aliases": [
      "Plank row",
      "Push-up renegade row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Core",
      "Lats",
      "Rear delts",
      "Chest"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "advanced",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Start in top push-up position holding two hex dumbbells on floor with feet wide. Row one dumbbell to hip while resisting hip rotation. Lower and alternate.",
    "mistakes": "Rocking and rotating hips excessively from side to side.",
    "safetyTips": [
      "Keep feet wider than hip-width to provide stability base."
    ],
    "variationGroupId": "var_dumbbell_row",
    "alternativeExerciseIds": [
      "ex_single_arm_dumbbell_row",
      "ex_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_band_pull_apart",
    "name": "Resistance band pull-apart",
    "aliases": [
      "Band pullaparts",
      "Banded rear delt pull"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Traps",
      "Rhomboids"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Horizontal abduction",
    "trackingType": "weight_reps",
    "instructions": "Hold resistance band in front of chest with arms extended. Pull band apart horizontally until it touches sternum, squeezing shoulder blades. Return slowly.",
    "mistakes": "Bending elbows into a row, shrugging shoulders up.",
    "safetyTips": [
      "Keep arms extended with soft elbows; focus on scapular retraction."
    ],
    "variationGroupId": "var_face_pull",
    "alternativeExerciseIds": [
      "ex_face_pull",
      "ex_reverse_pec_deck"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_face_pull",
    "name": "Resistance band face pull",
    "aliases": [
      "Banded face pull"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Rotator cuff",
      "Traps"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Anchor band at face height. Grip band with palms facing down or neutral. Step back into tension and pull hands towards temples with elbows high.",
    "mistakes": "Leaning back, dropping elbows.",
    "safetyTips": [
      "Excellent postural prehab exercise."
    ],
    "variationGroupId": "var_face_pull",
    "alternativeExerciseIds": [
      "ex_face_pull",
      "ex_band_pull_apart"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_superman_hold",
    "name": "Superman hold",
    "aliases": [
      "Prone superman",
      "Back extension hold"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Glutes",
      "Upper back"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-40s",
    "difficulty": "beginner",
    "movementPattern": "Spinal extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Lie prone on floor with arms and legs extended. Simultaneously lift chest, arms, and thighs off floor engaging back and glutes. Hold position statically.",
    "mistakes": "Holding breath, hyperextending neck upwards.",
    "safetyTips": [
      "Gaze down towards floor to maintain neutral cervical spine."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_bird_dog"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_bird_dog",
    "name": "Bird dog",
    "aliases": [
      "Quadruped arm opposite leg reach"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Spinal extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "On hands and knees with neutral spine. Simultaneously reach right arm forward and left leg backward until parallel to floor. Hold 1 second, return and alternate.",
    "mistakes": "Sagging lower back, tilting pelvis sideways.",
    "safetyTips": [
      "Do not kick leg higher than hip height to prevent lumbar arching."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_superman_hold",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_scapular_pull_up",
    "name": "Scapular pull-up",
    "aliases": [
      "Scap pullup",
      "Active hang pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Traps"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular depression",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from pull-up bar with arms straight. Without bending elbows, pull shoulder blades down and together to elevate torso 2-3 inches. Pause and lower back to passive hang.",
    "mistakes": "Bending elbows into a regular pull-up, swinging legs.",
    "safetyTips": [
      "Builds fundamental scapular depression strength for pull-ups."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_prone_y_raise",
    "name": "Prone incline Y-raise",
    "aliases": [
      "Y-raise",
      "Lower trap raise"
    ],
    "category": "pull",
    "primaryMuscle": "Lower traps",
    "secondaryMuscles": [
      "Rear delts",
      "Upper back"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular upward rotation",
    "trackingType": "weight_reps",
    "instructions": "Lie prone on 30-degree incline bench with light dumbbells. With thumbs pointing up, raise arms diagonally at 45 degrees forming a Y shape. Squeeze lower traps and lower.",
    "mistakes": "Going too heavy, shrugging upper traps towards ears.",
    "safetyTips": [
      "Use very light 1kg-3kg dumbbells; focuses on small postural stabilizers."
    ],
    "variationGroupId": "var_face_pull",
    "alternativeExerciseIds": [
      "ex_face_pull",
      "ex_band_pull_apart"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_prone_t_raise",
    "name": "Prone incline T-raise",
    "aliases": [
      "T-raise",
      "Mid trap raise"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Rear delts",
      "Rhomboids"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal abduction",
    "trackingType": "weight_reps",
    "instructions": "Lie chest-down on incline bench. Raise arms straight out to sides perpendicular to torso with thumbs up, pinching mid-back shoulder blades together.",
    "mistakes": "Jerking weights with lower back momentum.",
    "safetyTips": [
      "Control the downward descent smoothly."
    ],
    "variationGroupId": "var_face_pull",
    "alternativeExerciseIds": [
      "ex_prone_y_raise",
      "ex_reverse_pec_deck"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_gorilla_row",
    "name": "Kettlebell gorilla row",
    "aliases": [
      "Double kettlebell gorilla row"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lats",
      "Core",
      "Biceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place two kettlebells on floor between feet in deep hip hinge. Grip both handles. Push one bell into floor while vigorously rowing the other to hip. Alternate rhythmically.",
    "mistakes": "Rounding lower back, standing up between reps.",
    "safetyTips": [
      "Keep hips locked low in athletic hinge position."
    ],
    "variationGroupId": "var_dumbbell_row",
    "alternativeExerciseIds": [
      "ex_single_arm_dumbbell_row",
      "ex_barbell_bent_over_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_kayak_row",
    "name": "Cable kayak row",
    "aliases": [
      "Kayak row",
      "Straight bar kayak"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Obliques",
      "Biceps"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotational pull",
    "trackingType": "weight_reps",
    "instructions": "Attach straight bar to high pulley. Grip like a kayak paddle. Sweep down diagonally past one hip, then loop up and sweep past opposite hip in fluid paddling motion.",
    "mistakes": "Rushing without full lat contraction.",
    "safetyTips": [
      "Maintain stable foot base."
    ],
    "variationGroupId": "var_lat_pullover",
    "alternativeExerciseIds": [
      "ex_straight_arm_cable_pulldown",
      "ex_lat_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_snatch_grip_deadlift",
    "name": "Snatch-grip barbell deadlift",
    "aliases": [
      "Wide grip deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Lower back",
      "Hamstrings",
      "Traps",
      "Lats"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Take wide snatch grip on barbell. Deepen hip hinge to reach bar. Drive through floor keeping upper back tight. Extra depth dramatically loads upper back and glutes.",
    "mistakes": "Upper back rounding under wide grip.",
    "safetyTips": [
      "Use straps if grip limits upper back loading."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_barbell_deadlift",
      "ex_barbell_rack_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_landmine_row",
    "name": "Single-arm landmine row",
    "aliases": [
      "Landmine one arm row"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Upper back",
      "Biceps",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand straddling barbell sleeve. Hinge forward and grip end of bar. Pull elbow back towards ribcage, squeezing lat. Lower to full stretch.",
    "mistakes": "Standing up too straight.",
    "safetyTips": [
      "Brace non-working hand on knee for lower back support."
    ],
    "variationGroupId": "var_dumbbell_row",
    "alternativeExerciseIds": [
      "ex_meadows_row",
      "ex_single_arm_dumbbell_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_lat_prayer",
    "name": "Kneeling cable lat prayer",
    "aliases": [
      "Lat prayer",
      "Kneeling pullover"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Core",
      "Teres major"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder extension",
    "trackingType": "weight_reps",
    "instructions": "Kneel in front of cable stack with rope attachment. Start with hips back and arms overhead in prayer position. Drive elbows downward and back towards hips, flexing lats intensely.",
    "mistakes": "Bending elbows into triceps extension.",
    "safetyTips": [
      "Deep lat stretch at top and massive contraction at bottom."
    ],
    "variationGroupId": "var_lat_pullover",
    "alternativeExerciseIds": [
      "ex_straight_arm_cable_pulldown",
      "ex_dumbbell_pullover"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_shrug",
    "name": "Cable shrug",
    "aliases": [
      "Low cable shrug",
      "Dual cable shrug"
    ],
    "category": "pull",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular elevation",
    "trackingType": "weight_reps",
    "instructions": "Stand between two low pulleys holding handles. Shrug shoulders up and slightly back against the outward angle of the cables.",
    "mistakes": "Bending arms, rolling shoulders.",
    "safetyTips": [
      "Cable angle aligns well with diagonal upper trap muscle fibers."
    ],
    "variationGroupId": "var_shrugs",
    "alternativeExerciseIds": [
      "ex_dumbbell_shrug",
      "ex_barbell_shrug"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_jefferson_curl",
    "name": "Jefferson curl",
    "aliases": [
      "Segmental spinal flexion deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Spinal flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand on box holding light barbell or kettlebell. Roll down one vertebra at a time from neck down into full spinal flexion below feet, then reverse segment by segment.",
    "mistakes": "Using heavy weight, rushing the movement.",
    "safetyTips": [
      "Must be performed with very light weight to build spinal tissue resilience."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_superman_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_db_shoulder_press",
    "name": "Seated dumbbell shoulder press",
    "aliases": [
      "DB overhead press",
      "Seated DB press",
      "Dumbbell shoulder press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Side delts",
      "Upper chest"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit upright with back supported. Start with dumbbells at ear height, elbows under wrists. Press overhead without arching the lower back excessively. Lower with control.",
    "mistakes": "Excessive low-back arch, pressing in front of the body, locking out with a shrug.",
    "safetyTips": [
      "Keep ribs pinned down and core engaged throughout the press."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_standing_overhead_press",
      "ex_machine_shoulder_press",
      "ex_arnold_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_db_lateral_raise",
    "name": "Dumbbell lateral raise",
    "aliases": [
      "Side lateral raise",
      "DB side raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Slight forward lean, small elbow bend. Raise the dumbbells out and up to shoulder height, leading with the elbows. Lower slowly to your sides.",
    "mistakes": "Swinging with momentum, shrugging the traps, raising far above shoulder height, going too heavy.",
    "safetyTips": [
      "Keep movement strictly controlled and avoid using hip drive."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_cable_lateral_raise",
      "ex_machine_lateral_raise",
      "ex_seated_dumbbell_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_lateral_raise",
    "name": "Cable lateral raise",
    "aliases": [
      "Single arm cable side raise",
      "Cable side lateral"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand side-on to a low pulley, handle in the outside hand. Raise the arm out to shoulder height with a soft elbow, then lower under control. Repeat for both sides.",
    "mistakes": "Leaning away to cheat the weight, using the torso to swing, letting the cable pull the arm down fast.",
    "safetyTips": [
      "Keep constant tension by stopping just before the weight stack touches down."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_behind_back_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_machine_shoulder_press",
    "name": "Machine shoulder press",
    "aliases": [
      "Overhead press machine",
      "Leverage shoulder press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Side delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Adjust seat height so handles sit at collarbone level. Press up smoothly until arms are overhead, then lower under control without letting the weights slam.",
    "mistakes": "Seat set too low causing excessive shoulder flexion at bottom, arching spine off backrest.",
    "safetyTips": [
      "Keep back pressed firmly against backrest."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_standing_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_reverse_pec_deck",
    "name": "Reverse pec deck",
    "aliases": [
      "Rear delt fly machine",
      "Reverse fly machine"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Traps",
      "Rhomboids"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal abduction",
    "trackingType": "weight_reps",
    "instructions": "Sit facing the machine with chest against pad. Grip handles with arms straight and elbows soft. Fly arms out and back in a wide arc until hands align with shoulders. Squeeze rear delts and return under control.",
    "mistakes": "Bending elbows into a row, shrugging shoulders up, thrusting chest off the pad.",
    "safetyTips": [
      "Keep shoulders depressed down away from ears."
    ],
    "variationGroupId": "var_rear_delt_fly",
    "alternativeExerciseIds": [
      "ex_dumbbell_rear_delt_fly",
      "ex_face_pull",
      "ex_band_pull_apart"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_overhead_press",
    "name": "Standing barbell overhead press (OHP)",
    "aliases": [
      "Military press",
      "Strict press",
      "Barbell OHP"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Upper chest",
      "Core",
      "Traps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Stand tall with feet hip-width. Unrack bar at collarbone with hands just outside shoulders. Brace glutes and abs. Press bar straight up, pulling head back slightly to clear chin, then pushing head through window at top.",
    "mistakes": "Leaning back excessively into a standing incline press, bending knees to push press.",
    "safetyTips": [
      "Squeeze glutes tight to stabilize lumbar spine against hyperextension."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_barbell_overhead_press",
      "ex_seated_db_shoulder_press",
      "ex_push_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_barbell_overhead_press",
    "name": "Seated barbell overhead press",
    "aliases": [
      "Seated military press",
      "Seated OHP"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Upper chest"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit on upright bench inside power rack. Grip bar slightly wider than shoulder width. Lower bar smoothly to clavicle, then press overhead to lockout.",
    "mistakes": "Sliding hips forward on bench, flaring elbows straight out.",
    "safetyTips": [
      "Set safety pins at shoulder level."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_standing_overhead_press",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_arnold_press",
    "name": "Arnold press",
    "aliases": [
      "Dumbbell Arnold press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Side delts",
      "Triceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit on upright bench holding dumbbells at chest with palms facing you. As you press overhead, rotate palms outward until facing forward at the top. Reverse rotation as you lower.",
    "mistakes": "Jerking weights during rotation, banging weights together overhead.",
    "safetyTips": [
      "Use moderate weight; rotation requires good rotator cuff control."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_machine_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_push_press",
    "name": "Barbell push press",
    "aliases": [
      "Push press",
      "Power overhead press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Quadriceps",
      "Glutes",
      "Upper chest"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "4-6",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Rack bar on front delts. Dip knees 3-4 inches keeping torso upright, then explosively drive with legs and press bar overhead to full lockout.",
    "mistakes": "Dipping too deep into a squat, leaning forward on the dip.",
    "safetyTips": [
      "Absorb descent onto shoulders with a soft knee bend."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_standing_overhead_press",
      "ex_kettlebell_push_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_behind_neck_press",
    "name": "Behind-the-neck barbell press",
    "aliases": [
      "Behind neck OHP"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Front delts",
      "Triceps",
      "Traps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Take wide grip on barbell. Lower bar strictly to upper ear level behind neck with head upright. Press up smoothly.",
    "mistakes": "Dropping bar down onto cervical vertebra, lacking shoulder external rotation mobility.",
    "safetyTips": [
      "Only perform if shoulder external rotation mobility is completely pain-free."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_standing_overhead_press",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_dumbbell_lateral_raise",
    "name": "Seated dumbbell lateral raise",
    "aliases": [
      "Seated side lateral raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Sit on bench edge holding dumbbells at sides. Raise weights out to sides with slight forward angle until shoulder height. Lower under strict control.",
    "mistakes": "Using leg kick or torso swinging to lift weights.",
    "safetyTips": [
      "Eliminating leg drive enforces strict side delt recruitment."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_lateral_raise",
    "name": "Machine lateral raise",
    "aliases": [
      "Leverage lateral raise machine",
      "Side raise machine"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Sit with chest tall and pads resting against outer upper arms. Drive elbows up to shoulder level, pause 1 second, and lower with control.",
    "mistakes": "Shrugging shoulders into ears, pushing with wrists instead of elbows.",
    "safetyTips": [
      "Align shoulder joint axis directly with machine pivot point."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_behind_back_cable_lateral_raise",
    "name": "Behind-the-back cable lateral raise",
    "aliases": [
      "Behind back cable side raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Low pulley set behind body. Reach behind back with opposite hand to grip handle. Raise arm laterally out to shoulder height with continuous stretch tension at bottom.",
    "mistakes": "Twisting torso, using body momentum.",
    "safetyTips": [
      "Provides exceptional stretch tension at the bottom of the movement."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_cable_lateral_raise",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_incline_dumbbell_lateral_raise",
    "name": "Incline bench dumbbell lateral raise",
    "aliases": [
      "Leaning side lateral raise",
      "Incline lateral raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie sideways on 45-degree incline bench. Hold dumbbell in top hand resting across hip. Raise arm vertically up to 90 degrees with side delt tension.",
    "mistakes": "Swinging weight off hip, rotating arm into internal rotation.",
    "safetyTips": [
      "Puts maximal tension at the initial stretch phase."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_cable_lateral_raise",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_front_raise",
    "name": "Dumbbell front raise",
    "aliases": [
      "DB front raise",
      "Alternating front raise"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper chest",
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand tall with dumbbells in front of thighs. Raise weights forward and up to eye level with soft elbows, pause, and lower under control.",
    "mistakes": "Leaning torso back and swinging weights, raising arms overhead.",
    "safetyTips": [
      "Keep core braced to prevent spinal extension."
    ],
    "variationGroupId": "var_front_raise",
    "alternativeExerciseIds": [
      "ex_barbell_front_raise",
      "ex_cable_front_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_front_raise",
    "name": "Barbell front raise",
    "aliases": [
      "BB front raise",
      "Straight bar front raise"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper chest"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold barbell with overhand shoulder-width grip at thighs. Raise bar forward and up to shoulder height, pause 1 second, and lower with control.",
    "mistakes": "Using hip momentum to heave bar, hyperextending low back.",
    "safetyTips": [
      "Use light weight with strict tempo."
    ],
    "variationGroupId": "var_front_raise",
    "alternativeExerciseIds": [
      "ex_dumbbell_front_raise",
      "ex_plate_front_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_plate_front_raise",
    "name": "Weight plate front raise",
    "aliases": [
      "Plate raise",
      "Steering wheel plate raise"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper chest",
      "Side delts",
      "Forearms"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold weight plate at 9 and 3 o-clock positions. Raise plate forward until looking through the center hole, pause, and lower slowly.",
    "mistakes": "Arching back, dropping plate quickly.",
    "safetyTips": [
      "Maintain firm grip on plate edges."
    ],
    "variationGroupId": "var_front_raise",
    "alternativeExerciseIds": [
      "ex_dumbbell_front_raise",
      "ex_cable_front_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_front_raise",
    "name": "Cable front raise",
    "aliases": [
      "Low cable front raise",
      "Rope cable front raise"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper chest"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder flexion",
    "trackingType": "weight_reps",
    "instructions": "Straddle low pulley facing away with handle between legs. Raise handle forward and up to eye level, maintaining continuous cable tension.",
    "mistakes": "Swinging torso, bending elbows.",
    "safetyTips": [
      "Cable provides constant resistance throughout the arc."
    ],
    "variationGroupId": "var_front_raise",
    "alternativeExerciseIds": [
      "ex_dumbbell_front_raise",
      "ex_plate_front_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_rear_delt_fly",
    "name": "Bent-over dumbbell rear delt fly",
    "aliases": [
      "Bent-over DB fly",
      "Rear lateral raise"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Traps",
      "Rhomboids"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal abduction",
    "trackingType": "weight_reps",
    "instructions": "Hinge forward at hips until torso is nearly parallel to floor. With soft elbows, raise dumbbells out to sides squeezing back of shoulders. Lower with control.",
    "mistakes": "Standing too upright (turns into lateral raise), yanking weights with traps.",
    "safetyTips": [
      "Keep neck neutral looking down at floor."
    ],
    "variationGroupId": "var_rear_delt_fly",
    "alternativeExerciseIds": [
      "ex_reverse_pec_deck",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_rear_delt_fly",
    "name": "Cable rear delt fly (cross-body)",
    "aliases": [
      "Cross cable rear delt fly",
      "Cable reverse fly"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Traps",
      "Rhomboids"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal abduction",
    "trackingType": "weight_reps",
    "instructions": "Set pulleys at shoulder height without attachments. Cross arms to grab opposite cables. Stand tall and open arms wide horizontally, squeezing rear delts.",
    "mistakes": "Bending elbows into a row, letting cables slap at return.",
    "safetyTips": [
      "No attachments needed; grab bare cable carabiners for smooth mechanics."
    ],
    "variationGroupId": "var_rear_delt_fly",
    "alternativeExerciseIds": [
      "ex_reverse_pec_deck",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_upright_row",
    "name": "Barbell upright row",
    "aliases": [
      "BB upright row",
      "Wide-grip upright row"
    ],
    "category": "pull",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps",
      "Biceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Grip bar with hands shoulder-width apart (avoid narrow grip). Pull bar straight up chest leading with elbows until elbows reach shoulder height. Lower slowly.",
    "mistakes": "Grip too narrow (causes shoulder impingement), pulling higher than chest level.",
    "safetyTips": [
      "Use wide grip (shoulder width or wider) and stop at sternum level to protect shoulder joints."
    ],
    "variationGroupId": "var_upright_row",
    "alternativeExerciseIds": [
      "ex_cable_upright_row",
      "ex_dumbbell_upright_row",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_upright_row",
    "name": "Cable upright row",
    "aliases": [
      "Rope upright row",
      "Cable high pull"
    ],
    "category": "pull",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps",
      "Biceps"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Attach straight bar or rope to low pulley. Stand tall, pull attachment up towards chest leading with elbows, flare elbows out, and lower with control.",
    "mistakes": "Shrugging traps before delts engage, pulling too high.",
    "safetyTips": [
      "Rope attachment allows free wrist rotation."
    ],
    "variationGroupId": "var_upright_row",
    "alternativeExerciseIds": [
      "ex_barbell_upright_row",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_upright_row",
    "name": "Dumbbell upright row",
    "aliases": [
      "DB upright row"
    ],
    "category": "pull",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps",
      "Biceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Hold dumbbells in front of thighs. Pull weights upward along torso leading with elbows until dumbbells reach chest height. Lower under control.",
    "mistakes": "Using hip thrust to bounce weights up.",
    "safetyTips": [
      "Dumbbells allow wrists to adjust naturally during the pull."
    ],
    "variationGroupId": "var_upright_row",
    "alternativeExerciseIds": [
      "ex_cable_upright_row",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_landmine_shoulder_press",
    "name": "Half-kneeling landmine shoulder press",
    "aliases": [
      "Landmine overhead press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper chest",
      "Triceps",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Incline push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Kneel on one knee holding landmine bar at shoulder. Press upward and slightly forward in natural diagonal path. Lower with control.",
    "mistakes": "Arching low back, tilting head sideways.",
    "safetyTips": [
      "Friendly on stiff shoulders due to guided diagonal pressing arc."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_standing_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_overhead_press",
    "name": "Kettlebell overhead press",
    "aliases": [
      "KB press",
      "Single-arm kettlebell press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Side delts",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Clean kettlebell to rack position on chest. Press vertically upward while rotating forearm, finishing with bell stacked over shoulder with biceps by ear.",
    "mistakes": "Letting wrist bend backward, flaring elbow out early.",
    "safetyTips": [
      "Keep wrist locked straight in neutral alignment."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_standing_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_push_press",
    "name": "Kettlebell push press",
    "aliases": [
      "KB push press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Quadriceps",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "From kettlebell rack position, dip knees quickly and drive up with legs to assist the bell overhead to full lockout.",
    "mistakes": "Leaning sideways to push weight.",
    "safetyTips": [
      "Keep core braced on landing and lowering."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_push_press",
      "ex_kettlebell_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_handstand_push_up",
    "name": "Handstand push-up (against wall)",
    "aliases": [
      "HSPU",
      "Wall handstand pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Upper chest",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-10",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Kick up into handstand against sturdy wall. Lower body with controlled descent until head touches mat/floor gently with elbows tucked at 45 degrees. Press forcefully back to lockout.",
    "mistakes": "Flaring elbows straight out to 90 degrees, arching back excessively (banana back), dropping head hard on floor.",
    "safetyTips": [
      "Place mat under head for protection. Ensure wrist mobility is sufficient."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_pike_push_up",
      "ex_standing_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_pike_push_up",
    "name": "Pike push-up",
    "aliases": [
      "Pike pushup",
      "Downward dog pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Upper chest"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From push-up position, walk feet forward and pike hips high into inverted V. Lower head forward between hands, then press back up along diagonal line.",
    "mistakes": "Turning into standard push-up by lowering hips, flaring elbows.",
    "safetyTips": [
      "Keep hips high above shoulders to load vertical pressing musculature."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_handstand_push_up",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_feet_elevated_pike_push_up",
    "name": "Feet-elevated pike push-up",
    "aliases": [
      "Box pike pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Side delts"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place feet on bench or box and walk hands close until hips are stacked over shoulders. Lower head to floor, then press up into overhead lockout.",
    "mistakes": "Losing vertical torso angle, letting head crash.",
    "safetyTips": [
      "Great progressive milestone before full handstand push-ups."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_pike_push_up",
      "ex_handstand_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_lu_raise",
    "name": "Lu raise (full ROM lateral raise)",
    "aliases": [
      "Overhead lateral raise",
      "Lu Xiaojun lateral raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Hold light dumbbells at sides. Raise arms out in wide arc all the way overhead until dumbbells touch gently at top. Reverse arc with strict control.",
    "mistakes": "Using heavy weights, shrugging abruptly at bottom.",
    "safetyTips": [
      "Must use very light weights (2kg-5kg); trains full scapulohumeral rhythm."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_external_cable_shoulder_rotation",
    "name": "Cable shoulder external rotation",
    "aliases": [
      "Rotator cuff external rotation",
      "Standing cable rotator cuff"
    ],
    "category": "pull",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Rear delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "15-20 per side",
    "difficulty": "beginner",
    "movementPattern": "External rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Set pulley at elbow height. Tuck towel roll between elbow and ribs. Rotate forearm outward away from abdomen keeping elbow pinned at 90 degrees. Return slowly.",
    "mistakes": "Letting elbow drift away from torso, swinging with body.",
    "safetyTips": [
      "Essential rotator cuff stabilization movement."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_dumbbell_external_rotation",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_internal_cable_shoulder_rotation",
    "name": "Cable shoulder internal rotation",
    "aliases": [
      "Rotator cuff internal rotation"
    ],
    "category": "push",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "15-20 per side",
    "difficulty": "beginner",
    "movementPattern": "Internal rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Elbow pinned at 90 degrees at side. Rotate forearm inward across belly against cable resistance. Return slowly.",
    "mistakes": "Using chest momentum, drifting elbow.",
    "safetyTips": [
      "Use light pin setting."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_external_cable_shoulder_rotation",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_external_rotation",
    "name": "Side-lying dumbbell external rotation",
    "aliases": [
      "Side lying rotator cuff raise"
    ],
    "category": "pull",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Rear delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "beginner",
    "movementPattern": "External rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie on side with top elbow bent 90 degrees resting against ribcage. Rotate forearm upward against gravity, pause at top, and lower slowly.",
    "mistakes": "Lifting elbow off ribcage, rolling torso backward.",
    "safetyTips": [
      "Use light 1kg-3kg dumbbell."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_external_cable_shoulder_rotation",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cuban_press",
    "name": "Dumbbell Cuban press",
    "aliases": [
      "Cuban rotation and press"
    ],
    "category": "push",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Side delts",
      "Traps",
      "Front delts"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Rotational press",
    "trackingType": "weight_reps",
    "instructions": "Upright row dumbbells until elbows align with shoulders. Rotate forearms up to 90 degrees into high guard, then press overhead. Reverse step by step.",
    "mistakes": "Rushing through rotation, using heavy weights.",
    "safetyTips": [
      "Master each phase independently before combining."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_face_pull",
      "ex_arnold_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_scaption_raise",
    "name": "Dumbbell scaption raise",
    "aliases": [
      "Scapular plane raise",
      "Full can raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Front delts",
      "Supraspinatus"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Hold dumbbells with thumbs up. Raise arms diagonally at 30-45 degrees forward of the frontal plane (in scapular plane) to shoulder height. Lower slowly.",
    "mistakes": "Shrugging neck, flaring directly to sides.",
    "safetyTips": [
      "Most biomechanically natural plane for shoulder elevation with zero impingement risk."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_shoulder_press",
    "name": "Smith machine shoulder press",
    "aliases": [
      "Smith overhead press",
      "Smith seated press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Upper chest"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit on upright bench inside Smith machine with bar tracking just in front of face. Lower to chin height and press overhead to lockout.",
    "mistakes": "Sitting too far behind bar trajectory.",
    "safetyTips": [
      "Set safety stop pins at collarbone height."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_machine_shoulder_press",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kneeling_bottoms_up_kb_press",
    "name": "Half-kneeling bottoms-up kettlebell press",
    "aliases": [
      "Bottoms up press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Rotator cuff",
      "Forearms",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold kettlebell upside down with bell balanced above handle. Squeeze handle fiercely and press overhead keeping bell perfectly balanced.",
    "mistakes": "Loose grip causing bell to flip, rushing.",
    "safetyTips": [
      "Stay alert to catch bell if balance wobbles."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_kettlebell_overhead_press",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_landmine_lateral_raise",
    "name": "Landmine lateral raise",
    "aliases": [
      "Single arm landmine side raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand sideways to landmine sleeve. Grip barbell tip with outside hand and sweep arm out and up in a natural curved arc to shoulder height.",
    "mistakes": "Twisting torso to throw weight.",
    "safetyTips": [
      "Fixed pivot provides unique tension curve across side delts."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_cable_lateral_raise",
      "ex_db_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_band_overhead_press",
    "name": "Resistance band overhead press",
    "aliases": [
      "Banded OHP",
      "Band shoulder press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Side delts"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Stand on center of loop band with feet hip-width. Hold handles at shoulders and press overhead to full lockout against progressive elastic tension.",
    "mistakes": "Arching low back, letting band pull arms down abruptly.",
    "safetyTips": [
      "Step with one foot to reduce band tension if too stiff."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_lateral_raise",
    "name": "Resistance band lateral raise",
    "aliases": [
      "Banded side raise"
    ],
    "category": "push",
    "primaryMuscle": "Side delts",
    "secondaryMuscles": [
      "Traps"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Shoulder abduction",
    "trackingType": "weight_reps",
    "instructions": "Stand on band with one foot. Hold handles at sides with soft elbows. Raise arms out to sides until parallel to floor, pause at peak resistance, and lower slowly.",
    "mistakes": "Jerking with traps at start of pull.",
    "safetyTips": [
      "Focus on slow controlled eccentric descent."
    ],
    "variationGroupId": "var_lateral_raise",
    "alternativeExerciseIds": [
      "ex_db_lateral_raise",
      "ex_cable_lateral_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_rear_delt_row_cable",
    "name": "Cable wide rear delt row",
    "aliases": [
      "High cable rear delt row"
    ],
    "category": "pull",
    "primaryMuscle": "Rear delts",
    "secondaryMuscles": [
      "Upper back",
      "Traps"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Horizontal pull",
    "trackingType": "weight_reps",
    "instructions": "Set cable at chest height with wide bar. Row bar to upper chest keeping elbows flared at 90 degrees to isolate posterior delts.",
    "mistakes": "Tucking elbows to ribs (shifts focus to lats).",
    "safetyTips": [
      "Maintain high elbow line throughout pull."
    ],
    "variationGroupId": "var_rear_delt_fly",
    "alternativeExerciseIds": [
      "ex_reverse_pec_deck",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_w_raise",
    "name": "Prone incline dumbbell W-raise",
    "aliases": [
      "W-raise",
      "Rotator cuff W raise"
    ],
    "category": "pull",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Rear delts",
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "External rotation",
    "trackingType": "weight_reps",
    "instructions": "Lie prone on 30-degree incline bench. Hold light dumbbells with elbows bent at 90 degrees forming a W shape. Rotate forearms up until hands align with head.",
    "mistakes": "Using heavy weights, dropping elbows.",
    "safetyTips": [
      "Outstanding postural correction exercise."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_external_cable_shoulder_rotation",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_clean_and_press",
    "name": "Barbell clean and press",
    "aliases": [
      "Clean and strict press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Upper back",
      "Hamstrings",
      "Glutes",
      "Triceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "4-6",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Clean barbell from floor to clavicle rack position in one fluid athletic pull. Pause, reset breath, and press bar overhead to lockout.",
    "mistakes": "Pressing while still recovering from clean balance.",
    "safetyTips": [
      "Ensure full control of front rack before initiating overhead press."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_standing_overhead_press",
      "ex_push_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_dumbbell_clean_and_press",
    "name": "Seated dumbbell clean and press",
    "aliases": [
      "Seated DB power clean and press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Side delts",
      "Triceps",
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit on bench with dumbbells hanging at sides. Clean weights up to shoulders using arm swing, then immediately press overhead.",
    "mistakes": "Slouching spine.",
    "safetyTips": [
      "Keep lower back supported."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_seated_db_shoulder_press",
      "ex_arnold_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_dumbbell_snatch",
    "name": "Single-arm dumbbell snatch",
    "aliases": [
      "DB power snatch"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Traps",
      "Core"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "6-8 per side",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place dumbbell between feet. Hinge down, grip dumbbell, and explosively jump hips forward, pulling dumbbell close to torso and catching overhead with locked arm.",
    "mistakes": "Swinging dumbbell out wide like a kettlebell swing.",
    "safetyTips": [
      "Keep weight close to body zip line."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_push_press",
      "ex_kettlebell_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_biceps_curl",
    "name": "Dumbbell biceps curl",
    "aliases": [
      "Standing DB curl",
      "Alternating dumbbell curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Brachialis"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand tall with dumbbells at your sides. Curl the weights up while supinating (turning palms up) until dumbbells reach shoulder level. Squeeze biceps at the top, then lower with control.",
    "mistakes": "Swinging with the hips, letting elbows drift far forward, dropping weights quickly without control.",
    "safetyTips": [
      "Keep elbows pinned to your sides to keep tension strictly on the biceps."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_ez_bar_curl",
      "ex_hammer_curl",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_hammer_curl",
    "name": "Dumbbell hammer curl",
    "aliases": [
      "Neutral grip curl",
      "DB hammer curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold dumbbells with neutral palms-facing grip. Curl weights up towards shoulders without rotating wrists. Lower smoothly to full extension.",
    "mistakes": "Using torso lean, swinging both arms simultaneously without control.",
    "safetyTips": [
      "Heavier loads are manageable here due to brachialis and brachioradialis leverage."
    ],
    "variationGroupId": "var_hammer_curl",
    "alternativeExerciseIds": [
      "ex_rope_cable_hammer_curl",
      "ex_dumbbell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_ez_bar_curl",
    "name": "EZ-bar curl",
    "aliases": [
      "Cambered bar curl",
      "EZ bar biceps curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Brachialis"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Grip the cambered inner angles of the EZ bar. Stand tall, keep elbows pinned by your ribs, and curl the bar up in a smooth arc. Lower under full control to full arm extension.",
    "mistakes": "Rocking backwards to start the curl, leaning shoulders over bar at the top.",
    "safetyTips": [
      "Angled grip reduces wrist pronation strain compared to straight barbell."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_barbell_biceps_curl",
      "ex_dumbbell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_dumbbell_curl",
    "name": "Incline dumbbell curl",
    "aliases": [
      "Incline DB curl",
      "Seated incline curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Set bench to roughly 45-60 degrees. Lean back with arms hanging straight down behind torso. Curl dumbbells up without letting elbows drift forward, maximizing the long head stretch. Lower slowly.",
    "mistakes": "Lifting shoulders off the bench, swinging elbows forward.",
    "safetyTips": [
      "Places extreme stretch on the biceps long head; do not bounce out of the bottom."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_cable_bayesian_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_biceps_curl",
    "name": "Straight barbell biceps curl",
    "aliases": [
      "Barbell curl",
      "BB curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold straight barbell with underhand shoulder-width grip. Keeping elbows tight to sides, curl bar up to upper chest. Squeeze biceps hard, then lower under control.",
    "mistakes": "Using back extension to swing bar, flaring elbows wide.",
    "safetyTips": [
      "If straight bar causes wrist discomfort, switch to an EZ bar."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_ez_bar_curl",
      "ex_dumbbell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_preacher_curl_ez_bar",
    "name": "EZ-bar preacher curl",
    "aliases": [
      "Preacher curl",
      "Scott curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Brachialis"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Sit at preacher bench with armpits snug against the top pad. Grip EZ bar and lower under control until arms are almost fully extended. Curl up until forearms are vertical.",
    "mistakes": "Hyperextending elbows abruptly at bottom, standing up off seat.",
    "safetyTips": [
      "Never let elbows snap into hyperextension at bottom to prevent distal biceps tear."
    ],
    "variationGroupId": "var_preacher_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_preacher_curl",
      "ex_machine_preacher_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_preacher_curl",
    "name": "Single-arm dumbbell preacher curl",
    "aliases": [
      "One-arm DB preacher curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place one arm over preacher pad. Lower dumbbell under control, pause before full lockout, and curl back up squeezing biceps.",
    "mistakes": "Torso twisting to heave dumbbell.",
    "safetyTips": [
      "Keep upper arm flat against pad throughout rep."
    ],
    "variationGroupId": "var_preacher_curl",
    "alternativeExerciseIds": [
      "ex_preacher_curl_ez_bar",
      "ex_concentration_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_machine_preacher_curl",
    "name": "Machine preacher curl",
    "aliases": [
      "Biceps curl machine",
      "Leverage curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Adjust seat so armpits align with top of pad. Grip handles and curl smoothly towards shoulders. Lower under control without letting the weight stack slam.",
    "mistakes": "Lifting elbows off pad during curl.",
    "safetyTips": [
      "Keep shoulders back and chest up."
    ],
    "variationGroupId": "var_preacher_curl",
    "alternativeExerciseIds": [
      "ex_preacher_curl_ez_bar",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_concentration_curl",
    "name": "Dumbbell concentration curl",
    "aliases": [
      "Seated concentration curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Brachialis"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit on bench edge, legs spread. Brace back of elbow against inner thigh. Curl dumbbell up towards face with strict form and peak squeeze at top. Lower slowly.",
    "mistakes": "Swinging torso, lifting elbow off thigh support.",
    "safetyTips": [
      "Highest EMG activation for biceps brachii peak contraction."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_preacher_curl",
      "ex_spider_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_spider_curl",
    "name": "Chest-supported spider curl",
    "aliases": [
      "Spider curl",
      "Prone incline curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Brachialis"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Lie chest-down on incline bench. Let arms hang vertically holding EZ bar or dumbbells. Curl weights up without moving elbows, squeeze biceps hard at top.",
    "mistakes": "Swinging elbows back towards hips.",
    "safetyTips": [
      "Zero spinal momentum allowed."
    ],
    "variationGroupId": "var_preacher_curl",
    "alternativeExerciseIds": [
      "ex_preacher_curl_ez_bar",
      "ex_concentration_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_biceps_curl",
    "name": "Standing cable biceps curl",
    "aliases": [
      "Straight bar cable curl",
      "Low pulley curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Attach straight bar or EZ bar to low pulley. Stand tall, keep elbows pinned to sides, and curl bar up towards shoulders against constant cable tension.",
    "mistakes": "Leaning back, moving elbows forward.",
    "safetyTips": [
      "Maintains tension at top lockout unlike free barbell."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_ez_bar_curl",
      "ex_cable_bayesian_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_bayesian_curl",
    "name": "Bayesian cable curl (behind-the-back)",
    "aliases": [
      "Behind the back cable curl",
      "Face-away cable curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Face away from low pulley with handle in one hand behind torso. Step forward to create tension stretching the biceps long head. Curl handle forward and up.",
    "mistakes": "Letting shoulder shrug, leaning forward.",
    "safetyTips": [
      "Unmatched stretch-mediated hypertrophy for biceps."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_curl",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_high_cable_biceps_curl",
    "name": "High cable overhead biceps curl",
    "aliases": [
      "Hercules curl",
      "Dual cable biceps curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand centered between two high pulleys holding D-handles with arms outstretched in crucifix pose. Curl handles inward towards ears, flexing biceps peaked.",
    "mistakes": "Dropping elbows down, swinging torso.",
    "safetyTips": [
      "Keep upper arms parallel to floor throughout entire set."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_concentration_curl",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_rope_cable_hammer_curl",
    "name": "Rope cable hammer curl",
    "aliases": [
      "Cable rope hammer curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Attach rope to low pulley. Hold with neutral grip (thumbs up). Curl rope up, spreading ends slightly at the top. Lower smoothly.",
    "mistakes": "Rocking backwards, letting elbows flare out.",
    "safetyTips": [
      "Spreading the rope at the top maximizes peak squeeze."
    ],
    "variationGroupId": "var_hammer_curl",
    "alternativeExerciseIds": [
      "ex_hammer_curl",
      "ex_cross_body_hammer_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cross_body_hammer_curl",
    "name": "Cross-body dumbbell hammer curl",
    "aliases": [
      "Pinwheel curl",
      "Cross-body DB curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Brachioradialis",
      "Biceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold dumbbells at sides. Curl one dumbbell across chest towards opposite shoulder with neutral palm. Lower with control and switch sides.",
    "mistakes": "Twisting torso, using shoulder swing.",
    "safetyTips": [
      "Heavy emphasis on brachialis muscle pushing biceps up for arm thickness."
    ],
    "variationGroupId": "var_hammer_curl",
    "alternativeExerciseIds": [
      "ex_hammer_curl",
      "ex_reverse_grip_ez_bar_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_reverse_grip_ez_bar_curl",
    "name": "Reverse-grip EZ-bar curl",
    "aliases": [
      "Overhand EZ bar curl",
      "Reverse curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachioradialis",
    "secondaryMuscles": [
      "Forearms",
      "Brachialis",
      "Biceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Grip EZ bar with overhand (pronated) grip shoulder-width apart. Keep elbows tight to ribs and curl bar up to chest. Lower slowly.",
    "mistakes": "Wrists buckling under weight, flaring elbows wide.",
    "safetyTips": [
      "Use moderate weight to protect wrist extensors."
    ],
    "variationGroupId": "var_reverse_curl",
    "alternativeExerciseIds": [
      "ex_hammer_curl",
      "ex_wrist_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_zottman_curl",
    "name": "Zottman curl",
    "aliases": [
      "Dumbbell Zottman curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Brachioradialis"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Curl dumbbells up with palms facing up (supinated). At top, rotate wrists so palms face down (pronated), then lower weights under slow eccentric control. Rotate back at bottom.",
    "mistakes": "Rushing the eccentric lowering phase, dropping weights.",
    "safetyTips": [
      "Builds both biceps peaks and thick forearms in a single movement."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_reverse_grip_ez_bar_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_drag_curl",
    "name": "Barbell drag curl",
    "aliases": [
      "Drag curl",
      "Smith drag curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand tall with barbell. Instead of curling in an arc, pull elbows back and drag the bar straight up against your torso to lower chest. Lower smoothly.",
    "mistakes": "Shrugging traps, letting bar leave contact with body.",
    "safetyTips": [
      "Completely eliminates front deltoid assistance."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_barbell_biceps_curl",
      "ex_spider_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_waiter_curl",
    "name": "Dumbbell waiter curl",
    "aliases": [
      "Waiter curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold single dumbbell vertically with both hands flat under the top plate (like a waiter platter). Keep elbows tucked and curl dumbbell to chin, flexing biceps.",
    "mistakes": "Letting dumbbell slip, swinging hips.",
    "safetyTips": [
      "Keep palms firmly cupped under plate."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_concentration_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_incline_hammer_curl",
    "name": "Seated incline dumbbell hammer curl",
    "aliases": [
      "Incline hammer curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Sit on 45-degree incline bench with dumbbells hanging in neutral grip. Curl up towards shoulders without swinging elbows forward. Lower to deep stretch.",
    "mistakes": "Shoulders lifting off pad.",
    "safetyTips": [
      "Strict isolation that emphasizes brachialis in a lengthened position."
    ],
    "variationGroupId": "var_hammer_curl",
    "alternativeExerciseIds": [
      "ex_incline_dumbbell_curl",
      "ex_hammer_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_biceps_curl",
    "name": "Resistance band biceps curl",
    "aliases": [
      "Banded curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Stand on loop band with feet hip-width. Hold handles with palms up and curl towards shoulders against progressive band tension. Lower under control.",
    "mistakes": "Letting band snap arms down fast.",
    "safetyTips": [
      "Peak tension hits at top of curl where biceps leverage is strongest."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_biceps_curl",
    "name": "Kettlebell biceps curl",
    "aliases": [
      "KB curl",
      "Horn curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Grip"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold kettlebell by the horns at chest. Lower to arms extended, then curl bell up towards chin, squeezing biceps.",
    "mistakes": "Swinging weight with legs.",
    "safetyTips": [
      "Unique weight distribution tests grip endurance."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_waiter_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_chin_up_biceps_focus",
    "name": "Close-grip chin-up (biceps focus)",
    "aliases": [
      "Underhand close grip pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Lats",
      "Upper back",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Grip bar underhand 6-8 inches apart. Hang with arms straight, then pull chest towards hands driving through biceps until chin clears bar. Lower slowly.",
    "mistakes": "Kicking legs, cutting bottom range.",
    "safetyTips": [
      "Massive compound overload for arm development."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_chin_up",
      "ex_barbell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_wrist_curl",
    "name": "Barbell wrist curl",
    "aliases": [
      "Forearm wrist curl",
      "Seated wrist curl"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Grip"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Wrist flexion",
    "trackingType": "weight_reps",
    "instructions": "Rest forearms on bench with wrists hanging over edge, palms facing up. Lower bar into fingertips, roll it back into palms, and curl wrists up as high as possible.",
    "mistakes": "Lifting forearms off bench support.",
    "safetyTips": [
      "Target flexor muscles of forearm safely with high reps."
    ],
    "variationGroupId": "var_wrist_curl",
    "alternativeExerciseIds": [
      "ex_reverse_wrist_curl",
      "ex_farmers_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_reverse_wrist_curl",
    "name": "Barbell reverse wrist curl",
    "aliases": [
      "Wrist extension",
      "Overhand wrist curl"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Grip"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Wrist extension",
    "trackingType": "weight_reps",
    "instructions": "Forearms flat on bench with wrists hanging over edge, palms facing down. Curl bar up using wrist extensors, hold 1 second, and lower slowly.",
    "mistakes": "Using heavy weight that strains wrist joints.",
    "safetyTips": [
      "Use light bar or dumbbells; wrist extensors are small endurance muscles."
    ],
    "variationGroupId": "var_wrist_curl",
    "alternativeExerciseIds": [
      "ex_wrist_curl",
      "ex_reverse_grip_ez_bar_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_farmers_walk",
    "name": "Farmer's walk",
    "aliases": [
      "Farmer carry",
      "Heavy DB carry"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Traps",
      "Core",
      "Glutes"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "30-60s",
    "difficulty": "intermediate",
    "movementPattern": "Loaded carry",
    "trackingType": "duration",
    "instructions": "Pick up heavy dumbbells or trap bar from floor with flat back. Stand tall with shoulders back and core braced. Walk in smooth measured paces without letting weights sway.",
    "mistakes": "Slouching shoulders forward, wobbling torso sideways.",
    "safetyTips": [
      "Keep head up and spine tall to prevent spinal shear."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_trap_bar_shrug",
      "ex_dead_hang"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dead_hang",
    "name": "Barbell / bar dead hang",
    "aliases": [
      "Pull-up bar hang",
      "Grip hang"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Grip"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "isolation",
    "repRange": "30-90s",
    "difficulty": "beginner",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Grip pull-up bar overhand slightly wider than shoulders. Hang with full bodyweight decompressed. Keep breathing steadily until grip fatigue.",
    "mistakes": "Holding breath, swinging legs violently.",
    "safetyTips": [
      "Exceptional decompression therapy for spine and shoulder joints."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_farmers_walk",
      "ex_scapular_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_plate_pinch_hold",
    "name": "Weight plate pinch hold",
    "aliases": [
      "Pinch grip hold"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Grip"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "isolation",
    "repRange": "20-40s",
    "difficulty": "intermediate",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "instructions": "Pinch two smooth weight plates together smooth-sides out between thumb and fingers. Stand tall and hold by sides for maximum time.",
    "mistakes": "Curling fingers under plate lip.",
    "safetyTips": [
      "Keep toes clear in case plates slip."
    ],
    "variationGroupId": "var_wrist_curl",
    "alternativeExerciseIds": [
      "ex_farmers_walk",
      "ex_dead_hang"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_cable_curl",
    "name": "Single-arm low cable curl",
    "aliases": [
      "One-arm cable curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand facing low pulley holding single D-handle. Keep elbow pinned to hip and curl handle towards shoulder. Lower smoothly.",
    "mistakes": "Swinging torso sideways.",
    "safetyTips": [
      "Allows pure unilateral isolation to correct arm imbalances."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_cable_biceps_curl",
      "ex_dumbbell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_seated_dumbbell_biceps_curl",
    "name": "Seated dumbbell biceps curl",
    "aliases": [
      "Seated DB curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Sit upright on flat bench. Curl dumbbells simultaneously or alternately while supinating wrists. Lower with strict control.",
    "mistakes": "Leaning back as weight gets heavy.",
    "safetyTips": [
      "Sitting removes hip swing entirely."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_biceps_curl",
      "ex_incline_dumbbell_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_prone_incline_hammer_curl",
    "name": "Prone incline spider hammer curl",
    "aliases": [
      "Spider hammer curl"
    ],
    "category": "pull",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Lie chest down on 45-degree bench. Hold dumbbells with neutral grip. Curl dumbbells straight up keeping elbows perpendicular to floor.",
    "mistakes": "Swinging elbows back towards hips.",
    "safetyTips": [
      "Peak contraction at top overload."
    ],
    "variationGroupId": "var_hammer_curl",
    "alternativeExerciseIds": [
      "ex_spider_curl",
      "ex_hammer_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_rope_preacher_curl",
    "name": "Cable rope preacher curl",
    "aliases": [
      "Cable preacher curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Brachialis",
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Position preacher bench facing low pulley with rope attachment. Curl rope up, spreading ends at peak contraction. Lower with control.",
    "mistakes": "Lifting elbows off pad.",
    "safetyTips": [
      "Continuous cable tension through whole ROM."
    ],
    "variationGroupId": "var_preacher_curl",
    "alternativeExerciseIds": [
      "ex_preacher_curl_ez_bar",
      "ex_cable_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_towel_pull_up",
    "name": "Towel grip pull-up",
    "aliases": [
      "Towel pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Lats",
      "Biceps",
      "Grip"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Drape two sturdy gym towels over pull-up bar. Grip towel ends tightly and perform pull-ups, keeping body rigid.",
    "mistakes": "Losing grip and dropping unexpectedly.",
    "safetyTips": [
      "Exceptional forearm and hand grip challenge."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_dead_hang"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_wrist_roller",
    "name": "Forearm wrist roller",
    "aliases": [
      "Wrist roller"
    ],
    "category": "pull",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Shoulders",
      "Grip"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "3-5 rollups",
    "difficulty": "intermediate",
    "movementPattern": "Wrist flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold roller dowel with weight plate hanging on cord at shoulder height. Roll cord up by alternating wrist extension/flexion until plate reaches top, then slowly roll it down.",
    "mistakes": "Dropping arms below shoulder level, letting plate free-fall.",
    "safetyTips": [
      "Incredible pump; use very light weights (1kg-5kg)."
    ],
    "variationGroupId": "var_wrist_curl",
    "alternativeExerciseIds": [
      "ex_wrist_curl",
      "ex_reverse_wrist_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_inner_biceps_curl",
    "name": "Wide-grip standing barbell curl",
    "aliases": [
      "Short head barbell curl",
      "Wide grip BB curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Grip barbell wider than shoulder width. Curl up with elbows held tight against sides to emphasize the short inner head of the biceps.",
    "mistakes": "Flaring elbows outward.",
    "safetyTips": [
      "Targets inner biceps width and thickness."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_barbell_biceps_curl",
      "ex_ez_bar_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_rope_triceps_pushdown",
    "name": "Rope triceps pushdown",
    "aliases": [
      "Cable rope pushdown",
      "Triceps pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Attach rope to high pulley. Pin elbows by your ribs with torso leaned forward slightly. Push the rope down, spreading the ends apart at the bottom to lock out the triceps. Return to 90 degrees with control.",
    "mistakes": "Flaring elbows out wide, letting elbows drift back and forth, using body weight to push down.",
    "safetyTips": [
      "Keep elbows stationary by your sides throughout the set."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_straight_bar_triceps_pushdown",
      "ex_overhead_cable_triceps_extension",
      "ex_v_bar_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_overhead_cable_triceps_extension",
    "name": "Overhead cable triceps extension",
    "aliases": [
      "Cable overhead extension",
      "High pulley triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Attach rope to high pulley, face away, step forward into a lunge with rope behind head. Keep elbows pointed forward, extend arms out straight, then return with control until forearms are near biceps.",
    "mistakes": "Flaring elbows outward, arching the lower back, letting the weight stack jerk at the top stretch.",
    "safetyTips": [
      "Keeps triceps long head under maximum stretch-mediated hypertrophy."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_rope_triceps_pushdown",
      "ex_skull_crusher_ez_bar",
      "ex_dumbbell_overhead_triceps_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_straight_bar_triceps_pushdown",
    "name": "Straight-bar triceps pushdown",
    "aliases": [
      "Bar pushdown",
      "Cable straight bar pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Attach straight or angled bar to high pulley. Grip overhand with elbows tucked at ribs. Press bar down until arms are fully locked out. Return under control.",
    "mistakes": "Shoulders rolling forward over bar, letting elbows rise towards armpits.",
    "safetyTips": [
      "Allows heavier overload than rope on the lateral triceps head."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_rope_triceps_pushdown",
      "ex_v_bar_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_v_bar_pushdown",
    "name": "V-bar triceps pushdown",
    "aliases": [
      "Angled bar pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Attach V-bar to high pulley. Grip angled handles, lean slightly into the stack with elbows pinned to sides, and press down to full elbow lockout.",
    "mistakes": "Standing completely upright and using chest momentum.",
    "safetyTips": [
      "V-angle provides natural wrist comfort while supporting heavy load."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_straight_bar_triceps_pushdown",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_skull_crusher_ez_bar",
    "name": "EZ-bar skull crusher (lying triceps extension)",
    "aliases": [
      "Skull crushers",
      "Lying triceps extension",
      "Nose breakers"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Lie on flat bench holding EZ bar with arms extended over chest. Keeping elbows pointing up and stationary, bend elbows to lower bar slowly to forehead/crown of head. Extend arms back to lockout.",
    "mistakes": "Flaring elbows wide, dropping bar quickly towards face, turning it into a bench press.",
    "safetyTips": [
      "Lower bar towards crown of head rather than forehead for greater triceps stretch and safer mechanics."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_dumbbell_skull_crusher",
      "ex_overhead_cable_triceps_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_skull_crusher",
    "name": "Dumbbell skull crusher",
    "aliases": [
      "DB skull crushers",
      "Lying dumbbell triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Lie on bench with dumbbells held in neutral grip above chest. Hinge at elbows lowering dumbbells past ears until full triceps stretch, then press back to top.",
    "mistakes": "Letting elbows flare or sway during rep.",
    "safetyTips": [
      "Allows independent arm action and natural neutral wrist alignment."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_skull_crusher_ez_bar",
      "ex_overhead_cable_triceps_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_overhead_triceps_extension",
    "name": "Seated dumbbell overhead triceps extension",
    "aliases": [
      "French press",
      "Seated DB triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Sit on bench with short back support. Cup both palms under top plate of heavy dumbbell overhead. Keeping elbows pointing up, lower dumbbell behind head until deep triceps stretch. Press back up.",
    "mistakes": "Arching lower back excessively, flaring elbows out to sides.",
    "safetyTips": [
      "Keep core tight and avoid hyperextending cervical spine."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_overhead_cable_triceps_extension",
      "ex_skull_crusher_ez_bar"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_overhead_dumbbell_extension",
    "name": "Single-arm overhead dumbbell triceps extension",
    "aliases": [
      "One-arm DB overhead extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit or stand holding dumbbell overhead with one arm. Lower dumbbell behind opposite shoulder with elbow pointing straight up. Press arm back to lockout.",
    "mistakes": "Elbow swinging forward, rotating neck.",
    "safetyTips": [
      "Support working elbow lightly with non-working hand if needed."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_dumbbell_overhead_triceps_extension",
      "ex_single_arm_cable_triceps_kickback"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dips_triceps",
    "name": "Parallel bar dips (triceps focus)",
    "aliases": [
      "Triceps dips",
      "Upright parallel bar dips"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Mount bars with arms extended. Keep torso strictly vertical and elbows tucked close to ribs as you lower until elbows reach 90 degrees. Push down forcefully to lockout.",
    "mistakes": "Leaning forward (shifts load to chest), dipping too deep into shoulder impingement.",
    "safetyTips": [
      "Keep body upright to direct maximum mechanical tension onto triceps."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_close_grip_barbell_bench_press",
      "ex_bench_dips"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_bench_dips",
    "name": "Bench dips",
    "aliases": [
      "Chair dips",
      "Triceps bench dips"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Front delts",
      "Chest"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on bench edge, hands gripping edge beside hips. Walk feet forward. Lower hips towards floor by bending elbows to 90 degrees keeping back close to bench. Press back up.",
    "mistakes": "Letting hips drift far forward away from bench (injures front shoulders).",
    "safetyTips": [
      "Keep spine brushing against bench to avoid anterior shoulder capsule strain."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_bench_dips",
    "name": "Weighted bench dips",
    "aliases": [
      "Plate loaded bench dips"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Front delts"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on bench edge with feet elevated on another bench and weight plate placed across thighs. Dip down until elbows reach 90 degrees and press up to lockout.",
    "mistakes": "Dropping below 90 degrees.",
    "safetyTips": [
      "Have training partner place and remove plate."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_cable_triceps_kickback",
    "name": "Cable triceps kickback",
    "aliases": [
      "Single arm cable kickback"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Set pulley at elbow height without attachment. Hinge forward at waist. Pin upper arm parallel to torso and extend forearm back to full lockout, squeezing triceps. Return slowly.",
    "mistakes": "Dropping upper arm down, swinging shoulder.",
    "safetyTips": [
      "Unlike dumbbell kickbacks, cable maintains tension throughout entire range."
    ],
    "variationGroupId": "var_triceps_kickback",
    "alternativeExerciseIds": [
      "ex_dumbbell_triceps_kickback",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_triceps_kickback",
    "name": "Dumbbell triceps kickback",
    "aliases": [
      "DB kickback"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place knee and hand on flat bench. Pin upper arm of working side parallel to torso. Extend dumbbell back until arm is fully straight, squeeze 1 second, and lower under control.",
    "mistakes": "Dropping elbow below torso, swinging arm like a pendulum.",
    "safetyTips": [
      "Keep upper arm locked high and parallel to floor."
    ],
    "variationGroupId": "var_triceps_kickback",
    "alternativeExerciseIds": [
      "ex_single_arm_cable_triceps_kickback",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_tate_press",
    "name": "Dumbbell Tate press",
    "aliases": [
      "Elbows-out triceps extension",
      "Tate press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Lie flat on bench with dumbbells over chest, palms facing feet. Point elbows out to sides and bend elbows inward until dumbbell heads touch chest. Press out and up to lockout.",
    "mistakes": "Bouncing dumbbells off sternum, locking elbows violently.",
    "safetyTips": [
      "Powerlifting staple for developing massive lockout power."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_dumbbell_skull_crusher",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_jm_press",
    "name": "Barbell JM press",
    "aliases": [
      "JM press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Hybrid between close-grip bench and skull crusher. Grip bar shoulder-width. Lower bar straight down towards neck/chin keeping elbows tucked at 45 degrees, then press explosively.",
    "mistakes": "Losing control of bar path, letting elbows flare wide.",
    "safetyTips": [
      "Master mechanics with light weight before loading heavily."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_close_grip_barbell_bench_press",
      "ex_skull_crusher_ez_bar"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_reverse_grip_triceps_pushdown",
    "name": "Reverse-grip triceps pushdown",
    "aliases": [
      "Underhand pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Attach straight bar to high pulley with underhand (supinated) grip. Keep elbows tight to ribs and extend down until arms lock out, squeezing medial triceps.",
    "mistakes": "Wrists curling upward under load.",
    "safetyTips": [
      "Emphasizes the medial head of the triceps."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_straight_bar_triceps_pushdown",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cross_body_cable_triceps_extension",
    "name": "Cross-body cable triceps extension",
    "aliases": [
      "Dual cable cross triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Set pulleys at head height without attachments. Cross arms to grab opposite cables. Keep elbows pinned and extend arms diagonally outward and downward to lockout.",
    "mistakes": "Moving elbows forward and back.",
    "safetyTips": [
      "Perfect mechanical alignment with the triceps angle of pull."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_rope_triceps_pushdown",
      "ex_single_arm_cable_triceps_kickback"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_bodyweight_triceps_extension",
    "name": "Bodyweight triceps extension (skull crusher)",
    "aliases": [
      "Bar bodyweight triceps extension",
      "Bodyweight skullcrusher"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Set barbell in rack at waist height. Lean forward into rigid plank grip on bar. Bend elbows lowering head under bar until triceps stretch deeply, then push back up.",
    "mistakes": "Sagging hips, letting elbows flare out.",
    "safetyTips": [
      "Adjust bar height up or down to scale difficulty."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_skull_crusher_ez_bar",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_triceps_dip",
    "name": "Seated machine triceps dip",
    "aliases": [
      "Machine dip",
      "Plate loaded dip machine"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Sit strapped under thigh pad with hands on handles. Push handles straight down to full lockout while keeping chest tall. Return with control to 90 degrees.",
    "mistakes": "Shrugging shoulders into ears, rising off seat.",
    "safetyTips": [
      "Allows heavy triceps loading with zero balance demands."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_triceps_pushdown",
    "name": "Resistance band triceps pushdown",
    "aliases": [
      "Banded triceps pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Anchor loop band overhead on pull-up bar. Grip band with elbows tucked at ribs and push down to lockout, pulling hands apart slightly at bottom.",
    "mistakes": "Letting band snap arms up rapidly.",
    "safetyTips": [
      "Exceptional joint-friendly movement with peak lockout tension."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_rope_triceps_pushdown",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_cable_pushdown",
    "name": "Single-arm cable triceps pushdown",
    "aliases": [
      "One-arm cable pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Attach single D-handle to high pulley. Keep elbow pinned to ribcage and press handle straight down until arm fully extends. Squeeze triceps and return slowly.",
    "mistakes": "Leaning shoulder into handle.",
    "safetyTips": [
      "Great for evening out strength between arms."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_rope_triceps_pushdown",
      "ex_single_arm_cable_triceps_kickback"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_incline_ez_bar_skull_crusher",
    "name": "Incline EZ-bar skull crusher",
    "aliases": [
      "Incline triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Lie on 30-degree incline bench with EZ bar. Lower bar behind head maintaining angled arms. Extend back to lockout feeling immense long head stretch.",
    "mistakes": "Flaring elbows wide.",
    "safetyTips": [
      "Angle shifts greatest resistance onto triceps long head."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_skull_crusher_ez_bar",
      "ex_overhead_cable_triceps_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_ez_bar_skull_crusher",
    "name": "Decline EZ-bar skull crusher",
    "aliases": [
      "Decline triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Hook legs on decline bench. Lower bar behind crown of head and extend up to lockout.",
    "mistakes": "Letting bar drift over chest into a press.",
    "safetyTips": [
      "Decline angle maintains tension even at top lockout."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_skull_crusher_ez_bar",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_overhead_triceps_extension",
    "name": "Kettlebell overhead triceps extension",
    "aliases": [
      "KB French press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Grip kettlebell horns behind head with elbows pointing up. Extend arms overhead until elbows lock out, then lower with control.",
    "mistakes": "Hitting head with kettlebell, arching low back.",
    "safetyTips": [
      "Keep elbows tucked forward throughout."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_dumbbell_overhead_triceps_extension",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_california_press",
    "name": "California press",
    "aliases": [
      "Cali press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lower barbell towards neck like a skull crusher, then pivot forearms into a close-grip bench position and press up to lockout.",
    "mistakes": "Rushing the transition between extension and press.",
    "safetyTips": [
      "Allows heavy overload with eccentric triceps isolation."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_jm_press",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_overhead_single_arm_extension",
    "name": "Single-arm cable overhead triceps extension",
    "aliases": [
      "One-arm cable French press"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Attach single handle to low or mid pulley. Face away from stack with arm overhead. Extend elbow forward to lockout, feeling peak stretch at bottom.",
    "mistakes": "Elbow flaring out sideways.",
    "safetyTips": [
      "Keeps tension on triceps long head unilaterally."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_overhead_cable_triceps_extension",
      "ex_single_arm_overhead_dumbbell_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_band_overhead_triceps_extension",
    "name": "Resistance band overhead triceps extension",
    "aliases": [
      "Banded overhead triceps extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Anchor band under heels or behind back. Hold ends overhead with elbows pointing forward. Extend arms upward to lockout against elastic tension.",
    "mistakes": "Arching lower back.",
    "safetyTips": [
      "Joint-friendly long-head stretch."
    ],
    "variationGroupId": "var_overhead_triceps",
    "alternativeExerciseIds": [
      "ex_overhead_cable_triceps_extension",
      "ex_dumbbell_overhead_triceps_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_diamond_push_up_triceps",
    "name": "Diamond push-up (elevated feet)",
    "aliases": [
      "Decline diamond pushup"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Feet on bench, hands in diamond formation on floor under chest. Lower chest to hands with elbows tight to ribs, and press up to lockout.",
    "mistakes": "Sagging hips.",
    "safetyTips": [
      "Intense bodyweight triceps loading."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_diamond_push_up",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_close_grip_bench",
    "name": "Smith machine close-grip bench press",
    "aliases": [
      "Smith CGBP"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Horizontal push",
    "trackingType": "weight_reps",
    "instructions": "Lie on bench inside Smith machine with hands shoulder-width apart. Lower bar to lower chest keeping elbows tucked, and press to lockout.",
    "mistakes": "Flaring elbows outward.",
    "safetyTips": [
      "Set safety stop pins at chest height."
    ],
    "variationGroupId": "var_bench_press",
    "alternativeExerciseIds": [
      "ex_close_grip_barbell_bench_press",
      "ex_dips_triceps"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_reverse_cable_pushdown",
    "name": "Single-arm reverse-grip cable pushdown",
    "aliases": [
      "One-arm underhand pushdown"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Underhand grip on single D-handle at high pulley. Pin elbow to side and press down to lockout, focusing on inner medial head.",
    "mistakes": "Lifting elbow forward.",
    "safetyTips": [
      "Focus on clean lockout squeeze."
    ],
    "variationGroupId": "var_triceps_pushdown",
    "alternativeExerciseIds": [
      "ex_reverse_grip_triceps_pushdown",
      "ex_single_arm_cable_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_kickback_both_arms",
    "name": "Standing bent-over dual dumbbell kickback",
    "aliases": [
      "Double DB kickback"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Hinge forward at 45 degrees holding dumbbells. Pin both elbows high by ribs. Simultaneously extend both forearms backward to straight lockout.",
    "mistakes": "Dropping elbows between reps.",
    "safetyTips": [
      "Hold top squeeze for 1 second."
    ],
    "variationGroupId": "var_triceps_kickback",
    "alternativeExerciseIds": [
      "ex_dumbbell_triceps_kickback",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cross_body_dumbbell_extension",
    "name": "Cross-body dumbbell triceps extension",
    "aliases": [
      "Across face DB extension"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie on bench with one dumbbell above chest. Bend elbow across body lowering dumbbell towards opposite shoulder, then press back up.",
    "mistakes": "Letting elbow move around loosely.",
    "safetyTips": [
      "Isolates lateral head effectively."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_single_arm_overhead_dumbbell_extension",
      "ex_dumbbell_skull_crusher"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_floor_skull_crusher",
    "name": "Barbell floor skull crusher",
    "aliases": [
      "Dead-stop skull crusher"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "instructions": "Lie on floor holding EZ bar. Lower bar back until plates gently rest on floor behind head. Pause 1 second to eliminate stretch reflex, then extend arms.",
    "mistakes": "Bouncing bar off floor.",
    "safetyTips": [
      "Completely eliminates elastic bounce, building raw starting strength."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_skull_crusher_ez_bar",
      "ex_tate_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_incline_cable_triceps_kickback",
    "name": "Incline bench cable triceps kickback",
    "aliases": [
      "Prone cable kickback"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie chest-down on incline bench facing away from low pulley. Hold cable handle with upper arm pinned to torso. Extend arm backward to full contraction.",
    "mistakes": "Torso twisting.",
    "safetyTips": [
      "Eliminates lower back strain during kickbacks."
    ],
    "variationGroupId": "var_triceps_kickback",
    "alternativeExerciseIds": [
      "ex_single_arm_cable_triceps_kickback",
      "ex_rope_triceps_pushdown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_ring_triceps_dips",
    "name": "Gymnastic ring triceps dips",
    "aliases": [
      "Ring dips"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts",
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Support body on unstable rings with elbows locked and rings turned out. Lower body keeping upright until elbows hit 90 degrees, then press up firmly.",
    "mistakes": "Shaking uncontrollably, flaring elbows out wildly.",
    "safetyTips": [
      "Requires immense stabilizer strength; master parallel bar dips first."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_close_grip_barbell_bench_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_squat",
    "name": "Barbell back squat",
    "aliases": [
      "Back squat",
      "Barbell squat",
      "BB squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Lower back",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Bar resting across upper traps or rear delts. Feet shoulder-width apart, toes angled out slightly. Brace core, sit hips down and back until hip crease is below top of knee. Drive through mid-foot to stand.",
    "mistakes": "Knees caving inward (valgus collapse), heels lifting, excessive forward torso collapse, rounding lower back (butt wink).",
    "safetyTips": [
      "Always set safety pins in rack at bottom depth height."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_goblet_squat",
      "ex_front_squat",
      "ex_leg_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_front_squat",
    "name": "Barbell front squat",
    "aliases": [
      "Front squat",
      "Clean grip front squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Upper back",
      "Core",
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Rest bar across anterior deltoids in clean grip or cross-arm rack with high elbows. Squat down between knees keeping torso vertical. Drive up through heels.",
    "mistakes": "Elbows dropping down, rounding thoracic spine, leaning forward.",
    "safetyTips": [
      "Keep elbows high parallel to floor throughout entire squat."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_barbell_squat",
      "ex_goblet_squat",
      "ex_zercher_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_goblet_squat",
    "name": "Goblet squat",
    "aliases": [
      "Dumbbell goblet squat",
      "KB goblet squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Core"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Hold dumbbell or kettlebell vertically against sternum. Feet shoulder-width, toes turned out. Squat between knees until elbows touch inside of knees. Drive up through mid-foot.",
    "mistakes": "Holding weight away from chest, rounding back, letting knees cave in.",
    "safetyTips": [
      "Excellent squat pattern builder that enforces upright posture."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_barbell_squat",
      "ex_front_squat",
      "ex_bodyweight_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_leg_press",
    "name": "45-degree leg press",
    "aliases": [
      "Leg press",
      "Incline leg press",
      "Machine leg press"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Feet shoulder-width on platform. Release safety handles. Lower sled under control until knees reach 90 degrees without lower back rounding off seat pad. Press platform back up without locking knees hard.",
    "mistakes": "Lower back lifting off pad at bottom (causes lumbar disc pressure), locking knees violently, letting knees buckle.",
    "safetyTips": [
      "Never allow pelvis to tuck or round off backrest at bottom of stroke."
    ],
    "variationGroupId": "var_leg_press",
    "alternativeExerciseIds": [
      "ex_hack_squat_machine",
      "ex_barbell_squat",
      "ex_leg_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_leg_extension",
    "name": "Leg extension",
    "aliases": [
      "Quad extension",
      "Machine leg extension"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Knee extension",
    "trackingType": "weight_reps",
    "instructions": "Align knee joint with machine pivot. Pad sits above ankles. Extend knees smoothly until legs are straight, pause 1 second flexing quads, and lower under control.",
    "mistakes": "Kicking weight up with momentum, seat back set too far forward or back, letting weights slam.",
    "safetyTips": [
      "Align knee joint exactly with the rotational axis of the machine."
    ],
    "variationGroupId": "var_leg_extension",
    "alternativeExerciseIds": [
      "ex_sissy_squat",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_hack_squat_machine",
    "name": "Machine hack squat",
    "aliases": [
      "Hack squat",
      "45 degree hack squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Position back flat against pad with shoulders under shoulder cushions. Place feet middle-to-low on platform. Lower into deep squat under control, then drive through mid-foot to lockout.",
    "mistakes": "Heels lifting off platform, bouncing at bottom.",
    "safetyTips": [
      "Delivers massive quad quad-sweep loading with back supported."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_leg_press",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_bulgarian_split_squat",
    "name": "Bulgarian split squat (rear foot elevated)",
    "aliases": [
      "Rear-foot elevated split squat",
      "RFESS"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Adductors"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place rear foot on bench behind you. Lower front thigh until parallel to floor, keeping chest tall and front knee tracking over toes. Drive through front mid-foot to stand.",
    "mistakes": "Front foot too close causing heel lift, wobbling sideways, arching back.",
    "safetyTips": [
      "Unmatched unilateral quad builder; master with bodyweight before adding dumbbells."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_walking_dumbbell_lunge",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_walking_dumbbell_lunge",
    "name": "Walking dumbbell lunge",
    "aliases": [
      "Walking lunges",
      "DB lunges"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves",
      "Core"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold dumbbells at sides. Step forward into lunge until back knee gently hovers 1 inch above floor. Drive forward off front heel into the next step.",
    "mistakes": "Slamming back knee into floor, leaning forward, taking too short strides.",
    "safetyTips": [
      "Keep torso tall and take deliberate, controlled strides."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_reverse_dumbbell_lunge",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_reverse_dumbbell_lunge",
    "name": "Reverse dumbbell lunge",
    "aliases": [
      "Step-back lunge",
      "DB reverse lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand tall with dumbbells. Step one leg backward, dropping into lunge until back knee touches floor softly. Drive through front foot to return.",
    "mistakes": "Dropping weight onto back foot, leaning torso forward.",
    "safetyTips": [
      "Much easier on anterior knee joints than forward walking lunges."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_walking_dumbbell_lunge",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_step_up",
    "name": "Dumbbell box step-up",
    "aliases": [
      "Step-ups",
      "DB step up"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12 per leg",
    "difficulty": "beginner",
    "movementPattern": "Step up",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold dumbbells at sides facing sturdy box or bench. Place entire foot on box. Drive through box heel to step up to straight leg without pushing off trailing foot. Lower slowly.",
    "mistakes": "Pushing off floor with back foot (cheats quads), letting front knee cave inward.",
    "safetyTips": [
      "Use knee-height box; avoid excessively high platforms."
    ],
    "variationGroupId": "var_step_up",
    "alternativeExerciseIds": [
      "ex_bulgarian_split_squat",
      "ex_reverse_dumbbell_lunge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_sissy_squat",
    "name": "Bodyweight sissy squat",
    "aliases": [
      "Sissy squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "advanced",
    "movementPattern": "Knee extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hold upright post for balance. Rise onto balls of feet, push knees forward and lean torso backward in straight line from head to knees. Lower until quads stretch fully, then press back up.",
    "mistakes": "Bending at hips (breaks torso alignment), dropping too fast.",
    "safetyTips": [
      "Extreme stress on patellar tendon; progress gradually."
    ],
    "variationGroupId": "var_leg_extension",
    "alternativeExerciseIds": [
      "ex_leg_extension",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_zercher_squat",
    "name": "Barbell Zercher squat",
    "aliases": [
      "Zercher squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Upper back",
      "Core",
      "Glutes",
      "Biceps"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Cradle barbell in the crooks of elbows against chest with hands clasped together. Squat deep between knees keeping torso vertical. Stand tall.",
    "mistakes": "Rounding thoracic spine, letting elbows drift away from torso.",
    "safetyTips": [
      "Use bar pad or wrap towel around bar to protect elbow crooks."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_front_squat",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_box_squat",
    "name": "Barbell box squat",
    "aliases": [
      "Box squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Lower back"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Place box behind you at parallel height. Squat back and sit onto box, pausing 1 second to release kinetic energy while keeping core braced. Explode up to stand.",
    "mistakes": "Rocking backwards or slamming onto box, losing core tension.",
    "safetyTips": [
      "Do not crash onto box; sit down with total control."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_barbell_squat",
      "ex_pin_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_pin_squat",
    "name": "Barbell pin squat (Anderson squat)",
    "aliases": [
      "Anderson squat",
      "Bottom-up squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "3-6",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Set rack safety pins at bottom squat depth. Unrack, squat to rest bar on pins for 2 seconds, then drive upward from dead stop.",
    "mistakes": "Bouncing bar off pins, collapsing form.",
    "safetyTips": [
      "Builds immense starting strength out of the hole."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_box_squat",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_heel_elevated_squat",
    "name": "Heel-elevated barbell squat",
    "aliases": [
      "Cyclist squat",
      "Wedge squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Elevate heels 1-2 inches on weight plates or wedge board. Squat straight down with narrow stance and vertical torso, allowing knees to travel far over toes.",
    "mistakes": "Piking hips backward.",
    "safetyTips": [
      "Maximizes knee flexion and vastus medialis loading."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_hack_squat_machine",
      "ex_front_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_squat",
    "name": "Smith machine squat",
    "aliases": [
      "Smith squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Step into Smith machine with bar across traps. Place feet slightly forward of bar. Squat to parallel and press back up along fixed track.",
    "mistakes": "Placing feet too far behind bar trajectory.",
    "safetyTips": [
      "Lock safety hooks into place before loading."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_barbell_squat",
      "ex_hack_squat_machine"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_press",
    "name": "Single-leg 45-degree leg press",
    "aliases": [
      "Unilateral leg press",
      "One-leg leg press"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place one foot in center of footplate. Lower sled smoothly to 90 degrees knee bend without tilting pelvis. Press back up.",
    "mistakes": "Twisting hips sideways on seat.",
    "safetyTips": [
      "Ensures equal quad development across both legs."
    ],
    "variationGroupId": "var_leg_press",
    "alternativeExerciseIds": [
      "ex_leg_press",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_narrow_stance_leg_press",
    "name": "Narrow-stance leg press (quad focus)",
    "aliases": [
      "Close stance leg press"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Place feet 4-6 inches apart low on footplate. Lower sled to 90 degrees and press through balls and mid-foot to emphasize outer sweep.",
    "mistakes": "Letting knees collapse inward.",
    "safetyTips": [
      "Keep knees tracking straight ahead."
    ],
    "variationGroupId": "var_leg_press",
    "alternativeExerciseIds": [
      "ex_leg_press",
      "ex_leg_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_bodyweight_squat",
    "name": "Bodyweight air squat",
    "aliases": [
      "Air squat",
      "Prisoner squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "15-30",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand tall with feet shoulder-width. Lower hips down and back until hip crease passes knees with chest tall. Drive up through mid-foot.",
    "mistakes": "Heels coming off floor, hunching forward.",
    "safetyTips": [
      "Fundamental foundational movement."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_goblet_squat",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_wall_sit",
    "name": "Wall sit hold",
    "aliases": [
      "Wall squat hold",
      "Isometric wall sit"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-60s",
    "difficulty": "beginner",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Lean back against flat wall and slide down until thighs are parallel to floor with knees at 90 degrees. Hold position statically.",
    "mistakes": "Resting hands on knees, sliding too high.",
    "safetyTips": [
      "Keep back completely flush against wall."
    ],
    "variationGroupId": "var_leg_extension",
    "alternativeExerciseIds": [
      "ex_leg_extension",
      "ex_bodyweight_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_pistol_squat",
    "name": "Single-leg pistol squat",
    "aliases": [
      "Pistol squat",
      "One-legged squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Ankles"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-10 per leg",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Balance on one leg with opposite leg extended straight forward. Squat down fully until hamstring rests on calf. Drive through heel to stand.",
    "mistakes": "Falling backwards, heel lifting off floor.",
    "safetyTips": [
      "Requires tremendous ankle dorsiflexion and balance."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_bulgarian_split_squat",
      "ex_dumbbell_step_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_cossack_squat",
    "name": "Cossack squat",
    "aliases": [
      "Side squat",
      "Lateral squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Adductors",
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Wide stance. Shift weight to one side and squat deep into that leg while keeping opposite leg straight with toes turned up. Return and switch.",
    "mistakes": "Heel lifting off floor on working leg.",
    "safetyTips": [
      "Exceptional hip mobility and adductor flexibility builder."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_bulgarian_split_squat",
      "ex_bodyweight_squat"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_forward_dumbbell_lunge",
    "name": "Forward dumbbell lunge",
    "aliases": [
      "Front lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12 per leg",
    "difficulty": "beginner",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Step forward into deep lunge, decelerating smoothly. Push forcefully off front foot to return to starting position.",
    "mistakes": "Slamming back knee down.",
    "safetyTips": [
      "Decelerate landing gently."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_reverse_dumbbell_lunge",
      "ex_walking_dumbbell_lunge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_curtsy_lunge",
    "name": "Dumbbell curtsy lunge",
    "aliases": [
      "Curtsy squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Abductors"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Step one leg back and across behind supporting leg in a curtsy. Bend knees to lower hips, then push back up.",
    "mistakes": "Twisting front knee out of alignment.",
    "safetyTips": [
      "Keep front knee tracking over toes."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_reverse_dumbbell_lunge",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_jump_squat",
    "name": "Bodyweight jump squat",
    "aliases": [
      "Squat jumps",
      "Plyometric squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Squat to parallel and immediately explode straight up into vertical jump. Absorb landing softly through mid-foot and sink into next squat.",
    "mistakes": "Stiff-legged landing, loud stomping.",
    "safetyTips": [
      "Land quietly like a cat to absorb impact."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_bodyweight_squat",
      "ex_box_jump"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_box_jump",
    "name": "Plyometric box jump",
    "aliases": [
      "Box jumps"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "Core"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Jump",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand facing sturdy plyo box. Swing arms, jump explosively onto center of box landing softly in quarter squat. Stand tall, step down carefully.",
    "mistakes": "Jumping down backwards (achilles strain), landing stiff.",
    "safetyTips": [
      "Step down one foot at a time; never jump backward off box."
    ],
    "variationGroupId": "var_jump",
    "alternativeExerciseIds": [
      "ex_jump_squat",
      "ex_bodyweight_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_banded_leg_extension",
    "name": "Resistance band leg extension",
    "aliases": [
      "Banded quad extension"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Knee extension",
    "trackingType": "weight_reps",
    "instructions": "Anchor band behind chair or bench. Loop around ankle. Kick leg out straight against band resistance, squeezing quads hard.",
    "mistakes": "Kicking fast without pause.",
    "safetyTips": [
      "Great home gym quad isolation."
    ],
    "variationGroupId": "var_leg_extension",
    "alternativeExerciseIds": [
      "ex_leg_extension",
      "ex_sissy_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_pendulum_squat",
    "name": "Pendulum squat machine",
    "aliases": [
      "Pendulum squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Shoulders locked into pads. Squat down following curved pendulum arc into deep knee flexion. Drive through platform.",
    "mistakes": "Heels peeling off.",
    "safetyTips": [
      "Phenomenal quad isolation with counterbalanced curve."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_hack_squat_machine",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_belt_squat",
    "name": "Belt squat machine",
    "aliases": [
      "Belt squat",
      "Pit shark squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Attach dip belt connected to low cable/lever arm. Squat deep with zero load on spine or shoulders. Drive up to lockout.",
    "mistakes": "Leaning back excessively on belt.",
    "safetyTips": [
      "100% axial spine unloading for lifters with back injuries."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_barbell_squat",
      "ex_leg_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_overhead_barbell_squat",
    "name": "Overhead barbell squat",
    "aliases": [
      "OHS",
      "Overhead squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Shoulders",
      "Upper back",
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Snatch grip barbell locked firmly overhead with active shoulders. Squat deep keeping bar directly over mid-foot. Drive back up.",
    "mistakes": "Bar drifting forward, bent elbows.",
    "safetyTips": [
      "Demands elite thoracic and shoulder mobility."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_front_squat",
      "ex_barbell_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_box_squat",
    "name": "Single-leg box squat",
    "aliases": [
      "Single leg squat to bench"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Core"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "8-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Stand on one leg facing away from bench. Squat down and sit gently onto bench without rocking, then stand back up on single leg.",
    "mistakes": "Collapsing onto bench.",
    "safetyTips": [
      "Terrific regression towards pistol squat."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_pistol_squat",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_duck_walk",
    "name": "Bodyweight duck walk",
    "aliases": [
      "Duck walks"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-45s",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Sink into deep squat. Maintain low squat depth while waddling forward step by step, keeping thighs under continuous tension.",
    "mistakes": "Standing up high between steps.",
    "safetyTips": [
      "Keep steps short and controlled."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_wall_sit",
      "ex_bodyweight_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_front_squat",
    "name": "Double kettlebell front squat",
    "aliases": [
      "Dual KB front squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Upper back",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Clean two kettlebells to rack position. Squat deep with vertical spine, driving knees apart. Stand tall.",
    "mistakes": "Elbows flaring, bells resting loosely.",
    "safetyTips": [
      "Keep bells pinned tightly to chest."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_front_squat",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_smith_machine_hack_squat",
    "name": "Smith machine hack squat",
    "aliases": [
      "Smith reverse hack squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Place feet 12 inches forward under Smith bar on traps. Squat down letting knees track forward over toes into deep quad bend. Drive up.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Mimics hack squat machine effectively."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_hack_squat_machine",
      "ex_leg_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_lateral_step_up",
    "name": "Dumbbell lateral step-up",
    "aliases": [
      "Side step up"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Adductors"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Step up",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand side-on to box. Place inside foot on box and step up laterally, driving through thigh. Lower under control.",
    "mistakes": "Pushing off floor with outside foot.",
    "safetyTips": [
      "Excellent frontal plane stability builder."
    ],
    "variationGroupId": "var_step_up",
    "alternativeExerciseIds": [
      "ex_dumbbell_step_up",
      "ex_cossack_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_db_romanian_deadlift",
    "name": "Dumbbell Romanian deadlift (RDL)",
    "aliases": [
      "Dumbbell RDL",
      "DB straight leg deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand tall holding dumbbells against thighs. Soft bend in knees. Push hips back as far as possible, tracing dumbbells down shins until deep hamstring stretch. Squeeze glutes and drive hips forward to stand.",
    "mistakes": "Rounding lower back, bending knees into a squat, letting dumbbells drift away from shins.",
    "safetyTips": [
      "Movement is a horizontal hip hinge, not a vertical squat; keep spine strictly neutral."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_seated_leg_curl",
      "ex_lying_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_romanian_deadlift",
    "name": "Barbell Romanian deadlift (Barbell RDL)",
    "aliases": [
      "Barbell RDL",
      "BB straight leg deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back",
      "Forearms"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-10",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Unrack barbell with shoulder-width grip. Soft knees. Hinge back at hips, keeping bar shaving down shins until just below knee caps. Drive hips forward to lockout.",
    "mistakes": "Rounding lumbar spine, dropping bar too low causing back rounding.",
    "safetyTips": [
      "Stop hinge once hips stop travelling backwards."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_leg_curl",
    "name": "Seated leg curl",
    "aliases": [
      "Seated hamstring curl",
      "Machine seated leg curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "instructions": "Secure thigh pad firmly against thighs. Pad sits on lower calves. Curl legs back under seat as far as possible, pause 1 second flexing hamstrings, and return smoothly to full knee extension.",
    "mistakes": "Thigh pad set too loose letting legs float, kicking weight rapidly.",
    "safetyTips": [
      "Hip flexion in seated curl provides superior hamstring hypertrophy vs lying curl."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_lying_leg_curl",
      "ex_db_romanian_deadlift",
      "ex_standing_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_lying_leg_curl",
    "name": "Lying leg curl",
    "aliases": [
      "Prone leg curl",
      "Lying hamstring curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "instructions": "Lie prone with roller pad behind ankles. Grip handles and press hips down into pad. Curl heels towards glutes smoothly. Lower under control without letting weights slam.",
    "mistakes": "Hips lifting off bench to cheat weight, swinging legs violently.",
    "safetyTips": [
      "Keep pelvis pressed flat against bench pad."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_seated_leg_curl",
      "ex_nordic_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_nordic_hamstring_curl",
    "name": "Nordic hamstring curl",
    "aliases": [
      "Nordic curls",
      "Russian leg curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "4-8",
    "difficulty": "advanced",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Kneel with ankles securely anchored. Lower torso forward under strict hamstring control as slowly as possible with straight hips. Catch with hands on floor, push off lightly and curl back up.",
    "mistakes": "Bending at hips (breaks straight body line), falling out of control without eccentric resistance.",
    "safetyTips": [
      "Premier movement for eccentric hamstring strength and injury prevention."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_lying_leg_curl",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_leg_curl",
    "name": "Standing single-leg curl machine",
    "aliases": [
      "Single leg curl",
      "One-leg hamstring curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand facing machine with roller pad against Achilles tendon of working leg. Curl heel to glute smoothly, hold peak squeeze, and lower with control.",
    "mistakes": "Arching low back to swing pad.",
    "safetyTips": [
      "Isolates each hamstring independently."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_lying_leg_curl",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_single_leg_romanian_deadlift",
    "name": "Single-leg dumbbell Romanian deadlift",
    "aliases": [
      "Single leg RDL",
      "Unilateral RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Ankles"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand on one leg. Hinge forward at hip extending non-working leg straight behind like a pendulum. Lower dumbbell down shin with flat back, then return.",
    "mistakes": "Opening up hips sideways, rounding spine.",
    "safetyTips": [
      "Keep hips square to floor throughout hinge."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_swiss_ball_hamstring_curl",
    "name": "Swiss ball leg curl",
    "aliases": [
      "Stability ball hamstring curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core"
    ],
    "equipment": "Exercise ball",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with heels on stability ball. Lift hips into bridge. Roll ball towards glutes by bending knees and flexing hamstrings. Roll back out under control.",
    "mistakes": "Dropping hips towards floor during curl.",
    "safetyTips": [
      "Keep hips elevated in straight bridge throughout entire set."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_lying_leg_curl",
      "ex_slider_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_slider_hamstring_curl",
    "name": "Slider / towel hamstring curl",
    "aliases": [
      "Floor slide leg curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with heels on sliders or towel on slick floor. Bridge hips up and slide heels away to full extension, then pull heels back towards glutes.",
    "mistakes": "Letting hips sag onto floor.",
    "safetyTips": [
      "Intense eccentric hamstring challenge."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_swiss_ball_hamstring_curl",
      "ex_nordic_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_glute_ham_raise",
    "name": "Glute-ham raise (GHR)",
    "aliases": [
      "GHR"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back",
      "Calves"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "advanced",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Secure ankles in GHD machine with thighs on curved pad. Lower body forward with flat spine, then curl back up using hamstrings to pull body upright.",
    "mistakes": "Bending at hips instead of knees, hyperextending lower back.",
    "safetyTips": [
      "Pure knee flexion and hip extension synergy."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_nordic_hamstring_curl",
      "ex_lying_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_pull_through",
    "name": "Cable pull-through",
    "aliases": [
      "Rope cable pull through"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Straddle low pulley cable facing away with rope attachment held between legs. Walk forward into tension. Hinge back deeply at hips, then thrust hips forward to lockout.",
    "mistakes": "Squatting with knees instead of hinging hips, rounding spine.",
    "safetyTips": [
      "One of the safest ways to master hip hinge mechanics."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_kettlebell_swing"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_swing",
    "name": "Russian kettlebell swing",
    "aliases": [
      "KB swing",
      "Hip hinge swing"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "15-25",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Hike kettlebell between legs in deep hip hinge. Explosively snap hips forward, projecting bell forward to chest height through hip power. Guide bell back into hinge.",
    "mistakes": "Squatting with knees, lifting bell with arms/shoulders, hyperextending spine at top.",
    "safetyTips": [
      "Bell moves entirely from explosive hip snap; arms are just ropes."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_cable_pull_through",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_trap_bar_rdl",
    "name": "Trap bar Romanian deadlift",
    "aliases": [
      "Hex bar RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Trap bar",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand inside trap bar gripping neutral handles. Hinge hips back with soft knees until deep hamstring stretch. Drive hips forward to lockout.",
    "mistakes": "Squatting down instead of pushing hips back.",
    "safetyTips": [
      "Neutral grip eases shoulder and neck positioning."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_cable_kickback_hamstring",
    "name": "Cable straight-leg hamstring kickback",
    "aliases": [
      "Straight leg cable kickback"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Attach ankle cuff to low pulley. Stand tall facing stack. Keeping leg straight, extend leg straight back using hamstrings and glutes.",
    "mistakes": "Arching lower back.",
    "safetyTips": [
      "Keep movement strictly at the hip joint."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_dumbbell_lying_leg_curl",
    "name": "Dumbbell lying leg curl (feet squeezed)",
    "aliases": [
      "Dumbbell hamstring curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "instructions": "Lie prone with dumbbell clamped vertically between arches of feet. Curl heels towards glutes smoothly and lower under control.",
    "mistakes": "Letting dumbbell slip out from feet.",
    "safetyTips": [
      "Squeeze feet together tightly to lock dumbbell securely."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_lying_leg_curl",
      "ex_swiss_ball_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_stiff_legged_barbell_deadlift",
    "name": "Stiff-legged barbell deadlift (from deficit/floor)",
    "aliases": [
      "SLDL",
      "Stiff leg deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Higher hip position than conventional deadlift with knees almost completely straight (minimal soft bend). Pull from floor using pure hamstring tension.",
    "mistakes": "Rounding thoracic and lumbar spine.",
    "safetyTips": [
      "Use moderate weight; deeper stretch than standard RDL."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_barbell_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_nordic_curl_assisted",
    "name": "Band-assisted Nordic hamstring curl",
    "aliases": [
      "Assisted Nordic curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Loop band overhead around chest for counter-assistance. Perform Nordic curl under controlled descent and rise with band recoil assistance.",
    "mistakes": "Piking hips.",
    "safetyTips": [
      "Best pathway to achieving unassisted Nordic curls."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_nordic_hamstring_curl",
      "ex_lying_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_band_seated_leg_curl",
    "name": "Resistance band seated leg curl",
    "aliases": [
      "Banded leg curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "instructions": "Sit on chair facing away from band anchor. Loop band around ankles. Curl heels back under chair against elastic tension.",
    "mistakes": "Slumping in chair.",
    "safetyTips": [
      "Ideal home workout hamstring pump."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_seated_leg_curl",
      "ex_slider_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_bridge_hamstring",
    "name": "Single-leg hamstring bridge (heel elevated)",
    "aliases": [
      "Hamstring bridge"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Bench",
    "exerciseClass": "isolation",
    "repRange": "10-15 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on back with one heel elevated on low box with knee at 20-30 degrees bend. Drive heel down to lift hips, holding peak hamstring contraction.",
    "mistakes": "Bending knee to 90 degrees (shifts to glute).",
    "safetyTips": [
      "Open knee angle isolates hamstrings over glutes."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_single_leg_romanian_deadlift",
      "ex_swiss_ball_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_b_stance_dumbbell_rdl",
    "name": "B-stance dumbbell Romanian deadlift",
    "aliases": [
      "Kickstand RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Place rear foot on toes like a kickstand for balance. Hinge hips back shifting 90% of load onto front hamstring. Drive hips forward.",
    "mistakes": "Pushing with back foot.",
    "safetyTips": [
      "Combines unilateral overload with high balance stability."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_single_leg_romanian_deadlift",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_smith_machine_rdl",
    "name": "Smith machine Romanian deadlift",
    "aliases": [
      "Smith RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Unhook bar against thighs. Push hips straight back keeping bar brushing legs along fixed vertical path until deep hamstring stretch.",
    "mistakes": "Standing too far forward of bar.",
    "safetyTips": [
      "Fixed bar path allows deep focus on hip hinge excursion."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_single_leg_deadlift",
    "name": "Kettlebell single-leg deadlift",
    "aliases": [
      "KB single leg RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Ankles"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold kettlebell in opposite hand of working leg. Hinge down tracing bell towards foot, extending rear leg straight back. Stand tall.",
    "mistakes": "Hips tilting open.",
    "safetyTips": [
      "Keep rear toes pointing down."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_single_leg_romanian_deadlift",
      "ex_b_stance_dumbbell_rdl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_seated_hamstring_curl",
    "name": "Cable seated hamstring curl (bench & ankle cuff)",
    "aliases": [
      "Cable leg curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit on bench facing low pulley with cuff on ankle. Curl heel towards bench underside against cable tension.",
    "mistakes": "Lifting knee up.",
    "safetyTips": [
      "Continuous cable resistance curve."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_seated_leg_curl",
      "ex_standing_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_landmine_romanian_deadlift",
    "name": "Landmine Romanian deadlift",
    "aliases": [
      "Landmine RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand facing landmine bar holding collar end with both hands. Hinge back deeply at hips allowing bar to follow natural curved arc down.",
    "mistakes": "Squatting with knees.",
    "safetyTips": [
      "Curved arc naturally pushes hips backward."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_cable_pull_through"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_slider_single_leg_curl",
    "name": "Single-leg slider hamstring curl",
    "aliases": [
      "Unilateral slider curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "8-12 per leg",
    "difficulty": "advanced",
    "movementPattern": "Knee flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Single heel on slider with opposite leg in air. Bridge hips up and curl slider in and out using one hamstring.",
    "mistakes": "Hips dropping onto floor.",
    "safetyTips": [
      "Brutal eccentric test."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_slider_hamstring_curl",
      "ex_nordic_hamstring_curl"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_dumbbell_stiff_leg_deadlift",
    "name": "Dumbbell stiff-leg deadlift",
    "aliases": [
      "DB SLDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Keep legs straight with knees soft but locked in place. Hinge down until dumbbells reach shoelaces, feeling intense hamstring stretch. Stand up.",
    "mistakes": "Bending knees during descent.",
    "safetyTips": [
      "Do not round lower back to reach lower."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_barbell_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_snatch_grip_rdl",
    "name": "Snatch-grip barbell Romanian deadlift",
    "aliases": [
      "Snatch grip RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Upper back",
      "Glutes",
      "Lats"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-10",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Wide snatch grip on barbell. Hinge hips back into deep stretch. Wide grip pulls torso further down and engages upper back.",
    "mistakes": "Losing upper back tightness.",
    "safetyTips": [
      "Use straps if grip gives out."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_snatch_grip_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_reverse_hyper",
    "name": "Reverse hyperextension (hamstrings & glutes)",
    "aliases": [
      "Reverse hyper"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Torso strapped onto reverse hyper table with legs hanging down with pendulum strap. Swing legs up to parallel with floor using hamstrings and glutes.",
    "mistakes": "Yanking with upper body.",
    "safetyTips": [
      "Decompresses lumbar spine while loading posterior chain."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_seated_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_standing_hamstring_curl",
    "name": "Standing resistance band leg curl",
    "aliases": [
      "Standing band curl"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-20 per leg",
    "difficulty": "beginner",
    "movementPattern": "Knee flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Anchor band low. Face anchor, loop around working heel. Stand tall and curl heel up towards glute against band resistance.",
    "mistakes": "Swinging knee forward.",
    "safetyTips": [
      "Keep thighs aligned."
    ],
    "variationGroupId": "var_leg_curl",
    "alternativeExerciseIds": [
      "ex_standing_leg_curl",
      "ex_lying_leg_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_deficit_romanian_deadlift",
    "name": "Deficit barbell Romanian deadlift",
    "aliases": [
      "Deficit RDL"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand on 2-inch plate or low box. Hinge down with barbell, taking advantage of extra elevation to achieve maximum possible hamstring stretch.",
    "mistakes": "Spine rounding at maximum depth.",
    "safetyTips": [
      "Only for lifters with complete hamstring flexibility."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_romanian_deadlift",
      "ex_db_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_hip_thrust_machine",
    "name": "Hip thrust machine",
    "aliases": [
      "Machine hip thrust",
      "Glute drive"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Adductors"
    ],
    "equipment": "Machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Fasten belt across hips. Upper back supported on pad, feet flat on platform shoulder-width apart. Drive hips up until thighs and torso align straight. Squeeze glutes hard for 1-2 seconds, then lower with control.",
    "mistakes": "Hyperextending the lower back at the top, lifting heels off the platform, looking straight up (flare ribs).",
    "safetyTips": [
      "Keep chin tucked to chest and eyes looking forward to keep pelvis in posterior tilt."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_cable_glute_kickback",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_hip_thrust",
    "name": "Barbell hip thrust",
    "aliases": [
      "BB hip thrust",
      "Barbell glute drive"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Adductors"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Upper back against flat bench. Roll padded barbell over hips. Feet flat on floor, shins vertical at top. Drive through heels to full hip extension, tuck chin, hold peak glute squeeze for 2 seconds. Lower slowly.",
    "mistakes": "Arching lumbar spine, shins angling too far forward or back, neck thrown backward.",
    "safetyTips": [
      "Always use a thick foam barbell pad to protect pubic bone and pelvis."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_hip_thrust_machine",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_glute_bridge_dumbbell",
    "name": "Dumbbell glute bridge",
    "aliases": [
      "Floor glute bridge",
      "DB glute bridge"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Lie on floor with knees bent and feet flat hip-width apart. Rest dumbbell across hips. Drive through heels lifting hips until body forms straight line from knees to shoulders. Squeeze glutes 2 seconds at top.",
    "mistakes": "Hyperextending lower back, pushing through toes.",
    "safetyTips": [
      "Posterior pelvic tilt at the top maximizes glute activation."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_single_leg_glute_bridge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_glute_bridge",
    "name": "Single-leg glute bridge",
    "aliases": [
      "Unilateral glute bridge",
      "One-leg bridge"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on back, one foot flat with knee bent, opposite leg extended in air. Drive working heel into floor lifting hips up until level. Hold glute squeeze, then lower.",
    "mistakes": "Pelvis tilting or dropping to one side.",
    "safetyTips": [
      "Keep pelvis level across both hip bones."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_glute_bridge_dumbbell",
      "ex_single_leg_hip_thrust"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_single_leg_hip_thrust",
    "name": "Single-leg bench hip thrust",
    "aliases": [
      "One-leg hip thrust",
      "Unilateral hip thrust"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "8-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Shoulders against bench, one foot planted. Drive through heel to elevate hips into lockout, squeezing working glute intensely. Lower under control.",
    "mistakes": "Using non-working leg for momentum.",
    "safetyTips": [
      "Tuck chin and focus on working glute."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_single_leg_glute_bridge"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_cable_glute_kickback",
    "name": "Cable glute kickback",
    "aliases": [
      "Standing cable kickback",
      "Ankle strap cable kickback"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Ankle cuff attached to low pulley. Face stack with slight forward lean holding frame. Kick working leg straight back and slightly outward, squeezing glute at peak. Lower smoothly.",
    "mistakes": "Arching lumbar spine to fake height, swinging leg with momentum.",
    "safetyTips": [
      "Keep lower back braced still; motion only occurs at hip joint."
    ],
    "variationGroupId": "var_glute_kickback",
    "alternativeExerciseIds": [
      "ex_donkey_kick",
      "ex_hip_thrust_machine"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_hip_abduction",
    "name": "Standing cable hip abduction",
    "aliases": [
      "Cable side kick",
      "Cable hip abduction"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Tensor fasciae latae"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand side-on to low pulley with cuff on outside ankle. Sweep leg directly out to side away from body, leading with heel. Pause 1 second at top and lower with control.",
    "mistakes": "Leaning torso away from cable, rotating toes upward.",
    "safetyTips": [
      "Keep toes pointing straight ahead or slightly turned inward to target gluteus medius."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_seated_hip_abduction_machine",
      "ex_side_lying_clam"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_seated_hip_abduction_machine",
    "name": "Seated machine hip abduction",
    "aliases": [
      "Outer thigh machine",
      "Abductor machine"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Tensor fasciae latae"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "weight_reps",
    "instructions": "Sit with back flat and pads against outer knees. Push knees outward against pads as wide as possible, pause 2 seconds squeezing outer glutes, and return slowly.",
    "mistakes": "Slouching forward, bouncing knees inward.",
    "safetyTips": [
      "Vary torso angle (upright vs leaning forward) to recruit different glute fibers."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_cable_hip_abduction",
      "ex_band_lateral_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_hip_adduction_machine",
    "name": "Seated machine hip adduction",
    "aliases": [
      "Inner thigh machine",
      "Adductor machine"
    ],
    "category": "legs",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Gracilis"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Hip adduction",
    "trackingType": "weight_reps",
    "instructions": "Sit with pads against inner knees. Squeeze thighs inward together until pads touch, pause 1 second, and open legs slowly under control to full stretch.",
    "mistakes": "Letting weight stack slam, partial range.",
    "safetyTips": [
      "Crucial for groin strength and pelvic stability."
    ],
    "variationGroupId": "var_hip_adduction",
    "alternativeExerciseIds": [
      "ex_copenhagen_plank",
      "ex_sumo_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_copenhagen_plank",
    "name": "Copenhagen adductor plank",
    "aliases": [
      "Copenhagen plank",
      "Adductor side bridge"
    ],
    "category": "legs",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Obliques",
      "Core"
    ],
    "equipment": "Bench",
    "exerciseClass": "isolation",
    "repRange": "20-40s per side",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Side plank position with top foot resting on bench and bottom leg hovering underneath. Lift hips and hold rigid straight line through top inner thigh.",
    "mistakes": "Hips sagging towards floor, rotating shoulders.",
    "safetyTips": [
      "World-class adductor injury prevention exercise."
    ],
    "variationGroupId": "var_hip_adduction",
    "alternativeExerciseIds": [
      "ex_seated_hip_adduction_machine",
      "ex_side_plank"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_band_lateral_walk",
    "name": "Resistance band lateral monster walk",
    "aliases": [
      "Monster walks",
      "Banded side steps"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors",
      "Core"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-20 steps per way",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "weight_reps",
    "instructions": "Loop mini-band around ankles or above knees. Quarter squat stance. Step laterally, maintaining tension on the band without letting knees cave in. Return other way.",
    "mistakes": "Standing up straight, dragging trailing foot without control.",
    "safetyTips": [
      "Keep continuous tension on band throughout entire walk."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_seated_hip_abduction_machine",
      "ex_cable_hip_abduction"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_side_lying_clam",
    "name": "Side-lying clamshell",
    "aliases": [
      "Clamshells",
      "Glute clams"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Rotator cuff hip"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25 per side",
    "difficulty": "beginner",
    "movementPattern": "External rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side with hips and knees bent 45-90 degrees, feet stacked together. Keeping heels together, rotate top knee upward like a clamshell. Squeeze glute medius and lower.",
    "mistakes": "Rolling pelvis backward during opening.",
    "safetyTips": [
      "Keep pelvis tilted slightly forward to isolate gluteus medius."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_cable_hip_abduction",
      "ex_fire_hydrant"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_banded_clamshell",
    "name": "Banded side-lying clamshell",
    "aliases": [
      "Mini-band clamshell"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-20 per side",
    "difficulty": "beginner",
    "movementPattern": "External rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Loop mini-band around knees. Perform clamshell against elastic band tension, squeezing outer upper glute.",
    "mistakes": "Rolling hips back.",
    "safetyTips": [
      "Maintain continuous resistance."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_side_lying_clam",
      "ex_cable_hip_abduction"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_fire_hydrant",
    "name": "Bodyweight fire hydrant",
    "aliases": [
      "Quadruped hip abduction",
      "Fire hydrants"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-20 per side",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "On hands and knees with flat back. Keeping knee bent at 90 degrees, raise one leg out to side until parallel to floor. Pause, lower under control.",
    "mistakes": "Shifting all weight to opposite hand, arching spine.",
    "safetyTips": [
      "Keep weight centered evenly across both hands."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_side_lying_clam",
      "ex_cable_hip_abduction"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_donkey_kick",
    "name": "Bodyweight donkey kick",
    "aliases": [
      "Glute kickback",
      "Quadruped hip extension"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Hands and knees position. Keeping working knee bent at 90 degrees, drive heel straight up towards ceiling, squeezing glute at top. Lower slowly without touching floor.",
    "mistakes": "Arching lumbar spine to lift leg higher.",
    "safetyTips": [
      "Movement stops once hip reaches full extension."
    ],
    "variationGroupId": "var_glute_kickback",
    "alternativeExerciseIds": [
      "ex_cable_glute_kickback",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_banded_donkey_kick",
    "name": "Resistance band donkey kick",
    "aliases": [
      "Banded glute kick"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "12-20 per side",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Loop mini-band around thighs above knees. Drive heel to ceiling against band tension, holding 1 second squeeze.",
    "mistakes": "Pelvic rotation.",
    "safetyTips": [
      "Brace core tight."
    ],
    "variationGroupId": "var_glute_kickback",
    "alternativeExerciseIds": [
      "ex_donkey_kick",
      "ex_cable_glute_kickback"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_frog_pump",
    "name": "Frog pump",
    "aliases": [
      "Frog bridge",
      "Banded frog pump"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-30",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with soles of feet pressed together (butterfly pose). Drive outer edges of feet into floor and lift hips, squeezing glutes hard at top.",
    "mistakes": "Separating feet, hyperextending back.",
    "safetyTips": [
      "Tremendous glute pump without spinal stress."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_glute_bridge_dumbbell",
      "ex_hip_thrust_machine"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_kas_glute_bridge",
    "name": "Kas glute bridge (barbell)",
    "aliases": [
      "Kas bridge",
      "Controlled barbell glute bridge"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Set up like hip thrust with back on bench. Unlike hip thrust which moves full spine, keep torso stationary and only move hips through upper 4-6 inches of lockout. Pure glute isolation.",
    "mistakes": "Dropping hips all the way down (turns into regular hip thrust).",
    "safetyTips": [
      "Strict short range of motion maintains constant tension on gluteus maximus."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_hip_thrust_machine"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_step_back_glute_lunge",
    "name": "Deficit reverse lunge (glute focus)",
    "aliases": [
      "Glute deficit lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "8-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand on 2-inch plate with dumbbells. Step backward into lunge with forward torso lean (45 degrees), driving load into front glute. Press up through front heel.",
    "mistakes": "Staying fully upright (shifts to quads).",
    "safetyTips": [
      "Forward torso lean stretches glutes significantly at bottom."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_bulgarian_split_squat",
      "ex_walking_dumbbell_lunge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_pull_through_glutes",
    "name": "Wide-stance cable pull-through (glute focus)",
    "aliases": [
      "Glute cable pull-through"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Wide stance with rope cable between legs. Hinge back, then drive hips forward squeezing glutes hard against cable tension.",
    "mistakes": "Pulling with arms.",
    "safetyTips": [
      "Keep arms relaxed; let hips do all the work."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_kettlebell_swing"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_side_lying_leg_raise",
    "name": "Side-lying leg raise",
    "aliases": [
      "Lateral leg raise"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25 per side",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side with bottom knee bent for stability. Raise straight top leg upward to 45 degrees with heel leading. Lower slowly.",
    "mistakes": "Turning toes upward.",
    "safetyTips": [
      "Keep toes pointing forward or slightly down."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_cable_hip_abduction",
      "ex_side_lying_clam"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_smith_machine_hip_thrust",
    "name": "Smith machine hip thrust",
    "aliases": [
      "Smith hip thrust"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Position bench under Smith machine bar. Hook bar across padded hips. Drive hips up and twist bar to unlock. Perform full extension reps, then lock bar.",
    "mistakes": "Bench shifting backwards.",
    "safetyTips": [
      "Block bench against wall or heavy plates so it cannot slide."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_hip_thrust_machine",
      "ex_barbell_hip_thrust"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_hip_thrust",
    "name": "Resistance band hip thrust",
    "aliases": [
      "Banded hip thrust"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Sit on floor against bench. Loop loop band across hips and anchor under both feet. Drive hips up against elastic tension to full lockout.",
    "mistakes": "Losing band tension at bottom.",
    "safetyTips": [
      "Tremendous lockout tension curve."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_seated_abduction_bench",
    "name": "Cable seated hip abduction",
    "aliases": [
      "Bench cable abduction"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hip abduction",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit on bench side-on to low pulley with ankle cuff. Sweep leg outward away from bench against cable tension, pause, and return.",
    "mistakes": "Twisting torso.",
    "safetyTips": [
      "Pure seated abductor resistance."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_seated_hip_abduction_machine",
      "ex_cable_hip_abduction"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_single_leg_cable_pull_through",
    "name": "Single-leg cable pull-through",
    "aliases": [
      "Unilateral pull-through"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Single leg stance facing away from low pulley with rope. Hinge back, then thrust single hip forward into full extension.",
    "mistakes": "Losing balance and falling.",
    "safetyTips": [
      "Keep kickstand toe touched if balance is challenged."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_cable_pull_through_glutes",
      "ex_single_leg_romanian_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_curtsy_squat_bodyweight",
    "name": "Bodyweight curtsy lunge",
    "aliases": [
      "Curtsy step"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "12-20 per side",
    "difficulty": "beginner",
    "movementPattern": "Lunge",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Step back diagonally behind opposite leg. Drop hips down into curtsy squat, feeling deep glute medius stretch. Stand back up.",
    "mistakes": "Knee wobbling.",
    "safetyTips": [
      "Keep front foot flat."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_curtsy_lunge",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_kettlebell_goblet_curtsy_lunge",
    "name": "Kettlebell goblet curtsy lunge",
    "aliases": [
      "KB curtsy lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold kettlebell at chest. Cross leg back into curtsy lunge, lower hips, and drive up through front heel.",
    "mistakes": "Slumping chest.",
    "safetyTips": [
      "Keep spine tall."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_curtsy_lunge",
      "ex_walking_dumbbell_lunge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_glute_hyperextension",
    "name": "45-degree hyperextension (glute focus)",
    "aliases": [
      "Round back hyperextension"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Set 45-degree bench below hip bone. Turn toes outward at 45 degrees and flare knees. Round upper back slightly to remove erectors from movement. Extend through hips squeezing glutes.",
    "mistakes": "Arching lower back.",
    "safetyTips": [
      "Upper back rounding isolates gluteal hip extension."
    ],
    "variationGroupId": "var_back_extension",
    "alternativeExerciseIds": [
      "ex_back_hyperextension",
      "ex_barbell_hip_thrust"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_frog_pump",
    "name": "Weighted dumbbell frog pump",
    "aliases": [
      "DB frog pump"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Soles of feet together, knees flared wide. Place dumbbell across pelvis. Drive into floor lifting hips and contracting glutes hard.",
    "mistakes": "Knees closing together.",
    "safetyTips": [
      "Hold dumbbell firmly in place with hands."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_frog_pump",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_b_stance_hip_thrust",
    "name": "B-stance barbell hip thrust",
    "aliases": [
      "Kickstand hip thrust"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "One working foot flat, trailing foot forward on heel acting as a kickstand. Drive through working heel to lockout.",
    "mistakes": "Pushing with kickstand leg.",
    "safetyTips": [
      "Allows near-unilateral overload with bilateral barbell stability."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_single_leg_hip_thrust"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_glute_band_seated_abduction_tuck",
    "name": "Seated band hip abduction (3-way lean)",
    "aliases": [
      "3-way banded abduction"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "30 reps (10 lean back, 10 upright, 10 lean forward)",
    "difficulty": "beginner",
    "movementPattern": "Hip abduction",
    "trackingType": "weight_reps",
    "instructions": "Loop band around knees. Perform 10 abductions leaning back, 10 upright, 10 leaning forward. Targets all angles of glute medius and minimus.",
    "mistakes": "Rushing reps without full spread.",
    "safetyTips": [
      "Unreal glute burn finisher."
    ],
    "variationGroupId": "var_hip_abduction",
    "alternativeExerciseIds": [
      "ex_seated_hip_abduction_machine",
      "ex_band_lateral_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_standing_kickback",
    "name": "Standing resistance band glute kickback",
    "aliases": [
      "Banded standing kickback"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "15-20 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Loop mini-band around ankles. Hold wall for support. Kick working leg back at 45 degrees, squeezing glute.",
    "mistakes": "Arching back.",
    "safetyTips": [
      "Keep torso steady."
    ],
    "variationGroupId": "var_glute_kickback",
    "alternativeExerciseIds": [
      "ex_cable_glute_kickback",
      "ex_donkey_kick"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_rainbow_glute_kick",
    "name": "Bodyweight glute rainbow",
    "aliases": [
      "Rainbow kicks"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-20 per leg",
    "difficulty": "beginner",
    "movementPattern": "Hip extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "On hands and knees, extend one leg straight back. Tap toe to far left, lift in high rainbow arc, and tap far right. Squeeze glute throughout.",
    "mistakes": "Twisting hips heavily.",
    "safetyTips": [
      "Keep core braced."
    ],
    "variationGroupId": "var_glute_kickback",
    "alternativeExerciseIds": [
      "ex_donkey_kick",
      "ex_fire_hydrant"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_kneeling_squat_glute",
    "name": "Kneeling barbell squat (glute squeeze)",
    "aliases": [
      "Kneeling squat"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Hip extension",
    "trackingType": "weight_reps",
    "instructions": "Kneel on mat with barbell across upper traps. Sit hips back onto heels, then thrust hips forward to vertical, squeezing glutes to peak contraction.",
    "mistakes": "Hyperextending spine.",
    "safetyTips": [
      "Use thick mat under knees for joint comfort."
    ],
    "variationGroupId": "var_hip_thrust",
    "alternativeExerciseIds": [
      "ex_barbell_hip_thrust",
      "ex_glute_bridge_dumbbell"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_sumo_squat_glute",
    "name": "Dumbbell sumo squat (glute focus)",
    "aliases": [
      "Plie squat",
      "Wide stance DB squat"
    ],
    "category": "legs",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Adductors",
      "Quadriceps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Wide stance with toes pointed out at 45 degrees. Hold dumbbell between legs. Squat deep feeling adductor and glute stretch, then drive through heels to stand.",
    "mistakes": "Knees caving inward.",
    "safetyTips": [
      "Keep knees tracking strictly over pointed toes."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_goblet_squat",
      "ex_barbell_hip_thrust"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_calf_raise",
    "name": "Standing calf raise",
    "aliases": [
      "Standing machine calf raise",
      "Calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Balls of feet on platform, knees soft and straight. Rise as high as possible onto toes, pause 1 second at top, then lower until calves stretch fully. Hold stretch 1 second before rising.",
    "mistakes": "Bouncing rapidly at bottom (uses Achilles tendon recoil instead of muscle), bending knees to cheat, cutting range of motion.",
    "safetyTips": [
      "Do not bounce out of bottom stretch to prevent Achilles tendon inflammation."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_seated_calf_raise",
      "ex_single_leg_standing_calf_raise",
      "ex_leg_press_calf_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_calf_raise",
    "name": "Seated calf raise",
    "aliases": [
      "Seated machine calf raise",
      "Soleus calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Soleus",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Sit with pads on lower thighs and balls of feet on platform. Lower heels to deep stretch, pause, then press up onto balls of feet as high as possible.",
    "mistakes": "Rushing reps, limited range, letting weight stack rest between reps.",
    "safetyTips": [
      "Bent knee at 90 degrees slackens gastrocnemius, isolating soleus muscle."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_dumbbell_seated_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_leg_press_calf_press",
    "name": "Leg press calf press (toe press)",
    "aliases": [
      "Calf press on leg press",
      "45 degree toe press"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Balls of feet on bottom edge of leg press platform with heels hanging free. Knees locked soft. Press sled away by extending ankles, pause, then lower to deep stretch.",
    "mistakes": "Bending knees into a leg press, feet slipping off edge.",
    "safetyTips": [
      "Keep safety catches engaged so sled cannot drop too low if feet slip."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_seated_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_standing_calf_raise",
    "name": "Single-leg standing calf raise",
    "aliases": [
      "One-leg calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-20 per leg",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Stand on edge of step on one foot, holding wall for balance. Lower heel deep into stretch, pause 2 seconds, then press up onto big toe as high as possible. Pause at top.",
    "mistakes": "Bouncing, rolling onto outside of foot.",
    "safetyTips": [
      "Focus pressure through the ball of the big toe for complete medial head recruitment."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_smith_machine_calf_raise"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_smith_machine_calf_raise",
    "name": "Smith machine standing calf raise",
    "aliases": [
      "Smith calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Smith machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Place calf block or weight plate under Smith machine bar. Stand on balls of feet with bar on traps. Lower into deep stretch, then elevate onto toes.",
    "mistakes": "Block sliding, bending knees.",
    "safetyTips": [
      "Ensure calf block is completely stable."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_leg_press_calf_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_seated_calf_raise",
    "name": "Dumbbell seated calf raise (bench & block)",
    "aliases": [
      "Seated DB calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Soleus",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Sit on bench with balls of feet on block. Rest heavy dumbbells vertically on knees. Lower heels, pause, and press onto toes.",
    "mistakes": "Dumbbells slipping off knees.",
    "safetyTips": [
      "Use towel over knees for comfort."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_seated_calf_raise",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_donkey_calf_raise",
    "name": "Donkey calf raise",
    "aliases": [
      "Bent-over calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "intermediate",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Hinge forward at waist 90 degrees with hips under machine pad or partner sitting on hips. Lower heels into deep stretch, then press up onto toes.",
    "mistakes": "Bending knees, rounding back.",
    "safetyTips": [
      "Arnold favorite; stretched hamstring position elevates gastrocnemius recruitment."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_leg_press_calf_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_tibialis_raise",
    "name": "Wall tibialis anterior raise",
    "aliases": [
      "Tib raise",
      "Shin raise"
    ],
    "category": "legs",
    "primaryMuscle": "Tibialis anterior",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-25",
    "difficulty": "beginner",
    "movementPattern": "Dorsiflexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand with back against wall, feet 1-2 feet out in front with legs straight. Pull toes up towards shins as high as possible, hold 1 second, and lower under control.",
    "mistakes": "Bending knees, letting hips leave wall.",
    "safetyTips": [
      "Strengthens shin muscles, preventing shin splints and knee pain."
    ],
    "variationGroupId": "var_tibialis",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_seated_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_tibialis_raise",
    "name": "Dumbbell tibialis raise (heel on bench)",
    "aliases": [
      "Weighted shin raise"
    ],
    "category": "legs",
    "primaryMuscle": "Tibialis anterior",
    "secondaryMuscles": [],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "15-20 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Dorsiflexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit with legs extended on bench and feet hanging off. Hang dumbbell or kettlebell from foot. Dorsiflex ankle pulling toes up against load.",
    "mistakes": "Dropping weight.",
    "safetyTips": [
      "Essential for complete lower leg balance."
    ],
    "variationGroupId": "var_tibialis",
    "alternativeExerciseIds": [
      "ex_tibialis_raise",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_jump_rope",
    "name": "Jump rope (skipping)",
    "aliases": [
      "Jump rope",
      "Skipping rope"
    ],
    "category": "cardio",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Cardiovascular system",
      "Forearms",
      "Soleus"
    ],
    "equipment": "Jump rope",
    "exerciseClass": "compound",
    "repRange": "2-5 min",
    "difficulty": "beginner",
    "movementPattern": "Jump",
    "trackingType": "duration",
    "instructions": "Bounce lightly on balls of feet, turning rope with small wrist circles. Keep knees slightly soft and land softly on forefeet.",
    "mistakes": "Jumping too high, kicking heels back.",
    "safetyTips": [
      "High elastic calf training and cardiovascular conditioning."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_box_jump"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_barbell_standing_calf_raise",
    "name": "Barbell standing calf raise (free barbell)",
    "aliases": [
      "Free bar calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "advanced",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Barbell across upper traps. Balance balls of feet on wooden block. Rise high onto toes, pause, and lower to stretch.",
    "mistakes": "Losing balance and stepping off block.",
    "safetyTips": [
      "Requires high balance control; prefer Smith machine if balance wavers."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_smith_machine_calf_raise",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_hack_squat_calf_raise",
    "name": "Hack squat calf raise",
    "aliases": [
      "Hack machine toe press"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Stand on bottom edge of hack squat platform with shoulders under pads. Knees straight and soft. Press toes into platform raising sled up.",
    "mistakes": "Bending knees.",
    "safetyTips": [
      "Keep safety latch reachable."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_leg_press_calf_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_calf_press",
    "name": "Resistance band seated calf press",
    "aliases": [
      "Banded ankle plantarflexion"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "20-30",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Sit on floor with legs extended. Loop resistance band around ball of foot holding ends tightly. Point toes forward against band resistance, hold, and return.",
    "mistakes": "Band slipping off foot.",
    "safetyTips": [
      "Wrap band securely around forefoot."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_seated_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_seated_calf_raise",
    "name": "Single-leg seated calf raise machine",
    "aliases": [
      "Unilateral seated calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Soleus",
    "secondaryMuscles": [
      "Calves"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit at machine with only one foot on platform. Lower into full stretch and elevate onto toes, targeting soleus unilaterally.",
    "mistakes": "Twisting ankle.",
    "safetyTips": [
      "Equalizes soleus strength."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_seated_calf_raise",
      "ex_dumbbell_seated_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_farmer_toe_walk",
    "name": "Farmer's toe walk (tiptoe carry)",
    "aliases": [
      "Tiptoe farmer walk"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus",
      "Forearms",
      "Traps"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "30-45s",
    "difficulty": "intermediate",
    "movementPattern": "Loaded carry",
    "trackingType": "duration",
    "instructions": "Hold heavy dumbbells at sides. Rise as high as possible onto balls of toes. Walk forward maintaining maximum elevation on toes without letting heels drop.",
    "mistakes": "Heels touching floor, slouching shoulders.",
    "safetyTips": [
      "Incredible isometric calf burning exercise."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_farmers_walk",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_stair_calf_raise",
    "name": "Staircase bodyweight calf raise (tempo pause)",
    "aliases": [
      "Stair calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-30",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand on bottom step of stairs. Drop heels below step level for 3 second stretch, explode onto toes, pause 2 seconds, and repeat.",
    "mistakes": "Speed bouncing.",
    "safetyTips": [
      "Hold handrail for balance."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_single_leg_standing_calf_raise",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_standing_calf_raise",
    "name": "Cable standing calf raise (belt or bar)",
    "aliases": [
      "Cable calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "instructions": "Attach belt around waist to low pulley while standing on calf block. Rise onto toes against upward cable pull.",
    "mistakes": "Bending knees.",
    "safetyTips": [
      "Direct axial loading without spinal compression."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_standing_calf_raise",
      "ex_leg_press_calf_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_band_tibialis_pull",
    "name": "Seated resistance band tibialis pull",
    "aliases": [
      "Banded ankle dorsiflexion"
    ],
    "category": "legs",
    "primaryMuscle": "Tibialis anterior",
    "secondaryMuscles": [],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "20-25 per leg",
    "difficulty": "beginner",
    "movementPattern": "Dorsiflexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Sit with leg extended. Anchor band in front. Loop over toes and pull toes back towards shin against band tension.",
    "mistakes": "Moving knee.",
    "safetyTips": [
      "Great ankle dorsiflexion rehab."
    ],
    "variationGroupId": "var_tibialis",
    "alternativeExerciseIds": [
      "ex_tibialis_raise",
      "ex_weighted_tibialis_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_single_leg_dumbbell_calf_raise",
    "name": "Single-leg dumbbell calf raise",
    "aliases": [
      "One-arm DB calf raise"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Plantarflexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold dumbbell in hand on working side, ball of foot on block, opposite hand balancing on wall. Full stretch to full contraction.",
    "mistakes": "Swinging dumbbell.",
    "safetyTips": [
      "Progressive overload gold standard for calves."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_single_leg_standing_calf_raise",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_incline_treadmill_walk",
    "name": "Steep incline treadmill walking (calf burn)",
    "aliases": [
      "Incline walk",
      "15% incline walk"
    ],
    "category": "cardio",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Cardiovascular system",
      "Glutes",
      "Soleus"
    ],
    "equipment": "Treadmill",
    "exerciseClass": "compound",
    "repRange": "10-20 min",
    "difficulty": "beginner",
    "movementPattern": "Gait",
    "trackingType": "duration",
    "instructions": "Set treadmill to 12-15% incline at 3-4 km/h. Walk tall without holding handrails, driving through forefeet and calves on every uphill step.",
    "mistakes": "Holding rails and leaning backwards (negates incline completely).",
    "safetyTips": [
      "Do not hold onto handrails; pump arms naturally."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_stairmaster_climber",
      "ex_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_plank",
    "name": "Plank",
    "aliases": [
      "Front plank",
      "Forearm plank"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-60s",
    "difficulty": "beginner",
    "movementPattern": "Anti-extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Forearms under the shoulders, body in a straight line from head to heels. Brace the abs and glutes and hold for the target time without letting the hips sag or pike.",
    "mistakes": "Hips sagging or piking, holding your breath, letting the head drop.",
    "safetyTips": [
      "Keep core braced tight and maintain normal continuous breathing."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_side_plank",
      "ex_dead_bug",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dead_bug",
    "name": "Dead bug",
    "aliases": [
      "Deadbug"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "8-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on your back with arms up and knees over hips. Slowly extend the opposite arm and leg while keeping the lower back pressed to the floor, then return and switch sides.",
    "mistakes": "Lower back arching off the floor, rushing the reps, holding your breath.",
    "safetyTips": [
      "If lower back arches off floor, do not lower leg as far."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_bird_dog",
      "ex_hollow_body_hold"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_hanging_leg_raise",
    "name": "Hanging leg raise",
    "aliases": [
      "Toes to bar",
      "Hanging straight leg raise"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors",
      "Forearms",
      "Lats"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from pull-up bar with overhand grip. Depress shoulder blades. Keeping legs straight, curl pelvis and raise feet up to bar level. Lower under control without swinging.",
    "mistakes": "Swinging legs like a pendulum, arching lower back, using hip flexors without posterior pelvic tilt.",
    "safetyTips": [
      "Ensure pelvis curls upward at top; raising legs alone only uses hip flexors."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_hanging_knee_raise",
      "ex_captain_chair_leg_raise",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_hanging_knee_raise",
    "name": "Hanging knee raise",
    "aliases": [
      "Hanging knee tucks"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors",
      "Forearms"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from bar. Pull knees up towards chest while curling pelvis up. Pause 1 second at top, then lower with control without swinging.",
    "mistakes": "Kicking feet out, kipping.",
    "safetyTips": [
      "Curl pelvis toward sternum at the top of every rep."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_hanging_leg_raise",
      "ex_captain_chair_leg_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_captain_chair_leg_raise",
    "name": "Captain's chair leg raise",
    "aliases": [
      "Power tower leg raise"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Support forearms on pads with back against cushion. Raise straight legs up to 90 degrees or higher, curling tailbone forward. Lower slowly.",
    "mistakes": "Swinging torso, arching lower back off pad.",
    "safetyTips": [
      "Zero grip fatigue required."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_hanging_knee_raise",
      "ex_hanging_leg_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ab_wheel_rollout",
    "name": "Ab wheel rollout (from knees)",
    "aliases": [
      "Ab roller",
      "Kneeling ab rollout"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Core"
    ],
    "equipment": "Ab wheel",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Kneel on mat holding ab wheel. Brace core with round upper back (posterior pelvic tilt). Roll wheel forward slowly until body is extended, then pull back using abs.",
    "mistakes": "Lower back sagging into hyperextension, pulling with hips instead of abs.",
    "safetyTips": [
      "Do not roll further than your core can maintain flat/rounded lumbar spine."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_standing_ab_wheel_rollout",
      "ex_plank",
      "ex_barbell_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_ab_wheel_rollout",
    "name": "Standing ab wheel rollout",
    "aliases": [
      "Standing rollout"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Core"
    ],
    "equipment": "Ab wheel",
    "exerciseClass": "compound",
    "repRange": "3-8",
    "difficulty": "advanced",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From standing with feet wide, roll wheel out until chest hovers just above floor in full extension. Squeeze core violently to roll back to feet.",
    "mistakes": "Spine buckling, nose diving into floor.",
    "safetyTips": [
      "Elite core feat; requires flawless kneeling rollout mastery first."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_ab_wheel_rollout",
      "ex_hanging_leg_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_woodchopper",
    "name": "Standing cable woodchopper (high-to-low)",
    "aliases": [
      "Cable woodchopper",
      "Diagonal cable chop"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Attach handle to high pulley. Stand sideways with arms straight. Rotate torso diagonally down and across body towards opposite knee, pivoting back foot. Return slowly.",
    "mistakes": "Bending elbows into an arm pull, twisting lumbar spine without hip pivot.",
    "safetyTips": [
      "Pivot back foot and hips to protect lumbar spine."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper_low_to_high",
      "ex_pallof_press",
      "ex_russian_twist"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_cable_woodchopper_low_to_high",
    "name": "Standing cable woodchopper (low-to-high)",
    "aliases": [
      "Low cable chop",
      "Reverse woodchopper"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "equipment": "Cable",
    "exerciseClass": "compound",
    "repRange": "10-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Handle at lowest pulley. Stand side-on in quarter squat. Drive through legs and rotate arms diagonally upward across chest to opposite shoulder. Return with control.",
    "mistakes": "Lifting with lower back, stiff ankles.",
    "safetyTips": [
      "Drive movement from hips and core."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper",
      "ex_pallof_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_pallof_press",
    "name": "Cable Pallof press",
    "aliases": [
      "Pallof press",
      "Anti-rotation press"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Anti-rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand perpendicular to chest-height cable. Hold handle with both hands at sternum. Press straight out until arms are extended, resisting the rotational pull for 2 seconds. Return to chest.",
    "mistakes": "Torso twisting towards stack, locking knees stiff.",
    "safetyTips": [
      "Gold standard anti-rotation core stability exercise."
    ],
    "variationGroupId": "var_anti_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper",
      "ex_side_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_side_plank",
    "name": "Side plank hold",
    "aliases": [
      "Lateral plank",
      "Side bridge"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Anti-lateral flexion",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side supported on forearm with elbow directly below shoulder. Feet stacked. Lift hips until body forms straight diagonal line from head to heels. Hold steadily.",
    "mistakes": "Hips drooping towards floor, rolling top hip forward.",
    "safetyTips": [
      "Keep head, spine, and feet perfectly co-linear."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_copenhagen_plank",
      "ex_dumbbell_side_bend"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_russian_twist",
    "name": "Russian twist (bodyweight / weighted)",
    "aliases": [
      "Seated Russian twist"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "20-30 twists",
    "difficulty": "beginner",
    "movementPattern": "Rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on floor with knees bent, torso reclined 45 degrees, feet elevated slightly. Rotate shoulders and hands side to side touching floor beside hips.",
    "mistakes": "Rounding lower back into slump, moving only hands without rotating ribcage.",
    "safetyTips": [
      "Rotate through thoracic spine and ribcage, not just flicking wrists."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper",
      "ex_bicycle_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_bicycle_crunch",
    "name": "Bicycle crunch",
    "aliases": [
      "Air bike crunch",
      "Bicycle kicks"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Obliques",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "15-25 per side",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion & rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back, hands behind head. Lift shoulder blades. Bring right elbow to meet left knee while extending right leg straight. Rotate and alternate in fluid pedaling cadence.",
    "mistakes": "Yanking on neck with hands, rushing with sloppy rotation.",
    "safetyTips": [
      "Keep lower back pressed into floor; do not pull on head."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_russian_twist",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_crunch",
    "name": "Kneeling cable crunch",
    "aliases": [
      "Rope cable crunch",
      "Kneeling rope crunch"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Obliques"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "intermediate",
    "movementPattern": "Spinal flexion",
    "trackingType": "weight_reps",
    "instructions": "Kneel facing high pulley with rope attachment held at sides of head. Lock hips still. Contract abs to curl elbows down towards knees, curling spine into ball. Unroll under control.",
    "mistakes": "Sitting hips back onto heels (turns into hip hinge), pulling rope with arms.",
    "safetyTips": [
      "Keep hips locked stationary; motion is 100% spinal flexion from abs."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_hanging_leg_raise",
      "ex_machine_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_machine_crunch",
    "name": "Seated ab crunch machine",
    "aliases": [
      "Machine crunch",
      "Abdominal machine"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "weight_reps",
    "instructions": "Adjust seat so machine axis aligns with navel. Hold handles, plant feet under pads. Crunch ribcage down towards pelvis, pause 1 second, and return slowly.",
    "mistakes": "Pulling with arms or pushing with legs.",
    "safetyTips": [
      "Focus purely on bringing ribs to pelvis."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_cable_crunch",
      "ex_decline_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_decline_crunch",
    "name": "Decline bench crunch",
    "aliases": [
      "Decline sit-up"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bench",
    "exerciseClass": "isolation",
    "repRange": "15-20",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hook legs into decline bench. Cross arms over chest. Curl shoulders off bench towards pelvis, squeezing abs hard. Lower under control to 3/4 depth.",
    "mistakes": "Sitting all the way up vertical (loses abdominal tension), hyperextending back at bottom.",
    "safetyTips": [
      "Keep continuous tension by stopping before torso goes completely vertical."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_cable_crunch",
      "ex_floor_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_floor_crunch",
    "name": "Standard floor crunch",
    "aliases": [
      "Ab crunch",
      "Floor crunch"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with knees bent and feet flat. Cross hands over chest. Peel shoulder blades off floor curling ribs to hips. Hold 1 second peak squeeze, lower slowly.",
    "mistakes": "Pulling neck with hands, lifting lower back off floor.",
    "safetyTips": [
      "Only lift shoulder blades 3-4 inches; lower back stays glued to floor."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_decline_crunch",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_hollow_body_hold",
    "name": "Gymnastic hollow body hold",
    "aliases": [
      "Hollow hold",
      "Hollow rock hold"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-45s",
    "difficulty": "intermediate",
    "movementPattern": "Anti-extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Lie on back. Press lower back flush into floor. Extend arms overhead by ears and legs straight 6 inches above floor forming a banana/canoe shape. Hold rigid.",
    "mistakes": "Lower back peeling up from floor, holding breath.",
    "safetyTips": [
      "Tuck knees slightly if lower back cannot maintain floor contact."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_dead_bug",
      "ex_l_sit"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_l_sit",
    "name": "L-sit hold (parallel bars / dip bars)",
    "aliases": [
      "L-sit",
      "Dip bar L-sit"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors",
      "Triceps",
      "Shoulders",
      "Quadriceps"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "10-30s",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Support body on parallel bars with arms locked straight. Lift legs straight out in front parallel to floor forming a 90-degree L. Hold statically.",
    "mistakes": "Bending knees, slouching shoulders into ears, hips swinging.",
    "safetyTips": [
      "Depress shoulders down forcefully throughout hold."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_hanging_leg_raise",
      "ex_hollow_body_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ab_vacuum",
    "name": "Stomach vacuum (transverse abdominis hold)",
    "aliases": [
      "Stomach vacuum",
      "TVA vacuum"
    ],
    "category": "core",
    "primaryMuscle": "Transverse abdominis",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-30s",
    "difficulty": "beginner",
    "movementPattern": "Abdominal compression",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Stand or kneel on all fours. Exhale all air completely from lungs. Pull belly button in and up towards spine as far as possible without breathing. Hold vacuum, then release.",
    "mistakes": "Inhaling during vacuum, holding with full stomach.",
    "safetyTips": [
      "Best performed in the morning on an empty stomach to tighten waistline."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dragon_flag",
    "name": "Dragon flag (Bruce Lee flag)",
    "aliases": [
      "Dragon flag"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Upper back",
      "Triceps",
      "Glutes",
      "Core"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "4-8",
    "difficulty": "advanced",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on flat bench gripping edge beside head. Lift entire torso and legs straight up like a flagpole supported only on upper shoulders. Lower body rigid in one line to bench edge, then raise.",
    "mistakes": "Bending at hips (breaks flagpole alignment), dropping lower back.",
    "safetyTips": [
      "Extreme abdominal overload; master hollow holds and hanging leg raises first."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_hanging_leg_raise",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_v_up",
    "name": "V-up (jackknife crunch)",
    "aliases": [
      "V-ups",
      "Snap crunches"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie flat on back with arms extended overhead. Simultaneously fold body at hips, lifting straight torso and straight legs to touch toes at top of V shape. Lower slowly.",
    "mistakes": "Bending knees heavily, using arm momentum.",
    "safetyTips": [
      "Control the downward descent."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_hollow_body_hold",
      "ex_floor_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_toe_touches_abs",
    "name": "Vertical leg toe touches",
    "aliases": [
      "Toe touches"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with legs pointing straight up at 90 degrees. Reach hands up towards toes, lifting shoulder blades off floor. Pause 1 second and lower.",
    "mistakes": "Swinging legs back and forth.",
    "safetyTips": [
      "Keep legs stationary; crunch comes strictly from upper abs."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_floor_crunch",
      "ex_v_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_reverse_crunch",
    "name": "Reverse crunch (bench / floor)",
    "aliases": [
      "Reverse crunch",
      "Pelvic tilt crunch"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "beginner",
    "movementPattern": "Posterior pelvic tilt",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back holding bench edge overhead. Knees bent. Curl pelvis up towards chest lifting hips 2-3 inches off floor. Lower under control without letting feet touch down.",
    "mistakes": "Swinging legs for momentum, arching back.",
    "safetyTips": [
      "Strict lower abdominal curl."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_hanging_knee_raise",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_windshield_wipers",
    "name": "Hanging windshield wipers",
    "aliases": [
      "Bar windshield wipers"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs",
      "Lats",
      "Forearms"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "advanced",
    "movementPattern": "Rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from pull-up bar and pull feet up to bar into inverted L. Rotate straight legs side to side in a sweeping arc like a windshield wiper while keeping shoulders square.",
    "mistakes": "Dropping legs, swinging hips violently.",
    "safetyTips": [
      "Elite gymnastic rotational strength movement."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_floor_windshield_wipers",
      "ex_hanging_leg_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_floor_windshield_wipers",
    "name": "Floor windshield wipers",
    "aliases": [
      "Lying windshield wipers"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lie on back with arms outstretched in T. Legs straight up at 90 degrees. Lower legs to right hovering 2 inches above floor, bring back to center, and lower to left.",
    "mistakes": "Opposite shoulder lifting off floor.",
    "safetyTips": [
      "Keep shoulders glued to floor."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_windshield_wipers",
      "ex_russian_twist"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dumbbell_side_bend",
    "name": "Dumbbell standing side bend",
    "aliases": [
      "DB side bend"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Quadratus lumborum"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Lateral flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold single dumbbell at side (never hold dumbbells in both hands). Bend torso directly to that side down to knee level, then contract opposite oblique to stand upright.",
    "mistakes": "Holding dumbbells in both hands (cancels resistance like a seesaw), twisting torso forward.",
    "safetyTips": [
      "Only load one side at a time to create true lateral resistance."
    ],
    "variationGroupId": "var_anti_lateral_flexion",
    "alternativeExerciseIds": [
      "ex_side_plank",
      "ex_suit_case_carry"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_suit_case_carry",
    "name": "Suitcase carry (unilateral farmer walk)",
    "aliases": [
      "One-arm farmer walk",
      "Suitcase walk"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Forearms",
      "Core",
      "Glutes"
    ],
    "equipment": "Dumbbells",
    "exerciseClass": "compound",
    "repRange": "30-45s per side",
    "difficulty": "intermediate",
    "movementPattern": "Anti-lateral flexion",
    "trackingType": "duration",
    "unilateral": true,
    "instructions": "Hold single heavy dumbbell in one hand. Stand strictly upright with shoulders level. Walk forward in straight line resisting any torso leaning.",
    "mistakes": "Leaning torso away from the dumbbell.",
    "safetyTips": [
      "Keep spine perfectly vertical as if carrying two weights."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_farmers_walk",
      "ex_side_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_barbell_rollout",
    "name": "Barbell rollout (kneeling / standing)",
    "aliases": [
      "Barbell ab rollout"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Anti-extension",
    "trackingType": "weight_reps",
    "instructions": "Kneel with hands shoulder-width on loaded barbell with round plates. Roll bar out until torso is nearly flat, then pull back using abs.",
    "mistakes": "Sagging lower back.",
    "safetyTips": [
      "Wider grip options than standard ab wheel."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_ab_wheel_rollout",
      "ex_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_plank_shoulder_tap",
    "name": "Plank with shoulder taps",
    "aliases": [
      "Shoulder tap plank"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Obliques"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 taps per side",
    "difficulty": "intermediate",
    "movementPattern": "Anti-rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Top push-up plank position with feet slightly wider than hips. Lift one hand and tap opposite shoulder while keeping hips completely still. Alternate.",
    "mistakes": "Rocking and swaying hips side to side.",
    "safetyTips": [
      "Keep hips locked parallel to floor without swaying."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_pallof_press"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_mountain_climber",
    "name": "Mountain climbers",
    "aliases": [
      "Running planks"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Hip flexors",
      "Shoulders",
      "Cardiovascular system"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "30-45s",
    "difficulty": "beginner",
    "movementPattern": "Dynamic plank",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Push-up plank position. Drive knees alternatively towards chest in rapid, controlled running cadence while keeping hips low and back flat.",
    "mistakes": "Bouncing hips high in air, stomping feet.",
    "safetyTips": [
      "Keep shoulders stacked over wrists."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_dead_bug"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_stir_the_pot",
    "name": "Swiss ball stir-the-pot",
    "aliases": [
      "Stability ball stir the pot"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Abs"
    ],
    "equipment": "Exercise ball",
    "exerciseClass": "isolation",
    "repRange": "8-12 circles per direction",
    "difficulty": "advanced",
    "movementPattern": "Anti-extension & anti-rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Forearms in plank on stability ball with feet on floor. Make small smooth circular movements with elbows without letting torso or hips move.",
    "mistakes": "Hips wobbling or sagging.",
    "safetyTips": [
      "McGill big 3 progression for bulletproof core."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_swiss_ball_pike",
    "name": "Swiss ball pike",
    "aliases": [
      "Stability ball pike"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Hip flexors"
    ],
    "equipment": "Exercise ball",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Push-up position with shins on stability ball. Keeping legs straight, pull hips high up into inverted V, rolling ball towards hands. Lower slowly.",
    "mistakes": "Bending knees into tuck, crashing down.",
    "safetyTips": [
      "Keep arms locked straight."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_ab_wheel_rollout",
      "ex_hanging_leg_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_kneeling_pallof_hold",
    "name": "Half-kneeling cable Pallof hold",
    "aliases": [
      "Isometric Pallof hold"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Core",
      "Glutes"
    ],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "20-30s per side",
    "difficulty": "intermediate",
    "movementPattern": "Anti-rotation",
    "trackingType": "hold",
    "instructions": "Half-kneeling perpendicular to cable. Press handle straight out and hold statically, fighting rotation.",
    "mistakes": "Shifting hips.",
    "safetyTips": [
      "Squeeze glute on down knee."
    ],
    "variationGroupId": "var_anti_rotation",
    "alternativeExerciseIds": [
      "ex_pallof_press",
      "ex_side_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_band_woodchopper",
    "name": "Resistance band woodchopper",
    "aliases": [
      "Banded chop"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Abs"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "15-20 per side",
    "difficulty": "beginner",
    "movementPattern": "Rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Anchor band high or low. Rotate arms across torso diagonally against elastic tension.",
    "mistakes": "Bending arms.",
    "safetyTips": [
      "Pivot hips."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper",
      "ex_russian_twist"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_side_plank_hip_dips",
    "name": "Side plank hip dips",
    "aliases": [
      "Hip dip side plank"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "intermediate",
    "movementPattern": "Lateral flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "From side plank, lower bottom hip to gently graze floor, then drive hip high into arch, squeezing bottom oblique.",
    "mistakes": "Rolling shoulders.",
    "safetyTips": [
      "Keep chest open."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_side_plank",
      "ex_dumbbell_side_bend"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_hollow_body_rock",
    "name": "Hollow body rock",
    "aliases": [
      "Hollow rocks"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25 rocks",
    "difficulty": "advanced",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From hollow hold, rock gently forward and backward maintaining the curved rigid canoe shape.",
    "mistakes": "Breaking hollow shape, bending knees.",
    "safetyTips": [
      "Maintain continuous abdominal tension."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_hollow_body_hold",
      "ex_v_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_seated_in_and_outs",
    "name": "Seated in-and-outs (tuck crunches)",
    "aliases": [
      "Seated leg tucks"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "15-25",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on floor with hands behind hips for support. Lean back, extend legs straight, then pull knees to chest while crunching torso forward.",
    "mistakes": "Slumping shoulders.",
    "safetyTips": [
      "Keep core braced."
    ],
    "variationGroupId": "var_crunch",
    "alternativeExerciseIds": [
      "ex_floor_crunch",
      "ex_bicycle_crunch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_flutter_kicks",
    "name": "Flutter kicks",
    "aliases": [
      "Scissor kicks abs"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-45s",
    "difficulty": "beginner",
    "movementPattern": "Anti-extension",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Lie on back with hands under glutes and lower back flat. Flutter legs up and down in small, rapid scissor kicks 6 inches off floor.",
    "mistakes": "Lower back arching off hands.",
    "safetyTips": [
      "Keep kicks small and controlled."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_dead_bug",
      "ex_hollow_body_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_bear_crawl_hold",
    "name": "Quadruped bear crawl hold (hover)",
    "aliases": [
      "Bear hold",
      "Beast hold"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-60s",
    "difficulty": "beginner",
    "movementPattern": "Anti-extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "On hands and knees, knees under hips, hands under shoulders. Lift knees 1 inch off floor and hover with flat back and tight core.",
    "mistakes": "Piking hips, sagging lower back.",
    "safetyTips": [
      "Keep knees 1 inch off floor."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_bird_dog"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_landmine_rotations",
    "name": "Standing landmine rotations (core twist)",
    "aliases": [
      "Landmine rainbow",
      "Landmine twist"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Shoulders",
      "Core"
    ],
    "equipment": "Barbell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotation",
    "trackingType": "weight_reps",
    "instructions": "Hold landmine barbell overhead with straight arms. Pivot hips and rotate bar in wide arc down towards one hip, then sweep up and across to opposite hip.",
    "mistakes": "Bending elbows into a bicep curl.",
    "safetyTips": [
      "Pivot feet and rotate with hips and core."
    ],
    "variationGroupId": "var_rotation",
    "alternativeExerciseIds": [
      "ex_cable_woodchopper",
      "ex_russian_twist"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cable_side_bend",
    "name": "Cable side bend",
    "aliases": [
      "Low cable side bend"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "exerciseClass": "isolation",
    "repRange": "12-15 per side",
    "difficulty": "beginner",
    "movementPattern": "Lateral flexion",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Stand side-on to low pulley holding handle. Lean sideways away from stack, then contract oblique to pull torso straight.",
    "mistakes": "Twisting forward.",
    "safetyTips": [
      "Keep motion strictly in frontal plane."
    ],
    "variationGroupId": "var_anti_lateral_flexion",
    "alternativeExerciseIds": [
      "ex_dumbbell_side_bend",
      "ex_side_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_toes_to_bar",
    "name": "Strict toes-to-bar",
    "aliases": [
      "T2B"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Hip flexors",
      "Forearms"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "advanced",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from pull-up bar. Without kipping, compress torso and raise straight toes until they touch the bar between your hands. Lower with control.",
    "mistakes": "Kipping swing, dropping fast.",
    "safetyTips": [
      "Engage lats to pull body behind bar."
    ],
    "variationGroupId": "var_hanging_core",
    "alternativeExerciseIds": [
      "ex_hanging_leg_raise",
      "ex_dragon_flag"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_weighted_plank",
    "name": "Weighted plank hold",
    "aliases": [
      "Plate loaded plank"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "equipment": "Weight plate",
    "exerciseClass": "isolation",
    "repRange": "30-60s",
    "difficulty": "intermediate",
    "movementPattern": "Anti-extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Have partner place weight plate across mid-back. Hold forearm plank with rigid straight body line.",
    "mistakes": "Hips dropping under plate load.",
    "safetyTips": [
      "Ensure plate sits flat across ribcage/upper pelvis."
    ],
    "variationGroupId": "var_plank",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_inchworm_walkout",
    "name": "Inchworm to plank walkout",
    "aliases": [
      "Inchworms"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From standing, bend at hips with straight legs and touch floor. Walk hands out past push-up position into extended plank, pause 1 second, then walk hands back to feet.",
    "mistakes": "Sagging hips in extended plank.",
    "safetyTips": [
      "Great dynamic warmup and core stabilizer."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_plank",
      "ex_ab_wheel_rollout"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_muscle_up_bar",
    "name": "Bar muscle-up",
    "aliases": [
      "Strict muscle-up",
      "Bar muscleup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Biceps",
      "Shoulders",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "3-6",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull to push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "False grip or strong overhand grip on bar. Pull explosively high to sternum, lean chest over bar during transition, and press out straight to dip lockout.",
    "mistakes": "Chicken winging (one arm over before other), excessive leg flailing.",
    "safetyTips": [
      "Both arms must transition over the bar simultaneously to prevent rotator cuff tears."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_dips_chest"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_muscle_up_rings",
    "name": "Gymnastic ring muscle-up",
    "aliases": [
      "Ring muscle-up"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Biceps",
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "3-6",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull to push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hook wrists in deep false grip on rings. Pull rings to chest, roll shoulders forward through transition, and press up to ring dip support.",
    "mistakes": "Losing false grip at bottom.",
    "safetyTips": [
      "Master false grip pull-ups and deep ring dips before attempting."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_muscle_up_bar",
      "ex_ring_triceps_dips"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_front_lever",
    "name": "Front lever hold",
    "aliases": [
      "Full front lever"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Upper back",
      "Core",
      "Rear delts",
      "Forearms"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "5-15s",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Hang from bar with straight arms. Pull lats down and extend entire body horizontally parallel to floor in straight line from shoulders to toes. Hold.",
    "mistakes": "Bending elbows, piking at hips, sagging hips.",
    "safetyTips": [
      "Pinnacle straight-arm pulling skill; progress through tuck and straddle variations first."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_tuck_front_lever",
      "ex_straight_arm_cable_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_tuck_front_lever",
    "name": "Tuck front lever hold",
    "aliases": [
      "Tucked front lever"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Core",
      "Upper back"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "10-25s",
    "difficulty": "intermediate",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Hang from bar. Pull down with straight arms until back is horizontal to floor with knees tucked tightly to chest. Hold rigid.",
    "mistakes": "Bending elbows, round shoulders.",
    "safetyTips": [
      "Keep elbows locked straight."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_front_lever",
      "ex_scapular_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_back_lever",
    "name": "Back lever hold",
    "aliases": [
      "Gymnastic back lever"
    ],
    "category": "pull",
    "primaryMuscle": "Lower back",
    "secondaryMuscles": [
      "Shoulders",
      "Chest",
      "Biceps",
      "Glutes"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "5-15s",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "From inverted hang, lower body backwards until facing floor in horizontal line. Hold with straight arms and locked core.",
    "mistakes": "Sagging lower back, hyperextending shoulders without preparation.",
    "safetyTips": [
      "Progress slowly to condition distal biceps tendons."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_skin_the_cat",
      "ex_front_lever"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_planche_hold",
    "name": "Planche hold (straddle / full)",
    "aliases": [
      "Full planche",
      "Gymnastic planche"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Chest",
      "Core",
      "Upper back",
      "Triceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-12s",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Place hands on floor or parallettes. Lean shoulders far forward with locked arms, protracting scapulae. Lift legs off floor into horizontal hold.",
    "mistakes": "Bending elbows, drooping hips.",
    "safetyTips": [
      "Ultimate straight-arm pushing feat; requires extensive tendon conditioning."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_planche_lean",
      "ex_tuck_planche"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_tuck_planche",
    "name": "Tuck planche hold",
    "aliases": [
      "Tucked planche"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Chest",
      "Core",
      "Wrists"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20s",
    "difficulty": "intermediate",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Hands on floor. Lean forward until feet float off floor with knees tucked tightly under chest and straight locked arms.",
    "mistakes": "Bent elbows, loose core.",
    "safetyTips": [
      "Keep elbows strictly locked."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_planche_hold",
      "ex_planche_lean"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_planche_lean",
    "name": "Planche lean hold",
    "aliases": [
      "Planche push lean"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Core",
      "Forearms"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-40s",
    "difficulty": "beginner",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Top push-up position. Lean shoulders far forward past wrists with straight arms and protracted scapulae. Hold with toes on floor.",
    "mistakes": "Sagging lower back, bending elbows.",
    "safetyTips": [
      "Warm up wrists thoroughly before set."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_tuck_planche",
      "ex_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_handstand_hold_freestanding",
    "name": "Freestanding handstand hold",
    "aliases": [
      "Handstand",
      "Freestanding HS"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Core",
      "Forearms",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "20-60s",
    "difficulty": "advanced",
    "movementPattern": "Isometric hold",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Kick up into balance on hands. Push tall through shoulders, gaze between thumbs, keep body in rigid straight alignment from wrists to pointed toes.",
    "mistakes": "Arching back (banana handstand), relaxing shoulders.",
    "safetyTips": [
      "Practice pirouette bail or roll-out before freestanding attempts."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_handstand_push_up",
      "ex_pike_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_handstand_wall_walk",
    "name": "Wall walk to chest-to-wall handstand",
    "aliases": [
      "Wall walks",
      "Chest to wall HS"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Triceps",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-8 walkouts",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Start in push-up facing away from wall. Walk feet up wall while walking hands back until chest touches wall in straight handstand. Walk hands forward to return.",
    "mistakes": "Arching back, dropping down out of control.",
    "safetyTips": [
      "Step down with hands under control; do not peel off wall."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_pike_push_up",
      "ex_handstand_hold_freestanding"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_skin_the_cat",
    "name": "Skin the cat (gymnastic rings)",
    "aliases": [
      "Skin the cat"
    ],
    "category": "pull",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Lats",
      "Biceps"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "4-8",
    "difficulty": "intermediate",
    "movementPattern": "Shoulder extension / mobility",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hang from rings. Pull knees to chest and roll backward between rings into inverted hang, lowering feet behind into deep German hang stretch. Pull back up and reverse.",
    "mistakes": "Dropping abruptly into German hang without control.",
    "safetyTips": [
      "Incredible shoulder mobility movement; lower into stretch with high control."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_back_lever",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_push_up",
    "name": "Gymnastic ring push-up",
    "aliases": [
      "Ring pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders",
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lower rings near floor. Perform push-ups with hands on unstable rings, turning palms forward at top lockout to recruit inner chest.",
    "mistakes": "Rings shaking out of control, sagging hips.",
    "safetyTips": [
      "Turn rings outward at top of push-up for full chest contraction."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_ring_triceps_dips"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_archer_push_up",
    "name": "Archer push-up",
    "aliases": [
      "Side-to-side archer pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Wide hand stance. Lower towards one arm like a one-arm push-up while extending opposite arm straight out to the side like an archer drawing a bow. Push back and alternate.",
    "mistakes": "Bending the extended assistance arm, rotating hips.",
    "safetyTips": [
      "Exceptional stepping stone to single-arm push-up."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_one_arm_push_up",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_one_arm_push_up",
    "name": "Single-arm push-up",
    "aliases": [
      "One-arm pushup",
      "One handed pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts",
      "Core",
      "Obliques"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "3-8 per arm",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Feet wide, one hand centered under chest, free hand behind back. Lower chest to floor while resisting torso rotation. Push up powerfully to lockout.",
    "mistakes": "Excessive hip twisting, cutting depth short.",
    "safetyTips": [
      "Keep wide foot base for triangular stability."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_archer_push_up",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_archer_pull_up",
    "name": "Archer pull-up",
    "aliases": [
      "Archer pullup",
      "Side-to-side pull up"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "4-8 per side",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Wide overhand grip. Pull body up towards one hand while extending opposite arm straight along the bar. Lower to center and repeat on other side.",
    "mistakes": "Bending extended arm, swinging legs.",
    "safetyTips": [
      "Lead progression towards one-arm pull-up."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_one_arm_pull_up",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_one_arm_pull_up",
    "name": "Single-arm pull-up (OAP)",
    "aliases": [
      "One-arm pullup",
      "OAP"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Forearms",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "1-4 per arm",
    "difficulty": "advanced",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Hang from bar with single arm. Pack lat, pull elbow down powerfully, driving chin over bar without kicking. Lower with controlled eccentric.",
    "mistakes": "Yanking violently with shoulder, dropping dead out of lockout.",
    "safetyTips": [
      "Peak calisthenics pulling milestone; requires immense tendon conditioning."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_archer_pull_up",
      "ex_weighted_pull_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_typewriter_pull_up",
    "name": "Typewriter pull-up",
    "aliases": [
      "Typewriter pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Upper back",
      "Rear delts"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "4-8 reps",
    "difficulty": "advanced",
    "movementPattern": "Vertical & horizontal pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Pull up with wide grip until chin clears bar. Maintain top height while sliding horizontally to right hand, then slide horizontally to left hand, then lower.",
    "mistakes": "Dropping height during horizontal transition.",
    "safetyTips": [
      "Maintain chest high near bar throughout slides."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_archer_pull_up",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_clapping_push_up",
    "name": "Clapping plyometric push-up",
    "aliases": [
      "Clap pushup",
      "Plyo push up"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Front delts"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "6-12",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lower chest to floor, explode upward so hands leave floor, clap hands in air, and land softly with elbows absorbing impact into next rep.",
    "mistakes": "Landing on stiff locked wrists, piking hips.",
    "safetyTips": [
      "Land with soft elbows to cushion impact."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_diamond_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_pseudo_planche_push_up",
    "name": "Pseudo planche push-up (PPPU)",
    "aliases": [
      "PPPU",
      "Planche lean push-up"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place hands back by your hips with fingers turned out. Lean shoulders far forward over wrists. Perform push-ups while maintaining forward lean throughout.",
    "mistakes": "Shifting shoulders backward during press.",
    "safetyTips": [
      "Keep forward lean constant through top and bottom."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_planche_lean",
      "ex_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_biceps_curl",
    "name": "Gymnastic ring bodyweight biceps curl",
    "aliases": [
      "Ring curls"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hold rings leaning back in inverted body angle with arms straight. Keeping elbows high and stationary, curl rings to forehead, flexing biceps. Lower slowly.",
    "mistakes": "Dropping elbows into a row, sagging hips.",
    "safetyTips": [
      "Adjust foot position closer or further to modulate resistance."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_ez_bar_curl",
      "ex_inverted_row"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_triceps_extension",
    "name": "Gymnastic ring triceps extension",
    "aliases": [
      "Ring skull crushers"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Elbow extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Lean forward into rings with arms extended overhead. Keeping elbows pointed forward and still, bend elbows lowering head between rings, then press back up.",
    "mistakes": "Flaring elbows, letting hips drop.",
    "safetyTips": [
      "Incredible long head stretch under bodyweight load."
    ],
    "variationGroupId": "var_skull_crusher",
    "alternativeExerciseIds": [
      "ex_bodyweight_triceps_extension",
      "ex_skull_crusher_ez_bar"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_shrimp_squat",
    "name": "Shrimp squat (single leg)",
    "aliases": [
      "Shrimp squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Ankles"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-10 per leg",
    "difficulty": "advanced",
    "movementPattern": "Squat",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Hold one ankle behind you with same-side hand. Squat down on working leg until trailing knee gently taps floor behind heel. Drive through heel to stand.",
    "mistakes": "Crashing onto floor, losing balance.",
    "safetyTips": [
      "Tap knee gently; do not slam into floor."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_pistol_squat",
      "ex_bulgarian_split_squat"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_nordic_quad_extension",
    "name": "Reverse Nordic curl (bodyweight quad extension)",
    "aliases": [
      "Reverse Nordic",
      "Natural leg extension"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip flexors",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Knee extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Tall kneeling position with glutes locked straight. Lean torso backward in a straight line from knees to head, feeling intense quad stretch. Pull back up using quads.",
    "mistakes": "Bending at hips (breaking line), dropping back without control.",
    "safetyTips": [
      "World-class rectus femoris hypertrophy and knee health builder."
    ],
    "variationGroupId": "var_leg_extension",
    "alternativeExerciseIds": [
      "ex_sissy_squat",
      "ex_leg_extension"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_broad_jump",
    "name": "Standing broad jump",
    "aliases": [
      "Long jump",
      "Broad jump"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-8 jumps",
    "difficulty": "intermediate",
    "movementPattern": "Jump",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Quarter squat with arm swing. Explode forward leaping horizontally as far as possible. Land softly in athletic squat absorbing impact.",
    "mistakes": "Stiff-legged landing.",
    "safetyTips": [
      "Land quietly on mid-foot with soft knees."
    ],
    "variationGroupId": "var_jump",
    "alternativeExerciseIds": [
      "ex_box_jump",
      "ex_jump_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_parallette_l_sit_to_tuck_planche",
    "name": "L-sit to tuck planche transition",
    "aliases": [
      "L-sit tuck planche flow"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Abs"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "5-8 transitions",
    "difficulty": "advanced",
    "movementPattern": "Gymnastic flow",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From L-sit on parallettes, swing legs back between arms and tuck knees into chest, leaning forward into tuck planche. Pause and reverse.",
    "mistakes": "Touching feet to floor during swing.",
    "safetyTips": [
      "Demands exceptional shoulder depression and compression strength."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_l_sit",
      "ex_tuck_planche"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_pike_push_up_feet_elevated",
    "name": "Box pike handstand push-up (deep)",
    "aliases": [
      "Deficit box pike pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Traps"
    ],
    "equipment": "Bench",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Feet on high box, hands on low blocks. Pike hips vertically over shoulders. Lower head past hands for deep range, then push up.",
    "mistakes": "Flaring elbows outward.",
    "safetyTips": [
      "Keep elbows tucked 45 degrees."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_handstand_push_up",
      "ex_pike_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_korean_dips",
    "name": "Korean dips (straight bar behind back)",
    "aliases": [
      "Behind back straight bar dip"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders",
      "Lower back"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on single straight bar with hands gripping bar behind back. Drop hips down below bar into deep dip, then press straight back up onto bar.",
    "mistakes": "Shoulders rolling forward painfully.",
    "safetyTips": [
      "Requires elite shoulder extension flexibility; proceed with caution."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_bench_dips"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_spiderman_push_up",
    "name": "Spiderman push-up",
    "aliases": [
      "Spiderman crawl pushup"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Obliques",
      "Triceps",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-16 alternating",
    "difficulty": "intermediate",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "As you lower into push-up, bring right knee outward to touch right elbow. Push up returning leg, and alternate on next rep.",
    "mistakes": "Sagging hips.",
    "safetyTips": [
      "Keep torso low and close to floor."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_push_up",
      "ex_mountain_climber"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_fly",
    "name": "Gymnastic ring chest fly",
    "aliases": [
      "Ring flyes"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Core",
      "Biceps"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "isolation",
    "repRange": "8-12",
    "difficulty": "advanced",
    "movementPattern": "Horizontal adduction",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Start in push-up on rings. Slowly spread arms wide out to sides with slight elbow bend until deep pec stretch. Squeeze arms back together.",
    "mistakes": "Spreading arms too wide and dropping, bent hips.",
    "safetyTips": [
      "Set rings higher to reduce angle until strength is verified."
    ],
    "variationGroupId": "var_chest_fly",
    "alternativeExerciseIds": [
      "ex_dumbbell_chest_fly",
      "ex_ring_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_fallout",
    "name": "Gymnastic ring ab fallout",
    "aliases": [
      "Ring rollout"
    ],
    "category": "core",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Anti-extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Kneel or stand holding rings. Fall forward pushing rings overhead with straight arms into long extension. Pull hands back down to hips using core.",
    "mistakes": "Arching lower back.",
    "safetyTips": [
      "Keep body in locked hollow position."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_ab_wheel_rollout",
      "ex_plank"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_commando_pull_up",
    "name": "Commando pull-up (mixed grip offset)",
    "aliases": [
      "Cliffhanger pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Brachialis",
      "Core"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand under bar sideways with alternating mixed grip. Pull head to right side of bar on one rep, then to left side on next rep.",
    "mistakes": "Head bumping bar, uneven reps.",
    "safetyTips": [
      "Switch hand placements between sets."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_chin_up",
      "ex_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_scapular_dips",
    "name": "Scapular dip shrugs",
    "aliases": [
      "Dip bar scapular shrugs"
    ],
    "category": "push",
    "primaryMuscle": "Lower traps",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "isolation",
    "repRange": "12-15",
    "difficulty": "beginner",
    "movementPattern": "Scapular depression",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Support body on parallel bars with straight arms. Without bending elbows, let shoulders shrug up, then press shoulders down hard to elevate torso.",
    "mistakes": "Bending elbows into dip.",
    "safetyTips": [
      "Vital for developing depression strength for dips and handstands."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_dips_triceps",
      "ex_scapular_pull_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_hindu_push_up",
    "name": "Hindu push-up (dand)",
    "aliases": [
      "Dand",
      "Dive bomber push-up variation"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Spine"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Multi-plane push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Start in downward dog. Swoop chest down grazing floor between hands, curving up into upward dog with arched back. Reverse motion or push hips back to start.",
    "mistakes": "Rushing motion without fluid spinal articulation.",
    "safetyTips": [
      "Builds legendary shoulder stamina and spinal fluidity."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_dive_bomber_push_up",
      "ex_pike_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dive_bomber_push_up",
    "name": "Dive bomber push-up",
    "aliases": [
      "Dive bombers"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Lower back"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-15",
    "difficulty": "intermediate",
    "movementPattern": "Multi-plane push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From downward dog, swoop chest down and through to upward dog, then strictly retrace the exact path backward under the bar to return.",
    "mistakes": "Skipping reverse swoop.",
    "safetyTips": [
      "Demands high shoulder and triceps control."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_hindu_push_up",
      "ex_pike_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_archer_push_up",
    "name": "Gymnastic ring archer push-up",
    "aliases": [
      "Ring archers"
    ],
    "category": "push",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders",
      "Core"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Perform push-up on rings, extending one arm completely out to side like a fly while pressing body with the other arm.",
    "mistakes": "Losing control of ring balance.",
    "safetyTips": [
      "High instability; perform on elevated rings first."
    ],
    "variationGroupId": "var_push_up",
    "alternativeExerciseIds": [
      "ex_archer_push_up",
      "ex_ring_push_up"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_parallette_shoot_through",
    "name": "Parallette shoot-throughs",
    "aliases": [
      "Parallette leg pass"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Hip flexors"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "intermediate",
    "movementPattern": "Dynamic agility",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Start in push-up on parallettes. Jump and swing legs through straight arms into L-sit/reverse plank, then shoot back to push-up without feet touching floor.",
    "mistakes": "Dragging feet on floor, bending arms.",
    "safetyTips": [
      "Keep shoulders depressed."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_l_sit",
      "ex_mountain_climber"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_headstand_push_up",
    "name": "Headstand push-up (against wall)",
    "aliases": [
      "Tripod headstand pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-10",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Tripod headstand against wall. Press hands into floor, extending arms to push head off floor into full handstand.",
    "mistakes": "Hyperextending neck.",
    "safetyTips": [
      "Place pillow or pad under crown of head."
    ],
    "variationGroupId": "var_handstand_push_up",
    "alternativeExerciseIds": [
      "ex_handstand_push_up",
      "ex_pike_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_burpee_calisthenics",
    "name": "Full chest-to-floor burpee with tuck jump",
    "aliases": [
      "Tuck jump burpee",
      "Full burpee"
    ],
    "category": "core",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Chest",
      "Quadriceps",
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-20",
    "difficulty": "intermediate",
    "movementPattern": "Full body metabolic",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Drop down, kick feet back, drop chest and thighs to floor. Push up, jump feet forward to hands, and explode into vertical tuck jump pulling knees to chest.",
    "mistakes": "Sagging hips into floor, landing stiff.",
    "safetyTips": [
      "Absorb landing through mid-foot."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_mountain_climber",
      "ex_jump_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_tuck_planche_push_up",
    "name": "Tuck planche push-up",
    "aliases": [
      "Tuck planche pushup"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Core"
    ],
    "equipment": "Parallel bars",
    "exerciseClass": "compound",
    "repRange": "4-8",
    "difficulty": "advanced",
    "movementPattern": "Horizontal push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From tuck planche on parallettes with feet off floor, bend elbows lowering shoulders forward into push-up, then press back up without feet touching.",
    "mistakes": "Dropping feet to floor, losing forward lean.",
    "safetyTips": [
      "Massive front delt strength required."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_tuck_planche",
      "ex_pseudo_planche_push_up"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_stalder_press_eccentric",
    "name": "Stalder press eccentric negative",
    "aliases": [
      "Straddle press negative"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Hip flexors",
      "Hamstrings"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "3-6 reps",
    "difficulty": "advanced",
    "movementPattern": "Gymnastic compression",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From handstand, straddle legs wide and compress hips slowly, lowering feet towards wrists in deep pike under complete 5-second control.",
    "mistakes": "Falling fast out of handstand.",
    "safetyTips": [
      "Requires extreme active hamstring flexibility."
    ],
    "variationGroupId": "var_calisthenics_skills",
    "alternativeExerciseIds": [
      "ex_handstand_hold_freestanding",
      "ex_l_sit"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_dragon_walks",
    "name": "Dragon walk (calisthenics locomotion)",
    "aliases": [
      "Dragon crawl"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Chest",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "20-30 paces",
    "difficulty": "advanced",
    "movementPattern": "Crawling locomotion",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Low crawling pattern hugging floor. Step opposite hand and foot forward, rotating hips low in smooth serpentine gait.",
    "mistakes": "Lifting hips high.",
    "safetyTips": [
      "Stay 2 inches off floor."
    ],
    "variationGroupId": "var_anti_extension",
    "alternativeExerciseIds": [
      "ex_bear_crawl_hold",
      "ex_mountain_climber"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_pelican_curl",
    "name": "Gymnastic ring Pelican curl",
    "aliases": [
      "Pelican curl",
      "Biceps pelican curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Chest",
      "Front delts"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "isolation",
    "repRange": "4-8",
    "difficulty": "advanced",
    "movementPattern": "Elbow flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "From ring support or inverted hang, lower body into extreme shoulder extension behind back with elbows bending, then curl through biceps to pull body back up.",
    "mistakes": "Dropping down without shoulder conditioning.",
    "safetyTips": [
      "Extreme stress on biceps tendon; proceed with high caution."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_ring_biceps_curl",
      "ex_chin_up_biceps_focus"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_single_leg_calf_bounce",
    "name": "Single-leg reactive pogo hop",
    "aliases": [
      "Pogo hops",
      "Calf pogo jump"
    ],
    "category": "legs",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Ankles",
      "Achilles tendon"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "20-30 hops per leg",
    "difficulty": "intermediate",
    "movementPattern": "Jump",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Hop on ball of one foot with stiff ankle and minimal knee bend, bouncing rapidly like a pogo stick to train elastic tendon stiffness.",
    "mistakes": "Bending knee deep into a squat.",
    "safetyTips": [
      "Land on ball of foot; build elastic Achilles spring."
    ],
    "variationGroupId": "var_jump",
    "alternativeExerciseIds": [
      "ex_jump_rope",
      "ex_single_leg_standing_calf_raise"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_chest_to_bar_pull_up",
    "name": "Strict chest-to-bar pull-up",
    "aliases": [
      "C2B pullup"
    ],
    "category": "pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Upper back",
      "Biceps",
      "Rear delts"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Vertical pull",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Pull up with explosive drive until sternum physically contacts the bar. Pause, then lower under full control to dead hang.",
    "mistakes": "Kipping legs, craning neck to fake depth.",
    "safetyTips": [
      "Touch clavicle or sternum cleanly to bar."
    ],
    "variationGroupId": "var_pull_up",
    "alternativeExerciseIds": [
      "ex_pull_up",
      "ex_muscle_up_bar"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ring_l_sit_dip",
    "name": "Gymnastic ring L-sit dip",
    "aliases": [
      "L-sit ring dip"
    ],
    "category": "push",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Abs",
      "Hip flexors"
    ],
    "equipment": "Gymnastic rings",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Vertical push",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Hold L-sit on rings with legs parallel to floor. Maintain L-sit leg position while performing deep ring dips to lockout.",
    "mistakes": "Dropping legs, swinging rings.",
    "safetyTips": [
      "Requires elite core compression and triceps strength."
    ],
    "variationGroupId": "var_dips",
    "alternativeExerciseIds": [
      "ex_ring_triceps_dips",
      "ex_l_sit"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_outdoor_running",
    "name": "Outdoor road running",
    "aliases": [
      "Jogging",
      "Road running",
      "Distance run"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Calves",
      "Hamstrings",
      "Glutes"
    ],
    "equipment": "Cardio equipment",
    "exerciseClass": "compound",
    "repRange": "20-60 min",
    "difficulty": "beginner",
    "movementPattern": "Running gait",
    "trackingType": "duration",
    "instructions": "Maintain upright posture with slight forward lean from ankles. Land with mid-foot beneath center of mass. Keep cadence around 170-180 steps/min. Breathe rhythmically.",
    "mistakes": "Overstriding (heel striking far ahead of body), slumping shoulders, clenched fists.",
    "safetyTips": [
      "Increase weekly mileage by no more than 10% to prevent shin splints and stress fractures."
    ],
    "variationGroupId": "var_running",
    "alternativeExerciseIds": [
      "ex_treadmill_running",
      "ex_rowing_machine",
      "ex_cycling_road"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_treadmill_running",
    "name": "Treadmill running",
    "aliases": [
      "Treadmill jog",
      "Belt running"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Calves",
      "Hamstrings"
    ],
    "equipment": "Treadmill",
    "exerciseClass": "compound",
    "repRange": "20-45 min",
    "difficulty": "beginner",
    "movementPattern": "Running gait",
    "trackingType": "duration",
    "instructions": "Set incline to 1% to simulate outdoor air resistance. Run centered on the belt with light, quick foot strikes. Keep eyes forward.",
    "mistakes": "Holding handrails while running, looking down at feet.",
    "safetyTips": [
      "Always clip emergency stop cord to clothing."
    ],
    "variationGroupId": "var_running",
    "alternativeExerciseIds": [
      "ex_outdoor_running",
      "ex_incline_treadmill_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_sprint_intervals_track",
    "name": "Track sprint intervals (100m - 200m)",
    "aliases": [
      "Sprints",
      "HIIT sprints",
      "Wind sprints"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Calves",
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "6-10 rounds (100m sprint / 60s rest)",
    "difficulty": "advanced",
    "movementPattern": "Max velocity sprint",
    "trackingType": "duration",
    "instructions": "Accelerate smoothly to maximal sprint velocity. Pump arms powerfully from cheek to hip. Drive knees high and strike ball of foot aggressively into track.",
    "mistakes": "Sprinting cold without comprehensive dynamic warmup, overstriding out of blocks.",
    "safetyTips": [
      "Warm up thoroughly with dynamic drills and progressive striders to prevent hamstring tears."
    ],
    "variationGroupId": "var_running",
    "alternativeExerciseIds": [
      "ex_assault_bike_sprint",
      "ex_hill_sprints"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_hill_sprints",
    "name": "Incline hill sprints",
    "aliases": [
      "Hill runs",
      "Hill sprints"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "6-10 hills (30-50m)",
    "difficulty": "intermediate",
    "movementPattern": "Incline sprint",
    "trackingType": "duration",
    "instructions": "Find 8-15% incline hill. Sprint explosively uphill driving knees and pumping arms. Walk down slowly to fully recover between reps.",
    "mistakes": "Running down hill fast (stresses joints), cutting recovery short.",
    "safetyTips": [
      "Uphill sprinting naturally enforces safe running mechanics and reduces hamstring tear risk."
    ],
    "variationGroupId": "var_running",
    "alternativeExerciseIds": [
      "ex_sprint_intervals_track",
      "ex_incline_treadmill_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_rowing_machine",
    "name": "Concept2 indoor rowing (ergometer)",
    "aliases": [
      "Rowing ergometer",
      "Row erg",
      "C2 row"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Back",
      "Legs",
      "Core",
      "Biceps"
    ],
    "equipment": "Rowing machine",
    "exerciseClass": "compound",
    "repRange": "2000m - 5000m",
    "difficulty": "intermediate",
    "movementPattern": "Rowing stroke",
    "trackingType": "duration",
    "instructions": "Catch: knees bent, shins vertical, arms straight. Drive: push with legs first, swing hips open, pull handle to lower sternum. Recovery: extend arms, swing hips forward, slide knees up.",
    "mistakes": "Bending arms before legs finish driving, hunching lower back, shooting the slide.",
    "safetyTips": [
      "Power is 60% legs, 20% core, 20% arms; do not yank with lower back."
    ],
    "variationGroupId": "var_rowing",
    "alternativeExerciseIds": [
      "ex_skierg_machine",
      "ex_assault_bike"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_rowing_intervals_500m",
    "name": "500m rowing sprint intervals",
    "aliases": [
      "500m row repeats",
      "Erg intervals"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Lats",
      "Quadriceps",
      "Core"
    ],
    "equipment": "Rowing machine",
    "exerciseClass": "compound",
    "repRange": "4-6 rounds (500m / 90s rest)",
    "difficulty": "advanced",
    "movementPattern": "Rowing stroke",
    "trackingType": "duration",
    "instructions": "Row at maximum sustainable pace for 500m holding consistent stroke rate (28-32 spm). Rest 90 seconds paddle, repeat.",
    "mistakes": "Starting at 100% and flying and dying in the first 150 meters.",
    "safetyTips": [
      "Pace the stroke smoothly."
    ],
    "variationGroupId": "var_rowing",
    "alternativeExerciseIds": [
      "ex_rowing_machine",
      "ex_assault_bike_sprint"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_assault_bike",
    "name": "Assault air bike (steady state)",
    "aliases": [
      "Echo bike",
      "Air bike",
      "Fan bike"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Shoulders",
      "Chest",
      "Triceps"
    ],
    "equipment": "Air bike",
    "exerciseClass": "compound",
    "repRange": "15-30 min",
    "difficulty": "intermediate",
    "movementPattern": "Push-pull cycle",
    "trackingType": "duration",
    "instructions": "Adjust seat height so slight knee bend remains at bottom of pedal stroke. Push and pull handles rhythmically in sync with pedaling.",
    "mistakes": "Only pushing with legs and letting arms dangle loosely.",
    "safetyTips": [
      "Push with one arm while pulling with the other in fluid synchronization."
    ],
    "variationGroupId": "var_cycling",
    "alternativeExerciseIds": [
      "ex_assault_bike_sprint",
      "ex_rowing_machine",
      "ex_stationary_bike"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_assault_bike_sprint",
    "name": "Assault air bike Tabata sprint (20s on / 10s off)",
    "aliases": [
      "Air bike sprint",
      "Tabata air bike"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Upper body"
    ],
    "equipment": "Air bike",
    "exerciseClass": "compound",
    "repRange": "8 rounds (20s all-out / 10s rest)",
    "difficulty": "advanced",
    "movementPattern": "Push-pull cycle",
    "trackingType": "duration",
    "instructions": "Pedal and pump arms with absolute maximal wattage for 20 seconds. Coast lightly for 10 seconds. Repeat for 8 total rounds (4 minutes total).",
    "mistakes": "Pacing round 1 conservatively (Tabata is all-out).",
    "safetyTips": [
      "Brace for extreme lactate threshold accumulation."
    ],
    "variationGroupId": "var_cycling",
    "alternativeExerciseIds": [
      "ex_assault_bike",
      "ex_sprint_intervals_track"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_skierg_machine",
    "name": "Concept2 SkiErg",
    "aliases": [
      "SkiErg",
      "Ski machine"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Lats",
      "Triceps",
      "Core",
      "Glutes"
    ],
    "equipment": "SkiErg",
    "exerciseClass": "compound",
    "repRange": "10-20 min",
    "difficulty": "intermediate",
    "movementPattern": "Nordic ski pull",
    "trackingType": "duration",
    "instructions": "Stand facing SkiErg with feet hip-width. Reach arms up high. Hinge at hips while pulling handles down forcefully using lats, triceps, and abdominal crunch. Return arms up smoothly.",
    "mistakes": "Squatting with knees instead of hinging at hips, pulling only with arms.",
    "safetyTips": [
      "Drive the pull with core flexion and hip hinge."
    ],
    "variationGroupId": "var_rowing",
    "alternativeExerciseIds": [
      "ex_rowing_machine",
      "ex_straight_arm_cable_pulldown"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_stationary_bike",
    "name": "Stationary upright exercise bike",
    "aliases": [
      "Spin bike",
      "Stationary cycling"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Calves"
    ],
    "equipment": "Stationary bike",
    "exerciseClass": "compound",
    "repRange": "30-60 min",
    "difficulty": "beginner",
    "movementPattern": "Pedaling cadence",
    "trackingType": "duration",
    "instructions": "Set saddle height to hip level. Pedal with steady cadence (80-95 rpm) against moderate resistance. Keep shoulders relaxed and spine neutral.",
    "mistakes": "Seat set too low (causes anterior knee compression), slouching over handlebars.",
    "safetyTips": [
      "Knee should have 25-30 degree bend at bottom dead center of pedal stroke."
    ],
    "variationGroupId": "var_cycling",
    "alternativeExerciseIds": [
      "ex_cycling_road",
      "ex_assault_bike"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_cycling_road",
    "name": "Outdoor road cycling",
    "aliases": [
      "Road biking",
      "Outdoor cycling"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes",
      "Calves"
    ],
    "equipment": "Bicycle",
    "exerciseClass": "compound",
    "repRange": "45-120 min",
    "difficulty": "beginner",
    "movementPattern": "Pedaling cadence",
    "trackingType": "duration",
    "instructions": "Ride with consistent cadence and smooth 360-degree pedal stroke. Shift gears to maintain 85-95 RPM on flats and 70-80 RPM on climbs.",
    "mistakes": "Grinding at low RPM in too heavy a gear.",
    "safetyTips": [
      "Always wear certified helmet and follow traffic laws."
    ],
    "variationGroupId": "var_cycling",
    "alternativeExerciseIds": [
      "ex_stationary_bike",
      "ex_outdoor_running"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_stairmaster_climber",
    "name": "StairMaster revolving stepmill",
    "aliases": [
      "Stair climber",
      "Stepmill",
      "StairMaster"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Glutes",
      "Quadriceps",
      "Calves"
    ],
    "equipment": "Stair climber",
    "exerciseClass": "compound",
    "repRange": "15-30 min",
    "difficulty": "intermediate",
    "movementPattern": "Step ascent",
    "trackingType": "duration",
    "instructions": "Step in center of revolving stairs with full foot contact. Stand tall without leaning on handrails. Keep steady pace driving through glutes.",
    "mistakes": "Leaning upper body weight onto handrails (burns 50% fewer calories), skipping steps clumsily.",
    "safetyTips": [
      "Lightly brush fingers on rails for balance only; do not bear weight through arms."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_incline_treadmill_walk",
      "ex_dumbbell_step_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_elliptical_trainer",
    "name": "Elliptical cross-trainer",
    "aliases": [
      "Elliptical machine",
      "Cross trainer"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes",
      "Chest",
      "Back"
    ],
    "equipment": "Elliptical",
    "exerciseClass": "compound",
    "repRange": "20-45 min",
    "difficulty": "beginner",
    "movementPattern": "Low-impact glide",
    "trackingType": "duration",
    "instructions": "Step onto footplates. Push and pull moving handles while driving legs in smooth oval path. Keep heels in contact with pedals.",
    "mistakes": "Bouncing onto toes, zero resistance setting (legs freewheeling).",
    "safetyTips": [
      "Zero impact makes this ideal for active recovery or joint rehab."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_stationary_bike",
      "ex_treadmill_running"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_swimming_freestyle",
    "name": "Lap swimming (freestyle / front crawl)",
    "aliases": [
      "Freestyle swim",
      "Front crawl swim"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Core",
      "Chest"
    ],
    "equipment": "Swimming pool",
    "exerciseClass": "compound",
    "repRange": "500m - 2000m",
    "difficulty": "intermediate",
    "movementPattern": "Aquatic locomotion",
    "trackingType": "duration",
    "instructions": "Streamlined horizontal body position with face in water. High elbow catch pulling through water past hips. Continuous flutter kick and bilateral breathing every 3 strokes.",
    "mistakes": "Lifting head up to breathe instead of rotating torso, dropping hips and legs.",
    "safetyTips": [
      "Full body non-impact cardiovascular mastery."
    ],
    "variationGroupId": "var_swimming",
    "alternativeExerciseIds": [
      "ex_rowing_machine",
      "ex_outdoor_running"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_swimming_breaststroke",
    "name": "Lap swimming (breaststroke)",
    "aliases": [
      "Breaststroke swim"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Adductors",
      "Chest",
      "Lats"
    ],
    "equipment": "Swimming pool",
    "exerciseClass": "compound",
    "repRange": "500m - 1500m",
    "difficulty": "intermediate",
    "movementPattern": "Aquatic locomotion",
    "trackingType": "duration",
    "instructions": "Pull arms in wide heart shape, breathe at apex, then whip kick legs together and glide in streamlined pencil pose for 1-2 seconds.",
    "mistakes": "Kicking knees too wide, rushing glide phase.",
    "safetyTips": [
      "Ensure proper knee rotation to avoid swimmer knee strain."
    ],
    "variationGroupId": "var_swimming",
    "alternativeExerciseIds": [
      "ex_swimming_freestyle",
      "ex_rowing_machine"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_battle_ropes",
    "name": "Battle ropes alternating waves",
    "aliases": [
      "Battle ropes",
      "Rope waves"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Shoulders",
      "Forearms",
      "Core",
      "Arms"
    ],
    "equipment": "Battle ropes",
    "exerciseClass": "compound",
    "repRange": "30-45s intervals",
    "difficulty": "intermediate",
    "movementPattern": "Wave oscillation",
    "trackingType": "duration",
    "instructions": "Athletic quarter squat stance holding thick ropes. Vigorously alternate raising and slamming arms to send continuous rhythmic waves into anchor post.",
    "mistakes": "Standing up straight, locking knees, using only wrists.",
    "safetyTips": [
      "Keep core braced tight in solid athletic base."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_assault_bike_sprint",
      "ex_slam_ball"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_battle_rope_slams",
    "name": "Battle ropes double arm power slams",
    "aliases": [
      "Double rope slams"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Lats",
      "Core",
      "Shoulders"
    ],
    "equipment": "Battle ropes",
    "exerciseClass": "compound",
    "repRange": "20-30s intervals",
    "difficulty": "advanced",
    "movementPattern": "Explosive slam",
    "trackingType": "duration",
    "instructions": "Lift both ropes overhead simultaneously extending hips and ankles, then slam ropes down forcefully into floor with deep squat crunch.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Engage full body into the downward slam."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_battle_ropes",
      "ex_slam_ball"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_slam_ball",
    "name": "Medicine ball overhead floor slam",
    "aliases": [
      "Med ball slam",
      "Slam ball"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Abs",
      "Lats",
      "Shoulders",
      "Quadriceps"
    ],
    "equipment": "Medicine ball",
    "exerciseClass": "compound",
    "repRange": "15-25 reps",
    "difficulty": "beginner",
    "movementPattern": "Overhead slam",
    "trackingType": "weight_reps",
    "instructions": "Hold non-bouncing slam ball. Reach high overhead on balls of feet, then throw ball down into floor with maximum force, following through into squat to catch on bounce.",
    "mistakes": "Bending over with straight legs, using a bouncy ball that rebounds into face.",
    "safetyTips": [
      "Only use dead-bounce slam balls; never use high-rebound medicine balls."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_battle_rope_slams",
      "ex_kettlebell_swing"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_sled_push",
    "name": "Weighted sled push (Prowler push)",
    "aliases": [
      "Prowler push",
      "Sled push"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Calves",
      "Glutes",
      "Core"
    ],
    "equipment": "Sled / prowler",
    "exerciseClass": "compound",
    "repRange": "20-40m pushes",
    "difficulty": "intermediate",
    "movementPattern": "Locomotion push",
    "trackingType": "duration",
    "instructions": "Grip vertical posts with arms locked or bent. Lean forward at 45 degrees. March or sprint driving feet aggressively into turf, driving sled forward.",
    "mistakes": "Rounding lower back, slipping on turf.",
    "safetyTips": [
      "Zero eccentric loading means near-zero muscle soreness despite maximum fatigue."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_sled_pull",
      "ex_farmers_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_sled_pull",
    "name": "Backward weighted sled drag",
    "aliases": [
      "Backward sled pull",
      "Knee rehab sled drag"
    ],
    "category": "cardio",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Cardiovascular system",
      "Calves"
    ],
    "equipment": "Sled / prowler",
    "exerciseClass": "compound",
    "repRange": "30-50m drags",
    "difficulty": "beginner",
    "movementPattern": "Locomotion pull",
    "trackingType": "duration",
    "instructions": "Attach strap to waist or hold handles. Walk backward taking deliberate steps, straightening front knee with every step against the sled resistance.",
    "mistakes": "Leaning too far back and losing balance.",
    "safetyTips": [
      "Revered by ATG / Kneesovertoes for patellar tendon restoration and VMO quad hypertrophy."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_sled_push",
      "ex_farmers_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_boxer_skip",
    "name": "Boxer skip jump rope (foot-to-foot)",
    "aliases": [
      "Boxer skip",
      "Speed rope skip"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Calves",
      "Ankles",
      "Shoulders"
    ],
    "equipment": "Jump rope",
    "exerciseClass": "compound",
    "repRange": "3-10 min",
    "difficulty": "intermediate",
    "movementPattern": "Jump",
    "trackingType": "duration",
    "instructions": "Shift weight from one foot to the other on each rope revolution in smooth rhythmic boxer cadence with low, effortless bounces.",
    "mistakes": "Tense shoulders, big arm movements.",
    "safetyTips": [
      "Keep wrist rotations tight and relaxed."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_jump_rope",
      "ex_double_unders"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_double_unders",
    "name": "Jump rope double-unders",
    "aliases": [
      "Double unders",
      "DUs"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Calves",
      "Forearms",
      "Shoulders"
    ],
    "equipment": "Jump rope",
    "exerciseClass": "compound",
    "repRange": "25-50 reps",
    "difficulty": "advanced",
    "movementPattern": "Jump",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Jump slightly higher with straight legs while flicking wrists twice as fast so rope passes under feet twice per single jump.",
    "mistakes": "Piking knees to chest, donkey kicking heels.",
    "safetyTips": [
      "Wrist speed does the work; jump remains vertical and clean."
    ],
    "variationGroupId": "var_calf_raise",
    "alternativeExerciseIds": [
      "ex_jump_rope",
      "ex_boxer_skip"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_burpee_broad_jump",
    "name": "Burpee broad jump",
    "aliases": [
      "Burpee to long jump"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Chest",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "10-15 reps",
    "difficulty": "advanced",
    "movementPattern": "Full body metabolic",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Perform chest-to-floor burpee, snap feet forward into athletic stance, and immediately explode forward into maximal broad jump. Turn and repeat.",
    "mistakes": "Landing stiff.",
    "safetyTips": [
      "Absorb landing softly."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_broad_jump",
      "ex_burpee_calisthenics"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_jumping_jacks",
    "name": "Jumping jacks",
    "aliases": [
      "Star jumps"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Calves",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "1-3 min",
    "difficulty": "beginner",
    "movementPattern": "Full body rhythmic",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Jump feet wide while raising arms overhead to touch palms. Jump feet together while returning arms to sides in steady cadence.",
    "mistakes": "Slapping feet heavily.",
    "safetyTips": [
      "Stay light on balls of feet."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_jump_rope",
      "ex_mountain_climber"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_shadow_boxing",
    "name": "Shadow boxing intervals",
    "aliases": [
      "Shadowboxing"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Shoulders",
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "3x3 min rounds",
    "difficulty": "beginner",
    "movementPattern": "Striking & footwork",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Light on feet, throw jab-cross-hook combinations with head movement, slips, and pivots. Exhale sharply with every punch.",
    "mistakes": "Hyperextending elbows on punches into thin air.",
    "safetyTips": [
      "Snap punches back to chin; do not hyperextend joints."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_heavy_bag_rounds",
      "ex_jump_rope"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_heavy_bag_rounds",
    "name": "Heavy bag boxing rounds",
    "aliases": [
      "Bag work",
      "Heavy bag strikes"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Shoulders",
      "Lats",
      "Core",
      "Chest"
    ],
    "equipment": "Boxing heavy bag",
    "exerciseClass": "compound",
    "repRange": "3-5 rounds (3 min / 1 min rest)",
    "difficulty": "intermediate",
    "movementPattern": "Striking power",
    "trackingType": "duration",
    "instructions": "Wear hand wraps and 14-16oz boxing gloves. Throw solid punch combinations moving around the bag with crisp footwork and defense.",
    "mistakes": "Punching without wraps (sprains wrists), pushing bag instead of snapping punches.",
    "safetyTips": [
      "Always wrap hands and wear gloves to protect delicate carpal bones."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_shadow_boxing",
      "ex_battle_ropes"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_shuttle_runs",
    "name": "5-10-5 agility shuttle run (pro agility)",
    "aliases": [
      "Pro agility shuttle",
      "Pro shuttle"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes",
      "Ankles",
      "Core"
    ],
    "equipment": "Cones",
    "exerciseClass": "compound",
    "repRange": "4-6 sprints",
    "difficulty": "intermediate",
    "movementPattern": "Change of direction sprint",
    "trackingType": "duration",
    "instructions": "Sprint 5 yards right, touch line with right hand. Sprint 10 yards left, touch line with left hand. Sprint 5 yards through center line.",
    "mistakes": "Rounding corners instead of sharp deceleration cut.",
    "safetyTips": [
      "Plant outside foot firmly and sink hips to turn."
    ],
    "variationGroupId": "var_running",
    "alternativeExerciseIds": [
      "ex_sprint_intervals_track",
      "ex_broad_jump"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_skater_jumps",
    "name": "Lateral speed skater bounds",
    "aliases": [
      "Skater hops",
      "Lateral bounds"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Glutes",
      "Quadriceps",
      "Abductors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "20-30 bounds",
    "difficulty": "intermediate",
    "movementPattern": "Lateral bound",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Bound laterally from right leg to left leg, landing softly in quarter squat with trailing leg sweeping behind like a speed skater. Spring back.",
    "mistakes": "Stiff knee landing, losing balance.",
    "safetyTips": [
      "Land quietly and absorb with glute and knee."
    ],
    "variationGroupId": "var_jump",
    "alternativeExerciseIds": [
      "ex_cossack_squat",
      "ex_box_jump"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_high_knees_drill",
    "name": "High knees running in place",
    "aliases": [
      "High knees drill"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Hip flexors",
      "Calves",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "30-45s",
    "difficulty": "beginner",
    "movementPattern": "Running drill",
    "trackingType": "duration",
    "usesBodyweight": true,
    "instructions": "Run vigorously in place, driving knees up to hip level on every stride while pumping arms. Stay springy on balls of feet.",
    "mistakes": "Leaning backward, not lifting knees high enough.",
    "safetyTips": [
      "Maintain slight forward athletic torso angle."
    ],
    "variationGroupId": "var_cardio",
    "alternativeExerciseIds": [
      "ex_mountain_climber",
      "ex_jump_rope"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_rowing_1000m_time_trial",
    "name": "1000m rowing benchmark time trial",
    "aliases": [
      "1k row test"
    ],
    "category": "cardio",
    "primaryMuscle": "Cardiovascular system",
    "secondaryMuscles": [
      "Lats",
      "Legs",
      "Core"
    ],
    "equipment": "Rowing machine",
    "exerciseClass": "compound",
    "repRange": "1000m for time",
    "difficulty": "advanced",
    "movementPattern": "Rowing stroke",
    "trackingType": "duration",
    "instructions": "Row 1000m as fast as possible. Track completion time and average split pace.",
    "mistakes": "Blowing up in first 300m.",
    "safetyTips": [
      "Solid benchmark test for anaerobic threshold."
    ],
    "variationGroupId": "var_rowing",
    "alternativeExerciseIds": [
      "ex_rowing_machine",
      "ex_rowing_intervals_500m"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_worlds_greatest_stretch",
    "name": "World's greatest stretch",
    "aliases": [
      "WGS",
      "Lunge with thoracic rotation"
    ],
    "category": "mobility",
    "primaryMuscle": "Hip flexors",
    "secondaryMuscles": [
      "Thoracic spine",
      "Hamstrings",
      "Glutes",
      "Adductors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-8 reps per side",
    "difficulty": "beginner",
    "movementPattern": "Dynamic mobility flow",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Step forward into deep lunge. Place both hands inside front foot. Drop inside elbow towards floor, then reach that hand up towards ceiling rotating through thoracic spine. Hinge back into hamstring stretch. Repeat.",
    "mistakes": "Rushing through positions, twisting lumbar spine instead of upper back.",
    "safetyTips": [
      "The single most comprehensive full-body mobility flow."
    ],
    "variationGroupId": "var_mobility_flow",
    "alternativeExerciseIds": [
      "ex_cat_cow_stretch",
      "ex_thoracic_spine_open_book"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_cat_cow_stretch",
    "name": "Cat-cow spinal mobility",
    "aliases": [
      "Cat cow",
      "Spinal wave"
    ],
    "category": "mobility",
    "primaryMuscle": "Spine",
    "secondaryMuscles": [
      "Abs",
      "Upper back",
      "Neck"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 cycles",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion & extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "On hands and knees. Inhale, drop belly down, arch back, and look up towards ceiling (Cow). Exhale, round spine up towards ceiling, tuck tailbone and chin to chest (Cat). Flow smoothly.",
    "mistakes": "Forcing range of motion into pain, moving too fast.",
    "safetyTips": [
      "Articulate through each individual vertebra smoothly."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_worlds_greatest_stretch",
      "ex_thoracic_foam_roll"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_thoracic_spine_open_book",
    "name": "Side-lying thoracic open book",
    "aliases": [
      "Open book stretch",
      "T-spine rotation"
    ],
    "category": "mobility",
    "primaryMuscle": "Thoracic spine",
    "secondaryMuscles": [
      "Chest",
      "Shoulders",
      "Upper back"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "8-12 per side",
    "difficulty": "beginner",
    "movementPattern": "Thoracic rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side with knees bent at 90 degrees pinned to floor. Arms outstretched in front. Open top arm in wide arc across ceiling, rotating chest to ceiling while keeping knees glued to floor. Return.",
    "mistakes": "Letting knees lift off floor during rotation.",
    "safetyTips": [
      "Pin knees together or place foam roller under top knee to isolate thoracic spine."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_worlds_greatest_stretch",
      "ex_thread_the_needle"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_pigeon_pose",
    "name": "Pigeon stretch (glute & piriformis)",
    "aliases": [
      "Pigeon pose",
      "Piriformis stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Piriformis",
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "45-90s per side",
    "difficulty": "intermediate",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "From plank, bring one knee forward behind wrist with shin angled across mat. Extend rear leg straight behind. Lower hips towards floor, fold forward over front shin into deep glute stretch.",
    "mistakes": "Twisting hips sideways, knee pain from forcing shin to 90 degrees.",
    "safetyTips": [
      "Angle shin closer to groin if knee feels twisting pressure."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_figure_four_stretch",
      "ex_couch_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_couch_stretch",
    "name": "Couch stretch (quad & hip flexor)",
    "aliases": [
      "Wall quad stretch",
      "Couch hip flexor stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Hip flexors",
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "60-90s per side",
    "difficulty": "intermediate",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Kneel with back shin vertical against wall or couch cushion, knee in corner. Step other foot forward into lunge. Squeeze trailing glute and bring torso upright until immense stretch across quad and hip flexor.",
    "mistakes": "Arching lower back heavily to fake upright posture, leaving glute relaxed.",
    "safetyTips": [
      "Squeeze trailing glute hard to posteriorly tilt pelvis and maximize psoas stretch."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_pigeon_pose",
      "ex_kneeling_hip_flexor_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_kneeling_hip_flexor_stretch",
    "name": "Half-kneeling hip flexor stretch (tuck & drive)",
    "aliases": [
      "Half-kneeling psoas stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Hip flexors",
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Half-kneeling with 90-degree angles in both knees. Tuck pelvis under (posterior tilt). Shift hips forward 2 inches while keeping ribs down and glute squeezed.",
    "mistakes": "Hyperextending spine, lunging too far forward.",
    "safetyTips": [
      "Gentle 2-inch shift with tucked pelvis provides deep psoas release."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_couch_stretch",
      "ex_worlds_greatest_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_frog_stretch",
    "name": "Frog stretch (adductors & hip capsule)",
    "aliases": [
      "Frog pose",
      "Groin stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Hips",
      "Pelvis"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "60-90s",
    "difficulty": "intermediate",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "On hands and knees, slide knees as wide apart as comfortable on padded surface with inner feet flat on floor. Drop forearms to floor and gently push hips back towards heels until deep adductor stretch.",
    "mistakes": "Arching lower back into anterior pelvic tilt.",
    "safetyTips": [
      "Ease gently into depth; use thick padding under knees."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_cossack_squat",
      "ex_butterfly_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_butterfly_stretch",
    "name": "Seated butterfly stretch",
    "aliases": [
      "Butterfly pose",
      "Bound angle stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Groin",
      "Hips"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "45-60s",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Sit tall with soles of feet together. Hold feet with hands and gently press knees towards floor with elbows while keeping spine upright.",
    "mistakes": "Slumping upper back, bouncing knees violently.",
    "safetyTips": [
      "Keep spine tall as you hinge forward from hips."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_frog_stretch",
      "ex_pigeon_pose"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_deep_squat_hold",
    "name": "Deep resting squat hold (Malasana)",
    "aliases": [
      "Asian squat hold",
      "Malasana",
      "Deep squat pry"
    ],
    "category": "mobility",
    "primaryMuscle": "Hips",
    "secondaryMuscles": [
      "Ankles",
      "Quadriceps",
      "Lower back",
      "Adductors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "60-120s",
    "difficulty": "beginner",
    "movementPattern": "Squat mobility",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Drop into full deep squat with heels flat on floor and elbows pressing knees outward. Chest upright, palms pressed together in prayer. Breathe deeply into pelvic floor.",
    "mistakes": "Heels lifting off floor, falling backwards.",
    "safetyTips": [
      "Hold a sturdy pole or doorframe if ankles lack dorsiflexion."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_ankle_wall_stretch",
      "ex_cossack_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_ankle_wall_stretch",
    "name": "Knee-to-wall ankle dorsiflexion test & stretch",
    "aliases": [
      "Ankle dorsiflexion stretch",
      "Wall ankle stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Achilles tendon",
      "Ankles"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-15 dynamic pulses per side",
    "difficulty": "beginner",
    "movementPattern": "Ankle mobility",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Foot 3-4 inches from wall. Drive knee directly forward over big toe until knee touches wall without heel peeling up from floor. Hold 2 seconds, back off and pulse.",
    "mistakes": "Heel lifting off floor, knee collapsing inward.",
    "safetyTips": [
      "Directly improves squat depth and removes knee shear stress."
    ],
    "variationGroupId": "var_ankle_mobility",
    "alternativeExerciseIds": [
      "ex_deep_squat_hold",
      "ex_tibialis_raise"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_band_lat_distraction",
    "name": "Resistance band lat stretch (distraction)",
    "aliases": [
      "Banded lat stretch",
      "Superband lat stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Shoulders",
      "Upper back"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "isolation",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch with distraction",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Loop heavy band overhead. Grip band with palm facing ceiling. Step back into lunge, sink hips back, and let the band pull and decompress shoulder and lat deeply.",
    "mistakes": "Tensing arm muscles, resisting the band stretch.",
    "safetyTips": [
      "Relax into the band tension to gently distract glenohumeral joint."
    ],
    "variationGroupId": "var_shoulder_mobility",
    "alternativeExerciseIds": [
      "ex_puppy_dog_pose",
      "ex_childs_pose"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_childs_pose",
    "name": "Child's pose stretch (Balasana)",
    "aliases": [
      "Balasana",
      "Childs pose"
    ],
    "category": "mobility",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Lower back",
      "Hips",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "60-90s",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Kneel with big toes touching and knees spread wide. Sit hips back onto heels, reach arms far forward along floor, and rest forehead on mat. Breathe deeply.",
    "mistakes": "Hips lifting off heels.",
    "safetyTips": [
      "Gentle restorative stretch for spine and posterior chain."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_puppy_dog_pose",
      "ex_cat_cow_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_puppy_dog_pose",
    "name": "Puppy dog pose (thoracic extension)",
    "aliases": [
      "Melting heart pose",
      "Thoracic puppy pose"
    ],
    "category": "mobility",
    "primaryMuscle": "Thoracic spine",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Chest"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "45-60s",
    "difficulty": "beginner",
    "movementPattern": "Thoracic extension",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "From all fours with hips stacked over knees, walk hands far forward and melt chest towards floor, extending upper back and resting chin or forehead down.",
    "mistakes": "Dropping hips backwards towards heels (turns into child pose).",
    "safetyTips": [
      "Keep hips stacked vertically over knees to isolate thoracic extension."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_childs_pose",
      "ex_thoracic_foam_roll"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_thoracic_foam_roll",
    "name": "Thoracic spine foam roller extension",
    "aliases": [
      "Foam roll t-spine",
      "Roller extensions"
    ],
    "category": "mobility",
    "primaryMuscle": "Thoracic spine",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "equipment": "Foam roller",
    "exerciseClass": "isolation",
    "repRange": "10-15 gentle extensions",
    "difficulty": "beginner",
    "movementPattern": "Thoracic extension",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Place foam roller perpendicular across mid-back. Support head in hands. Inhale and extend upper back backward over roller keeping ribs down. Roll 1 inch and repeat.",
    "mistakes": "Rolling over lower lumbar spine (never roll lower back), pulling on neck.",
    "safetyTips": [
      "Never foam roll the lumbar spine; stay on the thoracic ribcage area."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_puppy_dog_pose",
      "ex_cat_cow_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_doorway_pec_stretch",
    "name": "Standing doorway pectoral stretch",
    "aliases": [
      "Doorway chest stretch",
      "Pec stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Front delts",
      "Biceps"
    ],
    "equipment": "Doorframe",
    "exerciseClass": "isolation",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Place forearm against doorframe at 90 degrees. Step forward with inside foot until a deep stretch is felt across chest and front shoulder. Breathe and hold.",
    "mistakes": "Twisting neck away abruptly, pushing into joint pain.",
    "safetyTips": [
      "Adjust elbow higher or lower to target upper and lower pec fibers."
    ],
    "variationGroupId": "var_shoulder_mobility",
    "alternativeExerciseIds": [
      "ex_prone_scorpion_stretch",
      "ex_band_dislocates"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_band_dislocates",
    "name": "Resistance band shoulder dislocates (pass-throughs)",
    "aliases": [
      "Shoulder pass throughs",
      "Banded dislocates"
    ],
    "category": "mobility",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Upper back"
    ],
    "equipment": "Resistance band",
    "exerciseClass": "compound",
    "repRange": "12-15 passes",
    "difficulty": "beginner",
    "movementPattern": "Shoulder circumduction",
    "trackingType": "bodyweight_reps",
    "instructions": "Grip light band with wide straight arms in front of thighs. Sweep band up and over head in continuous arc until it touches lower back. Reverse smoothly.",
    "mistakes": "Bending elbows to get band around, shrugging shoulders up.",
    "safetyTips": [
      "Keep elbows locked straight; widen grip if arms bend."
    ],
    "variationGroupId": "var_shoulder_mobility",
    "alternativeExerciseIds": [
      "ex_standing_doorway_pec_stretch",
      "ex_face_pull"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_prone_scorpion_stretch",
    "name": "Prone scorpion dynamic stretch",
    "aliases": [
      "Scorpion stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Hip flexors",
      "Lower back",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-10 per side",
    "difficulty": "intermediate",
    "movementPattern": "Rotational dynamic stretch",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie face down with arms outstretched in T. Lift right leg, bend knee, and reach right foot across body to tap floor behind left hip. Return and alternate.",
    "mistakes": "Yanking violently with hip.",
    "safetyTips": [
      "Keep shoulders pinned to floor as much as possible."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_standing_doorway_pec_stretch",
      "ex_thoracic_spine_open_book"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_seated_piriformis_stretch",
    "name": "Seated figure-4 piriformis stretch",
    "aliases": [
      "Figure four stretch",
      "Seated glute stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Piriformis",
      "Hips"
    ],
    "equipment": "Bench",
    "exerciseClass": "isolation",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Sit tall on bench. Cross right ankle over left knee. Hinge forward from hips with flat back until deep stretch in right outer hip. Hold.",
    "mistakes": "Slouching upper back.",
    "safetyTips": [
      "Keep spine tall and hinge from hips."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_pigeon_pose",
      "ex_figure_four_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_figure_four_stretch",
    "name": "Supine figure-4 glute stretch",
    "aliases": [
      "Lying figure 4 stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Piriformis"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on back. Cross ankle over opposite knee. Reach hands through legs to clasp hamstring, pulling knee toward chest.",
    "mistakes": "Tensing neck off floor.",
    "safetyTips": [
      "Rest head flat on mat."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_seated_piriformis_stretch",
      "ex_pigeon_pose"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_thread_the_needle",
    "name": "Thread the needle stretch",
    "aliases": [
      "Quadruped thread the needle"
    ],
    "category": "mobility",
    "primaryMuscle": "Upper back",
    "secondaryMuscles": [
      "Rear delts",
      "Thoracic spine"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "8-10 reps per side",
    "difficulty": "beginner",
    "movementPattern": "Thoracic rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "On hands and knees, reach right arm underneath left armpit until right shoulder and temple rest on floor. Hold, breathe, and return.",
    "mistakes": "Shifting hips sideways.",
    "safetyTips": [
      "Keep hips square."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_thoracic_spine_open_book",
      "ex_cat_cow_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_90_90_hip_mobility",
    "name": "90/90 hip mobility flow",
    "aliases": [
      "90-90 hip switch",
      "Shin box flow"
    ],
    "category": "mobility",
    "primaryMuscle": "Hips",
    "secondaryMuscles": [
      "Glutes",
      "Adductors",
      "Rotator cuff hip"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "8-12 switches",
    "difficulty": "intermediate",
    "movementPattern": "Hip internal & external rotation",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Sit on floor with lead leg in 90-degree external rotation and trail leg in 90-degree internal rotation. Hinge over lead leg, then rotate knees across to opposite side without hands touching floor.",
    "mistakes": "Collapsing posture, lifting feet wildly off floor.",
    "safetyTips": [
      "Use hands behind hips for support if hip rotation is restricted."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_pigeon_pose",
      "ex_frog_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_standing_hamstring_scoop",
    "name": "Dynamic hamstring scoops",
    "aliases": [
      "Hamstring sweep",
      "Walking hamstring scoop"
    ],
    "category": "mobility",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves",
      "Lower back"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-12 per leg",
    "difficulty": "beginner",
    "movementPattern": "Dynamic stretch",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Step one heel forward with toes up and leg straight. Hinge hips back and sweep hands down towards floor past toes in dynamic scoop, then stand and alternate.",
    "mistakes": "Rounding spine without hip hinge.",
    "safetyTips": [
      "Keep heel planted and pull toes towards shin."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_db_romanian_deadlift",
      "ex_inchworm_walkout"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_wrist_mobility_flow",
    "name": "Quadruped wrist mobility sequence",
    "aliases": [
      "Wrist push sequence",
      "Gymnastic wrist warm-up"
    ],
    "category": "mobility",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Wrists"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10 pulses per position",
    "difficulty": "beginner",
    "movementPattern": "Joint mobilization",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "On hands and knees. Pulse wrists forward with fingers pointing ahead, then rotated sideways, rotated backward towards knees, and on backs of hands.",
    "mistakes": "Applying too much bodyweight suddenly.",
    "safetyTips": [
      "Critical pre-workout warm-up for bench, cleans, and calisthenics."
    ],
    "variationGroupId": "var_wrist_curl",
    "alternativeExerciseIds": [
      "ex_wrist_curl",
      "ex_reverse_wrist_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_couch_quad_smash",
    "name": "Foam roller quad tissue release",
    "aliases": [
      "Quad foam rolling"
    ],
    "category": "mobility",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Foam roller",
    "exerciseClass": "isolation",
    "repRange": "60-90s per leg",
    "difficulty": "beginner",
    "movementPattern": "Myofascial release",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Lie prone with foam roller under thigh. Roll slowly from just above knee to hip crease, pausing on trigger points and bending knee to floss muscle fibers.",
    "mistakes": "Rolling over kneecap.",
    "safetyTips": [
      "Do not roll directly over bony patella."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_couch_stretch",
      "ex_kneeling_hip_flexor_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_glute_lacrosse_ball_smash",
    "name": "Glute trigger point release (lacrosse ball)",
    "aliases": [
      "Lacrosse ball glute smash"
    ],
    "category": "mobility",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Piriformis"
    ],
    "equipment": "Lacrosse ball",
    "exerciseClass": "isolation",
    "repRange": "60-90s per side",
    "difficulty": "beginner",
    "movementPattern": "Myofascial release",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Sit on lacrosse ball placed under upper outer glute. Cross ankle over opposite knee and gently oscillate over tight knots, breathing steadily.",
    "mistakes": "Tensing up and holding breath.",
    "safetyTips": [
      "Breathe deeply into discomfort to allow neurological release."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_pigeon_pose",
      "ex_seated_piriformis_stretch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_adductor_rocking_stretch",
    "name": "Half-kneeling adductor rock",
    "aliases": [
      "Adductor rocks"
    ],
    "category": "mobility",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Hips"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "10-12 rocks per side",
    "difficulty": "beginner",
    "movementPattern": "Dynamic mobility",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Kneel on one knee, extend other leg straight out to side with foot flat. Hands on floor. Rock hips backward towards kneeling heel into deep inner thigh stretch, then rock forward.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Dynamic groin opener for squats and deadlifts."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_frog_stretch",
      "ex_cossack_squat"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_shoulder_sleeper_stretch",
    "name": "Side-lying shoulder sleeper stretch",
    "aliases": [
      "Sleeper stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Rear delts"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-45s per side",
    "difficulty": "intermediate",
    "movementPattern": "Internal rotation stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side with bottom shoulder and elbow at 90 degrees. Use top hand to gently guide bottom wrist down towards floor into internal rotation. Hold gently.",
    "mistakes": "Forcing wrist down with aggressive pressure (can pinch anterior capsule).",
    "safetyTips": [
      "Apply very gentle fingertip pressure; never force internal rotation."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_external_cable_shoulder_rotation",
      "ex_band_dislocates"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_standing_quad_stretch",
    "name": "Standing flamingo quad stretch",
    "aliases": [
      "Standing quad stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip flexors"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-45s per leg",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Stand on one leg holding wall. Grab ankle with hand, pull heel to glute, align knees together, and tuck pelvis to stretch front thigh.",
    "mistakes": "Arching low back and pulling knee far back.",
    "safetyTips": [
      "Keep knees together."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_couch_stretch",
      "ex_kneeling_hip_flexor_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_calf_slant_board_stretch",
    "name": "Slant board calf & Achilles stretch",
    "aliases": [
      "Slant board stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Soleus",
      "Achilles tendon",
      "Plantar fascia"
    ],
    "equipment": "Slant board",
    "exerciseClass": "isolation",
    "repRange": "60-120s",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "instructions": "Stand upright on 25-35 degree slant board with heels down and legs straight. Breathe and allow calves and Achilles to decompress.",
    "mistakes": "Bending knees, leaning forward from waist.",
    "safetyTips": [
      "Stand fully tall to stretch gastrocnemius fully."
    ],
    "variationGroupId": "var_ankle_mobility",
    "alternativeExerciseIds": [
      "ex_ankle_wall_stretch",
      "ex_stair_calf_raise"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_bretzel_stretch",
    "name": "The Bretzel mobility stretch",
    "aliases": [
      "Bretzel 1.0",
      "Total body bretzel"
    ],
    "category": "mobility",
    "primaryMuscle": "Thoracic spine",
    "secondaryMuscles": [
      "Hip flexors",
      "Glutes",
      "Quadriceps"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "45-60s per side",
    "difficulty": "advanced",
    "movementPattern": "Multi-planar mobility",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Lie on side. Top knee forward at 90 degrees held down by bottom hand. Bottom knee pulled back with foot grabbed by top hand. Rotate shoulders to floor.",
    "mistakes": "Struggling into position without relaxation.",
    "safetyTips": [
      "Legendary Gray Cook mobility drill combining thoracic rotation and hip extension."
    ],
    "variationGroupId": "var_mobility_flow",
    "alternativeExerciseIds": [
      "ex_worlds_greatest_stretch",
      "ex_thoracic_spine_open_book"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_jefferson_curl_light",
    "name": "Unweighted Jefferson curl spinal articulation",
    "aliases": [
      "Bodyweight Jefferson curl"
    ],
    "category": "mobility",
    "primaryMuscle": "Spine",
    "secondaryMuscles": [
      "Hamstrings",
      "Lower back"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "5-8 slow reps",
    "difficulty": "beginner",
    "movementPattern": "Spinal flexion",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "instructions": "Stand tall. Tuck chin to chest, roll down slowly vertebra by vertebra like a rolling curtain until hands hang past toes. Reverse segment by segment.",
    "mistakes": "Bending knees, rushing.",
    "safetyTips": [
      "Move very slowly segment by segment."
    ],
    "variationGroupId": "var_spinal_mobility",
    "alternativeExerciseIds": [
      "ex_cat_cow_stretch",
      "ex_standing_hamstring_scoop"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_lateral_neck_stretch",
    "name": "Upper trap & levator scapulae neck stretch",
    "aliases": [
      "Neck side stretch"
    ],
    "category": "mobility",
    "primaryMuscle": "Upper traps",
    "secondaryMuscles": [
      "Neck"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "isolation",
    "repRange": "30-45s per side",
    "difficulty": "beginner",
    "movementPattern": "Static stretch",
    "trackingType": "hold",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Sit tall, anchor one hand under bench. Gently tilt head to opposite side, feeling release along upper trap. Rotate chin down to armpit for levator stretch.",
    "mistakes": "Yanking on head with hand.",
    "safetyTips": [
      "Only use gentle hand weight; never forcefully pull neck."
    ],
    "variationGroupId": "var_shoulder_mobility",
    "alternativeExerciseIds": [
      "ex_band_dislocates",
      "ex_cat_cow_stretch"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_standing_figure_four_squat",
    "name": "Standing figure-4 hip mobility squat",
    "aliases": [
      "Figure four balance squat"
    ],
    "category": "mobility",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Ankles",
      "Core"
    ],
    "equipment": "Bodyweight",
    "exerciseClass": "compound",
    "repRange": "5-8 pulses per leg",
    "difficulty": "intermediate",
    "movementPattern": "Hip mobility & balance",
    "trackingType": "bodyweight_reps",
    "usesBodyweight": true,
    "unilateral": true,
    "instructions": "Cross ankle over opposite knee while standing. Sit hips down and back into single-leg quarter squat, feeling deep glute stretch while challenging balance.",
    "mistakes": "Losing balance, rounding back.",
    "safetyTips": [
      "Hold wall lightly if balance wobbles."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_seated_piriformis_stretch",
      "ex_pigeon_pose"
    ],
    "isCustom": false,
    "favorite": false
  },
  {
    "id": "ex_overhead_lat_hang_stretch",
    "name": "Overhead lat passive dead hang stretch",
    "aliases": [
      "Passive lat hang"
    ],
    "category": "mobility",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Shoulders",
      "Spine"
    ],
    "equipment": "Pull-up bar",
    "exerciseClass": "isolation",
    "repRange": "30-60s",
    "difficulty": "beginner",
    "movementPattern": "Decompression hang",
    "trackingType": "hold",
    "usesBodyweight": true,
    "instructions": "Grip bar with feet lightly resting on floor or box to modulate load. Let hips sag, breathing deeply as shoulders and spine decompress overhead.",
    "mistakes": "Tensing shoulders.",
    "safetyTips": [
      "Keep toes touched to reduce bodyweight load as needed."
    ],
    "variationGroupId": "var_shoulder_mobility",
    "alternativeExerciseIds": [
      "ex_dead_hang",
      "ex_band_lat_distraction"
    ],
    "isCustom": false,
    "favorite": false,
    "unilateral": false
  },
  {
    "id": "ex_it_band_foam_roll",
    "name": "TFL & lateral quad foam roller release",
    "aliases": [
      "TFL release",
      "IT band foam roll"
    ],
    "category": "mobility",
    "primaryMuscle": "Tensor fasciae latae",
    "secondaryMuscles": [
      "Quadriceps",
      "Glutes"
    ],
    "equipment": "Foam roller",
    "exerciseClass": "isolation",
    "repRange": "60s per leg",
    "difficulty": "beginner",
    "movementPattern": "Myofascial release",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Side-lying on foam roller targeting the fleshy TFL muscle in front of the hip joint. Roll gently, breathing through tender trigger points.",
    "mistakes": "Aggressively rolling directly over the fibrous lower IT band near knee.",
    "safetyTips": [
      "Target the muscular TFL at hip rather than the non-elastic IT band tendon."
    ],
    "variationGroupId": "var_hip_mobility",
    "alternativeExerciseIds": [
      "ex_glute_lacrosse_ball_smash",
      "ex_side_lying_clam"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_turkish_get_up",
    "name": "Turkish get-up (TGU)",
    "aliases": [
      "TGU",
      "Kettlebell get-up"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Glutes",
      "Quadriceps",
      "Forearms",
      "Upper back"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "3-5 reps per side",
    "difficulty": "advanced",
    "movementPattern": "Multi-planar get-up",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Lie on back holding kettlebell locked overhead. Roll to elbow, press to hand, bridge hips, sweep leg back into half-kneeling, and stand tall with bell locked overhead. Reverse step-by-step back to floor with eyes glued to bell.",
    "mistakes": "Looking away from bell, bent elbow on locked arm, rushing through transitions.",
    "safetyTips": [
      "Keep eyes locked on the kettlebell at all times; never bend the locked elbow."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_windmill_kettlebell",
      "ex_kettlebell_overhead_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_snatch",
    "name": "Kettlebell snatch",
    "aliases": [
      "KB snatch",
      "One-arm kettlebell snatch"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Shoulders",
      "Glutes",
      "Upper back",
      "Core",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-15 per side",
    "difficulty": "advanced",
    "movementPattern": "Explosive hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Swing bell from between legs, explode hips forward, guide bell close to body in high pull, and punch hand through handle at apex to catch overhead smoothly without slamming forearm.",
    "mistakes": "Letting bell flop over and smash forearm, casting bell too far forward like a long swing.",
    "safetyTips": [
      "Punch hand through handle at the top to let bell rotate gently around wrist."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_clean",
      "ex_single_arm_dumbbell_snatch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_clean",
    "name": "Kettlebell clean",
    "aliases": [
      "KB clean",
      "One-arm KB clean"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Upper back",
      "Biceps",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Explosive hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hike bell between legs, snap hips forward, keep elbow glued close to ribs, and guide bell into soft rack position on chest without impact.",
    "mistakes": "Swinging bell wide like an open swing, bruising wrist on catch.",
    "safetyTips": [
      "Keep bell tight to body like zipping up a jacket."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_snatch",
      "ex_kettlebell_clean_and_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_clean_and_press",
    "name": "Kettlebell clean and press (single arm)",
    "aliases": [
      "KB clean and press"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Triceps",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "5-8 per side",
    "difficulty": "intermediate",
    "movementPattern": "Clean & vertical push",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Clean bell cleanly into chest rack position. Pause, brace core, and press vertically overhead with straight wrist to lockout. Lower and repeat.",
    "mistakes": "Pressing before recovering balance from clean, hyperextending low back.",
    "safetyTips": [
      "Pause in rack to reset posture before pressing."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_overhead_press",
      "ex_kettlebell_clean"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_windmill_kettlebell",
    "name": "Kettlebell windmill",
    "aliases": [
      "KB windmill"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "5-8 per side",
    "difficulty": "advanced",
    "movementPattern": "Hinge & rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Press bell overhead with right hand. Turn feet 45 degrees to left. Push right hip out and hinge down towards left foot, sliding left hand down shin while keeping right arm locked straight overhead with eyes on bell. Return.",
    "mistakes": "Bending overhead arm, losing visual contact with bell, rounding lower back.",
    "safetyTips": [
      "Keep eyes glued to the kettlebell throughout entire descent and ascent."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_turkish_get_up",
      "ex_cable_woodchopper"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_halo",
    "name": "Kettlebell halo (shoulder mobility & core)",
    "aliases": [
      "KB halo"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Upper back",
      "Triceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "8-10 circles per direction",
    "difficulty": "beginner",
    "movementPattern": "Circumduction",
    "trackingType": "weight_reps",
    "instructions": "Hold kettlebell upside down by the horns at chest. Circle the bell closely around your head in a halo path without moving torso or craning neck. Alternate directions.",
    "mistakes": "Moving head around the bell instead of bell around head, arching low back.",
    "safetyTips": [
      "Keep ribcage pulled down; bell passes closely around crown of head."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_around_the_world_dumbbell",
      "ex_band_dislocates"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_single_arm_kettlebell_swing",
    "name": "Single-arm kettlebell swing",
    "aliases": [
      "One-arm KB swing"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Forearms",
      "Lats"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-15 per arm",
    "difficulty": "intermediate",
    "movementPattern": "Explosive hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hike bell back between legs with one hand. Snap hips forward driving bell to chest height while resisting rotational torque with core. Guide back into hinge.",
    "mistakes": "Shoulders rotating heavily, rounding spine.",
    "safetyTips": [
      "Anti-rotational demand makes this superior to two-hand swing for core."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_kettlebell_swing",
      "ex_kettlebell_snatch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_double_kettlebell_swing",
    "name": "Double kettlebell swing",
    "aliases": [
      "Dual KB swing"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Upper back",
      "Core",
      "Lats"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-15",
    "difficulty": "advanced",
    "movementPattern": "Explosive hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stance wider than shoulders. Hike two kettlebells between legs. Snap hips aggressively driving both bells forward to chest height.",
    "mistakes": "Hitting knees with bells on hike.",
    "safetyTips": [
      "Widen stance to allow clearance for both bells on the backswing."
    ],
    "variationGroupId": "var_rdl",
    "alternativeExerciseIds": [
      "ex_kettlebell_swing",
      "ex_barbell_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_goblet_squat_deep",
    "name": "Kettlebell goblet squat (elbow-to-knee pry)",
    "aliases": [
      "KB squat pry"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hips",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Hold bell by horns at chest. Squat deep, insert elbows inside knees, gently pry knees open with elbows, pause 2 seconds, and stand.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Fantastic combination of strength and hip mobility."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_goblet_squat",
      "ex_deep_squat_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_double_kettlebell_clean_and_jerk",
    "name": "Double kettlebell clean and jerk (long cycle)",
    "aliases": [
      "KB long cycle",
      "Dual clean and jerk"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Hamstrings",
      "Quadriceps",
      "Glutes",
      "Triceps",
      "Upper back"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "5-8",
    "difficulty": "advanced",
    "movementPattern": "Olympic kettlebell lift",
    "trackingType": "weight_reps",
    "instructions": "Clean two kettlebells from between legs to rack position. Dip knees and drive bells overhead, dropping under bells into second dip to lock out. Stand tall.",
    "mistakes": "Pressing instead of jerking (wastes leg drive), banging wrists.",
    "safetyTips": [
      "Girevoy sport cornerstone; builds unmatched total-body work capacity."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_push_press",
      "ex_barbell_clean_and_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_slingshot",
    "name": "Kettlebell slingshot (around the body pass)",
    "aliases": [
      "Around the body pass",
      "KB slingshot"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Forearms",
      "Shoulders",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "10 circles per direction",
    "difficulty": "beginner",
    "movementPattern": "Circumduction",
    "trackingType": "weight_reps",
    "instructions": "Stand tall with core braced. Pass kettlebell from hand to hand around your waist in a smooth continuous circular orbit without swaying torso. Reverse.",
    "mistakes": "Bumping thighs, hips rocking wildly.",
    "safetyTips": [
      "Keep core and glutes locked like a statue."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_halo",
      "ex_suit_case_carry"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_figure_eight",
    "name": "Kettlebell figure-8 between legs",
    "aliases": [
      "KB figure 8"
    ],
    "category": "core",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Core",
      "Quadriceps",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-15 passes per direction",
    "difficulty": "intermediate",
    "movementPattern": "Hinge and weave",
    "trackingType": "weight_reps",
    "instructions": "Quarter squat hinge stance. Weave kettlebell between legs passing from hand to hand in continuous figure-8 pattern, popping hips slightly on each pass.",
    "mistakes": "Rounding spine, dropping bell.",
    "safetyTips": [
      "Keep back flat and eyes forward."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_slingshot",
      "ex_kettlebell_swing"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_windmill_low_hang",
    "name": "Kettlebell low windmill",
    "aliases": [
      "Low hang windmill"
    ],
    "category": "core",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hinge & rotation",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Top arm straight overhead without weight. Hold kettlebell in bottom hand. Hinge and slide bell down towards floor along inside of lead leg.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Much safer entry progression than overhead weighted windmill."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_windmill_kettlebell",
      "ex_turkish_get_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_waiter_walk",
    "name": "Kettlebell waiter walk (overhead carry)",
    "aliases": [
      "Overhead KB carry",
      "Waiter carry"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Traps",
      "Triceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "30-45s per arm",
    "difficulty": "intermediate",
    "movementPattern": "Loaded carry",
    "trackingType": "duration",
    "unilateral": true,
    "instructions": "Press kettlebell overhead with locked arm and wrist. Pack shoulder down into socket. Walk in smooth measured paces with ribs down and core braced.",
    "mistakes": "Elbow bending, arching lower back, head leaning sideways.",
    "safetyTips": [
      "If shoulder fatigues, lower to rack position safely."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_kettlebell_rack_walk",
      "ex_farmers_walk"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_rack_walk",
    "name": "Kettlebell rack walk (chest carry)",
    "aliases": [
      "KB rack carry"
    ],
    "category": "core",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Upper back",
      "Shoulders",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "45-60s per side",
    "difficulty": "beginner",
    "movementPattern": "Loaded carry",
    "trackingType": "duration",
    "unilateral": true,
    "instructions": "Hold single kettlebell in tight chest rack position. Stand tall with neutral spine and walk without leaning. Switch arms.",
    "mistakes": "Leaning backward or sideways.",
    "safetyTips": [
      "Brace abs like preparing for a punch."
    ],
    "variationGroupId": "var_loaded_carry",
    "alternativeExerciseIds": [
      "ex_kettlebell_waiter_walk",
      "ex_suit_case_carry"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_deck_squat",
    "name": "Kettlebell deck squat (roll to squat)",
    "aliases": [
      "Deck squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Glutes",
      "Ankles"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "advanced",
    "movementPattern": "Squat & roll",
    "trackingType": "weight_reps",
    "instructions": "Hold kettlebell at chest. Squat down to floor, roll back onto spine holding bell, roll forward with momentum and plant feet to stand in one fluid motion.",
    "mistakes": "Crashing tailbone into floor, feet not flat on return.",
    "safetyTips": [
      "Perform on padded mat."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_goblet_squat",
      "ex_jump_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_sots_press",
    "name": "Kettlebell Sots press (press from deep squat)",
    "aliases": [
      "Sots press"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Core",
      "Quadriceps",
      "Thoracic spine"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "5-8 per side",
    "difficulty": "advanced",
    "movementPattern": "Vertical push from squat",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Descend into full rock-bottom squat holding kettlebell in rack. Maintain deep squat while pressing bell overhead to lockout. Lower to rack and stand.",
    "mistakes": "Rising out of squat during press.",
    "safetyTips": [
      "Requires elite thoracic mobility and hip depth."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_overhead_press",
      "ex_deep_squat_hold"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_crush_curl",
    "name": "Kettlebell crush curl (palms pressing)",
    "aliases": [
      "Crush grip KB curl"
    ],
    "category": "pull",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Chest",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "10-15",
    "difficulty": "beginner",
    "movementPattern": "Elbow flexion",
    "trackingType": "weight_reps",
    "instructions": "Hold kettlebell by squeezing open palms against both sides of the ball. Maintain inward crush pressure while curling up to chest and lowering.",
    "mistakes": "Fingers wrapping around handle (cancels crush).",
    "safetyTips": [
      "Massive chest and biceps isometric tension."
    ],
    "variationGroupId": "var_biceps_curl",
    "alternativeExerciseIds": [
      "ex_dumbbell_squeeze_press",
      "ex_kettlebell_biceps_curl"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_high_pull",
    "name": "Kettlebell high pull",
    "aliases": [
      "KB high pull"
    ],
    "category": "pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-12",
    "difficulty": "intermediate",
    "movementPattern": "Explosive vertical pull",
    "trackingType": "weight_reps",
    "instructions": "Initiate like a single-arm swing. As bell reaches chest height, pull elbow back high and fast like rowing a boat, then punch bell forward back into swing.",
    "mistakes": "Yanking bell with biceps, loose grip.",
    "safetyTips": [
      "Elbow must stay higher than the wrist at the top of the pull."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_snatch",
      "ex_barbell_upright_row"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_double_kettlebell_front_squat_deep",
    "name": "Double kettlebell front squat (3-second pause)",
    "aliases": [
      "Dual KB pause squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Glutes",
      "Upper back"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Clean two kettlebells to rack. Squat deep below parallel. Pause dead-stop for 3 full seconds. Stand up explosively.",
    "mistakes": "Bouncing out of hole, dropping elbows.",
    "safetyTips": [
      "Develops tremendous core stability and quad drive."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_kettlebell_front_squat",
      "ex_front_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_cross_body_clean",
    "name": "Kettlebell rotational cross-body clean",
    "aliases": [
      "Rotational clean"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Obliques",
      "Glutes",
      "Shoulders"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-10 per side",
    "difficulty": "advanced",
    "movementPattern": "Rotational hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Start with bell outside opposite ankle. Pivot hips and clean bell across body diagonally into rack position on opposite side.",
    "mistakes": "Bending over with rounded spine.",
    "safetyTips": [
      "Pivot feet and rotate from hips."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_clean",
      "ex_cable_woodchopper"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_seesaw_press",
    "name": "Double kettlebell seesaw press",
    "aliases": [
      "Alternating KB overhead press"
    ],
    "category": "push",
    "primaryMuscle": "Front delts",
    "secondaryMuscles": [
      "Triceps",
      "Core",
      "Side delts"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Vertical push",
    "trackingType": "weight_reps",
    "instructions": "Clean two kettlebells. As you press right bell overhead, lower left bell to rack. Continuous seesaw piston rhythm with slight natural torso tilt.",
    "mistakes": "Jerking with spine, dropping bells.",
    "safetyTips": [
      "Keep core braced to absorb alternating load."
    ],
    "variationGroupId": "var_overhead_press",
    "alternativeExerciseIds": [
      "ex_kettlebell_overhead_press",
      "ex_seated_db_shoulder_press"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_lateral_lunge",
    "name": "Kettlebell goblet lateral lunge",
    "aliases": [
      "KB side lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Adductors",
      "Glutes"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold bell at chest. Step wide to side, sink hip back and down over working foot with chest tall. Opposite leg straight. Push off heel to center.",
    "mistakes": "Working heel peeling off floor.",
    "safetyTips": [
      "Keep working knee tracking over foot."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_cossack_squat",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_gorilla_clean",
    "name": "Double kettlebell gorilla clean",
    "aliases": [
      "Gorilla cleans"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Biceps",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hinge & clean",
    "trackingType": "weight_reps",
    "instructions": "Two bells on floor. Hinge down. Clean one bell to rack while pushing other bell into floor. Lower bell to floor and simultaneously clean the other.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Keep hips locked low in athletic position."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_gorilla_row",
      "ex_kettlebell_clean"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_arm_bar",
    "name": "Kettlebell arm bar (shoulder stabilizer)",
    "aliases": [
      "KB arm bar"
    ],
    "category": "push",
    "primaryMuscle": "Rotator cuff",
    "secondaryMuscles": [
      "Shoulders",
      "Thoracic spine"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "30-45s per side",
    "difficulty": "advanced",
    "movementPattern": "Shoulder stability & rotation",
    "trackingType": "hold",
    "unilateral": true,
    "instructions": "Lie on side with light kettlebell pressed straight towards ceiling with vertical arm. Roll hips over while keeping arm vertical and packed in socket.",
    "mistakes": "Letting arm sway away from vertical alignment.",
    "safetyTips": [
      "Unmatched rotator cuff stability builder; use light weight (4kg-8kg)."
    ],
    "variationGroupId": "var_rotator_cuff",
    "alternativeExerciseIds": [
      "ex_turkish_get_up",
      "ex_external_cable_shoulder_rotation"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_tactical_lunge",
    "name": "Kettlebell tactical lunge (pass through)",
    "aliases": [
      "Tactical lunge"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Core"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "10-12 per leg",
    "difficulty": "intermediate",
    "movementPattern": "Lunge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Step back into reverse lunge. Pass kettlebell under front thigh from outside to inside, catch with other hand, stand up and alternate.",
    "mistakes": "Dropping bell on knee, slouching forward.",
    "safetyTips": [
      "Step back with control before passing bell."
    ],
    "variationGroupId": "var_lunge",
    "alternativeExerciseIds": [
      "ex_reverse_dumbbell_lunge",
      "ex_walking_dumbbell_lunge"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_bent_press",
    "name": "Kettlebell bent press",
    "aliases": [
      "Old-time bent press"
    ],
    "category": "push",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Obliques",
      "Triceps",
      "Hamstrings",
      "Upper back"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "3-5 reps per side",
    "difficulty": "advanced",
    "movementPattern": "Side hinge & press",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Hold bell in rack. Turn feet away. Hinge sideways towards floor away from the bell while extending arm overhead, essentially pressing body away from weight.",
    "mistakes": "Pushing bell up instead of lowering body under bell.",
    "safetyTips": [
      "Classic old-time strongman feat for lifting maximal weight overhead."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_windmill_kettlebell",
      "ex_turkish_get_up"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_kettlebell_dead_clean",
    "name": "Dead-stop kettlebell clean (from floor)",
    "aliases": [
      "Dead clean"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Traps",
      "Biceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "6-10 per side",
    "difficulty": "intermediate",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "unilateral": true,
    "instructions": "Bell resting dead on floor between feet. Hinge down, grip bell, explode hips forward, and clean into rack. Lower back to dead stop on floor between reps.",
    "mistakes": "Using backswing (dead clean has zero swing).",
    "safetyTips": [
      "Builds pure starting power from dead stop."
    ],
    "variationGroupId": "var_kettlebell_skills",
    "alternativeExerciseIds": [
      "ex_kettlebell_clean",
      "ex_kettlebell_snatch"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false
  },
  {
    "id": "ex_double_kettlebell_deadlift",
    "name": "Double kettlebell suitcase deadlift",
    "aliases": [
      "Dual KB deadlift"
    ],
    "category": "pull",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Lower back",
      "Forearms",
      "Quadriceps"
    ],
    "equipment": "Kettlebell",
    "exerciseClass": "compound",
    "repRange": "8-12",
    "difficulty": "beginner",
    "movementPattern": "Hip hinge",
    "trackingType": "weight_reps",
    "instructions": "Stand between two heavy kettlebells. Hinge down, grip neutral handles, brace core, and drive through floor to full hip lockout.",
    "mistakes": "Rounding lower back.",
    "safetyTips": [
      "Keep chest proud and lats locked."
    ],
    "variationGroupId": "var_deadlift",
    "alternativeExerciseIds": [
      "ex_trap_bar_deadlift",
      "ex_barbell_deadlift"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  },
  {
    "id": "ex_kettlebell_somersault_squat",
    "name": "Kettlebell somersault squat (quad isolation)",
    "aliases": [
      "Somersault squat"
    ],
    "category": "legs",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [],
    "equipment": "Kettlebell",
    "exerciseClass": "isolation",
    "repRange": "12-20",
    "difficulty": "intermediate",
    "movementPattern": "Squat",
    "trackingType": "weight_reps",
    "instructions": "Hold bell behind back in tailbone area with arms straight. Rise onto toes, squat deep keeping torso tilted forward slightly to isolate quads.",
    "mistakes": "Losing balance.",
    "safetyTips": [
      "Unique body-leverage quad isolation."
    ],
    "variationGroupId": "var_squat",
    "alternativeExerciseIds": [
      "ex_sissy_squat",
      "ex_goblet_squat"
    ],
    "isCustom": false,
    "favorite": false,
    "usesBodyweight": false,
    "unilateral": false
  }
];

export const EXERCISE_DATABASE_MAP = new Map<string, Exercise>(
  COMPREHENSIVE_EXERCISES.map((e) => [e.id, e])
);

