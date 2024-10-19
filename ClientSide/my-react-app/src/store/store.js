import { configureStore } from "@reduxjs/toolkit";
import productSlice  from './reducers/productReducer'
import singleProductSlice  from './reducers/singleProductReducer'
const store =configureStore( {
    reducer:{ productSlice ,singleProductSlice}
})

export default store