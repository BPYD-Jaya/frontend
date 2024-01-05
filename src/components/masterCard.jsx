import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function MasterCard() {
  return (
    <Card className="w-96">
      <CardHeader color="blue-gray" className="relative h-auto">
        <img
          src="https://warungpangan.com/upload/img/5be1e2e75c4f7f54e04a8e7bced4039f.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Warung Pangan Indonesia
        </Typography>
        <Typography className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, ipsam?
          Nulla, dolore aut, soluta impedit culpa fugiat inventore ullam
          similique, mollitia tempore cum natus est? Atque, beatae perspiciatis.
          Alias, reiciendis?
        </Typography>
      </CardBody>
    </Card>
  );
}
