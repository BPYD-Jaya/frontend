import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AdminDetailNews() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MasterSidebar />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <MasterNavbarAdmin
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Product */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
          <Typography variant="h3" className="md:col-span-2 pb-4">
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
          <div className=" mb-52 md:col-span-2">
            <img
              src="https://warungpangan.com/upload/img/f7ec7beff1317722e1df5a97055d23eb.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="py-6">
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal text-justify"
              >
                Kamis (20/7/2023), PT Perusahaan Perdagangan Indonesia, member
                of ID Food, bersama Paskomnas yang difasilitasi oleh Badan
                Pangan Nasional melakukan Launching Food Hub "Kios Pangan ID
                FOOD" di Pasar Induk Tanah Tinggi, Tangerang. Acara dimulai
                dengan penandatanganan kontrak kerjasama kemitraan antara PPI
                dan Paskomnas, yang dilakukan oleh Direktur Komersial &
                Pengembangan PPI, Bapak Edhy Rizwan dan Direktur Operasional
                Paskomnas, Bapak Agus Hermawan, serta disaksikan Direktur
                Stabilisasi Pasokan & Harga Pangan, Badan Pangan Nasional, Bapak
                Maino Dwi Hartono, Kepala Dinas Ketahanan Pangan & Penyuluhan
                Provinsi Banten, Ibu Aan Muawannah, Direktur Operasi PPI, Bapak
                Tri Wahyundo, dan Direktur Business Development Paskomnas, Bapak
                Kukun Sutardjana
              </Typography>
            </div>    
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
