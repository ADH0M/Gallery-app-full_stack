import './App.css'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Aside from './Components/ASide/Aside'
import HomePage from './Components/pages/HomePage'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'
import Shop from './Components/pages/Shop'

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
      ]
    },


])
function App() {
  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
