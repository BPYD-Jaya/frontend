import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
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
      <Accordion open={section1Expanded} icon={<AccordionIcon open={section1Expanded} />}>
        <AccordionHeader onClick={toggleSection1}>
          <Typography
            color={section1Expanded ? "green" : "black"}
            className="text-left uppercase font-semibold"
          >
            Lokasi
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography className="text-sm text-gray-700">Content for Section 1 goes here.</Typography>
        </AccordionBody>
      </Accordion>

      {/* Section 2 */}
      <Accordion open={section2Expanded} icon={<AccordionIcon open={section2Expanded} />}>
        <AccordionHeader onClick={toggleSection2}>
          <Typography
            color={section2Expanded ? "green" : "black"}
            className="text-left uppercase font-semibold"
          >
            Kategori
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography className="text-sm text-gray-700">Content for Section 2 goes here.</Typography>
        </AccordionBody>
      </Accordion>

      {/* Section 3 */}
      <Accordion open={section3Expanded} icon={<AccordionIcon open={section3Expanded} />}>
        <AccordionHeader onClick={toggleSection3}>
          <Typography
            color={section3Expanded ? "green" : "black"}
            className="text-left uppercase font-semibold"
          >
            Harga
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <Typography className="text-sm text-gray-700">Content for Section 3 goes here.</Typography>
        </AccordionBody>
      </Accordion>

      {/* Footer (optional) */}
      <CardFooter className="mt-4">
        <Button className="w-full bg-wpigreen-50">Tampilkan</Button>
      </CardFooter>
    </Card>
  );
}

// Component for Accordion Icon
const AccordionIcon = ({ open }) => (
  <FaAngleDown
    className={`h-5 w-5 transform ${open ? "rotate-180" : ""} transition-transform`}
  />
);
