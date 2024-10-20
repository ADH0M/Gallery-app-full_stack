import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../store/reducers/singleProductReducer";

const ShowProduct = () => {
  const { product } = useSelector((state) => state.singleProductSlice);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (!product || !product.product) {
    return <div>Loading...</div>;
  }

  const pro = Array.isArray(product.product)
    ? product.product
    : [product.product];
  console.log(pro);

  return (
    <div className="container  w-full mx-auto p-4">
      {pro.map((item) => (
        <div
          key={item.id}
          className="flex flex-col  md:flex-row rounded-lg dark:shadow-gray-500 shadow-lg mb-4 "
        >
          <img
            src={`http://localhost:4000/productsImg/avatar/product-avatar-image1729087623791-123fc9c7-dfb6-4a1b-9942-8d785d41fd5d.jpeg`}
            alt={item.name}
            className="w-full md:w-1/2 h-92 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
          <div className="p-2 md:p-6 relative md:w-1/2">
            <h2 className="text-2xl dark:text-gray-100 font-semibold mb-2">{item.title}</h2>
            <ul>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.description.split(",").map((te, ind) => (
                  <li key={ind}>- {te}</li>
                ))}
              </p>
            </ul>
            <h5>{item.category_id}</h5>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {item.stock}
            </p>

            <div className="text-lg font-bold text-blue-600 mb-2">
              <span className="p-2 block sm:inline-block">
                {item.price} EGY
              </span>

            <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-l dark:text-white dark:bg-gray-500 border-gray-200">
              -
            </button>

            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              1
            </div>
            <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r dark:text-white dark:bg-gray-500 border-gray-200">
              +
            </button>
            </div>

            <button className="py-2 px-4 bg-blue-500 text-white  rounded hover:bg-blue-600 block  absolute left-1/2 bottom-8 -translate-x-1/2 ">
              Add to order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
