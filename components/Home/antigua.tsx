"use client";

import bookImg from "@/public/assets/h1-rev-slide-1.png";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import Image from "next/image";
import locImg from "@/public/assets/h5-post-5-768x512.jpg";

export default function Angtigua() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <div>
          <h2 className="text-center ">WHERE TO NEXT?</h2>
          <p className="pt-3 text-center mx-auto w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugit.
          </p>
        </div>

        <div className="pt-8">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-medium  text-center w-2/3 mx-auto">
            THE 10 BEST TRAVEL ACCESSORIES TO BUY
          </p>
        </div>

        <div className="pt-8">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-medium  text-center w-2/3 mx-auto">
            THE 10 BEST TRAVEL ACCESSORIES TO BUY
          </p>
        </div>

        <div className="pt-8">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-medium  text-center w-2/3 mx-auto">
            THE 10 BEST TRAVEL ACCESSORIES TO BUY
          </p>
        </div>

        <div className="pt-8">
          <Image
            src={locImg}
            width={500}
            height={500}
            alt="loc_img"
            className="size-2/3 mx-auto"
          />
          <p className="pt-3 font-medium  text-center w-2/3 mx-auto">
            THE 10 BEST TRAVEL ACCESSORIES TO BUY
          </p>
        </div>
      </div>

      <div>
        <div className="pt-16">
          <div className="bg-yellow-100  py-16">
            <h2 className="pt-10 text-center text-xl">OUR TRAVEL GUIDES</h2>
            <p className="mx-auto w-2/3 text-center pt-6">
              Read about your favourite travel destination and our adventures
            </p>
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
