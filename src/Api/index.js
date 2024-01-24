import axios from 'axios';
import { baseUrl } from '../Config';

const api = axios.create({
    baseURL: baseUrl,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
       
        
    },
    withCredentials:true,
  

})

export const loginApi=(data)=>{
    return api.post('/auth/login',data)
}

export default api