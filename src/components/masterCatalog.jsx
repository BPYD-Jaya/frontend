import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function MasterCatalog() {
  return (
    <Card className="max-w-[250px] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none overflow-hidden relative"
      >
        <img
          src="https://warungpangan.com/upload/img/f7ec7beff1317722e1df5a97055d23eb.jpg"
          alt="ui/ux review check"
          className="w-full h-40 object-cover transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-xl whitespace-nowrap font-semibold">
          Minyak Goreng Curah
        </Typography>
        <Typography variant="lead" color="gray" className="mb-4 font-normal whitespace-nowrap">
          Rp 12.500
        </Typography>
        <div className="flex items-center justify-between mb-4">
          <Typography variant="body2" color="gray" className="font-normal text-wpigreen-50 italic whitespace-nowrap text-xs">
            Gratis Pengiriman
          </Typography>
          <Typography variant="caption" color="gray" className="font-normal whitespace-nowrap text-xs">
            Terjual 1000
          </Typography>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button 
            type="button"
            className="ml-0 mb-[-10px] mt-4 bg-wpigreen-50 text-white font-bold py- px-4 h-10 w-full rounded-md">
            Beli
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
