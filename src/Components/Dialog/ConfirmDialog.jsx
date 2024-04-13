import React from 'react'
import { X ,Trash2} from "lucide-react";
const ConfirmDialog = ({onDelete, onCancel}) => {
  return (
    <><div
    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">
    <X  className='float-right text-2xl' onClick={()=>onCancel()}/>
      <div className="my-8 text-center flex flex-col items-center">
        <Trash2/>
        <h4 className="text-xl font-semibold mt-6">Are you sure you want to delete it?</h4>
        <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button type="button"
        onClick={()=>onDelete()}
          className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500">Delete</button>
        <button type="button"
         onClick={onCancel}
          className="px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
      </div>
    </div>
  </div></>
  )
}

export default ConfirmDialog