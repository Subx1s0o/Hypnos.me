import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

type ModalState = {
  [key: string]: boolean
}

type ModalContextType = {
  modals: ModalState
  openModal: (name: string) => void
  closeModal: (name: string) => void
  toggleModal: (name: string) => void
  isModalOpen: (name: string) => boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalState>({})

  const openModal = (name: string) => {
    setModals({ [name]: true })
  }

  const closeModal = (name: string) => {
    setModals(prev => ({ ...prev, [name]: false }))
  }

  const toggleModal = (name: string) => {
    setModals(prev => {
      const isCurrentlyOpen = prev[name]

      return isCurrentlyOpen ? {} : { [name]: true }
    })
  }

  const isModalOpen = (name: string) => !!modals[name]

  useEffect(() => {
    const hasOpenModal = Object.values(modals).some(isOpen => isOpen)

    if (hasOpenModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [modals])

  return (
    <ModalContext.Provider
      value={{ modals, openModal, closeModal, toggleModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
