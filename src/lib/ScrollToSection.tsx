export default (id: string): void => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error(`Section with id "${id}" not found.`)
  }
}
