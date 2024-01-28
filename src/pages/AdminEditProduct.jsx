import React, { useState, useEffect } from 'react';
import { Button, Typography, Input, Textarea, Select, Option } from '@material-tailwind/react';
import MasterSidebar from '../components/masterSidebar';
import MasterFooterAdmin from '../components/masterFooterAdmin';
import MasterNavbarAdmin from '../components/masterNavbarAdmin';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminEditProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [provinceResponse, categoryResponse, productResponse] = await Promise.all([
          axios.get('https://backend.ptwpi.co.id/api/provinces'),
          axios.get('https://backend.ptwpi.co.id/api/categories'),
          axios.get(`https://backend.ptwpi.co.id/api/products/${id}`)
        ]);

        setProvinces(provinceResponse.data);
        setCategories(categoryResponse.data);
        setProductData(productResponse.data.data);
        setSelectedProvince(productResponse.data.data.province_id.toString());
        setSelectedCity(productResponse.data.data.city_id.toString());
        setSelectedCategory(productResponse.data.data.category_id.toString());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedProvince) return;
      try {
        const response = await axios.get(`https://backend.ptwpi.co.id/api/cities?province_id=${selectedProvince}`);
        setCities(response.data.data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCities();
  }, [selectedProvince]);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInputChange = (key, value) => {
    setProductData({ ...productData, [key]: value });
  };

  const handleAdditionalInfoChange = (index, key, value) => {
    const updatedAdditionalInfo = productData.additional_info.map((info, i) => {
      if (i === index) {
        return { ...info, [key]: value };
      }
      return info;
    });

    setProductData({ ...productData, additional_info: updatedAdditionalInfo });
  };

  const handleAddSpecification = () => {
    const newSpecification = { item: "", desc: "" };
    const updatedAdditionalInfo = [...productData.additional_info, newSpecification];
    setProductData({ ...productData, additional_info: updatedAdditionalInfo });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(productData).forEach(key => {
        if (key !== 'additional_info') {
          formData.append(key, productData[key]);
        }
      });

      if (selectedFile) {
        formData.append('product_image', selectedFile);
      }

      productData.additional_info.forEach((info, index) => {
        formData.append(`additional_info[${index}][item]`, info.item);
        formData.append(`additional_info[${index}][desc]`, info.desc);
      });

      const response = await axios.put(`https://backend.ptwpi.co.id/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Success:', response.data);
      navigate('/admin-produk');
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error);
    }
  };
  useEffect(() => {
    console.log(selectedProvince); // Cek nilai saat ini dari selectedProvince
    console.log(selectedCity); // Cek nilai saat ini dari selectedCity
    console.log(selectedCategory); // Cek nilai saat ini dari selectedCategory
  }, [selectedProvince, selectedCity, selectedCategory]);

  if (!productData) {
    return <p>Loading...</p>;
  }

  

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div className="bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out">
        <MasterSidebar />
      </div>
  
      {/* Navbar */}
      <MasterNavbarAdmin openSidebar={true} setOpenSidebar={() => {}} />
  
      {/* Edit Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md">
          <Typography className="col-span-2 flex items-center">Edit Product</Typography>
        </div>
  
        {/* Detail Product */}
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <form onSubmit={handleSubmit} className="col-span-12">
            {/* Product Name */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Product Name
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
              <Input
                color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                placeholder="Input Product Name"
                value={productData.product_name}
                onChange={(e) => handleInputChange('product_name', e.target.value)}
              />
            </div>
  
            {/* Brand Name */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Brand Name
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
              <Input
                color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                placeholder="Input Brand Name"
                value={productData.brand}
                onChange={(e) => handleInputChange('brand', e.target.value)}
              />
            </div>
  
            {/* Company Name */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Company Name
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8 font-bold">
              <Input
                color="indigo"
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                placeholder="Input Company Name"
                value={productData.company_name}
                onChange={(e) => handleInputChange('company_name', e.target.value)}
              />
            </div>
  
            {/* Category */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Category
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8">
              <Select
                color="indigo"
                size="lg"
                outline="outline-1 focus:outline-1"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.category}
                  </Option>
                ))}
              </Select>
            </div>
  
            {/* Province */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Province
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8">
              <Select
                color="indigo"
                size="lg"
                outline="outline-1 focus:outline-1"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                {provinces.map((province) => (
                  <Option key={province.id} value={province.id}>
                    {province.name}
                  </Option>
                ))}
              </Select>
            </div>
  
            {/* City */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              City
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8">
              <Select
                color="indigo"
                size="lg"
                outline="outline-1 focus:outline-1"
                className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cities.map((city) => (
                  <Option key={city.id} value={city.id}>
                    {city.name}
                  </Option>
                ))}
              </Select>
            </div>
  
            {/* Specifications */}
            {productData.additional_info.map((info, index) => (
              <div key={index} className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Specification Item {index + 1}
                  </label>
                  <Input
                    type="text"
                    placeholder={`Item ${index + 1}`}
                    value={info.item}
                    onChange={(e) => handleAdditionalInfoChange(index, 'item', e.target.value)}
                    color="indigo"
                    size="lg"
                    className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Specification Description {index + 1}
                  </label>
                  <Input
                    type="text"
                    placeholder={`Description ${index + 1}`}
                    value={info.desc}
                    onChange={(e) => handleAdditionalInfoChange(index, 'desc', e.target.value)}
                    color="indigo"
                    size="lg"
                    className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                  />
                </div>
              </div>
            ))}
  
            {/* Add Specification Button */}
            <div className="col-span-12 flex justify-center lg:justify-end items-center pb-8">
              <Button onClick={handleAddSpecification} className="bg-blue-500 text-white">
                Add Specification
              </Button>
            </div>
  
            {/* Product Image Upload */}
            <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
              Photo Product
            </div>
            <div className="col-span-12 lg:col-span-9 pb-8">
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
  
            {/* Save Button */}
            <div className="col-span-12 flex justify-end items-center">
              <Button onClick={handleSubmit} className="bg-wpigreen-50 flex">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
  
      {/* Footer */}
      <MasterFooterAdmin />
    </div>
  );
}  