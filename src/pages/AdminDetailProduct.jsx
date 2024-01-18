import React, {useState, useEffect} from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MasterAdminDetailImage from "../components/masterAdminDetailImage";

export default function AdminDetailProduct() {
    
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
        <div className=" grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
          <div className="md:col-span-4 md:pr-2 md:flex md:justify-center md:items-center">
            <MasterAdminDetailImage></MasterAdminDetailImage>
          </div>
          <div className="md:col-span-4 md:pr-2">
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
          <div className="md:col-span-4 md:pr-2">
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