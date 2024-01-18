import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardFooter,
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Slider,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

export default function MasterFilterCard() {
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);
  const [provinsi, setProvinsi] = useState('Pilih Provinsi');
  const [kota, setKota] = useState('Pilih Kabupaten/Kota');

  const provinsiData = [
    {
      nama: 'Kalimantan Barat',
      kota: ['Pontianak', 'Singkawang'],
    },
    {
      nama: 'Jawa Barat',
      kota: ['Bandung', 'Bogor', 'Depok'],
    },
    {
      nama: 'Jawa Tengah',
      kota: ['Semarang', 'Solo', 'Surakarta'],
    },
  ];

  const handleProvinsiChange = (e) => {
    const selectedProvinsi = e.target.value;
    setProvinsi(selectedProvinsi);
    // Cari kota yang sesuai dengan provinsi yang dipilih
    const selectedProvinsiData = provinsiData.find(
      (provinsi) => provinsi.nama === selectedProvinsi
    );
    if (selectedProvinsiData) {
      // Set kota pertama dari provinsi yang dipilih
      setKota(selectedProvinsiData.kota[0]);
    } else {
      setKota('Pilih Kabupaten/Kota');
    }
  };

  const handleKotaChange = (e) => {
    setKota(e.target.value);
  };

  const [terendah, setTerendah] = useState(0);
  const [tertinggi, setTertinggi] = useState(0);

  const toggleSection1 = () => setSection1Expanded(!section1Expanded);
  const toggleSection2 = () => setSection2Expanded(!section2Expanded);
  const toggleSection3 = () => setSection3Expanded(!section3Expanded);

  const onTerendah = (e) => {
    const value = e.target.value;
    setTerendah(Math.floor(Number(value)));
  };

  const onTertinggi = (e) => {
    const value = e.target.value;
    setTertinggi(Math.floor(Number(value)));
  };

  return (
    <Card className=" filters xl:w-96 w-full border-2 border-gray-300 shadow-md p-4">
      {/* Section 1 */}
      <Accordion
        className=""
        open={section1Expanded}
        icon={<AccordionIcon open={section1Expanded} />}
      >
        <AccordionHeader onClick={toggleSection1}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section1Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Lokasi
          </Typography>
        </AccordionHeader>
        <AccordionBody className="w-full">
            <div className="flex w-full h-full flex-col gap-6 relative">
              <div className="relative">
                <select
                  name="provinsi"
                  className="w-full py-3 rounded-md border-[1px] border-black/25 px-2 appearance-none "
                  id="provinsi"
                  value={provinsi}
                  onChange={handleProvinsiChange}
                >
                  <option disabled>Pilih Provinsi</option>
                  {provinsiData.map((provinsiItem) => (
                    <option key={provinsiItem.nama} value={provinsiItem.nama}>
                      {provinsiItem.nama}
                    </option>
                  ))}
                </select>
                <span className="absolute top-[1.1rem] right-2">
                  <FaAngleDown />
                </span>
              </div>
              <div className="relative">
                <select
                  name="kota"
                  className="w-full py-3 rounded-md border-[1px] border-black/25 px-2 appearance-none "
                  id="kota"
                  value={kota}
                  onChange={handleKotaChange}
                >
                  <option disabled>Pilih Kabupaten/Kota</option>
                  {provinsiData
                    .find((provinsiItem) => provinsiItem.nama === provinsi)
                    ?.kota.map((kotaItem) => (
                      <option key={kotaItem} value={kotaItem}>
                        {kotaItem}
                      </option>
                    ))}
                </select>
                <span className="absolute top-[1.1rem] right-2">
                  <FaAngleDown />
                </span>
              </div>
            </div>
          </AccordionBody>
      </Accordion>

      {/* Section 2 */}
      <Accordion
        open={section2Expanded}
        icon={<AccordionIcon open={section2Expanded} />}
      >
        <AccordionHeader onClick={toggleSection2}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section2Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Kategori
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <List>
          <ListItem className="p-0">
              <label
                htmlFor="vertical-list-mineral"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-mineral"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Mineral
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-batubara"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-batubara"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Batubara
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-horticultural"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-horticultural"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Horticultural
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-agriculture"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-agriculture"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Agriculture
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-aquaculture"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-aquaculture"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Aquaculture
                </Typography>
              </label>
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>

      {/* Section 3 */}
      <Accordion
        open={section3Expanded}
        icon={<AccordionIcon open={section3Expanded} />}
      >
        <AccordionHeader onClick={toggleSection3}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section3Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Harga
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          {/* Tertinggi */}
          <div className="w-full mb-10 flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-black">
              Tertinggi
            </label>
            <Input value={`Rp. ${tertinggi.toLocaleString()}`} />
            <span className="px-1">
              <Slider
                defaultValue={0}
                value={tertinggi}
                onChange={onTertinggi}
                max={100000000}
                step={100000}
              />
            </span>
          </div>

          {/* Terendah */}
          <div className="w-full mb-10 flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-black">
              Terendah
            </label>
            <Input value={`Rp. ${terendah.toLocaleString()}`} />
            <span className="px-1">
              <Slider
                defaultValue={0}
                value={terendah}
                onChange={onTerendah}
                max={100000000}
                step={100000}
              />
            </span>
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
    className={`h-5 w-5 transform ${
      open ? 'rotate-180' : ''
    } transition-transform`}
  />
);