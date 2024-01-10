import React from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MasterAdminDetailImage from "../components/masterAdminDetailImage";

export default function AdminDetailProduct() {
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div className="bg-white z-50 fixed top-0 h-full">
        <MasterSidebar />
      </div>
      {/* Navbar */}
      <MasterNavbarAdmin />
      {/* Content Product */}
      <div className="flex-grow h-full ml-80 pt-10 mr-0">
        {/* Content */}
        <div className=" bg-white grid grid-cols-4 mr-6 mb-6 pt-6 pb-6 pr-2 pl-6 rounded-lg shadow-md">
          <div className="col-span-4">
            <MasterAdminDetailImage></MasterAdminDetailImage>
          </div>
          <div className="col-span-4">
            <Typography variant="h3" className="font-bold mb-2 text-black mt-4">
              Minyak Goreng Curah
            </Typography>
            <Typography variant="h2" className="font-bold mb-2 text-black mt-4">
              Rp 50.000.000 - Rp 100.000.000
            </Typography>
            <Typography
              variant="lead"
              className="font-bold mb-2 text-black mt-4 border-b"
            >
              Availability: In Stock
            </Typography>
          </div>
          <div className="col-span-4">
            <div className="sm:order-3 flex pb-20 col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2 w-full">
              <div className="w-[210px] items-left justify-left">
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="font-bold mb-2 text-black mt-4"
                  >
                    Berat
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Satuan
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Diambil Dari
                  </Typography>
                </div>
                <div className="w-full justify-left items-left  ml-4 lg:ml-0">
                  <Typography
                    variant="lead"
                    className="text-black mt-4 font-bold"
                  >
                    Deskripsi Produk
                  </Typography>
                </div>
              </div>
              <div className="w-full items-left justify-left">
                <div className="w-full justify-left items-left border-b pt-[8px]">
                  <Typography variant="lead" className="text-black mt-4">
                    5000L
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b">
                  <Typography variant="lead" className="text-black mt-4">
                    Liter
                  </Typography>
                </div>
                <div className="w-full justify-left items-left border-b">
                  <Typography variant="lead" className="text-black mt-4">
                    Kalimantan Barat
                  </Typography>
                </div>
                <div className="w-full justify-left items-left  ">
                  <Typography variant="lead" className="text-black mt-4">
                    Minyak Goreng Curah (LDC East)
                  </Typography>
                </div>
              </div>
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