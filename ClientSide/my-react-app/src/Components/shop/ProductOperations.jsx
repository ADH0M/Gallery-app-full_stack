import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  searchProducts,
} from "../../store/reducers/searchProducts";

const ProductOperations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm !== "") {
      dispatch(searchProducts(searchTerm));
    } else if (searchTerm === "") {
      dispatch(clearProducts());
    }
  }, [searchTerm, dispatch]);

  const { loading, searchPro } = useSelector(
    (state) => state.searchProductSlice
  );

  // console.log(searchPro.limit);
  const productList = searchPro && searchPro.products;
  console.log(searchPro);

  // console.log(searchProducts)
  // const [produc] = useState([
  //   "Product 1",
  //   "Product 2",
  //   "Product 3",
  //   "Product 4",
  // ]); // Sample products
  // const filteredProducts = produc.filter((product) =>
  //   product.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="relative w-full dark:bg-gray-700 bg-white p-5 space-y-4">
      <div className="relative">
        <input
          type="text"
          className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div
            className="z-20 absolute left-1/4 w-1/2 bg-white bg-opacity-80 p-4 rounded-md shadow-md "
            style={{ animation: "open 0.5s forwards" }}
          >
            <ul className="bg-white w-full h-52 overflow-auto rounded-md p-4">
              <div className="flex justify-end">
                <X
                  size={28}
                  className="z-30 hover:bg-gray-200 absolute text-gray-900 w-10 rounded-md cursor-pointer"
                  onClick={() => {
                    setSearchTerm("");
                  }}
                />
              </div>
              {loading ? (
                <span className="text-gray-700">loading...</span>
              ) : searchPro && productList && productList.length > 0 ? (
                productList.map((product, index) => (
                  <Link key={index} to={`/shop/product/${product.id}`}>
                    <li className="z-20 p-2 border-b text-gray-900 hover:mr-9 border-gray-300">
                      <p className="transform hover:translate-x-3 duration-300 p-1">
                        {product.name}
                      </p>
                    </li>
                  </Link>
                ))
              ) : (
                <p className="text-blue-500 dark:text-gray-800">
                  No products found
                </p>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* range but not active ... */}
      {/* <div>
        <label htmlFor="minRange">
          min Range :10
          <input
            id="minRange"
            type="range"
            className=" bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
          />
        </label>

        <label htmlFor="maxRange">
          max range ;10
          <input
            type="range"
            id="maxRange"
            className=" bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
          />
        </label>
      </div> */}

      {/*categories but not active..  */}
      <div>
        <label htmlFor="categories">
          Categories
          <select
            name="category"
            id="categories"
            className=" ml-4 w-52 bg-gray-100 border  p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Products</option>
            <option value="Mouse">Mouse</option>
            <option value="Keyboard">Keyboards</option>
            <option value="HeadSet">HeadSet</option>
            <option value="Speakers">Speakers</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductOperations;
