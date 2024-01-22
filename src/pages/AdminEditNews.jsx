import React, { useState, useEffect } from "react";
import MasterSidebar from "../components/masterSidebar";
import {
  Button,
  Card,
  Checkbox,
  Typography,
  Input,
  Textarea,
  ButtonGroup,
  Select,
  Option,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MasterNewsAdmin from "../components/masterNewsAdmin";
import axios from "axios";
import { useParams } from "react-router";

export default function AdminEditNews() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [content, setContent] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "https://backend.ptwpi.co.id/api/blogs/" + id
        );
        setBlogData(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle the selected file as needed
    console.log(file);
  };

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
        <form>
          <div className="grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg ">
            {blogData && (
              <>
                <div className="md:col-span-4">
                  <Typography variant="h5" className="pb-10">
                    Edit Berita
                  </Typography>
                </div>
                <div className="md:col-span-4">
                  <Typography variant="small" className="">
                    Judul Berita
                  </Typography>
                </div>
                <div className=" md:col-span-4 rounded-lg">
                  <Input
                    color="indigo"
                    size="lg"
                    placeholder="Nama Penulis"
                    className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={blogData.title}
                  />
                </div>

                <div className="md:col-span-4">
                  <Typography variant="small" className="">
                    Nama Penulis
                  </Typography>
                </div>
                <div className=" md:col-span-4 rounded-lg">
                  <Input
                    color="indigo"
                    size="lg"
                    placeholder="Nama Penulis"
                    className=" !border-t-blue-gray-200 focus:!border-t-blue-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={blogData.writer}
                  />
                </div>
                <div className="md:col-span-4">
                  <Typography variant="small" className="">
                    Tanggal Berita
                  </Typography>
                </div>
                <div className=" md:col-span-4 rounded-lg">
                  <input
                    type="date"
                    size="lg"
                    placeholder="Masukan Tanggal Berita"
                    className=" !border-blue-gray-200 focus:!border-blue-900 border w-full px-2 py-2 rounded-md"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={blogData.date}
                  />
                </div>
                <div className="md:col-span-4">
                  <Typography variant="small" className="">
                    Isi berita
                  </Typography>
                </div>
                <div className="md:col-span-4">
                  <Textarea
                    color="indigo"
                    className="md:col-span-4 w-full rounded-lg !border-t-blue-gray-200 focus:!border-t-blue-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={blogData.content}
                    onChange={(e) => setContent(e.target.value)}
                  ></Textarea>
                </div>
                <div className="md:col-span-4">
                  <Typography variant="small" className="">
                    Upload Gambar
                  </Typography>
                </div>
                <div className="md:col-span-4  rounded-lg border b-2 border-gray-400">
                  <div className="px-2 md:px-4 pt-2">
                    <div className="overflow-hidden w-full max-w-[500px] md:w-full h-auto">
                      <img
                        src={blogData.blog_image}
                        alt=""
                        className="w-full h-auto mx-auto"
                      />
                    </div>{" "}
                  </div>
                  <div className="md:flex pt-4 pl-2 md:pl-4 pb-6">
                    <div className="md:flex  justify-center items-center">
                      <Button
                        color=""
                        className="bg-wpiblue-50 relative overflow-hidden"
                      >
                        <span>
                          <Typography variant="small">Ganti Gambar</Typography>
                        </span>

                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 h-full w-full"
                          onChange={handleFileUpload}
                        />
                      </Button>
                      <Typography className="md:pl-4">
                        {selectedFile
                          ? `${selectedFile.name}`
                          : "No File Chosen"}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 flex gap-2 justify-end items-center pt-6">
                  <a
                    href="/admin-blog"
                    className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
                  >
                    <Button className="bg-red-400 flex">Batal</Button>
                  </a>
                  <a
                    href="/admin-blog"
                    className="flex gap-2 text-wpigreen-500 ml-4 text-sm"
                  >
                    <Button className="bg-wpigreen-50 flex">Simpan</Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
