"use client";

import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import serbiaImg from "@/public/assets/serbia-img.png";
import Image from "next/image";
import desImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import CenterImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";

export default function Sircausa() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="pt-16">
        <div className="text-center mx-auto w-2/3 ">
          <h2 className="text-xl ">BEST PLACES TO VISIT?</h2>
          <p className="text-sm mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem
            dolorum ab quaerat quos nostrum quo impedit minus consectetur error.
            Sunt minus harum dolorum alias est, enim autem deleniti at!
            Cupiditate asperiores.
          </p>
        </div>
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
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
              <button className="mt-7 px-4 py-2 text-black border border-black bg-white hover:bg-black hover:text-white">
                EXPLORE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto w-2/3 pt-20 text-center">
          <button className="px-4 py-2  text-white bg-black">LOAD MORE</button>
        </div>

        <div className="pt-28 px-8 w-full mx-auto md:pt-36">
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
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
