import { configureStore } from "@reduxjs/toolkit";
import productSlice  from './reducers/productReducer'
import singleProductSlice  from './reducers/singleProductReducer'
import cart  from './reducers/cart'
import searchProductSlice from './reducers/searchProducts'
const store =configureStore( {
    reducer:{ productSlice , singleProductSlice , cart , searchProductSlice }
})

export default store