import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";

export default function MasterCatalog() {
  return (
    <Card className="max-w-[250px] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://warungpangan.com/upload/img/f7ec7beff1317722e1df5a97055d23eb.jpg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Minyak Goreng Curah
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Rp 12.500
        </Typography>
        <Typography variant="body2" color="gray" className="mt-3 font-normal text-wpigreen-50 italic">
          Gratis Pengiriman
          </Typography>
          <span className="">
            <Typography variant="caption" color="gray" className="mt-3 font-normal">
            Terjual 1000
            </Typography>
          </span>
        <button 
        type="button"
        className="ml-0 mb-[-20px] mt-4 bg-wpigreen-50 text-white font-bold py- px-4 h-10 w-max rounded-md">
        Beli</button>
      </CardBody>
    </Card>
  );
}
