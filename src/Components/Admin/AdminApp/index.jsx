

import React, { useState, useEffect } from 'react'




import { Outlet } from 'react-router-dom'


import { useDispatch } from 'react-redux'
import Header from '../../Header'
import Footer from '../../Footer'
import { login,logout } from '../../../Reducer/Auth'

function AdminApp() {
  const [loading, setLoading] = useState(true)

   const dispatch = useDispatch()

  useEffect(() => {
    const localAuthData= JSON.parse(localStorage.getItem('userdata'))
    if (localAuthData) {
      dispatch(login(localAuthData))
    }
    else {
      dispatch(logout())
    }
    setLoading(false)
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default AdminApp