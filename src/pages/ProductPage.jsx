import React, { useState, useEffect } from 'react';
import MasterNavbar from '../components/masterNavbar';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Button, Input, Typography } from '@material-tailwind/react';
import MasterFilterCard from '../components/masterFilterCard';
import MasterCatalog from '../components/masterCatalog';
import MasterFooter from '../components/masterFooter';
import MasterPagination from '../components/masterPagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductPage() {
  const catalogItems = [
    {
      imageUrl:
        'https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/314b8961ed526933bec7c95a57549f6a.jpg',
      productName: 'Minyak Goreng Curah',
      priceRange: '$14.00 - $19.00',
      minOrder: '1000.0 liters',
    },
    {
      imageUrl:
        'https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/88d6ccdf1da66d1504e2154e80b17aa8.png',
      productName: 'Tepung Terigu',
      priceRange: '$12.00 - $18.00',
      minOrder: '800.0 kilograms',
    },
    {
      imageUrl:
        'https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/61daa548d50a8a73156bd1d20015af82.jpeg',
      productName: 'Garam Enak',
      priceRange: '$12.00 - $18.00',
      minOrder: '1000.0 kilograms',
    },
  ];

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? 'fixed top-0 w-full z-50' : ''
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
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 w-full flex items-center pl-2 justify-start">
                  <img
                    src="assets/semua-kategori.png"
                    alt=""
                    className="block  mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Semua Kategori
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/mineral.png"
                    alt=""
                    className="block  mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Mineral
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/coal.png"
                    alt=""
                    className="block  mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Batubara
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/corn.png"
                    alt=""
                    className="block mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Horticurtular
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/agriculture.png"
                    alt=""
                    className="block mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Agriculture
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/aquaculture.png"
                    alt=""
                    className="block mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Aquaculture
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide>
          {/* <SwiperSlide>
            <a href="#">
              <div className="bg-gradient-to-t w-[250px] sm:w-[300px] md:w-[215px] lg:w-[175px] xl:w-[192px] mx-auto md:mx-0  from-wpigreen-50 to-wpiblue-50 rounded-lg py-3 px-2 flex items-center justify-center overflow-hidden text-center">
                <div className="col-span-1 flex items-center pl-2 justify-start">
                  <img
                    src="assets/semua-kategori.png"
                    alt=""
                    className="block mb-4 h-[65px] w-1/2 lg:mb-0"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <Typography
                    style={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-white font-bold text-lg md:text-base lg:text-base"
                  >
                    Semua Kategori
                  </Typography>
                </div>
              </div>
            </a>
          </SwiperSlide> */}
        </Swiper>
      </div>

      {/* Content */}
      <div className="container mx-auto pb-[80px]">
        <div className="md:col-span-2 px-6 pt-4 lg:pt-0 md:px-0">
          <div className="container mx-auto grid grid-cols-1 pb-4 md:w-[80%] lg:w-full">
            <div className="flex justify-center items-center md:ml-[0px] lg:ml-[460px] lg:mr-[30px]">
              <input
                type="text"
                placeholder="Cari Produk"
                className="w-full h-10 pl-4 pr-12 rounded-l-md border-2 border-slate-600 focus:outline-none focus:border-wpigreen-500"
              />
              <button
                type="button"
                className="bg-wpigreen-50 text-white font-bold py-2 lg-4 h-10 rounded-r-md px-4 "
              >
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
            <Typography
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
              tag="h5"
              className="font-bold text-lg md:text-base text-black ml-8 mb-1"
            >
              Filter
            </Typography>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          <div className="md:col-span-1  md:ml-7   px-8 md:px-0">
            <div>
              <MasterFilterCard />
            </div>
          </div>
          <div className="md:col-span-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0 md:mr-4">
              {catalogItems.map((item, index) => (
                <MasterCatalog
                  key={index}
                  imageUrl={item.imageUrl}
                  productName={item.productName}
                  priceRange={item.priceRange}
                  minOrder={item.minOrder}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center   mt-6">
          <MasterPagination />
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
                  className: 'before:content-none after:content-none w-full',
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