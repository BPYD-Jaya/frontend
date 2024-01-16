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
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function DetailProduct() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const TABLE_HEAD = ["Item ", "Value"];

  const TABLE_ROWS = [
    {
      item: "Place of Origin",
      value: "Japan",
    },
    {
      item: "Brand Name",
      value: "Yamanaka Inc.",
    },
    {
      item: "Model Number",
      value: "P-004692",
    },
    {
      item: "Storage Type",
      value: "Frozen",
    },
    {
      item: "Style",
      value: "FROZEN",
    },
    {
      item: "Spesification",
      value: "-",
    },
    {
      item: "Shelf Life",
      value: "Including production date 2 years",
    },
    {
      item: "Manufacturer",
      value: "YAMANAKA Inc.",
    },
    {
      item: "Ingredients",
      value: "Scallop",
    },
    {
      item: "Content",
      value: "L 21-25pc/kg. M 25-30pc/kg. S 31-35pc/kg",
    },
    {
      item: "Address",
      value: "Harajuku, Japan",
    },
    {
      item: "Instruction for use",
      value: "Natural decompression recomendation",
    },
  ];

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

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [isCardSticky, setIsCardSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
      setIsCardSticky(scrollTop > 300);
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

      {/* Content */}
      <div className="px-4 lg:px-0">
        {/* Breadcrumbs */}

        <div className="container mx-auto flex justify-start pt-4 xl:px-0">
          <MasterBreadcrumbs />
        </div>

        {/* Catalog */}
        <div className="container mx-auto pt-4">
          <div className="grid grid-cols-1 xl:grid-cols-12 mb-16 gap-2 lg:gap-6">
            <div className="col-span-1 lg:col-span-8">
              <div className="border rounded-md">
                <MasterProductImage />
              </div>

              <>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <Typography variant="h4" className="">
                      Spesification
                    </Typography>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overflow-x-scroll">
                      <table className="w-full min-w-max table-auto text-left">
                        <thead>
                          <tr>
                            {TABLE_HEAD.map((head) => (
                              <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                              >
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                                >
                                  {head}
                                </Typography>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_ROWS.map(({ item, value }, index) => (
                            <tr key={item} className="even:bg-blue-gray-50/50">
                              <td className="p-4 break-words">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal "
                                >
                                  {item}
                                </Typography>
                              </td>
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {value}
                                </Typography>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionBody>
                </Accordion>
              </>

              {/* <Typography
                variant="h4"
                className="pt-8 mb-4 border-b-2 border-black"
              >
                Spesification
              </Typography>
              <div className="overflow-x-scroll">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ item, value }, index) => (
                      <tr key={item} className="even:bg-blue-gray-50/50">
                        <td className="p-4 break-words">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal "
                          >
                            {item}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {value}
                          </Typography>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
            </div>

            {/* Card */}
            <div className=" col-span-1 lg:col-span-4 ">
              <div
                className={` ${
                  isCardSticky
                    ? "sticky transition-transform duration-200 ease-in-out top-[150px] "
                    : ""
                }`}
              >
                <div className="pb-8 px-4 pt-4 border border-blue-gray-100 rounded-md shadow-md">
                  <div className="border-b">
                    <Typography variant="h3" className="font-bold">
                      Minyak Goreng Curah
                    </Typography>
                  </div>
                  <div className="border-b py-4">
                    <p>Minimum order quantity: 1000 liters</p>
                    <Typography variant="h2" className="font-bold">
                      $14.00 - $19.00
                    </Typography>
                  </div>
                  <div className="border-b">
                    <p className="py-4">Quantity</p>
                    Button Group
                  </div>
                  <div className="flex justify-between">
                    <p>1 variation(s) 1000 item(s)</p>
                    <span>$14,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping fee</p>
                    <span>To be negotiated</span>
                  </div>
                  <div className="border-b flex justify-between items-center pt-2">
                    <Typography variant="h4" className="font-bold">
                      Total
                    </Typography>
                    <span className="font-bold">$14,000.00</span>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <a
                      href="http://wa.me/6285710116209?text=mau beli ini dong"
                      className="w-full"
                    >
                      <Button
                        type="button"
                        className="ml-0 mb-[-10px] mt-4 bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 w-full rounded-md"
                      >
                        <div className="flex justify-center items-center gap-3">
                          <img
                            alt=""
                            src="./assets/whatsapp.png"
                            className="h-6"
                          />
                          Hubungi Kami
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
      <div className="bg-blue-50">
        <div className="container mx-auto pt-40 lg:pt-20">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
