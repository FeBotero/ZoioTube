import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './context/userContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'

import { Feed } from './pages/Feed'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register'
import { ThemeContextProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/register",element:<Register/>},
      {path:"/feed",element:<Feed />},
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
