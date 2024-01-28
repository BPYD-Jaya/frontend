import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import MasterCarousel from "../components/masterCarousel";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
  typography,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import {
  FcApproval,
  FcCustomerSupport,
  FcMultipleDevices,
  FcOk,
} from "react-icons/fc";
import MasterCard from "../components/masterCard";
import MasterFooter from "../components/masterFooter";
import axios from "axios"

export default function Home() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleSubmitNotification = (e) => {
    e.preventDefault();
    const data = {
      email: email
    }
    try {
      const res = axios.post('https://backend.ptwpi.co.id/api/customer/send', data)
    } catch (error) {
      console.error("Error submitting notification:", error);
    }
  }

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
      <div className=" bg-wpigreen-50 xl:h-[820px] md:h-[1050px] h-[810px]">
        <div
          className="bg-wpiblue-50 flex flex-col xl:h-[600px] md:h-[950px] lg:h-[550px] h-[750px]"
          style={{ borderRadius: "0 0 50px 50px" }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:h-[500px]">
            <div className="flex justify-center items-center text-white pl-4 pt-5 md:pt-8 lg:pt-0 lg:pl-10">
              <div className="">
                <div className="">
                  <Typography
                    variant="h3"
                    className="mb-4 text-center lg:text-left text-xl whitespace-no-wrap md:text-[2rem] md:!leading-10 leading-7"
                  >
                    SATU APLIKASI UNTUK
                    <br /> SEMUA KEBUTUHAN WARUNG
                  </Typography>
                </div>
                <div className="">
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <span className="mr-4 text-3xl">
                      <FcOk />
                    </span>
                    Belanja, pencatatan dan penjualan stok bisa semua
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Harga menguntungkan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Diskon dan promo tiap
                    bulan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Gratis pengiriman
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Beragam pilihan
                    pendanaan
                  </Typography>
                  <div className="flex justify-center xl:justify-start md:justify-start">
                    <a href="/mitra">
                      <Button
                        className="hover:text-green-100 bg-wpigreen-50 "
                        size="lg"
                      >
                        <div className="flex items-center lg:text-2xl">
                          GABUNG SEKARANG <FaArrowRight className="ml-2" />
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[280px] md:h-[400px] lg:h-[33vw] xl:h-full py-5 mt-4 lg:mt-0 md:py-0 items-center">
              <img
                src="./assets/hero.png"
                alt="image1"
                className="h-full w-full   "
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="container mx-auto lg:-translate-y-[7vw] xl:-translate-y-[7.5vw] md:-translate-y-32 -translate-y-24 px-4 w-full h-[130px] md:h-[200px] lg:h-[17vw] xl:h-[300px]  sm:px-0 lg:px-0 ">
          <MasterCarousel />
        </div>

        {/* Content 1 */}
        <div
          className="lg:-translate-y-16 px-4 md:px-0
        "
        >
          <div className="container mx-auto text-center xl:mb-16 mb-12 ">
            <Typography
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Kenapa Harus Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-12 h-full">
            <div className="flex justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="https://img.freepik.com/free-vector/tiny-male-female-characters-standing-near-arrow-down-showing-percentage-decrease-financial-reduction-flat-vector-illustration-low-rate-special-offer-loan-discount-price-concept_74855-22568.jpg?size=626&ext=jpg&ga=GA1.2.361051616.1622625034&semt=ais"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Harga Terjangkau untuk Pasar Indonesia dan Internasional
                  </Typography>
                  <Typography className="text-justify">
                    WPI berkomitmen untuk menyediakan komoditas pangan dengan
                    harga yang terjangkau di pasar Indonesia. Selain itu,
                    melalui standarisasi dan perizinan yang relevan, WPI
                    memastikan bahwa produknya dapat bersaing dengan harga yang
                    kompetitif di pasar internasional, membuka peluang ekspor
                    yang menjanjikan
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="flex justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?size=626&ext=jpg&ga=GA1.1.361051616.1622625034&semt=sph"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Digitalisasi untuk Percepatan Forecasting
                  </Typography>
                  <Typography className="text-justify">
                    Dengan misi digitalisasi untuk percepatan forecasting supply
                    dan demand komoditi pangan, WPI menonjol sebagai perusahaan
                    yang proaktif dan inovatif. Hal ini memberikan keuntungan
                    tambahan bagi pelanggan dengan memastikan ketersediaan stok
                    yang optimal dan respons yang cepat terhadap perubahan pasar
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="flex justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.2.361051616.1622625034&semt=sph"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Kolaborasi Kekuatan Tim yang Sinergis
                  </Typography>
                  <Typography className="text-justify">
                    Warung Pangan Indonesia (WPI) membanggakan kolaborasi tim
                    yang kuat dan sinergis, mencakup kegiatan Supply Chain
                    Management, Trading, Finance Scheme, dan Business Networking
                    yang didukung oleh Teknologi Informasi yang tepat guna. Ini
                    memberikan jaminan bahwa WPI memiliki fondasi yang kokoh
                    untuk mengelola secara efektif dan efisien rantai
                    pasok pangan
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="container mx-auto grid xl:grid-cols-12 grid-cols-1 gap-6 lg:px-0 px-4 pt-6 lg:pt-0 ">
          <div className="lg:col-span-7 col-span-1 flex flex-col justify-start items-start">
            <div className="pb-5 lg:pb-0">
              <Typography
                variant="h3"
                className="text-[1.6rem] pr-4 lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                style={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 800,
                }}
              >
                Keunggulan Berbelanja di Warung Pangan Indonesia
              </Typography>
            </div>
            <div className="flex py-8 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex md:h-full">
                <FcApproval />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pasokan Produk Berkualitas</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Banyak produk yang ditawarkan dengan kualitas terjamin dengan
                  harga yang kompetitif dan pengiriman barang yang tepat waktu.
                </p>
              </div>
            </div>
            <div className="flex  py-4 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex   md:h-full   ">
                <FcMultipleDevices />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Digitalisasi Warung</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Solusi lengkap bagi pemilik bisnis, yang mencakup pencatatan
                  transaksi, manajemen inventori, dan pemesanan via aplikasi
                </p>
              </div>
            </div>
            <div className="flex py-4 gap-3 md:gap-6">
              <span className="text-[3rem] lg:text-6xl flex   md:h-full   ">
                <FcCustomerSupport />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-[1.5rem] lg:pr-0 lg:text-[2rem] !leading-8 text-start"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pembinaan Mitra</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Kami membantu para mitra agar bisnisnya dapat berkembang lebih
                  maju, dengan pelatihan, permodalan, dan promosi yang bertujuan
                  meningkatkan penjualan dan pengembangan kapasitas
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-5 col-span-1 border shadow-lg flex justify-center rounded-md items-center">
            <img
              src="https://warungpangan.com/upload/settings/home_banner_keunggulan.png"
              alt="image2"
              style={{ height: "500px" }}
            />
          </div>
        </div>

        {/* Content 3 */}
        <div className="container mx-auto mb-6">
          <div className="my-10">
            <Typography
              className="xl:ml-2 lg:ml-4 md:ml-2 ml-6 flex justify-start"
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Cerita Mitra Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-12 h-full">
            <div className="flex justify-center items-center h-full px-4 md:px-0">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="./assets/mitra-1.png"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray">
                    Farhan Dwicahyo
                  </Typography>
                  <Typography className="mb-2 text-sm font-medium">
                    PT BPYD JAYA
                  </Typography>
                  <Typography className="text-justify">
                    WPI telah berhasil menyajikan beragam jenis komoditas dengan
                    harga yang terjangkau, sambil konsisten menjaga tingkat
                    kualitas yang unggul. Kesuksesan ini mencerminkan komitmen
                    yang kuat dari WPI untuk terus memberikan layanan yang tidak
                    hanya berkualitas tinggi tetapi juga terjangkau kepada
                    pelanggan setianya. Dalam upaya untuk memenuhi kebutuhan
                    konsumen dengan cara yang optimal, WPI secara terus-menerus
                    berusaha meningkatkan dan menyempurnakan portofolio
                    produknya agar dapat memberikan pengalaman belanja yang
                    memuaskan dan terpercaya.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="flex justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="./assets/mitra-3.png"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray">
                    Muhammad Rafli Akbar
                  </Typography>
                  <Typography className="mb-2 text-sm font-medium">
                    OPPIUM AGGENCY
                  </Typography>
                  <Typography className="text-justify">
                    WPI sukses menyediakan beragam komoditas dengan harga yang
                    terjangkau, sambil tetap mempertahankan standar kualitas
                    yang tinggi. Prestasi ini mencerminkan tekad WPI untuk
                    memberikan layanan berkualitas tinggi yang terjangkau kepada
                    pelanggannya.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="flex justify-center items-center h-full">
              <Card className="w-full h-full">
                <CardHeader color="blue-gray" className="relative h-[200px]">
                  <img
                    src="./assets/mitra-2.png"
                    alt="card-image"
                    className="w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray">
                    Naufal Randika Parikesit
                  </Typography>
                  <Typography className="mb-2 text-sm font-medium">
                    PT FAJAR ISLAM
                  </Typography>
                  <Typography className="text-justify">
                    WPI telah berhasil menawarkan berbagai jenis komoditas
                    dengan harga yang terjangkau, sekaligus mempertahankan
                    tingkat kualitas yang unggul. Keberhasilan ini mencerminkan
                    komitmen WPI dalam menyediakan layanan yang berkualitas
                    tinggi dan terjangkau kepada para pelanggannya.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Content Image */}
        <div className="container mx-auto flex justify-center pb-16 py-4">
          <div className="overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <a href="/produk">
              <img
                src="./assets/banner.png"
                alt=""
                className="w-full rounded-lg"
              />
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
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  placeholder="Email address"
                  className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none w-full",
                  }}
                />
                <Button onClick={handleSubmitNotification} className="hover:bg-green-400 bg-wpigreen-50">
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
