import React, { useState } from "react";
import { Select, Option, Input } from "@material-tailwind/react";
import { Slider } from "@material-tailwind/react";
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
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
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
        <AccordionBody className="full-height">
          <div className="flex w full flex-col gap-6 relative">
            <div>
              <Select size="lg" label="Pilih Provinsi" className="full-height-select z-100" menuIsOpen={true}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div>
              <Select size="lg" label="Pilih Kabupaten/Kota" className="full-height-select z-100" menuIsOpen={true}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
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
            <List>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-react"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-react"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Batubara
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-vue"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-vue"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Horticultural
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Agriculture
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Aquaculture
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Mineral
                  </Typography>
                </label>
              </ListItem>
            </List>
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
          <div className="w-full mb-10">
            <Input label="Terendah" />
            <Slider defaultValue={50} />
          </div>
          <div className="w-full">
            <Input label="Tertinggi" />
            <Slider defaultValue={50} />
          </div>
        </AccordionBody>
      </Accordion>

      {/* Footer (optional) */}
      <CardFooter className="mt-2">
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
