export default function formatDate(isoString: string): string {
  if (!isoString) {
    return ''
  }

  try {
    const date = new Date(isoString)

    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  } catch (error) {
    throw error
  }
}
