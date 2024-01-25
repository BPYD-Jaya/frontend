import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import {
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import Axios from "axios"; // Import Axios for API requests

export default function EditMasterProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
  });

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

  // Fetch data for the selected item when the component mounts
  useEffect(() => {
    // Assuming you have a way to get the selected item's ID (replace 'selectedItemId' with the actual ID)
    const selectedItemId = "replace_with_actual_selected_item_id";
  
    Axios.get(`https://backend.ptwpi.co.id/api/categories/${selectedItemId}`)
      .then((response) => {
        console.log("Response Data:", response.data);
  
        const { name, photo } = response.data;
  
        // Update the formData state with the fetched data
        setFormData({
          name,
          photo,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Update the formData state when the user makes changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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

      {/* Content Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <form>
          <div className="grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
            <div className="md:col-span-4">
              <Typography variant="h5" className="pb-10">
                Edit Kategori Produk
              </Typography>
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Kategori Produk
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Foto Kategori Produk
              </Typography>
            </div>
            <div className="md:col-span-4 shadow-md rounded-lg border b-2 border-gray-400">
              <div className="sm:ml-0 md:-ml-2">
                <img alt="" src="assets/aquaculture.png">

                </img>
              </div>
              <div className="md:flex pt-4 pl-4 md:pl-4 pb-6">
                <div className="md:flex  justify-center items-center">
                  <Button
                    color=""
                    className="bg-wpiblue-50 relative overflow-hidden"
                  >
                    <span>
                      <Typography variant="small">Ganti Gambar</Typography>
                    </span>

                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 h-full w-full"
                      onChange={handleFileUpload}
                    />
                  </Button>
                  <Typography className="pl-1 md:pl-4">
                    {selectedFile ? selectedFile.name : "No File Chosen"}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end items-center pt-6">
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
