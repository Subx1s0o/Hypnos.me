export default function coerceDate(
  value: string | Date | null | undefined
): Date | null {
  if (value instanceof Date) {
    return value
  }
  if (typeof value === 'string') {
    const parsedDate = new Date(value)

    return isNaN(parsedDate.getTime()) ? null : parsedDate
  }

  return null
}
