import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import ProductForm from '../../../Components/ProductForm'
import ProductFormEdit from '../../../Components/EditProductForm'

const EditProduct = () => {
  const {state} = useLocation()
  console.log(location.state)
  return (
    <>
      <ProductFormEdit product={state}/>
    </>
  )
}

export default EditProduct