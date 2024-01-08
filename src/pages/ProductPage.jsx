import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Input, Typography } from "@material-tailwind/react";
import MasterFilterCard from "../components/masterFilterCard";
import MasterCard from "../components/masterCard";
import MasterCatalog from "../components/masterCatalog";
import MasterFooter from "../components/masterFooter";

export default function ProductPage() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    // Contoh pengaturan totalItems, sesuaikan dengan logika Anda
    const totalItemsCount = 9; // Misalnya, kita ingin menampilkan 10 items pertama
    setTotalItems(totalItemsCount);

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
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Content */}
      <div className="pb-20 overflow-y-auto">
        <form className="max-w-screen-lg mx-auto flex items-center justify-center mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari Produk"
              className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border-wpigreen-500"
            />
            <button
              type="button"
              className="absolute right-0 top-0 bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 rounded-r-md"
            >
              <FaMagnifyingGlass />
            </button>
          </div>
        </form>
        <div>
          <div className="flex flex-col justify-left">
            <Typography tag="h5" className="font-bold text-3xl mb-2 text-black ml-20 mt-4">
              Kategori Produk
            </Typography>
          </div>
          <div className="flex justify-between items-center ml-20 mb-2">
            <div className="flex flex-col items-center">
              <Typography variant="body2" color="gray">
                Menampilkan {totalItems} barang dari total 9
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography tag="h5" className="font-bold text-3 text-black">
                Filter
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-3 ml-20 mt-5 mr-20">
            <div className="col-span-1">
              <MasterFilterCard />
            </div>
            <div className="col-span-2">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-0 gap-12">
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
