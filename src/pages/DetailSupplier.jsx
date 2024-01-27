import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterSidebar from "../components/masterSidebar";

export default function DetailSupplier() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [supplierData, setSupplierData] = useState(null);

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

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const response = await fetch("https://backend.ptwpi.co.id/public/api/supplier");
        const data = await response.json();

        // Check if the response contains the expected structure
        if (data && data.data && data.data[0]) {
          setSupplierData(data.data[0]);
        } else {
          console.error("Invalid response format from the API");
        }
      } catch (error) {
        console.error("Error fetching supplier data:", error);
      }
    };

    fetchSupplierData();
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
            {supplierData && (
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

                {/* Additional Fields */}
                <div className="mt-4">
                  <Typography className="text-gray-700">Kategori:</Typography>
                  <Typography>{supplierData.company_category}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Harga:</Typography>
                  <Typography>{supplierData.price}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Stok:</Typography>
                  <Typography>{supplierData.stock}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Volume:</Typography>
                  <Typography>{supplierData.volume}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Deskripsi:</Typography>
                  <Typography>{supplierData.description}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Kota:</Typography>
                  <Typography>{supplierData.city}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Provinsi:</Typography>
                  <Typography>{supplierData.province}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Kategori:</Typography>
                  <Typography>{supplierData.category}</Typography>
                </div>

                {/* Additional Fields */}
                <div className="mt-4">
                  <Typography className="text-gray-700">Item Image:</Typography>
                  <Typography>{supplierData.item_image}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Category ID:</Typography>
                  <Typography>{supplierData.category_id}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">Province ID:</Typography>
                  <Typography>{supplierData.province_id}</Typography>
                </div>

                <div className="mt-4">
                  <Typography className="text-gray-700">City ID:</Typography>
                  <Typography>{supplierData.city_id}</Typography>
                </div>
              </Card>
            )}
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
