import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function MasterNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = [
    { path: "/", label: "Beranda" },
    { path: "/produk", label: "Produk" },
    { path: "/mitra", label: "Mitra Bisnis" },
    { path: "/news", label: "Blog" },
    { path: "#", label: "Tentang" },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 w-full bg-wpiblue-50">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            className="py-1.5 font-bold"
            variant="h5"
          >
            Warung Pangan Indonesia
          </Typography>
          <div className="flex items-center gap-4">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
              {navList.map((item, index) => (
                <Typography
                  key={index}
                  as="li"
                  variant="medium"
                  color="blue-gray"
                  className={`p-1 font-normal ${
                    window.location.pathname === item.path ? "font-bold" : ""
                  }`}
                >
                  <a href={item.path} className="flex items-center text-white">
                    {item.label}
                  </a>
                </Typography>
              ))}
            </ul>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <ul className="flex flex-col">{navList.map((item, index) => (
            <Typography
              key={index}
              as="li"
              variant="medium"
              color="blue-gray"
              className={`p-1 font-normal ${
                window.location.pathname === item.path ? "font-bold" : ""
              }`}
            >
              <a href={item.path} className="flex items-center text-white">
                {item.label}
              </a>
            </Typography>
          ))}
          </ul>
        </MobileNav>
      </div>
    </div>
  );
}
