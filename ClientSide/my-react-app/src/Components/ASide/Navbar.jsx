import { MenuIcon, MoonIcon, Search, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './navStyle.css'
const Navbar = () => {
  const navigate = useNavigate();
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [darkMode , setDarkMode] = useState(()=>{
      const saveDarkMode = localStorage.getItem("darkMode")
      return saveDarkMode ? JSON.parse(saveDarkMode) : false
     } );
     const toggleDarkMode =()=>{
      return setDarkMode(!darkMode)
    };

     useEffect(()=>{
      if(darkMode){
        document.documentElement.classList.add('dark')
      } else{
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem("darkMode" ,JSON.stringify(darkMode))
    },[darkMode]);
  return (
    <nav className ="bg-white   w-full z-50 top-0 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <div className="fixed bg-white top-0 -left-0  w-full z-50 top-0 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <div className="container  mx-auto flex items-center justify-between p-4">
        <div className="flex items-center cursor-pointer" onClick={()=>{navigate('/')}}>
          <img src="../../../gallery.icon.png" width={50} alt="logo" className="mr-2 rounded-md" />
          <span className="text-xl font-bold">G-APP</span>
        </div>

        <div className="hidden flex-1 felx justify-center lg:flex space-x-4">
          <NavLink  to="" className="hover:text-indigo-500 dark:hover:text-indigo-300" >Home</NavLink>
          <NavLink to="shop" className= "hover:text-indigo-500 dark:hover:text-indigo-300" >Shop</NavLink>
          <NavLink to="contactus" className="hover:text-indigo-500 dark:hover:text-indigo-300"  >Contact Us</NavLink>
          <NavLink to="Inspiration" className="hover:text-indigo-500 dark:hover:text-indigo-300" >Track your order</NavLink>
        </div>

        <div className=" gap-4 mx-1 w-fit flex justify-end pr:4 lg:pr-8 ">
            {darkMode ? <button onClick={toggleDarkMode}><SunIcon size={24} color="#eee" />
            </button>:<button onClick={toggleDarkMode} ><MoonIcon size={24} color="#8B5CF6" /></button>  }
        </div>

        {/* search */}
        <div className="flex hidden sm:flex items-center space-x-4">
          
          <label htmlFor="search" className="relative">
            <input
              type="text"
              name="Search"
              placeholder="Search..."
              id="search"
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full pl-10 pr-3 py-2 focus:outline-none"
            />
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </label>

          <div className="hidden sm:flex space-x-2">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="bg-gray-200 text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="lg:hidden flex ml-2 items-center">
          <button
            type="button"
            className="text-gray-900 dark:text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={26} />
          </button>
        </div>

      </div>

      {isMenuOpen && (
            <>
              <div className="lg:hidden  ">
                <div className=" w-[50%] m-auto sm:hidden py-2" >
                    <label htmlFor="search" className="relative">
                      <input
                      type="text"
                      name="Search"
                      placeholder="Search..."
                      id="search"
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none"
                      />
                      <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    </label>
                </div>
                <Link to="" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Home</Link>
                <Link to="shop" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Shop</Link>
                <Link to="contactus" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact Us</Link>
                <Link to="Inspiration" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Track your order</Link>
                <div className="flex flex-col space-y-2 px-4 py-2">
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="bg-indigo-500 text-white w-[50%] m-auto sm:hidden px-4 py-2 rounded-full hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/signup')}
                    className="bg-gray-200 text-gray-900 w-[50%] m-auto sm:hidden px-4 py-2 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
// 1999Adh@m