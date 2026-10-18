/** Deterministic, stable folder slug for an exercise id (e.g. `ex_barbell_bench_press` -> `barbell-bench-press`). */
export function exerciseSlug(id: string): string {
  return id
    .replace(/^ex[_-]/, '')
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}
