import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";

export default function DashboardPage() {
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
    <div className="bg-gray-100 h-full flex flex-col min-h-screen font-m-plus-rounded">
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

      {/* Content Dashboard */}
      <div className="md:ml-80 ml-10 mr-8 mt-10 h-full flex-grow bg-grey-100">
        <div className="mb-2">Dashboard</div>
        <div className="gap-6  grid 2xl:grid-cols-3 md:grid-cols-2 justify-center">
          <Card className="flex justify-center items-center md:w-auto w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center md:w-auto w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center md:w-auto w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center md:w-auto w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center md:w-auto w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10 justify-bottom w-full">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
