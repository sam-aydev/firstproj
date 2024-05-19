"use client";

import Image from "next/image";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";
import AboutUs from "@/public/assets/about-slide2.jpg";
import BeachCategory from "@/public/assets/beach-category.png";
import bookImg from "@/public/assets/h1-rev-slide-1.png";

export default function Categories() {
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
          CATEGORIES
        </p>
      </div>

      <div>
        <div>
          <div className="mt-28 flex items-center flex-col space-y-14 md:grid md:grid-cols-3 md:place-items-center md:w-2/3 md:mx-auto">
            <div className="md:mt-14">
              <Image
                src={BeachCategory}
                width={500}
                height={500}
                alt="beach"
                className="size-28"
              />
              <p>BEACHES</p>
              <p className="text-[9px]">4 DESTINATIONS</p>
            </div>

            <div>
              <Image
                src={BeachCategory}
                width={500}
                height={500}
                alt="beach"
                className="size-28"
              />
              <p>BEACHES</p>
              <p className="text-[9px]">4 DESTINATIONS</p>
            </div>

            <div>
              <Image
                src={BeachCategory}
                width={500}
                height={500}
                alt="beach"
                className="size-28"
              />
              <p>BEACHES</p>
              <p className="text-[9px]">4 DESTINATIONS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="bg-yellow-100  py-16">
          <h2 className="pt-10 text-center text-xl">MY TRAVEL GUIDES</h2>
          <p className="mx-auto w-2/3 text-center pt-6">
            We are that BackPacker, Melissa and Jonathan(that's us!)
          </p>
          <div>
            <div className="pt-10">
              <Image
                src={bookImg}
                alt="img_book"
                width={400}
                height={600}
                className="size-1/2 mx-auto "
              />
            </div>

            <div className="pt-10">
              <Image
                src={bookImg}
                alt="img_book"
                width={400}
                height={600}
                className="size-1/2 mx-auto "
              />
            </div>

            <div className="pt-10">
              <Image
                src={bookImg}
                alt="img_book"
                width={400}
                height={600}
                className="size-1/2 mx-auto "
              />
            </div>

            <div className="pt-10">
              <Image
                src={bookImg}
                alt="img_book"
                width={400}
                height={600}
                className="size-1/2 mx-auto "
              />
            </div>

            <div className="pt-10">
              <Image
                src={bookImg}
                alt="img_book"
                width={400}
                height={600}
                className="size-1/2 mx-auto "
              />
            </div>
          </div>
        </div>
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
