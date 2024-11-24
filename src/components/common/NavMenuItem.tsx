import { createContext, PropsWithChildren, useContext } from 'react'
import Link from 'next/link'

type MenuItemContext = {
  menuLink: MenuLink
}
const MenuItemContext = createContext<MenuItemContext | undefined>(undefined)
function useMenuItemContext() {
  const context = useContext(MenuItemContext)
  if (!context) {
    throw new Error('MenuItemContext must be used within a MenuItem component')
  }

  return context
}
type MenuLink = {
  href: string
  title?: string
  className?: string
}

type MenuLinkProps = PropsWithChildren & {
  menuLink: MenuLink
}

export default function MenuItem({ children, menuLink }: MenuLinkProps) {
  return (
    <MenuItemContext.Provider value={{ menuLink }}>
      {children}
    </MenuItemContext.Provider>
  )
}
MenuItem.ItemLink = function MenuItemLink() {
  const { menuLink } = useMenuItemContext()

  return (
    <Link
      href={menuLink.href}
      className={menuLink.className}>
      {menuLink.title}
    </Link>
  )
}

