import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MasterNewsAdmin from "../components/masterNewsAdmin";

export default function AdminNews() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full lg:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MasterSidebar />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <MasterNavbarAdmin
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Product */}
      <div className="flex-grow h-full ml-6 md:ml-80 pt-10 mr-0 ">
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 py-4 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">News</Typography>
          <div className=" pr-6 col-span-2 flex justify-end items-center ">
            <Button className="bg-wpigreen-50 flex gap-2 items-center">
              <PlusCircleIcon className="h-[15px] w-auto" />
              <p>Tambah Produk</p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 bg-white w-auto mr-6 mb-6 pt-6 pb-6 pr-6 pl-6 justify-center items-center rounded-lg shadow-md">
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
