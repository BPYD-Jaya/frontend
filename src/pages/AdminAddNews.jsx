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

export default function AdminAddNews() {
  const [selectedFile, setSelectedFile] = useState(null);

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

      {/* Content Product */}
      <div className="flex-grow h-full ml-5 md:ml-80 pt-10 mr-5 md:mr-0">
        <form>
          <div className="grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg ">
            <div className="md:col-span-4">
              <Typography variant="h5" className="pb-10">
                Tambah Berita
              </Typography>
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Judul Berita
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="Judul Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Nama Penulis
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="Nama Penulis"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Tanggal Berita
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                type="datetime-local"
                size="lg"
                placeholder="Masukan Tanggal Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Isi berita
              </Typography>
            </div>
            <div className="md:col-span-4">
              <Textarea
                color="indigo"
                // placeholder="Deskripsi Produk"
                className=" md:col-span-4 w-full rounded-lg !border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              ></Textarea>
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Upload Gambar
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
            <div className="md:col-span-4 flex gap-2 justify-end items-center pt-6">
              <a
                href="/adminnews"
                className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
              >
                <Button className="bg-red-400 flex">Batal</Button>
              </a>
              <a
                href="/adminnews"
                className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
              >
                <Button className="bg-wpigreen-50 flex">Simpan</Button>
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
