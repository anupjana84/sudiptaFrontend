import axios from 'axios';
import { baseUrl } from '../Config';

const api = axios.create({
    baseURL: baseUrl,
    headers:{
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        
       
        
    },
    withCredentials: true,
    
   
  

})

export const loginApi=(data)=>{
    return api.post('/auth/login',data)
}
export const logoutUser=(data)=>{
    return api.post('/auth/logout')
}
/// category
export const allcategory=()=>{
    return api.get('/category/allCategory')
}
export const addCategory=(data)=>{
    return api.post('/category/createCategory',data)
}
export const addProduct=(data)=>{
    return api.post('/product/save',data)
}
export const allProduct=(data)=>{
    return api.get('/product/all',data)
}





api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry
        ) {
            originalRequest.isRetry = true;
            try {
                await axios.get(
                    `${baseUrl}/auth/refresh`,
                    {withCredentials:true}
                   
                );

                return axios(originalRequest);
            } catch (err) {
                
                console.log(err.message);
            }
        }
        throw error;
    }
);
export default api