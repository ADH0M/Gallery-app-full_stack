import store from "../../store/store"
import { Provider } from 'react-redux'
import ProductsPage from "../shop/ProductsPage"
import ShopSidebar from "../shop/ShopSidebar"

const Shop = () => {
  return (
    <div className='flex dark:bg-gray-800  gap-4 '>
      <Provider store={store}>
        <div className="flex ">
            <ShopSidebar />
            <main className="flex-grow ">
              <ProductsPage/>
           </main>
        </div>
      </Provider>
    </div>
  )
}

export default Shop
