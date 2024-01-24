import { Button } from '@material-tailwind/react';
import React from 'react';

export default function MasterButtonWa() {
  return (
    <Button
      type="button"
      className="ml-0 mb-[-10px] mt-4 bg-gradient-to-r from-wpigreen-100 to-wpigreen-200 text-white font-bold py-2 px-4 h-10 w-full rounded-md"
    >
      <div className="flex justify-center items-center gap-3">
        <img alt="" src="./assets/whatsapp.png" className="h-6"/>
        Hubungi Kami
      </div>
    </Button>
  );
};
