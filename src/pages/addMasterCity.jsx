import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";

export default function EditMasterCity() {
  const [city, setCity] = useState({ city: "", province_id: "" });
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          throw new Error("Access token not found in cookies");
        }

        const response = await axios.get(
          `https://backend.ptwpi.co.id/api/cities/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log("API response:", response);
        setCity({
          city: response.data.city,
          province_id: response.data.province_id // Pastikan ini diset dengan benar
        });
      } catch (error) {
        console.error("Error fetching city data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        throw new Error("Access token not found in cookies");
      }

      const formData = {
        city: city.city,
        province_id: city.province_id
      };

      console.log("Form Data:", formData);

      const response = await axios.put(
        `https://backend.ptwpi.co.id/api/cities/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("City data successfully updated:", response.data);
      navigate("/master-kota");
    } catch (error) {
      console.error("Error updating city data:", error.response ? error.response.data : error.message);
    }
  };

  const handleCityChange = (e) => {
    setCity((prevCity) => ({ ...prevCity, city: e.target.value }));
  };

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Rest of your component code */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <form onSubmit={handleFormSubmit}>
          {/* Rest of your form code */}
          <div className="md:col-span-4 rounded-lg">
            <Input
              name="city"
              color="indigo"
              size="lg"
              placeholder="Nama Kota"
              value={city.city}
              onChange={handleCityChange}
              className="!border-t-blue-gray-200 focus:!border-t-blue-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="md:col-span-4 rounded-lg">
          <Input
            name="province_id"
            color="indigo"
            size="lg"
            placeholder="ID Provinsi"
            value={city.province_id}
            readOnly // Membuat input tidak dapat diedit
            className="!border-t-blue-gray-200 focus:!border-t-blue-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
          {/* Rest of your form code */}
        </form>
      </div>
      {/* Rest of your component code */}
    </div>
  );
}
