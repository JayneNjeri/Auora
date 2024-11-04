import { Outlet } from 'react-router-dom'
import Navbar from './Utils/navbar'
import Home from './Pages/Home'
import './App.css'

function App() {
 
  return (
    <>
    <nav className='content'>
      <Outlet />
    </nav>
    <div>
      <Navbar />
       <Home />
    </div>
  
  
   
    </>
  )
}

export default App
