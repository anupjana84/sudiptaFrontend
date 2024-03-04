import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AdminLayout from "../Admin/AdminLayout";

const SkeletonLoder = () => {
  return (
    <AdminLayout>
      <tr>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        
       
        
       
      </tr>
      
      <tr>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900"></div>
              <div className="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        
       
        
       
      </tr>
      
    </AdminLayout>
  );
};

export default SkeletonLoder;
