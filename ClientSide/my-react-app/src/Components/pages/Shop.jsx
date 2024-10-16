import store from "../../store/store"
import { Provider } from 'react-redux'
import ProductsPage from "../shop/ProductsPage"
import ShopSidebar from "../shop/ShopSidebar"

const Shop = () => {
  return (
    <div className='flex dark:bg-gray-800 pt-2 gap-4 '>
      <Provider store={store}>
        <div className="flex">
        <div className="flex ">
            <ShopSidebar />
            <main className="flex-grow ">
              <ProductsPage/>
           </main>
          </div>
        </div>
      </Provider>
    </div>
  )
}

export default Shop
