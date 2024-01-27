import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import { FaRegNewspaper } from "react-icons/fa6";
import MasterCard from "../components/masterCard";
import MasterFooter from "../components/masterFooter";
import MasterNews from "../components/masterNews";
import MasterPagination from "../components/masterPagination";
import { useNavigate, useParams } from "react-router";

export default function NewsPage() {
  const navigate = useNavigate();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [blogData, setBlogData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend.ptwpi.co.id/api/blogs");
        const data = await response.json();
        setBlogData(data.blogs.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigateToDetail = (id) => {
    navigate(`/detail-blog/${id}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? "fixed top-0 w-full z-10" : ""
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Jumbotron */}
      <div className="">
        <div
          className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex flex-col justify-center items-center px-4 xl:px-36 xl:h-[400px] md:h-[500px] lg:h-[450px] h-[500px] pb-16"
          style={{ borderRadius: "0 0 50px 50px" }}
        >
          <div className="flex flex-col justify-center items-center text-center text-white">
            <FaRegNewspaper size={100} className="mb-2" />
            <Typography
              variant="h1"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
              className="font-bold text-5xl mb-2"
            >
              Blog Warung Pangan Indonesia
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 400,
              }}
              className="font-medium text-2xl"
            >
              Dapatkan informasi bermanfaat seputar pengelolaan usaha anda dari
              artikel yang kami berikan
            </Typography>
          </div>
        </div>

        {/* Content 1 */}
        <div className="">
          <div className="container mx-auto text-center xl:mb-4 pt-4 flex justify-center">
            <Typography
              variant="h1"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
              className="font-bold"
            >
              News
            </Typography>
          </div>
          <div className="container mx-auto flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 text-start">
              {blogData.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => navigateToDetail(item.id)}
                  className="cursor-pointer"
                >
                  <MasterNews {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex lg:justify-center lg:pr-[435px]  items-center mt-6">
            <MasterPagination />
          </div>
        </div>

        {/* Content Image */}
        <div className="container mx-auto flex justify-center pb-16 px-8 my-6">
          <div className="overflow-hidden transform transition-transform duration-300 hover:scale-105 rounded-lg">
            <a href="/produk">
              <img src="./assets/banner.png" alt="" className="w-full" />
            </a>
          </div>
        </div>

        {/* Form Email */}
        <div className="bg-blue-50 lg:px-28 px-0 h-[50px]">
          <div className="bg-white grid grid-cols-1 lg:grid-cols-12 border rounded-lg shadow-lg py-8 -translate-y-10">
            <div className="col-span-6 text-center flex items-center justify-center lg:justify-start px-auto md:px-0 xl:px-2">
              <Typography
                variant="h4"
                style={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 700,
                }}
              >
                Masukkan alamat email Anda untuk mendapatkan informasi menarik
                dari kami!
              </Typography>
            </div>
            <div className="col-span-6 px-2 md:px-4 xl:px-2 flex items-center justify-center w-full">
              <div className="flex gap-2 w-full">
                <Input
                  size="lg"
                  placeholder="Email address"
                  className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none w-full",
                  }}
                />
                <Button className="hover:bg-green-400 bg-wpigreen-50">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-50">
          <div className="container mx-auto pt-40 lg:pt-18">
            <MasterFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
