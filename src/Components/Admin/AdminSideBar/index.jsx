
import React,{useRef,useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CalendarDays,ChevronUp } from "lucide-react";
const menuItems = [
  {
    name: "All Product",
    href: "/allProduct",
  },
  {
    name: "Add Product",
    href: "/addProduct",
  },
 
];
const CategorymenuItems = [
  {
    name: "All Cetegory",
    href: "/allCetegory",
  },
 
 
];

const AdminSideBar = ({sidebarOpen, setSidebarOpen}) => {
  const sidebar = useRef(null);
  const [open, setOpen] =useState(true)
  const [open1, setOpen1] =useState(true)
  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden
        bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 
        py-6
        ${
         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
       }`}
        >
           {/* <div
           onClick={(e)=>{
            e.preventDefault()
            setSidebarOpen(!sidebarOpen)

           }}
           className='h-10 flex justify-end items-center pr-3 w-full  lg:hidden '>
          
           </div> */}
          <div class="flex items-center justify-between ">
            <div className='h-10 w-full flex justify-center items-center bg-lime-950'>
            <h3 className='text-white'>Dashboard</h3>
            </div>
           
            
            {/* <button
              aria-controls="sidebar"
              aria-expanded="false"
              class="block lg:hidden"
            >
              <AlignJustify className="fill-current" />
            </button> */}
          </div>
          <div className="no-scrollbar bg-slate-700 flex flex-col overflow-y-auto duration-300 ease-linear">
            <nav className="mt-2 py-1 px-4 lg:mt-0 lg:px-2">
              <div>
                {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2"> 
                  Menu
                </h3> */}
                <ul className="mb-6 flex flex-col gap-1.5">
                  <li>
                    <div className="group relative flex items-center gap-2.5 
                      rounded-sm px-4 py-2 font-medium text-bodydark1
                      text-white
                       duration-300 ease-in-out hover:bg-violet-800 dark:hover:bg-meta-4 false active"
                       onClick={(e)=>{
                        e.preventDefault()
                        setOpen1(!open1)
                                              }}
                       >
                     
                     <CalendarDays  />
                     
                     
                      Dashboard
                      <ChevronUp  className={`${open1&&'rotate-180'}`}/>
                    
                    </div>
                  </li>
                  <div className={`translate transform overflow-hidden ${open1 && "hidden"} `}>
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-2">
                     {menuItems && menuItems.map((item)=>(
                      
                        <li>
                        <NavLink className={({isActive})=>`group
                        text-white flex justify-between relative  items-center gap-2.5
                        ${isActive?'bg-lime-500':"bg-red-500"}
                        
                        rounded-md px-1 font-medium text-bodydark2 duration-300 ease-in-out
                         hover:bg-violet-800 false`}
                        to={item.href}
                        >
                          <span>{item.name}</span> 
                          <span></span> 
                        </NavLink>
                      </li>
                  
                     ))}
                      
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
            <nav className="mt-2 py-1 px-4 lg:mt-0 lg:px-2">
              <div>
                {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2"> 
                  Menu
                </h3> */}
                <ul className="mb-6 flex flex-col gap-1.5">
                  <li>
                    <div className="group relative flex items-center gap-2.5 
                      rounded-sm px-4 py-2 font-medium text-bodydark1
                      text-white
                       duration-300 ease-in-out hover:bg-violet-800 dark:hover:bg-meta-4 false active"
                       onClick={(e)=>{
                        e.preventDefault()
                        setOpen(!open)
                                              }}
                       >
                     
                     <CalendarDays  />
                     
                     
                      Category
                      <ChevronUp  className={`${open&&'rotate-180'}`}/>
                    
                    </div>
                  </li>
                  <div className={`translate transform overflow-hidden ${open && "hidden"} `}>
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-2">
                     {CategorymenuItems && CategorymenuItems.map((item)=>(
                      
                        <li>
                        <NavLink className={({isActive})=>`group
                        text-white flex justify-between relative  items-center gap-2.5
                        ${isActive?'bg-lime-500':"bg-red-500"}
                        
                        rounded-md px-1 font-medium text-bodydark2 duration-300 ease-in-out
                         hover:bg-violet-800 false`}
                        to={item.href}
                        >
                          <span>{item.name}</span> 
                          <span></span> 
                        </NavLink>
                      </li>
                  
                     ))}
                      
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </aside>
    </>
  )
}

export default AdminSideBar

