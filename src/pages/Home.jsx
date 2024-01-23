import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import MasterCarousel from "../components/masterCarousel";
import {
  Button,
  Input,
  Typography,
  typography,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import {
  FcApproval,
  FcCustomerSupport,
  FcMultipleDevices,
  FcOk,
} from "react-icons/fc";
import MasterCard from "../components/masterCard";
import MasterFooter from "../components/masterFooter";

export default function Home() {
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
      <div className=" bg-wpigreen-50 xl:h-[820px] md:h-[1050px] h-[810px]">
        <div
          className="bg-wpiblue-50 flex flex-col px-4 xl:px-36 xl:h-[600px] md:h-[950px] lg:h-[550px] h-[750px]"
          style={{ borderRadius: "0 0 50px 50px" }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row lg:h-[500px]">
            <div className="flex justify-center items-center text-white col-span-5 pl-0 pt-5 md:pt-8 lg:pt-0 lg:pl-6 ">
              <div className="">
                <div className="">
                  <Typography
                    variant="h3"
                    className="mb-4 text-center lg:text-left text-xl whitespace-no-wrap  md:text-[2rem] md:!leading-10 leading-7"
                  >
                    SATU APLIKASI UNTUK
                    <br /> SEMUA KEBUTUHAN WARUNG
                  </Typography>
                </div>
                <div className="">
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <span className="mr-4 text-3xl">
                      <FcOk />
                    </span>
                    Belanja, pencatatan dan penjualan stok bisa semua
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Harga menguntungkan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Diskon dan promo tiap
                    bulan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Gratis pengiriman
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Beragam pilihan
                    pendanaan
                  </Typography>
                  <div className="flex justify-center xl:justify-start md:justify-start">
                    <a href="/login">
                      <Button
                        className="hover:text-green-100 bg-wpigreen-50 "
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
            <div className=" h-[280px] md:h-[400px] lg:h-[33vw]  xl:h-full justify-center py-5 mt-4 lg:mt-0 md:py-0 items-center col-span-7 lg:-translate-x-4">
              <img
                src="./assets/hero.png"
                alt="image1"
                className="h-full w-full   "
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="container mx-auto lg:-translate-y-[7vw] xl:-translate-y-[7.5vw] md:-translate-y-32 -translate-y-24 xl:px-12 px-2 w-full h-[130px] md:h-[200px] lg:h-[17vw] xl:h-[300px]  sm:px-0 lg:px-2 ">
          <MasterCarousel />
        </div>

        {/* Content 1 */}
        <div
          className="bg-white lg:-translate-y-16
        "
        >
          <div className="container mx-auto text-center xl:mb-16 mb-12 ">
            <Typography
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Kenapa Harus Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-12">
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="container mx-auto grid xl:grid-cols-12 grid-cols-1 gap-6 px-4 lg:px-10 pt-6 lg:pt-0">
          <div className="lg:col-span-7 col-span-1 flex flex-col justify-start">
            <div className="pb-5 lg:pb-0">
              <Typography
                variant="h3"
                className="text-[1.6rem] pr-4 lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                style={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 800,
                }}
              >
                Keunggulan Berbelanja di Aplikasi Warung Pangan Indonesia
              </Typography>
            </div>
            <div className="flex  py-4 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex   md:h-full   ">
                <FcApproval />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pasokan Produk Berkualitas</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Banyak produk yang ditawarkan terutama produk-produk BUMN
                  kluster pangan (ID Food) dengan kualitas terjamin dengan harga
                  yang kompetitif dan pengiriman barang yang tepat waktu.
                </p>
              </div>
            </div>
            <div className="flex  py-4 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex   md:h-full   ">
                <FcMultipleDevices />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Digitalisasi Warung</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Solusi lengkap bagi pemilik warung mengelola bisnis mereka,
                  yang mencakup pencatatan transaksi, manajemen inventori, dan
                  pemesanan via aplikasi
                </p>
              </div>
            </div>
            <div className="flex  py-4 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex   md:h-full   ">
                <FcCustomerSupport />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pembinaan Mitra</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Kami membantu para mitra agar bisnisnya dapat berkembang lebih
                  maju, dengan pelatihan, permodalan, dan promosi yang bertujuan
                  meningkatkan penjualan dan pengembangan kapasitas
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-5 col-span-1 border shadow-lg flex justify-center rounded-md items-center">
            <img
              src="https://warungpangan.com/upload/settings/home_banner_keunggulan.png"
              alt="image2"
              style={{ height: "500px" }}
            />
          </div>
        </div>

        {/* Content 3 */}
        <div className="container mx-auto mb-6">
          <div className="my-10">
            <Typography
              className="xl:ml-14 lg:ml-4 md:ml-4 ml-6 flex justify-start"
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Cerita Mitra Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-12">
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
          </div>
        </div>

        {/* Content Image */}
        <div className="container mx-auto flex justify-center pb-16 px-8">
          <div className="overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <a href="/produk">
              <img src="./assets/banner.png" alt="" className="w-full rounded-lg" />
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
    </div>
  );
}
