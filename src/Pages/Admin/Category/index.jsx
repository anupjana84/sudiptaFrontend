import React,{useEffect} from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import { allcategory } from '../../../Api'
import useFetchCategories from '../../../hook/category'
import { SpinerLoder } from '../../../Components/Loder/index.jsx'
import SkeletonLoder from '../../../Components/Loder/SeletonLoder.jsx'




 

const AllCetegory = () => {
const {categories, loading, error } = useFetchCategories();

if (loading)  return <SkeletonLoder/>
if(error) return <p>Something went wrong</p>
  return (
    <AdminLayout>
        <section className="mx-auto w-full max-w-full px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Category</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Category. You can add new Category, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Category
            </button>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col" >
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Title</span>
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Action
                      </th>

                     

                     
                      {/* <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {categories.map((item) => (
                      <tr key={item._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            {/* <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div> */}
                            <div >
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                              
                            </div>
                          </div>
                        </td>
                        
                        <td className="whitespace-nowrap px-0 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-0 py-4">
                        <button href="#" class="rounded-md
                         bg-green-500 px-3 py-2 text-sm font-semibold
                         
                          text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
                            Edit
                          </button>
                          <button href="#" class="rounded-md ml-5 bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
                            Delete
                          </button>
                        </td>
                        
                        {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700">
                            Edit
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
    </AdminLayout>
  )
}

export default AllCetegory