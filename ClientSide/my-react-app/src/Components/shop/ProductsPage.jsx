import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/reducers/productReducer';
import Pagination from './Pagination';
import { Search } from 'lucide-react';
import ProductOperations from './ProductOperations';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/reducers/cart';

const ProductsPage = () => {
  const { loading, products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const currentPage = products ? (products.offset / products.limit) + 1 : 1;
  const totalPages = products ? Math.ceil(products.count / products.limit) : 1;

  const getPrevPages = () => {
    let arr = [];
    for (let i = Math.max(currentPage - 2, 1); i < currentPage; i++) {
      arr.push(i);
    }
    return arr;
  };

  const getNextPages = () => {
    const arr = [];
    for (
      let i = currentPage + 1;
      i < Math.min(currentPage + 3, Math.ceil(products.count / products.limit) + 1);
      i++
    ) {
      arr.push(i);
    }
    return arr;
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  
  return (
    <div className='dark:bg-gray-900  dark:text-white z-5'>
      <ProductOperations  />
      <div className="grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-3  sm:grid-cols-2  gap-2 bg-white text-xl my-4  dark:bg-gray-900 md:mx-2 lg:mx-3 xl:mx-4 dark:text-gray-200">
        {loading ? (
          <p className="col-span-3">loading...</p>
        ) : (
          products &&
          products.products.map((product) => (
            <div key={product.id} className='m-2 rounded-lg p-2 border border-blue-200 dark:border-blue-500 ms:p-2 relative overflow-hidden'>
                <Link to={`/shop/product/${product.id}`}>
                    <img className='w-full' src={`http://localhost:4000/productsImg/avatar/product-avatar-image1729087623791-123fc9c7-dfb6-4a1b-9942-8d785d41fd5d.jpeg`} alt="" className='rounded-lg' />
                </Link>
              <div className=' p-2'>
                <h4 className='text-lg truncate py-1 dark:text-gray-200'> {product.name}</h4>
                <div className='text-lg text-blue-700 py-1 dark:text-blue-400'>{product.price} EGY</div>
              </div>

              <span className='absolute flex items-center p-1 text-blue-600  bg-gray-100 text-blue-400 rounded-lg right-3 top-5 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity'>
                <button>
                    <Search alt='quick viwe'/>
                </button>
              </span>

              <button onClick={() => handleAddToCart(product)} className='hover:opacity-80 hover:text-cyan-50 bg-blue-400 text-blue-50 my-2 p-2 rounded-lg relative left-[49%] translate-x-[-50%] dark:bg-indigo-600'>
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
      {products && products.limit && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          getNextPages={getNextPages}
          getPrevPages={getPrevPages}
          getProducts={getProducts}
        />
      )}
    </div>
  );
};

export default ProductsPage;
