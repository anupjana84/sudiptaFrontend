import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {
  const {role} = useSelector((state) => state.auth)
  console.log(role)
  return (
    <div>Dashboard {role}</div>
  )
}

export default Dashboard