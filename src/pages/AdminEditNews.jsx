import React from "react";
import MasterSidebar from "../components/masterSidebar";
import {
  Button,
  Card,
  Checkbox,
  Typography,
  Input,
  Textarea,
  ButtonGroup,
} from "@material-tailwind/react";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import MasterCatalog from "../components/masterCatalog";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MasterNewsAdmin from "../components/masterNewsAdmin";

export default function AdminEditNews() {
  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div className="bg-white z-50 fixed top-0 h-full">
        <MasterSidebar />
      </div>

      {/* Navbar */}
      <MasterNavbarAdmin />

      {/* Content Product */}
      <div className="flex-grow h-full ml-80 pt-10 mr-0">
        <div className="grid grid-cols-4 gap-8 bg-white mr-6 mb-6 py-4 pl-6 rounded-lg shadow-md ">
          <Typography className="col-span-2 flex items-center">
            Edit News
          </Typography>
          {/* <div className=" pr-6 col-span-2 flex justify-end items-center ">
            <Button className="bg-wpigreen-50 flex gap-2 items-center">
              <PlusCircleIcon className="h-[15px] w-auto" />
              <p>Tambah Produk</p>
            </Button>
          </div> */}
        </div>
        <div className="bg-white mr-6 mb-6 pt-6 pb-6 pr-6 pl-6 rounded-lg shadow-md">
          <form className="mt-2 mb-2 w-full">
            <div className="mb-1 flex flex-col gap-3">
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium -mb-3"
              >
                Judul Berita
              </Typography>
              <Input
                size="md"
                placeholder="Masukan Judul Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium -mb-3"
              >
                Nama Penulis
              </Typography>
              <Input
                size="md"
                placeholder="Masukan Nama Penulis Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium -mb-3"
              >
                Tanggal Berita
              </Typography>
              <Input
                type="datetime-local"
                size="md"
                placeholder="Masukan Tanggal Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium -mb-3"
              >
                Isi Berita
              </Typography>
              <Textarea
                size="md"
                placeholder="Masukan Isi Berita"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium -mb-3"
              >
                Foto
              </Typography>
              <div className="border border-dashed border-indigo-600 p-2 rounded-md ">
                <img
                  src="https://warungpangan.com/upload/img/f7ec7beff1317722e1df5a97055d23eb.jpg"
                  alt=""
                  className="rounded-md"
                />
                <ButtonGroup className="mt-2">
                  <Button className="bg-wpiblue-50 w-60">Pilih Foto</Button>
                  <Input placeholder="Pilih Foto" />
                </ButtonGroup>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <Button className="mt-6 bg-red-400">CANCEL</Button>
              <Button className="mt-6 bg-wpigreen-50">EDIT</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
