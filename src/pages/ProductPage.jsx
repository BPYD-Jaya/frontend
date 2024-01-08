import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Input, Typography } from "@material-tailwind/react";
import MasterFilterCard from "../components/masterFilterCard";
import MasterCard from "../components/masterCard";
import MasterCatalog from "../components/masterCatalog";

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
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
        <div className="bg-transparent p-4 flex-shrink-0">
          <form className="max-w-screen-lg mx-auto flex items-center justify-center ">
            <input
              type="text"
              placeholder="Cari Produk"
              className="w-full h-10 rounded-l-md border-2 border-slate-600"
            />
            <span>
              <button
                type="button"
                className="ml-0 bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 rounded-r-md"
              >
                <FaMagnifyingGlass />
              </button>
            </span>
          </form>
        </div>
      </div>
          
      {/* Content */}
      <div>
        <div>
          <div className="flex flex-col justify-left ">
            <Typography tag="h5" className="font-bold text-3xl mb-2 text-black ml-10 mt-4">
              Kategori Produk
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-0 ml-10 mt-4 mr-2">
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
    </div>
  );
}