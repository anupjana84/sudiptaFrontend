import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AdminLayout from "../Admin/AdminLayout";

const SkeletonLoder = () => {
  return (
    <AdminLayout>
      <tr>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        
       
        
       
      </tr>
      
      <tr>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-4 py-4">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0"></div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900"></div>
              <div class="text-sm text-gray-700"><Skeleton height={50} width={450} /></div>
            </div>
          </div>
        </td>
        
       
        
       
      </tr>
      
    </AdminLayout>
  );
};

export default SkeletonLoder;
