import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterSidebar from "../components/masterSidebar";

export default function DetailSupplier() {
  const supplierData = {
    id: 1,
    supplierName: "PT BPYD JAYA",
    address: "Jl. Contoh No. 123",
    phone: "08123456789",
    email: "info@bpydjaya.com",
  };

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
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <MasterNavbarAdmin
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 pt-4 pl-6 rounded-lg shadow-md">
          <div className="col-span-4">
            <Typography className="text-3xl font-semibold">
              Detail Supplier
            </Typography>
          </div>

          <div className="col-span-4 md:col-span-3 mb-5">
            <Card className="p-6">
              <Typography className="text-lg font-semibold mb-4">
                {supplierData.supplierName}
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography className="text-gray-700">Alamat:</Typography>
                  <Typography>{supplierData.address}</Typography>
                </div>
                <div>
                  <Typography className="text-gray-700">Telepon:</Typography>
                  <Typography>{supplierData.phone}</Typography>
                </div>
                <div>
                  <Typography className="text-gray-700">Email:</Typography>
                  <Typography>{supplierData.email}</Typography>
                </div>
              </div>
            </Card>
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
