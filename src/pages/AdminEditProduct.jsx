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
import Axios from "axios";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminEditProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionInputs, setDescriptionInputs] = useState(1);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [cities, setCities] = useState([]);

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
  useEffect(() => {
    // Fetch data from the API using Axios
    Axios.get("https://backend.ptwpi.co.id/api/provinces", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // Map the fetched data to match your TABLE_ROWS structure
        const mappedData = response.data.map((item, index) => ({
          id: item.id,
          nomor: index + 1,
          provinceName: item.province,
        }));

        // Update the provinces state with the mapped data
        setProvinces(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch cities when the selected province changes
    const fetchCities = async () => {
      try {
        const response = await Axios.get(
          `https://backend.ptwpi.co.id/api/cities?province_id=${selectedProvince}`
        );

        const filteredCities = response.data
          .filter((city) => city.province_id === selectedProvince)
          .map((item, index) => ({
            id: item.id,
            nomor: index + 1,
            cityName: item.city,
          }));

        setCities(filteredCities);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    if (selectedProvince !== null) {
      fetchCities();
    }
  }, [selectedProvince]);

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

      {/* Edit Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Edit Product
          </Typography>
        </div>

        {/* Detail Product */}
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Product Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Product Name"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Brand Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Brand Name"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Company Name
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Minyak Goreng BPYD"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Price
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Price"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Stock
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Stock"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Volume
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Volume"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Address
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Address"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-start pb-4 ">
            Specification
          </div>
          <div className="flex-row gap-2 justify-between col-span-12 lg:col-span-9 pb-4 font-bold">
            {[...Array(descriptionInputs)].map((_, index) => (
              <div className=" w-full" key={index}>
                <div className="pb-8">
                  <div className="pb-4">
                    <Input
                      color="indigo"
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      placeholder="Item"
                    />
                  </div>
                  <div className="pb-4">
                    <Input
                      color="indigo"
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      placeholder="Value"
                    />
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
          </div>{" "}
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Category Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Category Product"
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Province
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Select
              color="indigo"
              size="lg"
              outline="outline-1 focus:outline-1"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              onChange={(value) => setSelectedProvince(value)}
            >
              {provinces.map((province) => (
                <Option key={province.id} value={province.id}>
                  {province.provinceName}
                </Option>
              ))}
            </Select>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            City
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Select
              color="indigo"
              size="lg"
              outline="outline-1 focus:outline-1"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
            >
              {cities.map((city) => (
                <Option key={city.id} value={city.id}>
                  {city.cityName}
                </Option>
              ))}
            </Select>
          </div>{" "}
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Photo Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8">
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
