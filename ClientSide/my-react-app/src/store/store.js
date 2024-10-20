import { configureStore } from "@reduxjs/toolkit";
import productSlice  from './reducers/productReducer'
import singleProductSlice  from './reducers/singleProductReducer'
import cart  from './reducers/cart'
const store =configureStore( {
    reducer:{ productSlice , singleProductSlice , cart }
})

export default store