import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './contexts/AuthContext'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn/SignIn'
import { Feed } from './pages/Feed'

const touter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<SignIn/>},
      {path:"/feed",element:<Feed/>},
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
