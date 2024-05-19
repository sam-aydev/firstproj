"use client";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import Image from "next/image";
import BeachCategory from "@/public/assets/beach-category.png";
import desImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";
import serbiaImg from "@/public/assets/serbia-img.png";
import bookImg from "@/public/assets/h1-rev-slide-1.png";
import oneImg from "@/public/assets/secondslider.jpg";
import FirstHero from "../ui/Firsthero";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Baleares() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div className="pt-10 flex items-center flex-col space-y-14 md:grid md:grid-cols-3 md:place-items-center md:w-2/3 md:mx-auto">
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

      <div>
        <div className="mx-auto text-center w-2/3 pt-16">
          <h2>DESTINATIONS</h2>
          <p className="text-sm text-slate-400 pt-3">
            We are the Backpack Travele, your favourite assistants!
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

      <div className="pt-14">
        <div className="mx-auto text-center w-2/3">
          <h2>
            RECENT STORIES FROM{" "}
            <span className="text-red-600">DIFFERENT CITIES</span>
          </h2>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            ullam saepe dolores aliquid, illum, laudantium expedita minima
            voluptatum tenetur aut suscipit unde similique eum hic ab ex iste!
            Illum, eligendi. Consequuntur sapiente enim quos sit, cumque
            ducimus, labore magni eaque quis, possimus molestiae aspernatur
            quod. Officia aperiam blanditiis cum magnam, quo error perspiciatis
            accusantium possimus debitis saepe doloremque suscipit molestias?
          </p>
        </div>
      </div>

      <div className="pt-10">
        <div className="mx-auto w-2/3 border border-slate-600 pb-10">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Mazano ili Napoli
          </p>
          <p className="text-center mt-2 text-sm">BEAUTIFUL ITALY</p>
          <p className="text-[10px] text-slate-600 text-center mt-5">
            TRAVEL GUIDES
          </p>
        </div>

        <div className="mx-auto w-2/3 border border-slate-600 pb-10 mt-10">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Mazano ili Napoli
          </p>
          <p className="text-center mt-2 text-sm">BEAUTIFUL ITALY</p>
          <p className="text-[10px] text-slate-600 text-center mt-5">
            TRAVEL GUIDES
          </p>
        </div>

        <div className="mx-auto w-2/3  pt-10">
          <div className="border-[0.5px] border-slate-500 p-4">
            <div className="border-b border-b-slate-600 pb-6">
              <h2 className="font-semibold">46 AMAZING TRAVEL PICTURES</h2>
              <p className="text-xs mt-3">VACATION</p>
            </div>

            <div className="border-b border-b-slate-600 pb-6 pt-7">
              <h2 className="font-semibold">46 AMAZING TRAVEL PICTURES</h2>
              <p className="text-xs mt-3">VACATION</p>
            </div>

            <div className="border-b border-b-slate-600 pb-6 pt-7">
              <h2 className="font-semibold">46 AMAZING TRAVEL PICTURES</h2>
              <p className="text-xs mt-3">VACATION</p>
            </div>

            <div className=" pt-7">
              <h2 className="font-semibold">46 AMAZING TRAVEL PICTURES</h2>
              <p className="text-xs mt-3">VACATION</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 px-3 md:mx-auto md:w-2/3">
        <h2>TRAVEL AROUND THE WORLD IN 10 DAYS</h2>
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
