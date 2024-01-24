// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
//   Routes
// } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

//   import 'react-toastify/dist/ReactToastify.css';

// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./Pages/Dashboard";
// import Product from "./Pages/Admin/Product";
// import Category from "./Pages/Admin/Category";


// // import PrivateRoute from "./PrivateRoute";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path = "/" element={<Home/>}/>
//     <Route path = "/login" element={<Login/>}/>
//     <Route path = "/register" element={<Register/>}/>
//     <Route path="/dashboard" element={<Dashboard/>}/>
//     <Route path="/product" element={<Product/>}/>
//     <Route path="/category" element={<Category/>}/>
    
   
    
   
//     </>
//   )
// )












// const App = () => {
//   return (
//    <>
//     <ToastContainer/>
//     <RouterProvider router={router}/>
//  </>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react'
import axios from 'axios';



import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { login,logout } from './Reducer/Auth'
import { useDispatch } from 'react-redux'
import { baseUrl } from './Config';

function App() {
  const [loading, setLoading] = useState(true)

   const dispatch = useDispatch()

  useEffect(() => {
(async()=>{
  try {
    const {data} = await axios.get(`${baseUrl}/auth/refresh`) 
    if (data) {
      dispatch(login(data))
    }else{
    dispatch(logout())
    }
   
    
    setLoading(false)
  } catch (error) {
    alert(error.response.data.message)
    setLoading(false)
  }

})()

    // const localAuthData= JSON.parse(localStorage.getItem('userdata'))
    // if (localAuthData) {
    //   dispatch(login(localAuthData))
    // }
    // else {
    //   dispatch(logout())
    // }
    // setLoading(false)
  }, [])
  
  return  (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) 
}

export default App