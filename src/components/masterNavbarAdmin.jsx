import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";

export default function MasterNavbarAdmin() {
  return (
    <div className="bg-gradient-to-t from-wpigreen-50 to-wpiblue-50 flex justify-end items-center px-8 h-[80px] shadow-sm gap-4">
      <Typography className="text-white">Hallo Admin</Typography>
      <Avatar
        size="sm"
        variant="circular"
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
        className="border-2 border-white hover:z-10"
      />
    </div>
  );
}
