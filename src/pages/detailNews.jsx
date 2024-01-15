import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import {
  Avatar,
  Breadcrumbs,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { FaRegNewspaper } from "react-icons/fa6";
import MasterCard from "../components/masterCard";
import MasterFooter from "../components/masterFooter";
import MasterNews from "../components/masterNews";
import MasterBreadcrumbs from "../components/masterBreadcrumbs";

export default function DetailNews() {
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
        className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex flex-col justify-center items-center px-4 xl:px-36 xl:h-[400px] md:h-[500px] lg:h-[450px] h-[500px] pb-16"
        style={{ borderRadius: "0 0 50px 50px" }}
      >
        <div className="flex flex-col justify-center items-center text-center text-white">
          <FaRegNewspaper size={100} className="mb-2" />
          <Typography variant="h1" style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }} className="font-bold text-5xl mb-2">
            Blog Warung Pangan Indonesia
          </Typography>
          <Typography variant="h5" style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 400,
              }} className="font-medium text-2xl">
            Dapatkan informasi bermanfaat seputar pengelolaan usaha anda dari
            artikel yang kami berikan
          </Typography>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto flex justify-start pt-4 xl:px-0 px-4">
        <MasterBreadcrumbs />
      </div>

      {/* Konten Berita */}
      <div className="container mx-auto">
        <div className=" py-8 xl:px-0 px-4">
          <Typography variant="h3"style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }} className="pb-4">
            PPI & PASKOMNAS Jalin Kerja Sama Pengembangan Jaringan Agribisnis
          </Typography>
          <span className="">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10 mr-2"
            />
            Dibuat oleh Farhan Dwicahyo / 7 Januari 2024 12:39
          </span>
        </div>
        <div className="xl:px-0 px-4 mb-52">
          <img
            src="https://warungpangan.com/upload/img/f7ec7beff1317722e1df5a97055d23eb.jpg"
            alt=""
            className="rounded-lg"
          />
          <div className="py-6">
            <Typography
              variant="lead"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 500,
              }}
              color="gray"
              className="mt-3 font-normal text-justify"
            >
              Kamis (20/7/2023), PT Perusahaan Perdagangan Indonesia, member of
              ID Food, bersama Paskomnas yang difasilitasi oleh Badan Pangan
              Nasional melakukan Launching Food Hub "Kios Pangan ID FOOD" di
              Pasar Induk Tanah Tinggi, Tangerang. Acara dimulai dengan
              penandatanganan kontrak kerjasama kemitraan antara PPI dan
              Paskomnas, yang dilakukan oleh Direktur Komersial & Pengembangan
              PPI, Bapak Edhy Rizwan dan Direktur Operasional Paskomnas, Bapak
              Agus Hermawan, serta disaksikan Direktur Stabilisasi Pasokan &
              Harga Pangan, Badan Pangan Nasional, Bapak Maino Dwi Hartono,
              Kepala Dinas Ketahanan Pangan & Penyuluhan Provinsi Banten, Ibu
              Aan Muawannah, Direktur Operasi PPI, Bapak Tri Wahyundo, dan
              Direktur Business Development Paskomnas, Bapak Kukun Sutardjana
            </Typography>
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
        <div className="bg-blue-50">
          <div className="container mx-auto pt-40 lg:pt-18">
            <MasterFooter />
          </div>
        </div>
      </div>
  );
}
