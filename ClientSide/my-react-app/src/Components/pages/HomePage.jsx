import { Outlet } from "react-router-dom"
import Navbar from "../ASide/Navbar"

const HomePage = () => {
  return (
    <div className="dark:bg-gray-800">         
        <header>
          <Navbar/>
        </header>
        <Outlet />
    </div>
  )
}

export default HomePage
