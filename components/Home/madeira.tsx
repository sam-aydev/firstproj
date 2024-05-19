"use client";

import Image from "next/image";
import FirstHero from "../ui/Firsthero";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import CenterImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import bookImg from "@/public/assets/h1-rev-slide-1.png";
import firstImg from "@/public/assets/firstslider.jpg";

export default function Madeira() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="pt-10 px-8 w-full mx-auto md:pt-36">
        <div className="relative -z-50">
          <Image
            src={CenterImg}
            width={600}
            height={600}
            alt="img"
            className="size-64 rounded-full mx-auto border-2 border-black p-4 border-dashed"
          />

          <div>
            <Image
              src={CenterImg}
              width={600}
              height={600}
              alt="img"
              className="size-14 rounded-full absolute top-0 left-1/3 md:left-1/2 animate-bounce "
            />
          </div>
          <div>
            <Image
              src={CenterImg}
              width={600}
              height={600}
              alt="img"
              className="size-14 rounded-full absolute -bottom-6 right-1/3 md:right-1/2 animate-bounce"
            />
          </div>
        </div>
      </div>

      <div>
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
            Iincidunt, corrupti eaque ullam exercitationem eveniet maxime
            ducimus! Dignissimos vitae porro aliquid pariatur quidem, sequi
            ratione placeat minus.
          </p>

          <p className="italic font-semibold text-xl pt-10">Melissa Johnson</p>
        </div>
      </div>

      <div className="pt-28">
        <div className="pb-4 mx-auto w-2/3 border border-slate-400 ">
          <Image
            src={firstImg}
            alt="img"
            width={800}
            height={100}
            className="w-full h-80 mx-auto"
          />
          <p
            className="text-center font-semibold
          italic text-xl pt-8"
          >
            zlatiboa
          </p>
          <p className="font-medium pt-4 w-1/2 mx-auto text-center text-sm">
            THE TOP 10 SLOVENIA HALF-DAY BEST TOURS
          </p>
          <p className="text-[10px] text-slate-400 text-center pt-4">INSPIRE</p>
        </div>

        <div className="pb-4 mx-auto w-2/3 border border-slate-400 mt-8">
          <Image
            src={firstImg}
            alt="img"
            width={800}
            height={100}
            className="w-full h-80 mx-auto"
          />
          <p
            className="text-center font-semibold
          italic text-xl pt-8"
          >
            zlatiboa
          </p>
          <p className="font-medium pt-4 w-1/2 mx-auto text-center text-sm">
            THE TOP 10 SLOVENIA HALF-DAY BEST TOURS
          </p>
          <p className="text-[10px] text-slate-400 text-center pt-4">INSPIRE</p>
        </div>

        <div className="pb-4 mx-auto w-2/3 border border-slate-400 mt-8">
          <Image
            src={firstImg}
            alt="img"
            width={800}
            height={100}
            className="w-full h-80 mx-auto"
          />
          <p
            className="text-center font-semibold
          italic text-xl pt-8"
          >
            zlatiboa
          </p>
          <p className="font-medium pt-4 w-1/2 mx-auto text-center text-sm">
            THE TOP 10 SLOVENIA HALF-DAY BEST TOURS
          </p>
          <p className="text-[10px] text-slate-400 text-center pt-4">INSPIRE</p>
        </div>
      </div>

      <div>
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
      </div>

      <div>
        <FirstHero />
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
