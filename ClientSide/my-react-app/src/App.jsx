import './App.css'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Aside from './Components/ASide/Aside'
import HomePage from './Components/pages/HomePage'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'
import Shop from './Components/pages/Shop'
import NotFoundPage from './Components/pages/NotFoundPage'
import ShowProduct from './Components/pages/ShowProduct'
import Orders from './Components/shop/Orders'

const router = createBrowserRouter([
    { 
      path:'/', 
      element:<HomePage/> ,
      children:[
        { 
          path:'/',
          element:<div>Children</div>
        },

        { path:'/aside', element:<Aside/> },
        { path:'/signup', element:<SignUp/> },
        { path:'/login', element:<Login/> },
        { path:'/shop', element:<Shop/> },
        { path:'shop/porduct/:id', element:<ShowProduct/> },
        { path:'user/orders', element:<Orders/> },

      ],
      errorElement:<NotFoundPage/>
    },


])
function App() {
  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
