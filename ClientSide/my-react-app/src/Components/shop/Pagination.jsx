import { useDispatch } from "react-redux";
const Pagination = ({
  currentPage,
  totalPages,
  getNextPages,
  getPrevPages,
  getProducts,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-end gap-3 items-center mr-1 md:mr-2 lg:mr-3 xl:mr-4 pb-3">
      <button
        className="focus:ring-2  text-white focus:ring-offset-2 focus:ring-gray-100 sm:mt-0 px-6 py-3  bg-blue-500 hover:bg-indigo-600 focus:outline-none rounded"
        disabled={currentPage <= 1}
        onClick={() => dispatch(getProducts(currentPage - 1))}
      >
        {" "}
        Previous
      </button>

      <div className="flex gap-3 justify-center ">
        {getPrevPages().map((item, index) => (
          <button
            key={index}
            className="focus:ring-2 py-2 px-3 focus:ring-offset-2 focus:ring-indigo-600  bg-indigo-50 text-gray-900 hover:bg-indigo-600 focus:outline-none rounded"
            onClick={() => {
              dispatch(getProducts(item));
            }}
          >
            {item}
          </button>
        ))}

        <span className=" rounded-full py-2 px-3 text-white transition-colors bg-slate-700">{currentPage}</span>

        {getNextPages().map((item, ind) => (
          <button
            key={ind}
            className="focus:ring-2 py-2 px-3 focus:ring-offset-2 focus:ring-indigo-600 bg-indigo-50 text-gray-900 hover:bg-indigo-600 focus:outline-none rounded"
            onClick={() => {
              dispatch(getProducts(item));
            }}
          >
            {item}
          </button>
        ))}
        
      </div>

      <button
        className="focus:ring-2 focus:ring-offset-2  focus:ring-gray-100  sm:mt-0 px-6 py-3   hover:bg-indigo-600 bg-blue-500  focus:outline-none rounded"
        disabled={currentPage >= totalPages}
        onClick={() => dispatch(getProducts(currentPage + 1))}
      >
        Next
      </button>


    </div>
  );
};

export default Pagination;
