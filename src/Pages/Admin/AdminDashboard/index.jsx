import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'
import AdminLayout from '../../../Components/Admin/AdminLayout'

// import AdminLayout from './../../components/AdminLayout'
AdminLayout
const AdminDashboard = () => {
    const {role} = useSelector((state) => state.auth)
    const navigate = useNavigate();
// console.log(role)

  
  return (
   
    <AdminLayout>AdminDashboard {role}</AdminLayout>
   
  )
}

export default AdminDashboard