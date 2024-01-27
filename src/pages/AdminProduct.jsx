import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalogAdmin from "../components/masterCatalogAdmin";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import MasterPagination from "../components/masterPagination";

export default function AdminProduct() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/products",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`,
            },
          }
        );

        if (response && response.data) {
          const data = response.data.data;
          setProductData(data.data);
          setFilteredProducts(data.data);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://backend.ptwpi.co.id/api/products?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      );
  
      if (response && response.data && response.data.data) {
        const newData = response.data.data.data;
        setFilteredProducts(newData);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const filtered = productData.filter((product) => {
      // Check if the product_name is defined before using toLowerCase
      const productName = product.product_name ? product.product_name.toLowerCase() : "";
  
      return productName.includes(searchTerm);
    });
    setFilteredProducts(filtered);
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
      <div className="h-full ml-6 md:ml-80 pt-10 mr-0 font-m-plus-rounded">
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 pt-4 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Produk
          </Typography>
          <div className="pr-6 col-span-2 flex justify-end items-center">
            <a href="/admin-tambah-produk">
              <Button className="bg-wpigreen-50 flex gap-2 items-center">
                <PlusCircleIcon className="h-[15px] w-auto" />
                <p>Tambah Produk</p>
              </Button>
            </a>
          </div>
          <div className="col-span-4">
            <div className="flex justify-center items-center w-full pr-6 mb-4">
              <input
                type="text"
                placeholder="Cari Produk"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border wpigreen-500"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="bg-wpigreen-50 text-white font-bold py-2 px-4 h-10 rounded-r-md"
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 bg-white w-auto mr-6 mb-6 pt-6 pb-6 pr-6 pl-6 justify-center items-center rounded-lg shadow-md">
          {filteredProducts.map((item, index) => (
            <MasterCatalogAdmin key={item.id} {...item} />
            ))}
            <div className="col-span-2 lg:col-span-3 2xl:col-span-4">
            <MasterPagination onPageChange={handlePageChange} />
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
