import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MasterNewsAdmin from "../components/masterNewsAdmin";

export default function AdminNews() {
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div className="bg-white z-50 fixed top-0 h-full">
        <MasterSidebar />
      </div>

      {/* Navbar */}
      <MasterNavbarAdmin />

      {/* Content Product */}
      <div className="flex-grow h-full ml-80 pt-10 mr-0">
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 py-4 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            News
          </Typography>
          <div className=" pr-6 col-span-2 flex justify-end items-center ">
            <Button className="bg-wpigreen-50 flex gap-2 items-center">
              <PlusCircleIcon className="h-[15px] w-auto" />
              <p>Tambah Produk</p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 bg-white mr-6 mb-6 pt-6 pb-6 pr-6 pl-6 rounded-lg shadow-md">
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
          <MasterNewsAdmin />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
