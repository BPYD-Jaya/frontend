import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function AdminCatalog() {
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
        <div className="grid grid-cols-4 gap-8 ">
          <Typography className="mb-2 col-span-2 flex items-center">
            Product
          </Typography>
          <div className="mb-2 pr-6 col-span-2  flex justify-end items-center ">
            <Button className="bg-wpigreen-50 flex gap-2 items-center">
              <PlusCircleIcon className="h-[30px] w-auto" />
              <p>Tambah Produk</p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
          <MasterCatalog />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
