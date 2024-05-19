"use client";
import Image from "next/image";
import FirstHero from "../ui/Firsthero";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import CenterImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import serbiaImg from "@/public/assets/serbia-img.png";
import locImg from "@/public/assets/h5-post-5-768x512.jpg";
import desImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import FormHero from "../ui/FormHero";

export default function Andalusia() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div className="px-4 pt-10 w-4/5">
          <h2 className=" text-xl">THE TOP 4 DAY TRIPS </h2>
          <p className="text-sm pt-7">
            We are Backpack Traveler, Mellisa and Jonathan(That's us!)
          </p>
          <p className="text-sm pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            expedita dolor recusandae quo minima porro quasi, placeat possimus
            repellendus magnam facilis quisquam dolore ipsam explicabo ex nemo.
            Voluptatum, maiores id! Consequatur, quod fugiat odio veniam ea
            cupiditate illum mollitia impedit ut pariatur cumque atque aut nobis
            soluta, culpa maiores eos vel magni, quo natus? Eveniet maiores
            ducimus hic inventore maxime?
          </p>
        </div>
      </div>

      <div>
        <div className="pt-14">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-semibold  w-2/3 mx-auto">
            A WEEKEND GUIDE TO AUSTRIA
          </p>
          <p className="text-[10px]  w-2/3 mx-auto pt-2 text-slate-400">
            TOURSIST TOURS
          </p>
        </div>

        <div className="pt-14">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-semibold  w-2/3 mx-auto">
            A WEEKEND GUIDE TO AUSTRIA
          </p>
          <p className="text-[10px]  w-2/3 mx-auto pt-2 text-slate-400">
            TOURSIST TOURS
          </p>
        </div>

        <div className="pt-14">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-semibold  w-2/3 mx-auto">
            A WEEKEND GUIDE TO AUSTRIA
          </p>
          <p className="text-[10px]  w-2/3 mx-auto pt-2 text-slate-400">
            TOURSIST TOURS
          </p>
        </div>
      </div>

      <div></div>

      <div>
        <FormHero />
      </div>

      <div className="md:grid md:grid-cols-2 md:pt-16 lg:mx-auto lg:w-2/3">
        <div className="pt-16 md:pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="w-2/3 mx-auto border border-slate-600">
            <Image
              src={desImg}
              width={400}
              height={400}
              alt="imf"
              className="w-full h-64"
            />
            <Image
              src={serbiaImg}
              width={400}
              height={400}
              alt="imf"
              className="size-2/3 mx-auto pt-6"
            />
            <div className="text-center pb-8">
              <h3 className="text-xl font-semibold italic pt-5">Spain</h3>
              <p className="pt-2">FISHING / OVERNIGHT</p>
              <button className="mt-7 px-4 py-2 bg-black text-white">
                EXPLORE{" "}
              </button>
            </div>
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

      <div>
        <div className="pt-10 px-8 w-full mx-auto md:pt-36 pb-28">
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
