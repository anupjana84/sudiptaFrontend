import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'


const AdminDashboard = () => {
    const {role} = useSelector((state) => state.auth)
    const navigate = useNavigate();
// console.log(role)

  
  return (
    <div>AdminDashboard {role}</div>
  )
}

export default AdminDashboard