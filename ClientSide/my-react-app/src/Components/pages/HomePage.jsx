import { Outlet } from "react-router-dom"
import Navbar from "../ASide/Navbar"
import Footer from "../ASide/Footer"

const HomePage = () => {
  return (
    <div className="dark:bg-gray-800">    
        
        <header>
          <Navbar/>
        </header>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default HomePage
