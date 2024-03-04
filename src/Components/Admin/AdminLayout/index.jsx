import React, { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
// import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import AdminSideBar from "../AdminSideBar";
import AdminHeader from "../AdminHeader";


const AdminLayout = ({ children }) => {
  const sidebar = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-slate-400">
      <div className="flex h-screen overflow-hidden">
        <AdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className=" flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="p-3  ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
