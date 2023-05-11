import React, { createContext, useMemo, useState } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'
import UserProfilePage from './pages/UserProfilePage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import './style/style.scss'
import globalTheme from './themes/globalTheme'
import customTheme from './themes/globalTheme'

type ColorThemeChange = () => void

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'products/:id',
        element: <SingleProductPage />
      },
      {
        path: 'user/:id',
        element: <UserProfilePage />
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCartPage />
      }
    ]
  }
])

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const ColorThemeContext = createContext<ColorThemeChange | null>(null)
  const colorMode = () => setMode((prevMode: PaletteMode) => 
        prevMode === 'light' ? 'dark' : 'light'
        )

  const theme = useMemo(() => createTheme(customTheme(mode)),[mode])
  return (
    <ColorThemeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <RouterProvider  router={router}/>
      </ThemeProvider>
    </ColorThemeContext.Provider>
  )
}

export default App