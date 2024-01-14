import React from 'react';
import { Carousel } from '@material-tailwind/react';

export default function MasterCarousel() {
  return (
    <Carousel className="rounded-xl container mx-auto">
      <img
        src="https://warungpangan.com/upload/img/4cfac618d0f105bf3132f150a3785d71.jpg"
        alt="image1"
        className="h-full w-full "
      />
      <img
        src="https://warungpangan.com/upload/img/b3e597b4952d4d5077f5d6adc9c0759c.jpg"
        alt="image2"
        className="h-full w-full "
      />
      <img
        src="https://warungpangan.com/upload/img/62dabc16065791e072ad833d429ba0af.jpg"
        alt="image3"
        className="h-full w-full "
      />
    </Carousel>
  );
}
