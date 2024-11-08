import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MobileNavigation from '@/components/common/Navigations/MobileNavigation'
import Home from '@/components/pages/Home'

import './index.css'

import Providers from '@/providers/Providers'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/favourites',
    element: (
      <div>
        <MobileNavigation />
      </div>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  </StrictMode>
)
