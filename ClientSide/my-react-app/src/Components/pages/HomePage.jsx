import { Outlet } from "react-router-dom"
import Navbar from "../ASide/Navbar"

const HomePage = () => {
  return (
    <div>         
        <header>
          <Navbar/>
        </header>
        <Outlet/>
    </div>
  )
}

export default HomePage
