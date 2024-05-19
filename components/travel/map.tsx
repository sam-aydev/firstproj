"use client";

import Image from "next/image";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import AboutUs from "@/public/assets/about-slide2.jpg";

export default function Map() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="relative -z-50 md:static">
        <Image
          src={AboutUs}
          width={600}
          height={100}
          alt="about"
          className="h-32 md:mx-auto md:h-48  md:bg-cover md:bg-no-repeat md:w-screen"
        />
        <p className="text-white text-xl font-semibold -mt-20 md:static text-center md:-mt-28">
          MAP WITH DESTINATION
        </p>
      </div>

      <div>
        <SixthHero />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
