import { MenuIcon, MoonIcon, Search, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className ="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="../../../galler.icon.jpeg" width={40} alt="logo" className="mr-4" />
          <span className="text-xl font-bold">Gallery</span>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="" className="hover:text-indigo-500 dark:hover:text-indigo-300">Home</Link>
          <Link to="shop" className="hover:text-indigo-500 dark:hover:text-indigo-300">Shop</Link>
          <Link to="Inspiration" className="hover:text-indigo-500 dark:hover:text-indigo-300">Inspiration</Link>
          <Link to="contactus" className="hover:text-indigo-500 dark:hover:text-indigo-300">Contact Us</Link>

        </div>

        <div className="flex hidden sm:flex items-center space-x-4">
        <div className="flex-1 gap-4 w-4 flex justify-end pr:4 lg:pr-8 ">
            {darkMode ? <button onClick={toggleDarkMode}><SunIcon size={24} color="#eee" />
            </button>:<button onClick={toggleDarkMode} ><MoonIcon size={24} color="#8B5CF6" /></button>  }
          </div>
          
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
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="text-gray-900 dark:text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
            <>
          <div className="lg:hidden">

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
          <Link to="Inspiration" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Inspiration</Link>
          <Link to="find-designers" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Find Designers</Link>
          <Link to="contactus" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact Us</Link>
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
  );
};

export default Navbar;
// 1999Adh@m