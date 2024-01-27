import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AdminEditProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionInputs, setDescriptionInputs] = useState(1);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cities, setCities] = useState([]);
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

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
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/products/" + id
        );
        setProductData(response.data);
        setSelectedProvince(response.data.province_id.toString());
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  useEffect(() => {
    if (productData) {
      setSelectedProvince(productData.province_id);
      setSelectedCity(productData.city_id);
    }
  }, [productData]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
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
    // Fetch cities when the selected province changes
    const fetchCities = async () => {
      try {
        const response = await Axios.get(
          `https://backend.ptwpi.co.id/api/cities?province_id=${selectedProvince}`
        );

        const filteredCities = response.data
          .filter((city) => city.province_id === Number(selectedProvince))
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

    console.log(cities);
  }, [selectedProvince, provinces]);

  const handleAddDescription = () => {
    setDescriptionInputs(descriptionInputs + 1);
  };

  if (!productData) {
    // Return loading state or redirect to a loading page
    return <p>Loading...</p>;
  }

  const handleSubmit = async () => {
    try {
      // Prepare the data to be sent to the backend
      const formData = new FormData();
      formData.append("product_name", productData.product_name);
      formData.append("brand", productData.brand);
      formData.append("company_name", productData.company_name);
      formData.append("category_id", productData.category_id);
      formData.append("storage_type", productData.storage_type);
      formData.append("packaging", productData.packaging);
      formData.append("price", productData.price);
      formData.append("stock", productData.stock);
      formData.append("volume", productData.volume);
      formData.append("province_id", productData.province_id);
      formData.append("city_id", productData.city_id);
      formData.append("address", productData.address);
      formData.append("description", productData.description);

      // Add the selected file to the form data
      if (selectedFile) {
        formData.append("product_image", selectedFile);
      }

      // Make the API call to update the product
      const response = await Axios.put(
        `https://backend.ptwpi.co.id/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Check the response and handle accordingly
      if (response.status === 200) {
        // Product updated successfully
        console.log("Product updated successfully");
        // Redirect to the product list page or any other page as needed
        navigate("/admin-produk");
      } else {
        // Handle error
        console.error("Error updating product:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNameChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      product_name: e.target.value,
    }));
  };

  const handleBrandChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      brand: e.target.value,
    }));
  };

  const handleCompanyNameChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      company_name: e.target.value,
    }));
  };

  const handleCategoryChange = (value) => {
    setProductData((prevData) => ({
      ...prevData,
      category_id: value,
    }));
  };

  const handleStorageChange = (value) => {
    setProductData((prevData) => ({
      ...prevData,
      storage_type: value,
    }));
  };

  const handlePackaging = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      packaging: e.target.value,
    }));
  };

  const handlePrice = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      price: e.target.value,
    }));
  };

  const handleStock = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      stock: e.target.value,
    }));
  };

  const handleVolume = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      volume: e.target.value,
    }));
  };

  const handleAddress = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      address: e.target.value,
    }));
  };

  const handleDescription = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      description: e.target.value,
    }));
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
              value={productData.product_name}
              onChange={handleNameChange}
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
              value={productData.brand}
              onChange={handleBrandChange}
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
              placeholder="Input Company Name"
              value={productData.company_name}
              onChange={handleCompanyNameChange}
            />
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
              value={productData.category_id.toString()}
              onChange={handleCategoryChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Storage Type
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Select
              color="indigo"
              size="lg"
              outline="outline-1 focus:outline-1"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              value={productData.storage_type}
              onChange={handleStorageChange}
            >
              <Option value="Dry">Dry</Option>
              <Option value="Frozen">Frozen</Option>
            </Select>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Packaging
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Packaging"
              value={productData.packaging}
              onChange={handlePackaging}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Price
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              type="number"
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Price"
              value={productData.price}
              onChange={handlePrice}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Stock
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              type="number"
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productData.stock}
              onChange={handleStock}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Satuan
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Input
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              placeholder="Input Satuan"
              value={productData.volume}
              onChange={handleVolume}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Province
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 ">
            {/* <Select
              color="indigo"
              size="lg"
              outline="outline-1 focus:outline-1"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              value={selectedProvince}
              onChange={(value) => {
                setSelectedProvince(value);
              }}
            >
              {provinces &&
                provinces.map((province) => (
                  <Option
                    {...(province.id.toString() === selectedProvince && {
                      defaultValue: true,
                    })}
                    key={province.id}
                    value={province.id.toString()}
                  >
                    {province.provinceName}
                  </Option>
                ))}
            </Select> */}
            <select
              className="border border-gray-400 rounded-md w-full py-3 px-2"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
              }}
            >
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.provinceName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            City
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 ">
            {/* <Select
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
            </Select> */}

            <select
              className="border border-gray-400 rounded-md w-full py-3 px-2"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
            >
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Address
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Textarea
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productData.address}
              onChange={handleAddress}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8 ">
            Description
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
            <Textarea
              color="indigo"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productData.description}
              onChange={handleDescription}
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
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
            Photo Product
          </div>
          <div className="col-span-12 lg:col-span-9 pb-8">
            <img
              src={productData.item_image}
              alt="product image"
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
              <Button onClick={handleSubmit} className="bg-wpigreen-50 flex">
                Simpan
              </Button>
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
