import { configureStore } from "@reduxjs/toolkit";
import productSlice  from './reducers/productReducer'
const store =configureStore( {
    reducer:{ productSlice}
})

export default store