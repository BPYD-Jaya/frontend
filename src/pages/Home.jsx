import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import MasterCarousel from "../components/masterCarousel";
import { Button, Input, Typography } from "@material-tailwind/react";
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
      <div className=" bg-wpigreen-50 " style={{ height: "820px" }}>
        <div
          className="bg-wpiblue-50 flex flex-col  px-36"
          style={{ height: "600px", borderRadius: "0 0 50px 50px" }}
        >
          <div
            className="container mx-auto grid grid-cols-1 lg:grid-cols-2"
            style={{ height: "500px" }}
          >
            <div className="flex justify-center items-center text-white">
              <div>
                <Typography variant="h3" className="mb-4">
                  SATU APLIKASI UNTUK
                  <br /> SEMUA KEBUTUHAN WARUNG
                </Typography>
                <Typography variant="h5" className="mb-4 flex items-start">
                  <FcOk className="mr-4" size={30} /> Belanja, pencatatan dan
                  penjualan stok bisa semua
                </Typography>
                <Typography variant="h5" className="mb-4 flex items-start">
                  <FcOk className="mr-4" size={30} /> Harga menguntungkan
                </Typography>
                <Typography variant="h5" className="mb-4 flex items-start">
                  <FcOk className="mr-4" size={30} /> Diskon dan promo tiap
                  bulan
                </Typography>
                <Typography variant="h5" className="mb-4 flex items-start">
                  <FcOk className="mr-4" size={30} /> Gratis pengiriman
                </Typography>
                <Typography variant="h5" className="mb-4 flex items-start">
                  <FcOk className="mr-4" size={30} /> Beragam pilihan pendanaan
                </Typography>
                <Button
                  className="hover:text-green-100 bg-wpigreen-50"
                  size="lg"
                >
                  <div className="flex items-center">
                    GABUNG SEKARANG <FaArrowRight className="ml-2" />
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img
                src="https://warungpangan.com/upload/settings/home_banner3.png"
                alt="image 1"
                className="h-full" 
                style={{width:"1000px"}}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="container mx-auto -translate-y-32 px-12">
          <MasterCarousel />
        </div>

        {/* Content 1 */}
        <div
          className="bg-white lg:-translate-y-16
        "
        >
          <div className="container mx-auto text-center">
            <Typography variant="h3">
              Kenapa Harus Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
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
        <div className="gap-8 container mx-auto flex justify-center -translate-y-10">
          <div className=" w-1/2 py-auto grid grid-cols-1 justify-center ">
            <div>
              <Typography variant="h3">
                Keunggulan Berbelanja di Aplikasi Warung Pangan
              </Typography>
            </div>
            <div className="flex items-start pt-2 gap-6">
              <FcApproval size={120} />
              <div>
                <Typography variant="lead">
                  <b>Pasokan Produk Berkualitas</b>
                </Typography>
                <p className="text-justify">
                  Banyak produk yang ditawarkan terutama produk-produk BUMN
                  kluster pangan (ID Food) dengan kualitas terjamin dengan harga
                  yang kompetitif dan pengiriman barang yang tepat waktu.
                </p>
              </div>
            </div>
            <div className="flex items-start pt-2 gap-6">
              <FcMultipleDevices size={100} />
              <div>
                <Typography variant="lead">
                  <b>Digitalisasi Warung</b>
                </Typography>
                <p className="text-justify">
                  Solusi lengkap bagi pemilik warung mengelola bisnis mereka,
                  yang mencakup pencatatan transaksi, manajemen inventori, dan
                  pemesanan via aplikasi
                </p>
              </div>
            </div>
            <div className="flex items-center pt-2 gap-6">
              <FcCustomerSupport size={120} />
              <div>
                <Typography variant="lead">
                  <b>Pembinaan Mitra</b>
                </Typography>
                <p className="text-justify">
                  Kami membantu para mitra agar bisnisnya dapat berkembang lebih
                  maju, dengan pelatihan, permodalan, dan promosi yang bertujuan
                  meningkatkan penjualan dan pengembangan kapasitas
                </p>
              </div>
            </div>
          </div>
          <div className=" border shadow-lg flex justify-center w-2/5 rounded-md translate-x-4 ">
            <img
              src="https://warungpangan.com/upload/settings/home_banner_keunggulan.png"
              alt="image-2"
              style={{ height: "500px" }}
            />
          </div>
        </div>

        {/* Content 3 */}
        <div className="container mx-auto">
          <div className="justify-center text-center">
            <Typography className="ml-14 flex justify-start" variant="h3">
              Cerita Mitra Warung Pangan
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center pb-8">
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
        <div class="container mx-auto flex justify-center -translate-y-10 pb-16 px-8">
          <div class="overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://warungpangan.com/upload/settings/mb_banner_bottom.png"
              alt=""
              class="w-full"
            />
          </div>
        </div>

        {/* Form Email */}
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
    </div>
  );
}
