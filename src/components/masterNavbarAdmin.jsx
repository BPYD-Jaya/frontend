import { Avatar, Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaBars } from "react-icons/fa6";

export default function MasterNavbarAdmin({ setOpenSidebar, openSidebar }) {
export default function MasterNavbarAdmin({ setOpenSidebar, openSidebar }) {
  return (
    <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex justify-between items-center px-8 h-[80px] shadow-sm gap-4">
      {/* TODO: Ganti Icon */}
      <div onClick={() => setOpenSidebar(!openSidebar)} className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className="flex justify-end items-center  shadow-sm gap-4">
        <Typography className="text-white">Hallo Admin</Typography>
        <Avatar
          size="sm"
          variant="circular"
          alt="natali craig"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          className="border-2 border-white hover:z-10"
        />
      </div>
    </div>
  );
}