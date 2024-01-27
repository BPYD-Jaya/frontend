import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterSidebar from "../components/masterSidebar";

export default function DetailSupplier() {
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

  const supplierData = {
    id: 2,
    name: "Rafli",
    company_whatsapp_number: "08123456789",
    company_email: "diffuser@email.com",
    company_name: "Rafli Diffuser",
    company_category: "Elektronik",
    brand: "Baygon",
    product_name: "Diffuser",
    price: "100.000",
    stock: 100,
    volume: "Kilogram",
    category_id: 1,
    address: "Royal Arcadia",
    item_image: "product-1705971347.png",
    description: "Diffuser Terbaik",
    province_id: 1,
    city_id: 1,
    created_at: "2024-01-23T00:55:48.000000Z",
    updated_at: "2024-01-23T00:55:48.000000Z",
  };

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
                {supplierData.company_name}
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography className="text-gray-700">Alamat:</Typography>
                  <Typography>{supplierData.address}</Typography>
                </div>
                <div>
                  <Typography className="text-gray-700">Telepon:</Typography>
                  <Typography>{supplierData.company_whatsapp_number}</Typography>
                </div>
                <div>
                  <Typography className="text-gray-700">Email:</Typography>
                  <Typography>{supplierData.company_email}</Typography>
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
