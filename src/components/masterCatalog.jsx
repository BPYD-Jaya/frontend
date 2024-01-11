import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import MasterButtonWa from "./masterButtonWa";

export default function MasterCatalog() {
  return (
    <Card className="lg:max-w-[250px] w-full overflow-hidden">
      <CardHeader 
        floated={false}
        shadow={false}
        color="transparent"
        className=" object-cover transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <a href="/detailproduk">
          <img className="rounded-md"
            src="https://mitrawarungpangan.bgrlogistics.id/upload/thumbs/512/314b8961ed526933bec7c95a57549f6a.jpg"
            alt="ui/ux review check"
          />
        </a>
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-xl whitespace-nowrap font-semibold" style={{ fontSize: '19px' }}>
          Minyak Goreng Curah
        </Typography>
        <Typography
          variant="lead"
          color="black"
          className="mb-4 font-normal whitespace-nowrap"
          style={{ fontSize: '0.950rem' }}
        >
          Rp 100 Juta - 500 Juta
        </Typography>
        <div className="flex items-center justify-between mb-2">
          <Typography variant="body2" color="gray" className="font-normal text-wpigreen-50 italic whitespace-nowrap text-xs">
            Gratis Pengiriman
          </Typography>
          <Typography variant="caption" color="gray" className="font-normal whitespace-nowrap text-xs">
            Terjual 1000
          </Typography>
        </div>
        <div className="flex items-center justify-center mb-2">
            <MasterButtonWa />
        </div>
      </CardBody>
    </Card>
  );
}
