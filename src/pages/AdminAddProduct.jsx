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
import Axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export default function AdminAddProduct() {
  const [selectedFile, setSelectedFile] = useState("");
  const [additional_info, setAdditionalInfo] = useState([])
  const [descriptionInputs, setDescriptionInputs] = useState(1);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    product_name: "",
    brand: "",
    company: "",
    price: "",
    stock: "",
    volume: "",
    address: "",
    category_id: "",
    province_id: "",
    city_id: "",
    item_image: null,
    description: null,
    company_category: null,
    company_whatsapp_number: null,
    storage_type:null,
    packaging: null,
    additional_info: [{ item: "", value: "" }],
  });

  const navigate = useNavigate();

  const handleFileUpload = (acceptedFiles) => {
    // Handle the selected file as needed
    setSelectedFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  };

  const handleAdditionalInfoChange = (index, key, value) => {
    const updatedAdditionalInfo = [...formData.additional_info];
    updatedAdditionalInfo[index][key] = value;
    setFormData({ ...formData, additional_info: updatedAdditionalInfo });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = Cookies.get("authToken");

      if (!authToken) {
        throw new Error("Access token not found in cookies");
      }

      const response = await Axios.post(
        "https://backend.ptwpi.co.id/api/products",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Data successfully submitted:", response.data);

      // Redirect to /master-province after successful submission
      // navigate("/admin-produk");
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
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

  useEffect(() => {
    Axios.get("https://backend.ptwpi.co.id/api/categories")
      .then((response) => {
        const mappedCategories = response.data.map((category) => ({
          id: category.id,
          categoryName: category.category,
        }));
        setCategories(mappedCategories); // set categories state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
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
    setAdditionalInfo([...additional_info, { item: "", value: "" }]);
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
        <form onSubmit={handleFormSubmit}>
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
                value={formData.product_name}
                onChange={(e) =>
                  setFormData({ ...formData, product_name: e.target.value })
                }
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
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
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
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
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
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
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
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
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
                value={formData.volume}
                onChange={(e) =>
                  setFormData({ ...formData, volume: e.target.value })
                }
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
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-start pb-8 ">
              Specification
            </div>
            <div className="flex-row gap-2 justify-between col-span-12 lg:col-span-9 pb-4 font-bold">
              {[...Array(descriptionInputs)].map((item, index) => (
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
                        value={index.item}
                        onChange={(e) =>
                          handleAdditionalInfoChange(
                            index,
                            "item",
                            e.target.value
                          )
                        }
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
                        value={index.value}
                        onChange={(e) =>
                          handleAdditionalInfoChange(
                            index,
                            "value",
                            e.target.value
                          )
                        }
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
            </div>
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
              Category Product
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
              <Select
                color="indigo"
                size="lg"
                outline="outline-1 focus:outline-1"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                value={formData.category_id}
                onChange={(value) => setFormData({ ...formData, category_id: value })}
              >
                {categories.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.categoryName}
                  </Option>
                ))}
              </Select>
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
                value={formData.province_id}
                onChange={(value) => setFormData({ ...formData, province_id: value })}
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
                value={formData.city_id}
                onChange={(value) => setFormData({ ...formData, category_id: value })}
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.id}>
                    {city.cityName}
                  </Option>
                ))}
              </Select>
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
