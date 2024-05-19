"use client";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import AboutUs from "@/public/assets/about-slide2.jpg";
import FormHero from "../ui/FormHero";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";

export default function AboutPage() {
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
          className="h-32  md:h-48  md:bg-cover md:bg-no-repeat md:w-screen"
        />
        <p className="text-white font-semibold absolute bottom-14 right-[40%] md:static md:text-center md:-mt-28">
          ABOUT US
        </p>
      </div>

      <div className="pt-10 px-8 md:pt-24 md:mx-auto md:w-2/3">
        <h2 className="text-xl w-1/2">Hi! I'M MELISSA:) LET'S GO TRAVEL</h2>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem error corporis voluptatibus expedita facilis et non,
          voluptates sapiente laudantium saepe fuga distinctio reprehenderit,
          ullam culpa nostrum nesciunt alias facere asperiores! Fuga possimus
          corporis iure, minima dolores modi voluptates numquam laboriosam
          voluptatum qui.
        </p>
        <p className="pt-4">
          Iincidunt, corrupti eaque ullam exercitationem eveniet maxime ducimus!
          Dignissimos vitae porro aliquid pariatur quidem, sequi ratione placeat
          minus.
        </p>
      </div>

      <div>
        <FormHero />
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
