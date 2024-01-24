import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'


const Layout = () => {
  return (
    <>
    <Header/>
    <div><h1>this</h1></div>
    <Outlet/>
    </>
  )
}

export default Layout