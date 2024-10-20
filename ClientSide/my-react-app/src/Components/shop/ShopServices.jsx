import { NavLink } from "react-router-dom";

const ShopServices = ({ sections ,cartItems}) => {

  return (
    <div className="transition-all duration-300">
      {sections.map((item, ind) => (
        <div key={ind}>
          <NavLink to={item.href} className="flex  items-center mt-2 gap-4 p-4 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-[#8CA5CD17] transition-colors mb-2 ">
            {item.name === "Orders" ? (
              <div className={"relative "}>
                <item.icon
                  size={24}
                  style={{ color: item.color, minWidth: 24 }}
                />
                <span className="absolute text-sm -top-1/2 left-[50%] transition-all duration-300 -translate-x-[40%] text-blue-800 dark:text-gray-200">
                  {cartItems}
                </span>
              </div>
            ) : (
              <div to={item.href}>
                <item.icon
                  size={24}
                  style={{ color: item.color, minWidth: 24 }}
                />
              </div>
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ShopServices;
