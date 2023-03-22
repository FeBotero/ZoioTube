
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import "./styles/global.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
        
    </div>
  )
}

export default App
