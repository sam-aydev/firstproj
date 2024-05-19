import Image from "next/image";
import FooterMap from "@/public/assets/footer-map-img.png";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function SixthHero() {
  return (
    <div>
      <div className="pt-20">
        <div>
          <p className="text-center">OUR SPONSORS</p>
        </div>
      </div>

      <div className="pt-16">
        <div className="mx-auto w-2/3">
          <p className="text-center pb-6 text-[10px]">
            ------------WHERE ARE WE NOW---------------
          </p>
          <Image
            src={FooterMap}
            alt="map"
            width={700}
            height={400}
            className="w-full h-36 md:w-2/3 md:mx-auto"
          />
        </div>
      </div>

      <div className="pt-16">
        <div className="flex justify-center">
          <p className="-mt-[10px]">________</p>
          <p className="text-sm">FOLLOW US</p>
          <p className="-mt-[10px]">________</p>
        </div>
      </div>

      <div>
        <div className="flex justify-center space-x-10 pt-10 md:space-x-20">
          <div className="flex flex-col justify-center items-center">
            <FaFacebook className="size-7" />
            <p className="text-[9px] mt-1 ">FACEBOOK</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaPinterest className="size-7" />
            <p className="text-[9px] mt-1 ">PINTEREST</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaTwitter className="size-7" />
            <p className="text-[9px] mt-1 ">TWITTER</p>
          </div>
        </div>

        <div className="flex justify-center space-x-10 pt-10 md:space-x-20">
          <div className="flex flex-col justify-center items-center">
            <FaFacebook className="size-7" />
            <p className="text-[9px] mt-1 ">FACEBOOK</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaPinterest className="size-7" />
            <p className="text-[9px] mt-1 ">PINTEREST</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaTwitter className="size-7" />
            <p className="text-[9px] mt-1 ">TWITTER</p>
          </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex justify-center">
          <p className="-mt-[10px]">_______</p>
          <p className="text-sm">NEWSLETTER</p>
          <p className="-mt-[10px]">_______</p>
        </div>

        <div className="flex justify-center space-y-4 flex-col w-1/2 mx-auto pt-16 md:w-1/3 md:mx-auto">
          <input
            type="text"
            className="p-3 rounded italic border border-black text-sm"
            placeholder="Email Address"
          />
          <button className="bg-black text-white p-2 ">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}
