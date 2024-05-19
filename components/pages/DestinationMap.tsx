"use client";
import Image from "next/image";
import desImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import serbiaImg from "@/public/assets/serbia-img.png";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";

export default function DestinationMap() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="pt-10">
        <h2 className="text-xl text-center">Find Your Dream Destination</h2>
        <p className="text-center mt-4 mx-auto  w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et,
          explicabo vero, adipisci unde voluptatibus.
        </p>
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
        <SixthHero />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
