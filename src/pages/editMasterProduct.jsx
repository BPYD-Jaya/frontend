import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MasterSidebar from "../components/masterSidebar";
import {
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import Axios from "axios";
import Cookies from "js-cookie";

export default function EditMasterProduct(props) {
  const { id } = useParams();

  const [formState, setFormState] = useState({
    name: "",
    photo: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFormState((prevFormState) => ({
      ...prevFormState,
      photo: file,
    }));
  };

  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          throw new Error("Access token not found in cookies");
        }

        const response = await Axios.get(
          `https://backend.ptwpi.co.id/api/categories/${id}`
        );

        const { category: name, category_image: photo } = response.data;

        setFormState({
          name,
          photo,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoryData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        throw new Error("Access token not found in cookies");
      }

      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("photo", formState.photo);

      await Axios.put(
        `https://backend.ptwpi.co.id/api/categories/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Redirect to the desired page after successful submission
      props.history.push("/master-produk");
    } catch (error) {
      console.error("Error updating data:", error);
    }
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
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
            <div className="md:col-span-4">
              <Typography variant="h5" className="pb-10">
                Edit Kategori Produk
              </Typography>
            </div>
            <div className="md:col-span-4 rounded-lg">
              <Typography variant="small" className="">
                Kategori Produk
              </Typography>
            </div>
            <div className="md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="Nama Produk"
                className="!border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="name"
                value={formState.name}
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
                <img alt="" src={formState.photo} />
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
                <Button type="submit" className="bg-wpigreen-50 flex">
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
