import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { useParams } from "react-router";
import axios from "axios";

export default function AdminDetailProduct() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [productData, setProductData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/products/" + id
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

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

  if (!productData) {
    // Return loading or error state while waiting for data
    return <p>Loading...</p>;
  }

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

      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Detail Product
          </Typography>
        </div>

        {/* Detail Product */}
        <div className="bg-white rounded-lg shadow-md grid grid-cols-12 p-8">
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Product Name
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.product_name}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Brand Name
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.brand}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Company Name
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.company_name}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Category Product
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.category_id}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Storage Type
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.storage_type}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Packaging
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.packaging}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Price
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.price}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Stock
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.stock}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Satuan
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.volume}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Province
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.province_id}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            City
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.city_id}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Address
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.address}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4 ">
            Description
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4 font-bold">
            {productData.description}
          </div>
          <div className="col-span-12 lg:col-span-3 flex justify-start lg:justify-between items-center pb-4">
            Photo Product
            <span>:</span>
          </div>
          <div className="col-span-12 lg:col-span-9 pb-4">
            <img src={productData.item_image} alt="photo product" />
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
