

import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logout } from '../../Reducer/Auth'

logout

const AdminProtectedRoute =({children, authentication = true, role}) =>{
    // console.log(authentication,"authentication")
    
    

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    const authrole = useSelector(state => state.auth.role)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        // console.log(authStatus,"tr",authrole)

        if (authStatus && authrole==="user") {
          navigate("/dashboard")
        }else if (!authStatus ){
          navigate("/login")
        
        }
        // else{
          
        //     navigate("/login")
        //     // <Navigate to="/login"  />
        
        // }
          
           
          setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
export default AdminProtectedRoute
