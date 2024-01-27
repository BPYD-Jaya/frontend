import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import MasterButtonWa from "./masterButtonWa";

export default function MasterCatalog({
  imageUrl,
  productName,
  priceRange,
  wa_link,
  brand,
  id
}) {
  return (
    <Card className="lg:max-w-[250px] w-full overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="object-cover transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <a href={`/detail-produk/${id}`}>
          <img className="rounded-md" src={imageUrl} alt={productName} />
        </a>
      </CardHeader>
      <CardBody className="p-6">
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-xl whitespace-nowrap font-semibold"
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 800,
            fontSize: "19px",
          }}
        >
          {brand}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="text-xl whitespace-nowrap"
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 600,
            fontSize: "19px",
          }}
        >
          {productName}
        </Typography>
        <Typography
          variant="lead"
          color="black"
          className="font-bold whitespace-nowrap"
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 600,
            fontSize: "0.950rem"
          }}
        >
          {priceRange}
        </Typography>
        {/* <Typography
          variant="lead"
          color="black"
          className="font-normal whitespace-nowrap"
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 500,
            fontSize: "0.850rem"
          }}
        >
          Min. order: {minOrder}
        </Typography> */}
        <div className="flex items-center justify-center mb-2 pt-4">
          <MasterButtonWa wa_link={wa_link} />
        </div>
      </CardBody>
    </Card>
  );
}