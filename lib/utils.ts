export function dateSortDesc(a: string | null, b: string | null) {
  if (!a || !b) return 0
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function kebabCase(str: string) {
  return str
    .replaceAll(' - ', ' ')
    .replaceAll(' ', '-')
    .replaceAll(',', '')
    .toLowerCase();
}
