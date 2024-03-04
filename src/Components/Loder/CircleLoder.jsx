import React from 'react'
import { ColorRing } from 'react-loader-spinner'
const CircleLoder = () => {
  return (
    <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
    <div className="flex items-center">
      <span className="text-3xl mr-4">Please Wait....</span>
      <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    </div>
  </div>

    
  )
}

export default CircleLoder