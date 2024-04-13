import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../Reducer/Auth';
import { baseUrl } from '../Config';

export function useLoadingWithRefresh() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        
        (async()=>{
            try {
              const res = await axios.get(`${baseUrl}/auth/refresh`,{
                withCredentials:true
              }) 
              dispatch(login(res.data.data))
              // console.log(res,'dat')
            //   if (res) {
                
            //   }else{
            //   // dispatch(logout())
            //   console.log("first")
            //   }
             
              
              setLoading(false)
            } catch (error) {
              console.log(error)
              // alert(error.response.data.message)
              setLoading(false)
            }
          
          })()
    }, []);

    return { loading };
}