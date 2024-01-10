import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";

export default function DashboardPage() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* Navbar */}
      <MasterNavbarAdmin />

      {/* Content Dashboard */}
      <div className="ml-80 mr-8 mt-10">
        <div className="mb-2">Dashboard</div>
        <div className="gap-8 grid grid-cols-3">
          <Card className="flex justify-center items-center w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
          <Card className="flex justify-center items-center w-96 h-32">
            <Typography className="font-bold">Produk</Typography>
            <Typography>100</Typography>
          </Card>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-white z-50 fixed top-0 h-full">
        <MasterSidebar />
      </div>

      {/* Footer */}
      <MasterFooterAdmin />
    </div>
  );
}
