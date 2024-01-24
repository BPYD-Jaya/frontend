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
import { FaArrowRight } from "react-icons/fa";
import MasterFooter from "../components/masterFooter";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function MitraPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle the selected file as needed
    console.log(file);
  };
  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Jumbotron */}
      <div
        className="bg-wpiblue-50 xl:h-[675px] lg:h-[540px] h-[950px] md:h-[1000px] lg:pt-4 pt-0"
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
              <div className="md:pt-0 pt-4 flex justify-end">
                <img src="./assets/brick.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-2">
        <div className="bg-white container mx-auto md:-translate-y-[2.5rem] lg:-translate-y-[8.3rem] xl:-translate-y-[9rem] -translate-y-16 px-12 py-8 text-center shadow-lg rounded-lg">
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
            <div className=" flex justify-center items-center xl:w-1/2 w-full">
              <form className=" py-6 mb-2 w-full px-4">
                <div className="flex flex-col p-4 mb-2 border border-b-4">
                  <Typography className="font-bold text-center">PIC</Typography>
                  <Typography className="font-normal">Name</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Email</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your email"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                </div>

                <div className="flex flex-col p-4 mb-2 border border-b-4">
                  <Typography className="font-bold text-center">
                    Company
                  </Typography>
                  <Typography className="font-normal">Company Name</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Company Email</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your email"
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
                    type="number"
                    size="sm"
                    placeholder="Enter your number"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">
                    Category Company
                  </Typography>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Typography className="font-normal">Province</Typography>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Typography className="font-normal">City</Typography>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Typography className="font-normal">Address</Typography>
                  <Textarea
                    size="sm"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                </div>

                <div className="flex flex-col p-4 border border-b-4">
                  <Typography className="font-bold text-center">
                    Product
                  </Typography>
                  <Typography className="font-normal">Product Name</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Brand Name</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Stock</Typography>
                  <Input
                    type="number"
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Volume</Typography>
                  <Input
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Price</Typography>
                  <Input
                    type="number"
                    size="sm"
                    placeholder="Enter your name"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />
                  <Typography className="font-normal">Description</Typography>
                  <Textarea
                    size="sm"
                    className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className:
                        "before:content-none after:content-none w-full",
                    }}
                  />

                  <div className="flex items-center border border-gray-400 p-2 md:p-0 rounded-lg gap-2">
                    <Button
                      variant="sm"
                      className="bg-wpiblue-50 relative overflow-hidden"
                    >
                      Select Image
                      <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 h-full w-full"
                        onChange={handleFileUpload}
                      />
                    </Button>
                    <Typography className="md:pl-4">
                      {selectedFile ? `${selectedFile.name}` : "No File Chosen"}
                    </Typography>
                  </div>
                </div>

                <Button
                  className="hover:text-green-100 bg-wpigreen-50 mt-6"
                  fullWidth
                >
                  GABUNG SEKARANG
                </Button>
                {/* <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-gray-900 hover:text-blue-600"
                  >
                    Sign In
                  </a>
                </Typography> */}
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
