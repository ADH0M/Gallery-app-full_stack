import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductById } from "../../store/reducers/singleProductReducer";

const ShowProduct = () => {
    const state = useSelector((state)=>state.products);
    const {id} = useParams();
    const dispatch =useDispatch()
    useEffect(()=>{dispatch(getProductById(id))},[dispatch]);
        
    return (
    <div>
      product 
    </div>
  )
}

export default ShowProduct
