import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import MasterButtonWa from "./masterButtonWa";
import axios from "axios";
import { useNavigate } from "react-router";

export default function MasterCatalog({
  id,
  product_name,
  price,
  stock,
  item_image
}) {
  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate(`/detail-produk/${id}`); 
  };
  return (
    <Card className="lg:max-w-[250px] w-full overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="object-cover transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        <a href="/detail-produk">
          <img className="rounded-md" src={item_image} alt={product_name} />
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
          {product_name}
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
          {price}
        </Typography>
        <Typography
          variant="lead"
          color="black"
          className="font-normal whitespace-nowrap"
          style={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 500,
            fontSize: "0.850rem"
          }}
        >
          Stock: {stock}
        </Typography>
        <div className="flex items-center justify-center mb-2">
          <MasterButtonWa />
        </div>
      </CardBody>
    </Card>
  );
}
