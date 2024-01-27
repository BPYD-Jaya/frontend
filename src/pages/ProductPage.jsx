import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Input, Typography } from "@material-tailwind/react";
import MasterFilterCard from "../components/masterFilterCard";
import MasterCatalog from "../components/masterCatalog";
import MasterFooter from "../components/masterFooter";
import MasterPagination from "../components/masterPagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useParams } from "react-router";


export default function ProductPage() {
  const {pageNumber,id} = useParams();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [filteredProduct, setFilteredProduct] = useState({ category_id: null });
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchCategory = async () => {
    try {
      const res = await axios.get('https://backend.ptwpi.co.id/api/categories')
      setCategory(res.data)
    } catch (error) {
      console.error(error.message)
    }
  }
  const catalogItems = [
    {
      imageUrl:
        "https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/314b8961ed526933bec7c95a57549f6a.jpg",
      productName: "Minyak Goreng Curah",
      priceRange: "$14.00 - $19.00",
      minOrder: "1000.0 liters",
    },
    {
      imageUrl:
        "https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/88d6ccdf1da66d1504e2154e80b17aa8.png",
      productName: "Tepung Terigu",
      priceRange: "$12.00 - $18.00",
      minOrder: "800.0 kilograms",
    },
    {
      imageUrl:
        "https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/61daa548d50a8a73156bd1d20015af82.jpeg",
      productName: "Garam Enak",
      priceRange: "$12.00 - $18.00",
      minOrder: "1000.0 kilograms",
    },
  ];

 
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // New state to store pagination data
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: 1,
    data: [],
  });
  console.log("paginationData", paginationData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/products",
          {
           
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
}, []);
console.log(product);

  const fetchData = async (categoryId) => {
    try {
      const url = `https://backend.ptwpi.co.id/api/products?category_id=${categoryId || ''}`;
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Access-Control-Allow-Origin': '*',
        }
      };
      const res = await axios.get(url, options);
      setProduct(res.data.data.data);
    } catch (error) {
      console.error(error.message);
    }
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

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, [])

  useEffect(() => {
    if (filteredProduct.category_id) {
      fetchData(filteredProduct.category_id); // Fetch products filtered by category ID
    }
  }, [filteredProduct.category_id]);

  const handleCategoryClick = (categoryId) => {
    setFilteredProduct({ category_id: categoryId });
  };

  const handleSearch = async () => {
    try {
      const url = `https://backend.ptwpi.co.id/api/products?search=${searchKeyword}`;
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Access-Control-Allow-Origin': '*',
        }
      };
      const res = await axios.get(url, options);
      setProduct(res.data.data.data);
      const searchData = res.data.data.data;
    
    setProductData(searchData); // Update product data with search results
    setPaginationData({
      ...paginationData,
      data: searchData, // Update pagination data with search results
    });
    } catch (error) {
      console.error(error.message);
    }
  };

 

  const handlePageChange = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://backend.ptwpi.co.id/api/products?page=${pageNumber}`,
        {
        }
      );

      if (response && response.data && response.data.data) {
        const newData = response.data.data.data;
        setProduct(newData);
        setPaginationData({
          ...paginationData,
          current_page: pageNumber,
        });
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  
  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${isNavbarFixed ? 'fixed top-0 w-full z-50' : ''
          }`}
      >
        <MasterNavbar />
      </div>

      {/* Kategori Produk */}
      <div
        className="container max-w-[1260px]  product mx-auto md:py-0 md:px-6 
      mt-4"
      >
        <Typography
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 800,
          }}
          variant="h3"
          className="text-center  md:text-start justify-center pb-6 lg:pb-3 "
        >
          Kategori Produk
        </Typography>
        <Swiper
          className="mb-4  rounded-md"
          slidesPerView={5}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            722: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            960: {
              slidesPerView: 5,
              spaceBetween: 0,
            },

            1238: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <a href="/produk">
              <img 
                alt=''
                src="./assets/all-categories.png"
                className="w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0"
              />
            </a>
          </SwiperSlide>
          {category.map((cat, index) => (
            <SwiperSlide key={index}>
                <img
                  src={cat.image_url}
                  className="w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0"
                  alt={cat.category}
                  onClick={() => handleCategoryClick(cat.id)} // Use the actual attribute that holds the category ID
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-[80px]">
          <div className="container mx-auto grid grid-cols-1 pb-4 md:w-[80%] lg:w-full">
            <div className="flex justify-center items-center md:ml-[0px] lg:ml-[460px] lg:mr-[30px]">
            <input
                type="text"
                placeholder="Cari Produk"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border-wpigreen-500"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="bg-wpigreen-50 text-white font-bold py-2 lg-4 h-10 rounded-r-md px-4 "
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        <div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
            <Typography
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
                fontSize: "1.em",
              }}
              tag="h5"
              className="font-bold text-lg md:text-base text-black ml-8 mb-1"
            >
              Filter
            </Typography>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          <div className="md:col-span-1 md:ml-7 px-8 md:px-0">
            <div>
              <MasterFilterCard />
            </div>
          </div>
          <div className="md:col-span-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0 md:mr-4">
              {product.map(item => {
                let price = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price);
                return (
                  <MasterCatalog
                    id={item.id}
                    imageUrl={item.link_image}
                    brand={item.brand}
                    productName={item.product_name}
                    priceRange={price}
                    wa_link={item.wa_link}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center 2lg:justify-start 2xl:pl-[443px] xl:justify-start xl:pl-[385px] lg:justify-start lg:pl-[323px] items-center   mt-6">
          <MasterPagination
            active={paginationData.current_page}
            onPageChange={handlePageChange}
            totalItems={productData.length} // Pass the total number of items for pagination
          />
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
  );
}
