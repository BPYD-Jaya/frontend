import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { useDropzone } from "react-dropzone";
import { FaCloudArrowUp } from "react-icons/fa6";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MasterCatalogAdmin from "../components/masterCatalogAdmin";

export default function AddMasterProduct() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (acceptedFiles) => {
    // Handle the selected file as needed
    setSelectedFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: "image/*", // Specify accepted file types
    onDrop: handleFileUpload,
  });

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
        <form>
          <div className="grid grid-cols-4 gap-2 bg-white mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
          <div className="col-span-4">
              <Typography variant="h5" className="pb-10">
                Tambah Kategori Produk
              </Typography>
            </div>
            <div className="col-span-4">
              <Typography variant="small" className="">
                Nama Kategori Produk
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="Nama Produk"
                className="!border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="col-span-4">
              <Typography variant="small" className="">
                Foto Kategori Produk
              </Typography>
            </div>
            <div
              className="md:col-span-4 border border-gray-400 w-full rounded-lg  h-[150px] flex justify-center items-center"
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
            <div className="col-span-4 flex justify-end items-center pt-6">
             <a href="/master-produk" className="flex gap-2 text-wpigreen-500 ml-4 text-sm">
                <Button className="bg-red-400 flex">
                 Batal
                </Button>
              </a>
              <a href="/master-produk" className="flex gap-2 text-wpigreen-500 ml-4 text-sm">
                <Button className="bg-wpigreen-50 flex">
                 Simpan
                </Button>
              </a>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
