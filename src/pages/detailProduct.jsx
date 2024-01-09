import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import MasterContentImage from "../components/masterContentImage";
import MasterFooter from "../components/masterFooter";
import MasterBreadcrumbs from "../components/masterBreadcrumbs";
import MasterProductImage from "../components/masterProductImage";
import {
  Typography,
  ButtonGroup,
  Button,
  Input,
} from "@material-tailwind/react";

export default function DetailProduct() {
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
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto flex justify-start pt-4 xl:px-0 px-4">
        <MasterBreadcrumbs />
      </div>

      <div className="grid grid-cols-2 gap-0 mt-4 px-4 max-w-screen-xl mx-auto">
        <div className="col-span-1">
          <MasterProductImage />
        </div>
        <div className="col-span-1">
          <div className="w-full flex-shrink justify-left">
            <Typography
              variant="h3"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Minyak Goreng Curah
            </Typography>
          </div>
          <div className="w-full flex-shrink justify-left">
            <Typography
              variant="h2"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Rp 50.000.000 - Rp 100.000.000
            </Typography>
          </div>
          <div className="w-full flex-shrink justify-left border-b">
            <Typography
              variant="lead"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Availability: In Stock
            </Typography>
          </div>
          <div className="w-full flex gap-8 justify-left">
            <div className="flex items-center justify-center">
              <Typography
                variant="h5"
                className="font-bold mb-2 text-black ml-4 mt-4"
              >
                Quantity:
              </Typography>
            </div>
            <div className="flex items-center w-[150px]">
              <ButtonGroup size="md" className="w-[150px]">
                <Button className="hover:bg-blue-400 bg-wpiblue-50">-</Button>
                <input type="qty" className="w-[45px] max-w-[45px] border text-center" placeholder="Qty."></input>
                <Button className="hover:bg-blue-400 bg-wpiblue-50 ">+</Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="flex items-center justify-left pt-8">
            <Button className="hover:bg-green-400 bg-wpigreen-50">
              Hubungi Kami
            </Button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full flex-shrink justify-left border-b">
            <Typography
              variant="lead"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Berat
            </Typography>
          </div>
          <div className="w-full flex-shrink justify-left border-b">
            <Typography
              variant="lead"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Satuan
            </Typography>
          </div>
          <div className="w-full flex-shrink justify-left border-b pb-16">
            <Typography
              variant="lead"
              className="font-bold mb-2 text-black ml-4 mt-4"
            >
              Diambil Dari
            </Typography>
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

      <div className="bg-blue-50">
        <div className="container mx-auto pt-20 lg:pt-8">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
