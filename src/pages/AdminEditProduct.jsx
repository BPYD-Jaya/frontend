import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Typography,
  Input,
  Textarea,
  ButtonGroup,
  Select,
  Option,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterAdminDetailImage from "../components/masterAdminDetailImage";

export default function AdminEditProduct() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle the selected file as needed
    console.log(file);
  };

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
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
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

      {/* Edit Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Edit Product
          </Typography>
        </div>

        {/* Detail Product */}
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Product Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Product Name" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Brand Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Brand Name" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Company Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Minyak Goreng BPYD" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Price
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Price" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Stock
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Stock" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Stock
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Stock" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Volume
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Volume" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Address
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Address" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Description
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Description" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Category Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Category Product" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            City
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input City" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Province
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            <Input placeholder="Input Province" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Photo Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4">
            <img
              src="https://mitrawarungpangan.bgrlogistics.id/upload/314b8961ed526933bec7c95a57549f6a.jpg"
              alt=""
              className="w-full md:w-auto h-auto md:h-[300px] border"
            />
            <div className="flex items-center mt-2">
              <Button
                size="sm"
                className="bg-wpiblue-50 relative overflow-hidden"
              >
                Select Photo
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 h-full w-full"
                  onChange={handleFileUpload}
                />
              </Button>
              <Typography className="pl-1 md:pl-4">
                {selectedFile ? `${selectedFile.name}` : "No File Chosen"}
              </Typography>
            </div>
          </div>
          <div className="col-span-12 flex justify-end items-center">
            <a
              href="/adminproduk"
              className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
            >
              <Button className="bg-red-400 flex">Batal</Button>
            </a>
            <a
              href="/adminproduk"
              className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
            >
              <Button className="bg-wpigreen-50 flex">Simpan</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
