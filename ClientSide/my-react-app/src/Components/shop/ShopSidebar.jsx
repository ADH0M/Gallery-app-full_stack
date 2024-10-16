// ShopSidebar.jsx
import { motion } from "framer-motion";
import { Settings, ShoppingCart, UserPenIcon, Search } from "lucide-react";
import { useState } from "react";
import ShopServices from "./ShopServices";

const ShopSidebar = () => {
  const [isSidebarOpen] = useState(false);
  const asideData = [
    { name: "profile", icon: UserPenIcon, color: "#c1d9fc", href: "/" },
    { name: "search", icon: Search, color: "#0a8aff", href: "/" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/" },
  ];

  return (
    <motion.div
      className={`flex-shrink-0  transition-all duration-300 ease-in-out dark:text-gray-100 dark:bg-gray-800 h-[100vh] z-10`}
      animate={{ width: isSidebarOpen ? '256px' : '80px' }}
    >
      <div className="flex flex-col fixed h-full  border-r p-2 border-[#5446e7c5] dark:border-[#cdc9f8b6] bg-[#e0e4ff] bg-opacity-10 backdrop-blur-sm">
        <nav className="flex-grow mb-8">
          <ShopServices sections={asideData} />
        </nav>
      </div>
    </motion.div>
  );
};

export default ShopSidebar;
