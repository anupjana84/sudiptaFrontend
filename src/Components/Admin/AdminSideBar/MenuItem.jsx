import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CalendarDays,ChevronUp } from "lucide-react";

const MenuItem = ({menu,title}) => {
    const [open, setOpen] =useState(true)
  return (
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
                     
                     
                      {title}
                      <ChevronUp  className={`${open&&'rotate-180'}`}/>
                    
                    </div>
                  </li>
                  <div className={`translate transform overflow-hidden ${open && "hidden"} `}>
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-2">
                     {menu && menu.map((item)=>(
                      
                        <li key={item.name}>
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
  )
}

export default MenuItem