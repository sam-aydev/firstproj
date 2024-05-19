"use client";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import HeaderImg from "@/public/assets/about-slide2.jpg";
import SubImg from "@/public/assets/about-slide1.jpg";
import { FaQuoteRight } from "react-icons/fa6";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import FirstHero from "../ui/Firsthero";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";

export default function WhoAre() {
  return (
    <div>
      <NavBar />
      <Image
        src={HeaderImg}
        width={700}
        height={200}
        alt="banner_img"
        className="w-3/4 h-48 mx-auto rounded-md md:w-2/3 md:h-56 lg:w-1/2 lg:h-80"
      />
      <div className="pt-10 px-4 md:w-2/3 md:mx-auto lg:w-1/2">
        <h2 className="font-medium ">WHO's HANNAH?</h2>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          perferendis ut, alias nisi ducimus itaque officiis corrupti! Quod
          magni nam fuga accusantium non ut praesentium nobis, quisquam
          repudiandae quia! Consectetur. Deleniti illo quos qui veritatis
          excepturi sint molestiae reiciendis, laborum dolorum atque ullam eos
          deserunt omnis vel commodi natus, doloribus quae! Similique rerum
          praesentium nemo repudiandae nobis saepe in dolor.
        </p>
      </div>

      <div className="pt-14 px-4 md:w-2/3 md:mx-auto lg:w-1/2">
        <h2 className="font-medium ">WHERE TO TRAVEL?</h2>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          perferendis ut, alias nisi ducimus itaque officiis corrupti! Quod
          magni nam fuga accusantium non ut praesentium nobis, quisquam
          repudiandae quia! Consectetur.
        </p>
      </div>

      <div className="pt-14 px-4 md:w-2/3 md:mx-auto lg:w-1/2">
        <h2 className="font-medium ">POPULAR TOURS</h2>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          perferendis ut, alias nisi ducimus itaque officiis corrupti! Quod
          magni nam fuga accusantium non ut praesentium nobis, quisquam
          repudiandae quia! Consectetur.
        </p>
      </div>

      <div className="pt-14 md:w-2/3 md:mx-auto lg:w-1/2">
        <div className="mx-auto w-1/2 p-4 border border-black border-dashed">
          <FaQuoteRight className="size-14" />
          <p className="italic font-semibold mt-4">
            We eceived more likes and followers on instagram after our
            collaboration and noticed that many other popular pages have shared
            your photos.
          </p>
          <p className="text-[9px] mt-4">DANIEL SMITH</p>
        </div>
      </div>

      <div className="pt-32 px-3 md:mx-auto md:w-2/3">
        <h2>AROUND THE WORLD IN 10 DAYS</h2>
        <p className="mt-6 md:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          suscipit, asperiores obcaecati delectus nam quia inventore enim saepe
          quidem quo similique autem veritatis. Consequuntur aliquid rem nam
          libero, recusandae magnam. Dolorum laborum amet optio repellendus
          consectetur maxime doloribus dolorem cupiditate nesciunt cum
        </p>
        <p className="mt-6 text-sm">
          consequuntur iusto porro quia ipsam, sed asperiores tenetur impedit!
          Aspernatur nemo id asperiores ipsa blanditiis! Eaque, iure quo?
        </p>
        <div className="flex space-x-4 pt-10">
          <FaFacebook className="size-7" />
          <FaPinterest className="size-7" />
          <FaTwitter className="size-7" />
        </div>
      </div>

      <div className="md:w-2/3 md:mx-auto lg:w-1/2">
        <div>
          <Image
            src={SubImg}
            width={700}
            height={200}
            alt="banner_img"
            className="w-3/4 h-48 mx-auto mt-4"
          />
        </div>
        <Image
          src={HeaderImg}
          width={700}
          height={200}
          alt="banner_img"
          className="size-44 mx-auto rounded -mt-16"
        />
      </div>
      <div className="pt-8">
        <FirstHero />
      </div>
      <div className="pt-10">
        <SixthHero />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
