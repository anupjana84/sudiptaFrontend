import { configureStore } from '@reduxjs/toolkit'
import AuthSclice from '../Reducer/Auth'
import productSlice from '../Reducer/Products'


 const store = configureStore({
  reducer: {
    auth: AuthSclice,
    product:productSlice,
    
  },
})

export default store