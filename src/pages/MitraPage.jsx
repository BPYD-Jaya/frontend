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
        className="bg-wpiblue-50"
        style={{ height: "675px", borderRadius: "0 0 50px 50px" }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 pt-8">
          <div className="flex justify-center items-center">
            <img
              src="https://warungpangan.com/upload/settings/mitra_bisnis_banner.png"
              alt="jumbotron"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h3" color="white">
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
                optimal.!
              </Typography>
              <Button className="hover:text-green-100 bg-wpigreen-50" size="lg">
                <div className="flex items-center">
                  GABUNG SEKARANG <FaArrowRight className="ml-2" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="" style={{ height: "200px" }}>
        <div
          className="bg-white container mx-auto -translate-y-24 px-12 py-3 text-center shadow-lg rounded-lg"
          style={{ height: "250px" }}
        >
          <div className="text-wpiblue-50 pt-4">
            <Typography variant="h2">PARTNER KAMI</Typography>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1
           gap-10 py-4 items-center "
            >
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
      <div className="container mx-auto">
        <div className="mb-20 border rounded-lg shadow-lg">
          <div className=" grid grid-cols-2">
            <div
              className="bg-gradient-to-r from-wpiblue-50 to-wpigreen-50 flex justify-center items-center "
              style={{ borderRadius: "10px 100px 100px 10px" }}
            >
              {/* BINGUNG ISI APA */}
            </div>
            <div className=" flex justify-center items-center ">
              <form
                className="py-6 mt-8 mb-2 max-w-screen-lg sm:w-96"
                style={{ width: "600px" }}
              >
                <div className="mb-1 flex flex-col gap-4">
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
                    href="#"
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
      <div class="container mx-auto flex justify-center -translate-y-10 pb-16 px-8">
        <div class="overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://warungpangan.com/upload/settings/mb_banner_bottom.png"
            alt=""
            class="w-full"
          />
        </div>
      </div>

      {/*Form Email  */}
      <div className="bg-blue-50 px-28" style={{ height: "50px" }}>
        <div className=" bg-white container mx-auto border rounded-lg shadow-lg flex py-8 px-4 -translate-y-14">
          <div className="w-1/2 text-center flex items-center justify-start">
            <Typography variant="h4">
              Dapatkan info menarik dari kami!
            </Typography>
          </div>
          <div className="w-1/2 flex gap-2">
            <Input
              size="lg"
              placeholder="Email address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button className="hover:bg-green-400 bg-wpigreen-50">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-50">
        <div className="container mx-auto pt-8">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
