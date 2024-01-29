import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { Typography, Button } from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDetailProduct() {
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const TABLE_HEAD = ["Item ", "Value"];

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/products/" + id
        );
        setProductData(response.data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  console.log(productData);

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

  console.log(productData);

  if (!productData) {
    // Return loading or error state while waiting for data
    return <p>Loading...</p>;
  }

  const additionalInfo = productData.additional_info || [];

  const handleRedirect = () => {
    navigate("/admin-edit-produk/" + id);
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

      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <div className="grid grid-cols-4 gap-8 bg-white mb-6 py-6 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Detail Product
          </Typography>
        </div>

        {/* Detail Product */}
        <div className=" bg-white p-6 rounded-lg shadow-md ">
          <div className="overflow-x-scroll rounded-xl">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Product Name
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.product_name}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Brand Name
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.brand}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Company Name
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.company_name}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Company Category
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.company_category}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Company WA Number
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.company_whatsapp_number}
                    </Typography>
                  </td>
                </tr>

                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Place of Origin
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.city}, {productData.province}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Description
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.description}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Storage Type
                    </Typography>
                    </td>
                    <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.storage_type}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Category
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.category}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Stock
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.stock} {productData.volume}
                    </Typography>
                  </td>
                </tr>
                {additionalInfo.map((info, index) => {
                  const key = Object.keys(info)[0]; // Get the key (e.g., "Nomor Model")
                  const value = info[key]; // Get the value associated with the key

                  return (
                    <tr className="even:bg-blue-gray-50/50" key={index}>
                      <td className="p-4 break-words">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {key}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {value}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Address
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {productData.address}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4 break-words">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal "
                    >
                      Photo
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className="h-1/2 w-auto">
                      <img src={productData.link_image} alt="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-12 flex justify-end items-center mt-4">
            <Button
              onClick={handleRedirect}
              className="bg-orange-400 justify-center"
            >
              Edit
            </Button>
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
