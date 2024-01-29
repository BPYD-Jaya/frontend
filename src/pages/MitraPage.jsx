import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";
import { FaArrowRight } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import MasterFooter from "../components/masterFooter";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios"

export default function MitraPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [provinceData, setProvinceData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    company_email: '',
    company_phone: '',
    company_category: '',
    company_address: '',
    product_name: '',
    brand_name: '',
    stock: '',
    volume: '',
    category_id: '',
    province_id: '',
    city_id: '',
    price: '',
    description: '',
    item_image: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    fetchProvince();
    fetchCategory();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (province) fetchCity();
    else {
      setCity('');
      setCityData([]);
    }
  }, [province]);

  const fetchProvince = async () => {
    try {
      const { data } = await axios.get("https://backend.ptwpi.co.id/api/provinces");
      setProvinceData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCity = async () => {
    try {
      const { data } = await axios.get(`https://backend.ptwpi.co.id/api/cities/province/${province}`);
      setCityData(data);
      setCity(data.length > 0 ? data[0].id : '');
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const { data } = await axios.get("https://backend.ptwpi.co.id/api/categories");
      setCategoryData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFileUpload = (acceptedFiles) => {
    // Ambil file pertama dari array acceptedFiles
    const file = acceptedFiles[0];
    setSelectedFile(file); // Set state selectedFile dengan file yang dipilih
    // Opsi tambahan: Update formData state jika diperlukan
    setFormData({ ...formData, item_image: file });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleFileUpload,
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Membuat instance FormData baru
    const formDataToSend = new FormData();

    // Menambahkan setiap item dari state formData ke formDataToSend secara individual
    formDataToSend.append("name", formData.name);
    formDataToSend.append("company_name", formData.company_name);
    formDataToSend.append("company_email", formData.company_email);
    formDataToSend.append("company_whatsapp_number", formData.company_phone);
    formDataToSend.append("company_category", formData.company_category);
    formDataToSend.append("address", formData.company_address);
    formDataToSend.append("product_name", formData.product_name);
    formDataToSend.append("brand", formData.brand_name);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("volume", formData.volume);
    formDataToSend.append("category_id", formData.category_id);
    formDataToSend.append("province_id", formData.province_id);
    formDataToSend.append("city_id", formData.city_id);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("description", formData.description);

    // Menambahkan file ke formData hanya jika file telah dipilih
    if (selectedFile) {
      formDataToSend.append('item_image', selectedFile, selectedFile.name);
    }
    for (let [key, value] of formDataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log(formDataToSend); // Log formDataToSend untuk memastikan data yang dikirim benar

    console.log(formData); // Log formData untuk memastikan data yang dikirim benar (opsional

    // Mengirim formDataToSend ke server menggunakan axios
    try {
      const response = await axios.post("https://backend.ptwpi.co.id/api/supplier/create", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); // Log response dari server

      // Handle setelah submit berhasil, misalnya membersihkan form atau memberikan notifikasi ke pengguna
    } catch (error) {
      console.error(error.message);
      // Handle jika terjadi error, misalnya memberikan pesan error ke pengguna
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${isNavbarFixed ? "fixed top-0 w-full z-10" : ""
          }`}
      >
        <MasterNavbar />
      </div>

      {/* Jumbotron */}
      <div
        className="bg-wpiblue-50 xl:h-[675px] lg:h-[540px] h-[1000px] md:h-[1000px] lg:pt-4 pt-0"
        style={{ borderRadius: "0 0 50px 50px" }}
      >
        <div className="container mx-auto grid lg:grid-cols-12 grid-cols-1 px-4 gap-8">
          <div className=" flex justify-start  items-center text-white col-span-6 pl-0 pt-2 lg:pl-6">
            <img
              src="./assets/heroMitra.png"
              alt="jumbotron"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className=" col-span-6  xl:-translate-x-0 flex flex-col justify-center">
            <Typography variant="h2" color="white">
              GABUNG JADI SUPPLIER WARUNG PANGAN INDONESIA!
            </Typography>
            <div className="text-justify">
              <Typography className="py-4" color="white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate dignissimos quasi, quos nobis amet et possimus tempora
                corporis enim nam adipisci deleniti saepe, error perferendis
                eius rem nesciunt? Laborum, beatae.
              </Typography>
              <div className="flex justify-center lg:justify-start">
                <a href="/login">
                  <Button
                    className="hover:text-green-100 bg-wpigreen-50"
                    size="lg"
                  >
                    <div className="flex items-center text-2xl">
                      GABUNG SEKARANG <FaArrowRight className="ml-2" />
                    </div>
                  </Button>
                </a>
              </div>
              <div className="md:pt-0 pt-4 xl:translate-y-20 md:translate-y-14 translate-y-0 flex justify-end">
                <img src="./assets/brick.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-2">
        <div className="bg-white container mx-auto md:-translate-y-[2.5rem] lg:-translate-y-[8.3rem] xl:-translate-y-[9rem] -translate-y-28 px-12 py-8 text-center shadow-lg rounded-lg">
          <div className="text-wpiblue-50">
            <Typography
              variant="h2"
              className="text-2xl lg:text-4xl lg:py-4 pb-6 md:pb-8 pt-0"
            >
              PARTNER KAMI
            </Typography>
          </div>
          <div className="w-full h-full relative">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              loop={true}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src="https://warungpangan.com/upload/img/c38c8d98c6cff3469702e63cbe56686d.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.ptppi.co.id/wp-content/uploads/2022/01/PPI-ID-Food.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.bgrlogistik.id/bgr/img/logo_bli.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://warungpangan.com/upload/img/mitra_bisnis_logo_2.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://warungpangan.com/upload/img/mitra_bisnis_logo_5.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://warungpangan.com/upload/img/mitra_bisnis_logo_3.png"
                  alt=""
                  className="w-[300px] h-[150px] md:w-[130px] md:h-[70px] xl:w-[200px] xl:h-[100px] mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Form Supplier */}
      <div className="container mx-auto lg:-translate-y-10 -translate-y-0">
        <div className="mb-10 border rounded-lg shadow-lg mx-2 lg:mx-0 ">
          <div className="flex xl:flex-row flex-col">
            <div
              className="bg-gradient-to-r from-wpiblue-50 to-wpigreen-50 flex justify-center items-center text-center xl:w-1/2 w-full h-[300px] xl:h-auto"
              style={{ borderRadius: "10px 100px 100px 10px" }}
            >
              <Typography variant="h1" color="white">
                Formulir Pendaftaran Supplier
              </Typography>
            </div>
            <div className="flex justify-center items-center xl:w-1/2 w-full">
              <form className="py-6 mb-2 w-full px-4" onSubmit={handleSubmit}>
                <div className="flex flex-col p-4 mb-2 border border-b-4">
                  <Typography className="font-bold text-center">PIC</Typography>
                  <Typography className="font-normal">Name</Typography>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                </div>

                <div className="flex flex-col p-4 mb-2 border border-b-4">
                  <Typography className="font-bold text-center">Company</Typography>
                  <Typography className="font-normal">Company Name</Typography>
                  <Input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    size="sm"
                    placeholder="Enter company name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Company Email</Typography>
                  <Input
                    type="email"
                    name="company_email"
                    value={formData.company_email}
                    onChange={(e) => setFormData({ ...formData, company_email: e.target.value })}
                    size="sm"
                    placeholder="Enter company email"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">
                    Company Phone Number
                  </Typography>
                  <Input
                    type="text"
                    name="company_phone"
                    value={formData.company_phone}
                    onChange={(e) => setFormData({ ...formData, company_phone: e.target.value })}
                    size="sm"
                    placeholder="Enter company phone number"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Category Company</Typography>
                  <Input
                    type="text"
                    name="company_category"
                    value={formData.company_category}
                    onChange={(e) => setFormData({ ...formData, company_category: e.target.value })}
                    size="sm"
                    placeholder="Enter category"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Province</Typography>
                  <Select
                    onChange={(value) => { setProvince(value); setFormData({ ...formData, province_id: value, city_id: '' }); }}
                    label="Pilih Provinsi"
                    name="province"
                    id="province"
                    value="province"
                  >
                    {provinceData.map((item) => (
                      <Option key={item.id} value={item.id}>
                        {item.province}
                      </Option>
                    ))}
                  </Select>
                  <Typography className="font-normal">City</Typography>
                  <Select
                    onChange={(value) => { setCity(value); setFormData({ ...formData, city_id: value }); }}
                    label="Pilih Kota"
                    name="city"
                    id="city"
                    value="city"
                    disabled={!province}
                  >
                    {cityData.map((item) => (
                      <Option key={item.id} value={item.id}>
                        {item.city}
                      </Option>
                    ))}
                  </Select>
                  <Typography className="font-normal">Address</Typography>
                  <Textarea
                    name="company_address"
                    value={formData.company_address}
                    onChange={(e) => setFormData({ ...formData, company_address: e.target.value })}
                    size="sm"
                    placeholder="Enter address"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                </div>

                <div className="flex flex-col p-4 border border-b-4">
                  <Typography className="font-bold text-center">Product</Typography>
                  <Typography className="font-normal">Product Name</Typography>
                  <Input
                    name="product_name"
                    value={formData.product_name}
                    onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                    size="sm"
                    placeholder="Enter product name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Brand Name</Typography>
                  <Input
                    name="brand_name"
                    value={formData.brand_name}
                    onChange={(e) => setFormData({ ...formData, brand_name: e.target.value })}
                    size="sm"
                    placeholder="Enter brand name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Stock</Typography>
                  <Input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    size="sm"
                    placeholder="Enter stock amount"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Volume</Typography>
                  <Input
                    name="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    size="sm"
                    placeholder="Enter volume"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Price</Typography>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    size="sm"
                    placeholder="Enter price"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Category</Typography>
                  <Select
                    onChange={(value) => { setCategory(value); setFormData({ ...formData, category_id: value }); }}
                    name="category_id"
                    value={categoryData.category_id}
                    className="w-full"
                    size="sm"
                    label="Select product category"
                  >
                    {/* Populate product categories here */}
                    {categoryData.map((cat) => (
                      <Option key={cat.id} value={cat.id}>
                        {cat.category}
                      </Option>
                    ))}
                  </Select>
                  <Typography className="font-normal">Description</Typography>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    size="sm"
                    placeholder="Enter product description"
                    className="w-full"
                  />

                  <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-8">
                    Photo Product
                  </div>
                  <div className="col-span-12 lg:col-span-9 py-4 border border-gray-400 rounded-lg mb-4" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <div className="text-center flex flex-col items-center">
                        <FaCloudArrowUp className="w-8 h-8 text-wpiblue-500" />
                        <p className="mt-2">
                          {selectedFile ? `File: ${selectedFile.path}` : "Drag and drop file here or click to select file"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="hover:text-green-100 bg-wpigreen-50 mt-6"
                  fullWidth
                >
                  GABUNG SEKARANG
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>



      {/* Content Image */}
      <div className="container mx-auto flex justify-center pb-16 md:px-0 px-4">
        <div className="overflow-hidden transform transition-transform duration-300 hover:scale-105 rounded-lg">
          <a href="/produk">
            <img src="./assets/banner.png" alt="" className="w-full" />
          </a>
        </div>
      </div>

      {/* Form Email */}
      <div className="bg-blue-50 lg:px-28 px-0 h-[50px]">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-12 border rounded-lg shadow-lg py-8 -translate-y-10">
          <div className="col-span-6 text-center flex items-center justify-center lg:justify-start px-auto md:px-0 xl:px-2">
            <Typography
              variant="h4"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 700,
              }}
            >
              Masukkan alamat email Anda untuk mendapatkan informasi menarik
              dari kami!
            </Typography>
          </div>
          <div className="col-span-6 px-2 md:px-4 xl:px-2 flex items-center justify-center w-full">
            <div className="flex gap-2 w-full">
              <Input
                size="lg"
                placeholder="Email address"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none w-full",
                }}
              />
              <Button className="hover:bg-green-400 bg-wpigreen-50">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-50">
        <div className="container mx-auto pt-40 lg:pt-18">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
