import React from "react";
import MasterSidebar from "../components/masterSidebar";
import MasterNews from "../components/masterNews";

export default function DashboardPage() {
  return (
    <div className="flex bg-gray-100">
      <div className="bg-white h-screen z-20">
        <MasterSidebar />
      </div>
      <div className="bg-red-500">
       <MasterNews/>
      </div>
    </div>
  );
}
