import { configureStore } from "@reduxjs/toolkit";
import productSlice  from './reducers/productReducer'
import singleProductSlice  from './reducers/singleProductReducer'
import cart  from './reducers/cart'
import searchProductSlice from './reducers/searchProducts'
import categoriesSlice from './reducers/categoryReducer'
const store =configureStore( {
    reducer:{ productSlice , singleProductSlice , cart , searchProductSlice,categoriesSlice }
})

export default store