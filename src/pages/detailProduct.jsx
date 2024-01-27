import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import MasterFooter from "../components/masterFooter";
import MasterProductImage from "../components/masterProductImage";
import {
  Typography,
  ButtonGroup,
  Button,
  Input,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Icon({ id, open }, priceInRupiah) {
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
  const { id } = useParams()
  const [product, setProduct] = useState({})
  

  const TABLE_HEAD = ["Item ", "Value"];


  const fetchData = async () => {
    try {
      const res = await axios.get('https://backend.ptwpi.co.id/api/products/' + id)
      setProduct(res.data.data)
    } catch (error) {
      console.error(error.message)
    }
  }
  const priceInRupiah = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(product.price)
  // console.log(product)
  const [price, setPrice] = useState(0)
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
  console.log(product)

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    handlePriceChange(newQuantity)
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

  const handlePriceChange = (newQuantity) => {
    if(newQuantity > 1) {
      setPrice(product.price * newQuantity)
    }
  }

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

  useEffect(() => {
    fetchData()
  }, [])

  

  // console.log(product)

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
          <div className="flex gap-2">
            <a
              href="/blog"
              className="text-wpigreen-50 hover:text-green-900 opacity-60"
            >
              Product
            </a>
            <div>/</div>
            <a
              href="#"
              className="text-wpigreen-50 hover:text-green-900 font-bold"
            >
              *Nama produk*
            </a>
          </div>
        </div>

        {/* Catalog */}
        <div className="container mx-auto pt-4">
          <div className="grid grid-cols-1 xl:grid-cols-12 mb-16 gap-2 lg:gap-6">
            <div className="col-span-1 lg:col-span-8">
              <div className="border rounded-md">
                <MasterProductImage image_url={product.link_image} />
              </div>

              <>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <Typography variant="h4" className="">
                      Specification
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
                            <tr className="even:bg-blue-gray-50/50">
                              <td className="p-4 break-words">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal "
                                >
                                  Place of Origin
                                </Typography>
                              </td>
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  
                                </Typography>
                              </td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionBody>
                </Accordion>
              </>
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
                    <Typography
                      variant="h3"
                      style={{
                        fontFamily: "'M PLUS Rounded 1c', sans-serif",
                        fontWeight: 800,
                      }}
                      className="font-bold"
                    >
                      {product.brand}
                    </Typography>
                  </div>
                  <div className="border-b py-4">
                    <p>{product.product_name}</p>
                    <Typography
                      variant="h2"
                      style={{
                        fontFamily: "'M PLUS Rounded 1c', sans-serif",
                        fontWeight: 700,
                      }}
                      className="font-bold"
                    >
                      {new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(product.price)}
                    </Typography>
                  </div>
                  <div className="border-b">
                    <p className="py-4">Quantity</p>
                    <ButtonGroup size="md" className=" justify-start pb-4">
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
                        className="w-[45px] max-w-[45px] border items-center text-center"
                        placeholder="Qty."
                      />
                      <Button
                        onClick={handleIncrement}
                        className="hover:bg-blue-400 bg-wpiblue-50"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </div>
                  {/* <div className="flex justify-between">
                    <p>1 variation(s) 1000 item(s)</p>
                    <span>$14,000.00</span>
                  </div> */}
                  <div className="flex justify-between">
                    <p>Shipping fee</p>
                    <span>To be negotiated</span>
                  </div>
                  <div className="border-b flex justify-between items-center pt-2">
                    <Typography
                      variant="h4"
                      style={{
                        fontFamily: "'M PLUS Rounded 1c', sans-serif",
                        fontWeight: 800,
                      }}
                      className="font-bold"
                    >
                      Total
                    </Typography>
                    <span style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 700,
              }} className="font-bold">{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(price)}</span>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <a
                      href="http://wa.me/6285710116209?text=mau beli ini dong"
                      className="w-full"
                    >
                      <Button
                        type="button"
                        className="ml-0 mb-[-10px] mt-4 bg-gradient-to-r from-wpigreen-100 to-wpigreen-200 text-white font-bold text-2xl py-2 px-4 h-12 w-full rounded-md"
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
