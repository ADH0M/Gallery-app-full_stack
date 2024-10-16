import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/reducers/productReducer';

const ProductsPage = () => {
    const { loading , products } = useSelector((state) => state.productSlice);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    console.log(products);
  
    const currentPage = products ? (products.offset / products.limit) + 1 : 1;
    const totalPages = products ? Math.ceil(products.count / products.limit) : 1;
    
  const getPrevPages =()=>{
    let arr =[];
    for(let i = Math.max(currentPage - 2 , 1 ) ; i < currentPage ; i++ ){
      arr.push(i);
    };
    return arr
  }
  
  
  const getNextPages = () => {
      const arr = [];
  
      for (
          let i = currentPage + 1;
          i < Math.min(currentPage + 3, Math.ceil(products.count / products.limit) + 1 );
          i++
      ) {
          arr.push(i);
      }
  
      return arr;
  };
  
    console.log(currentPage , totalPages);
    
    return (
    <div className=''>
        <div className="border text-white text-xl m-2">
          {loading ? (
              <p colSpan="3">loading...</p>

          ) : (
            products &&
            products.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))
          )}
        </div>
      {products && products.limit && (
        <div>
          <button
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-gray-700 hover:bg-indigo-600 focus:outline-none rounded"
           disabled={currentPage <=1 }  onClick={()=> dispatch(getProducts( currentPage - 1 ))}> Previous page </button>
          <span className="bg-white p-3 m-2 rounded-t "> Current page: {currentPage} |</span>
          
          <button
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-gray-700 hover:bg-indigo-600 focus:outline-none rounded"
            disabled={currentPage >= totalPages}
            onClick={() => dispatch(getProducts((currentPage + 1) ))}
          >
            Next page
          </button>

          <div className="flex gap-3 justify-center mt-3">
            {getPrevPages().map((item ,index) => (
                      <button key={index} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                          onClick={() => {
                              dispatch(getProducts(item));
                          }}
                      >
                          {item }
                      </button>
                  ))}
                  <span className="bg-white p-3 m-2 rounded-t">{currentPage }</span>
            {getNextPages().map((item ,ind) => (
                      <button key={ind}  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                          onClick={() => {
                            dispatch(getProducts(item));
                          }}
                      >
                          {item }
                      </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsPage
