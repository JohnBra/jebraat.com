
export function dateSortDesc(a: string | Date, b: string | Date) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}