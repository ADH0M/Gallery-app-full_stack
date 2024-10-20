// ShopSidebar.jsx
import { motion } from "framer-motion";
import { Settings, ShoppingCart, UserPenIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import ShopServices from "./ShopServices";
import { useSelector } from "react-redux";


const ShopSidebar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const {items} = useSelector((state)=>state.cart);
  console.log(items.length);
  
  const handleScroll = () => {
    if (window.scrollY > 70) { 
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSidebarOpen] = useState(false);
  const asideData = [
    { name: "profile", icon: UserPenIcon, color: "#c1d9fc", href: "/profile" },
    { name: "search", icon: Search, color: "#0a8aff", href: "/search" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/user/orders" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
  ];

  return (
    <motion.div
      className={` flex-shrink-0  transition-all duration-300 ease-in-out dark:text-gray-100 dark:bg-gray-800 h-[100vh] z-10`}
      animate={{ width: isSidebarOpen ? '256px' : '80px' }}
    >
      <div className={`flex ${isSticky ?  'fixed top-20  z-40 ' : 'relative'} flex-col h-full  border-r p-3 border-[#5446e7c5] dark:border-[#cdc9f8b6] bg-[#e0e4ff] bg-opacity-10 backdrop-blur-sm`}>
        <nav className="flex-grow mb-8">
          <ShopServices sections={asideData} cartItems={items.length}/>
        </nav>
      </div>
    </motion.div>
  );
};

export default ShopSidebar;
