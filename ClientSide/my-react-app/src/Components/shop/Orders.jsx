import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart, subfromCart } from "../../store/reducers/cart";
import { Link } from "react-router-dom";

const Orders = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  console.log(items);

  return (
    <div className="min-h-[100vh] pb-10">
        <div className="mt-5 flex justify-center ">
            <Link to={'/shop'}>
                <button
                 className="p-2 border mx-2 rounded-lg dark:bg-blue-500 text-indigo-500 dark:text-gray-200 font-semibold  ">
                    TO SHOP</button>
            </Link>
            
            <button
                onClick={()=>{dispatch(clearCart())}}
                className="p-2 border mx-2 rounded-lg text-red-400 dark:bg-red-500 dark:text-gray-200 font-semibold ">
                    REMOVE ALL
            </button>
            
            <Link to={'checkout'}>
                <button className="p-2 border mx-2 rounded-lg text-indigo-500 dark:bg-blue-500 dark:text-gray-200 font-semibold ">CHECKOUT</button>
            </Link>
           
           
        </div>
      {items && items.length > 0 ? (
        <div className=" flex flex-col flex-wrap  md:flex-row gap-6 justify-center items-center my-5  ">
          {items.map((product, ind) => (
            <div key={ind} className="">
              <div className="w-80 bg-white shadow rounded">
                <div className="h-60 w-full rounded-lg bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{backgroundImage: `url('http://localhost:4000/productsImg/avatar/product-avatar-image1729087623791-123fc9c7-dfb6-4a1b-9942-8d785d41fd5d.jpeg')`}}
                >
                
                  <div className="flex justify-between">
                    <input type="checkbox" />{" "}
                    <button className="text-white hover:text-blue-500">
                    </button>
                  </div>
                  <div>
                    <span className="uppercase text-xs bg-green-50 p-0.5  border rounded  font-medium select-none">
                      { product.stock > 0 ? <span className="text-green-700 border-green-500">available</span> :
                       <span className="text-red-700 border-red-500"> not available </span>} 
                    </span>
                  </div>
                </div>{" "}
                <div className="p-4 flex flex-col items-center">
                   <p className="text-gray-400 font-light text-xs text-center">
                    {product.Category.category_name}
                    </p>
                  <h1 className="text-gray-800 text-center mt-1 text-sm truncate ">{product.name}</h1>
                  <p className="text-center text-gray-800 mt-1">{product.price} EGY</p>
                  <div className="inline-flex items-center mt-2">
                    <button 
                        disabled={product.quantity === 1}
                        onClick={()=>{dispatch(subfromCart(product))}}
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        -
                    </button>
                    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                      {product.quantity}
                    </div>
                    <button
                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                     onClick={()=>{dispatch(addToCart(product))}}> + </button>
                  </div>
                  <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                    Buy now
                  </button>
                  <div className="flex justify-between w-full mt-4">
                    <div className="flex items-center text-gray-500">
                      <label className="select-none cursor-pointer">
                      <input id="input1" type="checkbox" className="mr-2" />{" "}
                        Compare
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={()=>{handleRemoveFromCart(product.id)}}
                        className="py-1 px-4 bg-white  text-red-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      ):
      <div className="flex justify-center items-center mt-20 font-bold text-2xl text-indigo-600 dark:text-gray-100 ">
          ORDERS IS EMPTY
      </div>
      }
    </div>
  );
};

export default Orders;
