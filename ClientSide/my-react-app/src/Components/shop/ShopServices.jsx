import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShopServices = ({ sections }) => {
  console.log(sections);

  return (
    <div>        
        {sections.map((item ,ind) => (
          <Link key={ind} >
            <motion.div className="flex items-center mt-2 gap-4 p-4 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-[#8CA5CD17] transition-colors mb-2 ">
              <item.icon
                size={24}
                style={{ color: item.color, minWidth: 24 }}
              />
            </motion.div>
          </Link>
        ))}
    </div>
  );
};




export default ShopServices;
