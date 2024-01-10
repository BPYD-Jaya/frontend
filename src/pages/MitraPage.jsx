import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import MasterFooter from "../components/masterFooter";

export default function MitraPage() {
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
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Jumbotron */}
      <div
        className="bg-wpiblue-50 xl:h-[675px] h-[890px] lg:pt-4 pt-0"
        style={{ borderRadius: "0 0 50px 50px" }}
      >
        <div className="container mx-auto grid lg:grid-cols-12 grid-cols-1 px-4">
          <div className=" flex justify-center items-center text-white col-span-6 pl-0 pt-2 lg:pl-6">
            <img
              src="https://warungpangan.com/upload/settings/mitra_bisnis_banner.png"
              alt="jumbotron"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className=" col-span-6 xl:-translate-x-0 flex flex-col justify-center">
            <Typography variant="h2" color="white">
              GABUNG JADI SUPPLIER WARUNG PANGAN!
            </Typography>
            <div className="text-justify">
              <Typography className="py-4" color="white">
                Selamat datang di WP Supplier! Sebuah wadah bagi para pemasok,
                petani, nelayan, peternak, petani milenial, pengusaha dan
                perorangan yang bergerak di bidang pangan untuk dapat menjual
                hasil panen dan produknya di Warung Pangan. WP Supplier dibentuk
                sebagai salah satu fitur pendukung aplikasi Warung Pangan dalam
                upaya mendukung ketahanan pangan nasional Bersama dengan seluruh
                pemasok untuk penyerapan produk pangan dan sembako yang lebih
                optimal!
              </Typography>
              <div className="flex justify-center lg:justify-start">
                <a href="/login">
                  <Button
                    className="hover:text-green-100 bg-wpigreen-50"
                    size="lg"
                  >
                    <div className="flex items-center">
                      GABUNG SEKARANG <FaArrowRight className="ml-2" />
                    </div>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-2">
        <div className="bg-white container mx-auto lg:-translate-y-28 -translate-y-16 px-12 py-8 text-center shadow-lg rounded-lg">
          <div className="text-wpiblue-50">
            <Typography
              variant="h2"
              className="text-sm lg:text-4xl lg:pt-4 pt-0"
            >
              PARTNER KAMI
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <div className=" grid grid-cols-6 gap-10 items-center ">
              <img
                src="https://warungpangan.com/upload/img/c38c8d98c6cff3469702e63cbe56686d.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <img
                src="https://www.ptppi.co.id/wp-content/uploads/2022/01/PPI-ID-Food.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <img
                src="https://www.bgrlogistik.id/bgr/img/logo_bli.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <img
                src="https://warungpangan.com/upload/img/mitra_bisnis_logo_2.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <img
                src="https://warungpangan.com/upload/img/mitra_bisnis_logo_5.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
              <img
                src="https://warungpangan.com/upload/img/mitra_bisnis_logo_3.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Supplier */}
      <div className="container mx-auto lg:-translate-y-8 -translate-y-0">
        <div className="mb-10 border rounded-lg shadow-lg mx-2 lg:mx-0 ">
          <div className="flex xl:flex-row flex-col">
            <div
              className="bg-gradient-to-r from-wpiblue-50 to-wpigreen-50 flex justify-center items-center text-center xl:w-1/2 w-full h-[300px] xl:h-auto"
              style={{ borderRadius: "10px 100px 100px 10px" }}
            >
              <Typography variant="h1" color="white">
                Formulir Pendaftaran Supplier
              </Typography>
              {/* BINGUNG ISI APA */}
            </div>
            <div className=" flex justify-center items-center xl:w-1/2 w-full">
              <form className=" py-6 mt-8 mb-2 max-w-screen-lg sm:w-96 w-full px-2">
                <div className="flex flex-col gap-4">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="xxxx@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Confirmation Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button
                  className="hover:text-green-100 bg-wpigreen-50 mt-6"
                  fullWidth
                >
                  GABUNG SEKARANG
                </Button>
                <Typography
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
                </Typography>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Content Image */}
      <div class="container mx-auto flex justify-center pb-16 px-8">
        <div class="overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://warungpangan.com/upload/settings/mb_banner_bottom.png"
            alt=""
            class="w-full"
          />
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
