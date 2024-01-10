import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MasterCatalogAdmin from "../components/masterCatalogAdmin";

export default function AdminProduct() {
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
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 pt-4 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Product
          </Typography>
          <div className=" pr-6 col-span-2 flex justify-end items-center ">
            <Button className="bg-wpigreen-50 flex gap-2 items-center">
              <PlusCircleIcon className="h-[15px] w-auto" />
              <p>Tambah Produk</p>
            </Button>
          </div>
          {/* <div className="col-span-2"></div> */}
          <div className="col-span-4">
            <div className="flex justify-center items-center w-full pr-6 mb-4">
              <input
                type="text"
                placeholder="Cari Produk"
                className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border wpigreen-500"
              />
              <button
                type="button"
                className="bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 rounded-r-md"
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 pt-6 pb-6 pr-2 pl-6 rounded-lg shadow-md">
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
          <MasterCatalogAdmin />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
