import React, { useState, useEffect } from "react";
import MasterNavbar from "../components/masterNavbar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { TbMessage2Heart } from "react-icons/tb";
import MasterFooter from "../components/masterFooter";

export default function AboutPage() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
      <div
        className="bg-wpiblue-50 xl:h-[650px] lg:h-[550px] md:h-[700px] sm:h-[650px] h-[600px] lg:pt-4 pt-0"
        style={{ borderRadius: "0 0 50px 50px" }}
      >
        <div className="container mx-auto grid lg:grid-cols-12 grid-cols-1 px-4">
          <div className=" flex justify-center items-center text-white col-span-8 pt-2 ">
            <img
              src="https://warungpangan.com/upload/settings/about_us_banner.png"
              alt="jumbotron"
              className="xl:h-[500px] md:h-[400px]"
            />
          </div>
          <div className=" col-span-4 xl:-translate-x-0 flex flex-col justify-center text-center lg:text-start">
            <Typography variant="h1" className="py-4" color="white">
              Kami hadir sebagai solusi digital untuk semua kebutuhan warung
            </Typography>
          </div>
        </div>
      </div>

      {/* Content 1 */}
      <div className="mx-2">
        <div className="bg-white container mx-auto lg:-translate-y-36 -translate-y-16 px-12 py-8 text-center shadow-lg rounded-lg">
          <div className="grid grid-cols-12">
            <div className="col-span-12 flex justify-center items-center gap-16">
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="hidden lg:block col-span-5"
                width={250}
              />
              <iframe
                className="h-[400px] lg:h-[400px] w-full col-span-7"
                src="https://www.youtube.com/embed/MVMSfjhCE8g"
                title="Semangat Juang - Informatika UNDIP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className="container mx-auto xl:px-0 px-4 xl:mb-0 xl:-translate-y-18 lg:-translate-y-14 ">
        <Typography variant="h3" className="text-center lg:text-start mb-4">
          Tentang Warung Pangan Indonesia
        </Typography>
        <Typography variant="lead" color="black" className="text-justify">
          Warung Pangan Indonesia (WPI) didirikan pada tahun 2023 dan merupakan
          perusahaan baru yang telah membangun posisinya sebagai pemain penting
          dalam industri pangan. Dengan fokus pada agregasi komoditas pangan dan
          dukungan pangan lainnya, WPI mengintegrasikan Supply Chain Management,
          Trading, Finance Scheme, dan Business Networking dengan dukungan
          Teknologi Informasi. WPI tidak hanya terlibat dalam manajemen sumber
          daya pangan dari dalam dan luar negeri, tetapi juga berperan dalam
          meningkatkan nilai tambah komoditas pangan. Perusahaan ini aktif dalam
          perdagangan dan distribusi, menawarkan komoditas pangan dengan harga
          terjangkau di pasar domestik dan bersaing di pasar internasional.
          Dengan pendekatan holistik dan inovatif terhadap rantai pasokan, WPI
          berkontribusi pada ketahanan pangan dan memastikan ketersediaan
          berbagai jenis produk pangan untuk masyarakat Indonesia. Dengan visi
          yang jelas dan komitmen terhadap teknologi, WPI terus tumbuh sebagai
          pemain kunci dalam industri pangan, menciptakan dampak positif secara
          lokal dan global.
        </Typography>
      </div>

      {/* Budaya Kerja */}
      <div className="container mx-auto lg:py-0 py-8 mb-8">
        <div>
          <Typography variant="h3">Budaya Kerja ( LAPAK )</Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-6 ">
          <Card className="py-1 flex flex-col justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg text-center">
            <CardBody>
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="block mx-auto mb-4 lg:mb-0"
                width={70}
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Layanan
              </Typography>
              <Typography>
                Melayani mitra bisnis dengan sepenu hati untuk mencapai kepuasan
                pelanggan
              </Typography>
            </CardBody>
          </Card>
          <Card className="py-1 flex flex-col justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg text-center">
            <CardBody>
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="block mx-auto mb-4 lg:mb-0"
                width={70}
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Amanah
              </Typography>
              <Typography>
                Selalu memenuhi komitmen sesuai dgn janji dan target yang telah
                disepakati
              </Typography>
            </CardBody>
          </Card>
          <Card className="py-1 flex flex-col justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg text-center">
            <CardBody>
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="block mx-auto mb-4 lg:mb-0"
                width={70}
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Profesional
              </Typography>
              <Typography>
                Melayani mitra bisnis dengan sepenu hati untuk mencapai kepuasan
                pelanggan
              </Typography>
            </CardBody>
          </Card>
          <Card className="py-1 flex flex-col justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg text-center">
            <CardBody>
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="block mx-auto mb-4 lg:mb-0"
                width={70}
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Adaptif
              </Typography>
              <Typography>
                Cepat beradaptasi untuk terus berinovasi terhadap perkembangan
                dunia industri yg terjadi setiap saat
              </Typography>
            </CardBody>
          </Card>
          <Card className="py-1 flex flex-col justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg text-center">
            <CardBody>
              <img
                src="assets/logo-wpi.png"
                alt=""
                className="block mx-auto mb-4 lg:mb-0"
                width={70}
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Kolaboratif
              </Typography>
              <Typography>
                Memiliki semangat kebersamaan yang tinggi dalam memberikan
                solusi penyelesaian permasalahan yang ada
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Form Supplier */}
      <div className="container mx-auto ">
        <div className="mb-10 border rounded-lg shadow-lg text-center mx-2 lg:mx-0 ">
          <div className="flex xl:flex-row flex-col">
            <div
              className="bg-gradient-to-r from-wpiblue-50 to-wpigreen-50 flex justify-center items-center text-center xl:w-1/2 w-full h-[300px] xl:h-auto"
              style={{ borderRadius: "10px 100px 100px 10px" }}
            >
              <div className="flex flex-col justify-center items-center">
                <TbMessage2Heart
                  color="white"
                  className="lg:mb-6 mb-0 lg:h-[200px] h-[100px] w-auto"
                />
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl lg:text-5xl"
                >
                  Hubungi Kami
                </Typography>
              </div>
            </div>
            <div className=" flex justify-center items-center xl:w-1/2 w-full">
              <form className=" py-6 mt-8 mb-2 max-w-screen-lg sm:w-96 w-full px-2">
                <div className="flex flex-col gap-4">
                  <Typography variant="h6" color="blue-gray" className="-mb-3 text-start">
                    Nama Lengkap
                  </Typography>
                  <Input
                    type="text"
                    size="lg"
                    placeholder="Masukan nama lengkap"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 text-start">
                    No Handphone
                  </Typography>
                  <Input
                    type="text"
                    size="lg"
                    placeholder="Masukan nomor handphone "
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 text-start">
                    Email
                  </Typography>
                  <Input
                    type="email"
                    size="lg"
                    placeholder="Masukan email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 text-start">
                    Perihal
                  </Typography>
                  <Input
                    type="text"
                    size="lg"
                    placeholder="Perihal"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 text-start">
                    Pertanyaan
                  </Typography>
                  <Textarea
                    class="h-full  w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700  "
                    placeholder=""
                  ></Textarea>
                </div>
                <Button
                  className="hover:text-green-100 bg-wpigreen-50 mt-2"
                  fullWidth
                >
                  KIRIM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Content Image */}
      <div class="container mx-auto flex justify-center pb-16 px-8">
        <div class="overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://warungpangan.com/upload/settings/mb_banner_bottom.png"
            alt=""
            class="w-full"
          />
        </div>
      </div>

      {/* Form Email */}
      <div className="bg-blue-50 lg:px-28 px-0 h-[50px]">
        <div className=" bg-white grid grid-cols-1 lg:grid-cols-12 border rounded-lg shadow-lg text-center py-8 px-4 mx-8 lg:mx-0 -translate-y-10">
          <div className=" col-span-6 text-center flex items-center justify-center lg:justify-start">
            <Typography variant="h4">
              Dapatkan info menarik dari kami!
            </Typography>
          </div>
          <div className=" col-span-6">
            <div className="flex gap-2">
              <Input
                size="lg"
                placeholder="Email address"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
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
        <div className="container mx-auto pt-20 lg:pt-8">
          <MasterFooter />
        </div>
      </div>
    </div>
  );
}
