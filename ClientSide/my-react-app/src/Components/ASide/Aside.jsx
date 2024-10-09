import { motion } from "framer-motion";
import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users ,MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const asideData = [
	{ name: "Home"      , icon: BarChart2    , color: "#6366f1", href: "/"         },
	{ name: "Products"  , icon: ShoppingBag  , color: "#8B5CF6", href: "/products" },
	{ name: "Users"     , icon: Users        , color: "#EC4899", href: "/users"    },
	{ name: "Sales"     , icon: DollarSign   , color: "#10B981", href: "/sales"    },
	{ name: "Orders"    , icon: ShoppingCart , color: "#F59E0B", href: "/orders"   },
	{ name: "Analytics" , icon: TrendingUp   , color: "#3B82F6", href: "/analytics"},
	{ name: "Settings"  , icon: Settings     , color: "#6EE7B7", href: "/settings" },
];

const Aside = () => {
    const [isSidebarOpen , setIsSidebarOpen ] = useState( false )

  return (
    <motion.div
        className = {`flex-shrink-0 transition-all duration-300 ease-in-out  h-[100vh] ${isSidebarOpen?'w-64':'w-20'} z-10`} 
        animate   = { {width:isSidebarOpen?'256px':'80px'} }
    >
        <div className="flex flex-col h-full border-r p-2  border-[#5446e7c5] dark:border-[#cdc9f8b6]  bg-[#e0e4ff] bg-opacity-10 backdrop-blur-sm">
            <motion.div
                className="rounded-full p-2 max-w-fit transition-colors hover:bg-gray-50 hover:bg-opacity-5 "
                whileHover={{scale:1.1}}
                whileTap={{scale:.9}}
                onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}
            >
                    <MenuIcon size={26}/>
            </motion.div>
            <nav className="flex-grow mb-8">
                    {asideData.map ( item =>(
                        <Link key={item.href} to={item.href}> 
                            <motion.div className="flex items-center mt-2 gap-4 p-4 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-[#8CA5CD17] transition-colors mb-2 "> 

                                < item.icon size={24}  style={{color:item.color , minWidth:24}}/>
                                {isSidebarOpen && (
										<motion.span
                                            initial = {{opacity:0 , width:0 }}
                                            animate = {{opacity:1 ,width:'auto'}}
                                            exit={{opacity:0 , width:0 }}
                                            transition={{duration:0.2 , delay:0.3}}
										>
											{item.name}
										</motion.span>
									)}
                                
                            </motion.div>
                        </Link>
                    ))}

            </nav>
        </div>


    </motion.div>
  )
}

export default Aside
