import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './contexts/AuthContext'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'

const touter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Homee/>},
      {path:"/login",element:<Login/>},
      
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
