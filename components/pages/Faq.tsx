"use client";

import Image from "next/image";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import AboutUs from "@/public/assets/about-slide2.jpg";
import SixthHero from "../ui/SixthHero";

export default function FAQ() {
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
          className="h-32  md:mx-auto md:h-48 lg:h-64 md:bg-cover md:bg-no-repeat md:w-screen"
        />
        <p className="text-white font-semibold absolute bottom-14 right-[40%] md:static md:text-center md:-mt-28">
          FAQ PAGE
        </p>
      </div>

      <div>
        <div className="pt-10 md:pt-32">
          <h2 className="text-center font-bold text-xl">
            MOST ASKED QUESTIONS
          </h2>
        </div>
        <div className="px-4 md:mx-auto md:w-2/3">
          <div className="pt-6">
            <h3 className="font-semibold">
              HOW DO YOU MANAGE TO TRAVEL THE WORLD?
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed ipsum labore quisquam, ab veniam quam nihil
              tenetur repellendus magni maiores, corrupti accusantium quo
              eveniet error? Facilis possimus laboriosam sit. Tempora, dolores
              odit nostrum placeat omnis atque. Odio recusandae id provident
              voluptates illum maxime eos esse rerum, itaque ipsam magnam
              aspernatur soluta fuga dicta nesciunt quos, impedit corporis error
              ab.
            </p>
          </div>

          <div className="pt-9">
            <h3 className="font-semibold">
              HOW DO YOU MANAGE TO TRAVEL THE WORLD?
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed ipsum labore quisquam, ab veniam quam nihil
              tenetur repellendus magni maiores, corrupti accusantium quo
              eveniet error? Facilis possimus laboriosam sit. Tempora, dolores
              odit nostrum placeat omnis atque. Odio recusandae id provident
              voluptates illum maxime eos esse rerum, itaque ipsam magnam
              aspernatur soluta fuga dicta nesciunt quos, impedit corporis error
              ab.
            </p>
          </div>

          <div className="pt-9">
            <h3 className="font-semibold">
              HOW DO YOU MANAGE TO TRAVEL THE WORLD?
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed ipsum labore quisquam, ab veniam quam nihil
              tenetur repellendus magni maiores, corrupti accusantium quo
              eveniet error? Facilis possimus laboriosam sit. Tempora, dolores
              odit nostrum placeat omnis atque. Odio recusandae id provident
              voluptates illum maxime eos esse rerum, itaque ipsam magnam
              aspernatur soluta fuga dicta nesciunt quos, impedit corporis error
              ab.
            </p>
          </div>

          <div className="pt-9">
            <h3 className="font-semibold">
              HOW DO YOU MANAGE TO TRAVEL THE WORLD?
            </h3>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed ipsum labore quisquam, ab veniam quam nihil
              tenetur repellendus magni maiores, corrupti accusantium quo
              eveniet error? Facilis possimus laboriosam sit. Tempora, dolores
              odit nostrum placeat omnis atque. Odio recusandae id provident
              voluptates illum maxime eos esse rerum, itaque ipsam magnam
              aspernatur soluta fuga dicta nesciunt quos, impedit corporis error
              ab.
            </p>
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
