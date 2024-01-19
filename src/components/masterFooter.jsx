import React from 'react';
import image from '../../src/assets/logo-wpi.png';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6';
const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
];

const currentYear = new Date().getFullYear();

export default function MasterFooter() {
  return (
    <footer className="relative w-full pb-10  px-4 xl:px-0">
      <div className="logo flex items-center gap-4 pb-4">
        <img src={image} alt="logo" className="w-[40px] h-[40px]" />
        <p className="text-xl font-semibold">Warung Pangan Indonesia</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 ">
        <div className="flex flex-col lg:flex-row   lg:gap-8 gap-2 ">
          <p className="w-[60%]">
            GRAHA PPI, Jl. Abdul Muis No.8, Jakarta Pusat, DKI Jakarta, 10160,
            Indonesia <br /> warungpangan@ptppi.co.id
            <br />
            <strong> CS Warung Pangan Indonesia </strong>
            <br />
            (+62) 21 69066
          </p>

          <p>
          <strong className="text-black/80 "> Perusahaan </strong> <br />
            <a href="#" className="hover:underline">
              Beranda
            </a>{" "}
            <br />
            <a href="#" className="hover:underline">
              Tentang Perusahaan
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4  ">
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-2 ">
            <p>
              <strong className="text-black/80 text-nowrap">
                {' '}
                Warung Pangan Indonesia{' '}
              </strong>{' '}
              <br />
              <div className="flex flex-col  w-full">
                <a href="/produk" className="hover:underline">
                  Produk
                </a>
                <a href="/mitra" className="hover:underline">
                  Mitra Bisnis
                </a>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
                <a href="/tentang" className="hover:underline">
                  Tentang
                </a>
              </div>
            </p>

            <p>
              <strong className="text-black/80 justify-end ">
                Layanan Pengaduan Konsumen
              </strong>
              <br />
              Direktorat Jendral Perlindungan Konsumen dan Tertib Niaga
              Kementrian Perdagangan Republik Indonesia (+62) 853 11111
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-y-2 grid-cols-1 mt-5 ">
        <div className="flex items-center gap-4  px-2">
          <span className="text-xl text-white p-2 rounded-full bg-blue-500">
          <a
            href="https://wa.me/NOMOR_WHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            </a>
          </span>
          <span className="text-xl text-white p-2 rounded-full bg-blue-500">
          <a
            href="https://www.instagram.com/NAMA_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          </span>
          <span className="text-xl text-white p-2 rounded-full bg-blue-500">
          <a
            href="https://www.facebook.com/NAMA_FACEBOOK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          </span>
          <p className="font-semibold text-lg">Warung Pangan Indonesia</p>
        </div>
        <div className=" ">
          <p className="text-start ">
            © 2024 Powered By{' '}
            <strong> Warung Pangan Indonesia </strong> all rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}