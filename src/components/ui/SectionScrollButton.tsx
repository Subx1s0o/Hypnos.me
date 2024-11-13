import Icon from './Icon'

interface SectionScrollButtonProps {
  id: string
  className: string
}

export default function SectionScrollButton({
  id,
  className
}: SectionScrollButtonProps) {
  const scrollToSection = () => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error(`Section with id "${id}" not found.`)
    }
  }

  return (
    <button onClick={scrollToSection}>
      <Icon
        className={className}
        id='icon-arrow'
        w={16}
        h={16}
      />
    </button>
  )
}
