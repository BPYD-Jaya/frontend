import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function MasterFilterCard() {
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);

  const toggleSection1 = () => setSection1Expanded(!section1Expanded);
  const toggleSection2 = () => setSection2Expanded(!section2Expanded);
  const toggleSection3 = () => setSection3Expanded(!section3Expanded);

  return (
    <Card className="w-96 border-2 border-gray-300 shadow-md p-4">
      {/* Section 1 */}
      <Button
        color={section1Expanded ? "white" : "white"}
        onClick={toggleSection1}
        className={`mt-0 rounded-none ${
          section1Expanded
            ? "border-b border-black transition-opacity duration-300 ease-in-out"
            : "border-b border-black"
        } hover:bg-gray-100`}
      >
        <Typography
          color={section1Expanded ? "black" : "black"}
          className="text-left uppercase font-semibold"
        >
          Lokasi
          <span className="float-right">
            {section1Expanded ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </Typography>
      </Button>
      {section1Expanded && (
        <CardBody className={`${section1Expanded ? "opacity-100" : "opacity-0"} transition-opacity`}>
          {/* Content for Section 1 */}
          <Typography className="text-sm text-gray-700">Content for Section 1 goes here.</Typography>
        </CardBody>
      )}

      {/* Section 2 */}
      <Button
        color={section2Expanded ? "white" : "white"}
        onClick={toggleSection2}
        className={`mt-2 rounded-none ${
          section2Expanded
            ? "border-b border-black transition-opacity duration-300 ease-in-out"
            : "border-b border-black"
        } hover:bg-gray-100`}
      >
        <Typography
          color={section2Expanded ? "black" : "black"}
          className="text-left uppercase font-semibold"
        >
          Kategori
          <span className="float-right">
            {section2Expanded ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </Typography>
      </Button>
      {section2Expanded && (
        <CardBody className={`${section2Expanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          {/* Content for Section 2 */}
          <Typography className="text-sm text-gray-700">Content for Section 2 goes here.</Typography>
        </CardBody>
      )}

      {/* Section 3 */}
      <Button
        color={section3Expanded ? "white" : "white"}
        onClick={toggleSection3}
        className={`mt-2 rounded-none ${
          section3Expanded
            ? "border-b border-black transition-opacity duration-300 ease-in-out"
            : "border-b border-black"
        } hover:bg-gray-100`}
      >
        <Typography
          color={section3Expanded ? "black" : "black"}
          className="text-left uppercase font-semibold"
        >
          Harga
          <span className="float-right">
            {section3Expanded ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </Typography>
      </Button>
      {section3Expanded && (
        <CardBody className={`${section3Expanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          {/* Content for Section 3 */}
          <Typography className="text-sm text-gray-700">Content for Section 3 goes here.</Typography>
        </CardBody>
      )}

      {/* Footer (optional) */}
      <CardFooter className="mt-4">
        <Button className="w-full bg-wpigreen-50">Apply Filters</Button>
      </CardFooter>
    </Card>
  );
}
