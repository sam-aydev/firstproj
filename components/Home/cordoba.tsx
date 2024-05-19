"use client";

import Image from "next/image";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import desImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";

export default function Cordoba() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div className="mx-auto w-2/3 pt-16">
          <h2 className="text-xl font-semibold text-center">
            Hi! I'm MELISSA:)
          </h2>
          <p className="text-center text-xs pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            veritatis! Tempore iste vel harum quos voluptatem expedita at omnis
            quidem. Reprehenderit alias aperiam tempore animi mollitia suscipit
            hic, nobis nam.
          </p>
          <p className="text-center italic font-medium pt-8">Melissa Johnson</p>
        </div>
      </div>

      <div className="pt-28 ">
        <div className="relative -z-50">
          <Image
            src={desImg}
            width={1000}
            height={400}
            alt="img"
            className="h-96"
          />
          <div className="absolute bottom-10 text-white font-semibold left-5">
            <h2>FAMILY & FRIENDS TRAVEL GUIDE</h2>
            <p className="text-xs">LIFESTYLE</p>
          </div>
        </div>

        <div className="relative -z-50 mt-2">
          <Image
            src={desImg}
            width={1000}
            height={400}
            alt="img"
            className="h-96"
          />
          <div className="absolute bottom-10 text-white font-semibold left-5">
            <h2>FAMILY & FRIENDS TRAVEL GUIDE</h2>
            <p className="text-xs">LIFESTYLE</p>
          </div>
        </div>

        <div className="relative -z-50 mt-2 ">
          <Image
            src={desImg}
            width={1000}
            height={400}
            alt="img"
            className="h-96"
          />
          <div className="absolute bottom-10 text-white font-semibold left-5">
            <h2>FAMILY & FRIENDS TRAVEL GUIDE</h2>
            <p className="text-xs">LIFESTYLE</p>
          </div>
        </div>

        <div className="relative -z-50 mt-2">
          <Image
            src={desImg}
            width={1000}
            height={400}
            alt="img"
            className="h-96"
          />
          <div className="absolute bottom-10 text-white font-semibold left-5">
            <h2>FAMILY & FRIENDS TRAVEL GUIDE</h2>
            <p className="text-xs">LIFESTYLE</p>
          </div>
        </div>

        <div className="relative -z-50 mt-2">
          <Image
            src={desImg}
            width={1000}
            height={400}
            alt="img"
            className="h-96"
          />
          <div className="absolute bottom-10 text-white font-semibold left-5">
            <h2>FAMILY & FRIENDS TRAVEL GUIDE</h2>
            <p className="text-xs">LIFESTYLE</p>
          </div>
        </div>
      </div>

      <div className="-mt-24">
        <Footer />
      </div>
    </div>
  );
}
