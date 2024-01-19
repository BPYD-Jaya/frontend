import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Input,
  Textarea,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import MasterSidebar from "../components/masterSidebar";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { FaCloudArrowUp } from "react-icons/fa6";

export default function AdminAddProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionInputs, setDescriptionInputs] = useState(1);
  const handleFileUpload = (acceptedFiles) => {
    // Handle the selected file as needed
    setSelectedFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*", // Specify accepted file types
    onDrop: handleFileUpload,
  });

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

  const handleAddDescription = () => {
    setDescriptionInputs(descriptionInputs + 1);
  };

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

      {/* ADD Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Add Product
          </Typography>
        </div>

        {/* Detail Product */}
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Product Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Product Name" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Brand Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Brand Name" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Company Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Minyak Goreng BPYD" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Price
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Price" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Stock
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Stock" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Volume
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Volume" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Address
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Address" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-start pb-8 ">
            Specification
          </div>
          <div className="flex-row gap-2 justify-between col-span-12 lg:col-span-9 pb-4 font-bold">
            {[...Array(descriptionInputs)].map((_, index) => (
              <div className=" w-full" key={index}>
                <div className="pb-8">
                  <div className="pb-4">
                    <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Item" />
                  </div>
                  <div className="pb-4">
                    <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Value" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 flex justify-center lg:justify-end items-center pb-8">
            <Button
              onClick={handleAddDescription}
              className="bg-blue-500 text-white"
            >
              Add Specification
            </Button>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Category Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Category Product" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            City
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input City" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Province
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} placeholder="Input Province" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Photo Product
          </div>
          <div
            className="col-span-12 lg:col-span-9 py-4 border border-gray-400 rounded-lg mb-4"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="text-center flex flex-col items-center">
                <FaCloudArrowUp className="w-8 h-8 text-wpiblue-500" />
                <p className="mt-2">
                  {selectedFile
                    ? `File: ${selectedFile.name}`
                    : "Drag and drop file here or click to select file"}
                </p>
              </div>
            )}
          </div>
          <div className="col-span-12 flex justify-end items-center">
            <a
              href="/admin-produk"
              className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
            >
              <Button className="bg-red-400 flex">Batal</Button>
            </a>
            <a
              href="/admin-produk"
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
