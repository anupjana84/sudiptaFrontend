import React,{useState, useEffect} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoute from './Routes/ProtectedRoute'
import AdminProtectedRoute from './Routes/AdminProtectedRoute'

import Dashboard from './Pages/Dashboard'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import ProductAdd from './Pages/Admin/ProductAdd'
import { useDispatch } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';

import AllProduct from './Pages/Admin/AllProduct'

//Category
import AllCetegory from './Pages/Admin/Category'



// slice
import { login } from "./Reducer/Auth";
import AddCategory from './Pages/Admin/Category/AddCategory'


const App = () => {
  const [loading, setLoading] = useState(false)
//  const {loading}= useLoadingWithRefresh()
  const dispatch = useDispatch()
 
  useEffect(() => {
    const userDetails=JSON.parse(localStorage.getItem('userdata'))
    console.log(userDetails, "userDetails")
    if(userDetails){
      dispatch(login(userDetails));
      setLoading(false)

    }
  },[])
  return (
    < >
   {loading?<h1>lodding</h1>
    :
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={ 
        <ProtectedRoute>
          <Login/>
        </ProtectedRoute>
      } />
      <Route path='/dashboard' element={ 
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      } />
      <Route path='/admin' element={ 
        <AdminProtectedRoute>
          <AdminDashboard/>
        </AdminProtectedRoute>
      } />
      
      <Route path='/addProduct' element={ 
         <AdminProtectedRoute>
          <ProductAdd/>
          </AdminProtectedRoute>
      } />
      <Route path='/allProduct' element={ 
         <AdminProtectedRoute>
          <AllProduct/>
          </AdminProtectedRoute>
      } />
      <Route path='/allCetegory' element={ 
         <AdminProtectedRoute>
          <AllCetegory/>
          </AdminProtectedRoute>
      } />
      <Route path='/addCetegory' element={ 
         <AdminProtectedRoute>
          <AddCategory/>
          </AdminProtectedRoute>
      } />
      </Routes>
    
    </BrowserRouter>
    </>
    } 
    <ToastContainer />
    </>
  )
}

export default App