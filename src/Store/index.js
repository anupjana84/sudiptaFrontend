import { configureStore } from '@reduxjs/toolkit'
import AuthSclice from '../Reducer/Auth'

 const store = configureStore({
  reducer: {
    auth: AuthSclice,
    
  },
})

export default store