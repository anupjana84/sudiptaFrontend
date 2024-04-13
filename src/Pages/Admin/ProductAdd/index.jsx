import React from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import ProductForm from '../../../Components/ProductForm'
import { useLocation } from 'react-router-dom'
const ProductAdd = () => {
  const location = useLocation()
  console.log(location,'lop')
  return (
    <>
      <ProductForm/>
    </>
  )
}

export default ProductAdd