import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Input, Typography } from "@material-tailwind/react";
import MasterFilterCard from "../components/masterFilterCard";
// import MasterCard from "../components/masterCard";
import MasterCatalog from "../components/masterCatalog";
import MasterFooter from "../components/masterFooter";
import MasterPagination from "../components/masterPagination";

export default function ProductPage() {
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

  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? "fixed top-0 w-full z-50" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Kategori Produk */}
      <div className="container mx-auto lg:py-0 lg:px-0 px-6 mt-4">
        <Typography tag="h5" className="font-bold text-3xl text-black ml-8">
          Kategori Produk
        </Typography>
        <div className="p-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-6">
          <a href="#">
            <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 grid grid-cols-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  src="assets/coal.png"
                  alt=""
                  className="block mx-auto mb-4 h-[70px] w-auto lg:mb-0"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Typography className="text-white font-bold text-sm lg:text-base">
                  Batubara
                </Typography>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 grid grid-cols-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  src="assets/corn.png"
                  alt=""
                  className="block mx-auto mb-4 h-[70px] w-auto lg:mb-0"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Typography className="text-white font-bold text-sm lg:text-base">
                  Horticultural
                </Typography>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 grid grid-cols-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  src="assets/agriculture.png"
                  alt=""
                  className="block mx-auto mb-4 h-[70px] w-auto lg:mb-0"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Typography className="text-white font-bold text-sm lg:text-base">
                  Agriculture
                </Typography>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 grid grid-cols-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  src="assets/aquaculture.png"
                  alt=""
                  className="block mx-auto mb-4 h-[70px] w-auto lg:mb-0"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Typography className="text-white font-bold text-sm lg:text-base">
                  Aquaculture
                </Typography>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 grid grid-cols-2 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center">
              <div className="col-span-1 flex items-center justify-center">
                <img
                  src="assets/mineral.png"
                  alt=""
                  className="block mx-auto mb-4 h-[70px] w-auto lg:mb-0"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Typography className="text-white font-bold text-sm lg:text-base">
                  Mineral
                </Typography>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-20 overflow-y-auto">
      <div className="md:col-span-2">
            <div className="container mx-auto grid grid-cols-1 pb-4">
              <div className="flex justify-center items-center md:ml-[50px] lg:ml-[460px] lg:mr-[30px]">
                <input
                  type="text"
                  placeholder="Cari Produk"
                  className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border-wpigreen-500"
                />
                <button
                  type="button"
                  className="bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 rounded-r-md"
                >
                  <FaMagnifyingGlass />
                </button>
                </div>
              </div>
            </div>
          <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
            <Typography tag="h5" className="font-bold text-xl text-black ml-8 mb-1">
                Filter
            </Typography>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="md:col-span-1 ml-7">
            <div>
              <MasterFilterCard />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-4">
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
              <div className="flex justify-center items-center">
                <MasterCatalog />
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <MasterPagination />
            </div>
          </div>
        </div>
      </div>

      {/* Form Email */}
      <div className="bg-blue-50 lg:px-28 px-0 h-[50px]">
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-12 border rounded-lg shadow-lg py-8 px-4 mx-8 lg:mx-0 -translate-y-10">
          <div className=" col-span-6 text-center flex items-center justify-center lg:justify-start">
            <Typography variant="h4">
              Dapatkan info menarik dari kami!
            </Typography>
          </div>
          <div className=" col-span-6">
            <div className="flex gap-2">
              <Input
                size="lg"
                placeholder="Email address"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
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
        <div className="container mx-auto pt-20 lg:pt-8">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
