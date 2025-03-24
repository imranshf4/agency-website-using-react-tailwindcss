import React from "react";
import { FaUserEdit } from "react-icons/fa";
const Locations = () => {
  return (
    <div className="section-container flex flex-col sm:flex-row justify-between gap-8 shadow-[0px_0px_1px_rgba(239,68,68,0.5)]">
    <div className="flex flex-row gap-5 items-center justify-evenly">
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="bg-red-500/20 px-2 py-2 rounded-full flex items-center justify-center">
          <FaUserEdit className="text-red-500" />
        </div>
        <div>
          <h4 className="font-bold text-base">90+</h4>
          <p className="text-sm">Users</p>
        </div>
      </div>
      
    </div>
    <hr className="h-15 border-l border-red-500" />
    <div className="flex flex-row gap-5 items-center justify-center">
      <div className="bg-red-500/20 px-2 py-2 rounded-full flex items-center justify-center">
        <FaUserEdit className="text-red-500" />
      </div>
      <div>
        <h4 className="font-bold text-base">90+</h4>
        <p className="text-sm">Users</p>
      </div>
      
    </div>
    <hr className="h-15 border-l border-red-500" />
    <div className="flex flex-row gap-5 items-center justify-center">
      <div className="bg-red-500/20 px-2 py-2 rounded-full flex items-center justify-center">
        <FaUserEdit className="text-red-500" />
      </div>
      <div>
        <h4 className="font-bold text-base">90+</h4>
        <p className="text-sm">Users</p>
      </div>
    </div>
  </div>
  
  );
};

export default Locations;
