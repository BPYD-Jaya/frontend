import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
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

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Content */}
      <div className="px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 mt-4 px-0 w-full">
            <div className="sm:order-1">
              <MasterBreadcrumbs />
              <MasterProductImage />
            </div>
            <div className="sm:order-2">
              <div className="w-full flex-shrink justify-left">
                <Typography
                  variant="h3"
                  className="font-bold mb-2 text-black ml-0 lg:ml-4 mt-4"
                >
                  Minyak Goreng Curah
                </Typography>
              </div>
              <div className="w-full flex-shrink justify-left">
                <Typography
                  variant="h2"
                  className="font-bold mb-2 text-black ml-0 lg:ml-4 mt-4"
                >
                  Rp 50.000.000 - Rp 100.000.000
                </Typography>
              </div>
              <div className="w-full flex-shrink justify-left border-b">
                <Typography
                  variant="lead"
                  className="font-bold mb-2 text-black ml-0 lg:ml-4 mt-4"
                >
                  Availability: In Stock
                </Typography>
              </div>
              <div className="w-full flex items-center justify-left ml-4 mt-4">
                <div className="">
                  <Typography
                    variant="h5"
                    className="font-bold mb-2 text-black"
                  >
                    Quantity:
                  </Typography>
                </div>
                <ButtonGroup size="md" className="ml-4 justify-center">
                  <Button
                    onClick={handleDecrement}
                    className="hover:bg-blue-400 bg-wpiblue-50"
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value))
                    }
                    className="w-[45px] max-w-[45px] border text-center"
                    placeholder="Qty."
                  />
                  <Button
                    onClick={handleIncrement}
                    className="hover:bg-blue-400 bg-wpiblue-50"
                  >
                    +
                  </Button>
                </ButtonGroup>{" "}
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <Button className="hover:bg-green-400 bg-wpigreen-50 w-full">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="sm:order-3 flex pb-20 col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2 w-full">
              <div className="w-[210px] items-left justify-left">
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="font-bold mb-2 text-black mt-4"
                  >
                    Berat
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Satuan
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Diambil Dari
                  </Typography>
                </div>
                <div className="w-full justify-left items-left  ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Deskripsi Produk
                  </Typography>
                </div>
              </div>
              <div className="w-full items-left justify-left">
                <div className="w-full justify-left items-left border-b pt-[8px]">
                  <Typography variant="lead" className="text-black mt-4">
                    5000L
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b">
                  <Typography variant="lead" className="text-black mt-4">
                    Liter
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b">
                  <Typography variant="lead" className="text-black mt-4">
                    Kalimantan Barat
                  </Typography>
                </div>
                <div className="w-full justify-left items-left  ">
                  <Typography variant="lead" className="text-black mt-4">
                    Minyak Goreng Curah (LDC East)
                  </Typography>
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
    </div>
  );
}
