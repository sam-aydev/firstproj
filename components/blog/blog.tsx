"use client";

import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SixthHero from "../ui/SixthHero";
import Image from "next/image";
import oneImg from "@/public/assets/secondslider.jpg";
import AboutUs from "@/public/assets/about-slide2.jpg";

export default function Blog() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="w-3/4 mx-auto">
        <div className=" text-center pb-5 border border-slate-600">
          <div className="">
            <Image
              src={AboutUs}
              alt="about"
              width={600}
              height={600}
              className="w-full h-60"
            />
          </div>
          <div className="px-4">
            <h2 className="text-xl font-bold italic pt-5">India</h2>
            <p className="pt-3">7 PERFECT DAY TRIPS</p>
            <p className="pt-3 text-xs text-slate-600">WORLD</p>
            <p className="text-sm pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              quia modi! Accusamus beatae error at exercitationem. Accusantium,
              fugit quam placeat cupiditate error nam reprehenderit voluptas
              magni officia eius tempore esse. Dolorem consequuntur aut nostrum,
              facere adipisci rerum dolorum officiis. Quasi perferendis dolorem
              modi error odit! Quod, ad, veritatis eveniet aperiam porro dolorem
              officiis facere aut velit sint vitae nihil ab!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto w-2/3 border border-slate-600 pb-10 mt-9">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Serbia
          </p>
          <p className="text-center mt-2 text-sm w-2/3 font-medium mx-auto ">
            OUR TOP TWELVE NATURE SIGHTS IN SERBIA.
          </p>
          <p className="text-[10px] text-slate-600 text-center mt-2">
            VACATION
          </p>
        </div>

        <div className="mx-auto w-2/3 border border-slate-600 pb-10 mt-9">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Serbia
          </p>
          <p className="text-center mt-2 text-sm w-2/3 font-medium mx-auto ">
            OUR TOP TWELVE NATURE SIGHTS IN SERBIA.
          </p>
          <p className="text-[10px] text-slate-600 text-center mt-2">
            VACATION
          </p>
        </div>

        <div className="mx-auto w-2/3 border border-slate-600 pb-10 mt-9">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Serbia
          </p>
          <p className="text-center mt-2 text-sm w-2/3 font-medium mx-auto ">
            OUR TOP TWELVE NATURE SIGHTS IN SERBIA.
          </p>
          <p className="text-[10px] text-slate-600 text-center mt-2">
            VACATION
          </p>
        </div>

        <div className="mx-auto w-2/3 border border-slate-600 pb-10 mt-9">
          <Image
            src={oneImg}
            width={700}
            height={700}
            alt="img_slid"
            className="w-full h-60"
          />
          <p className="text-center mt-4 font-semibold italic text-xl">
            Serbia
          </p>
          <p className="text-center mt-2 text-sm w-2/3 font-medium mx-auto ">
            OUR TOP TWELVE NATURE SIGHTS IN SERBIA.
          </p>
          <p className="text-[10px] text-slate-600 text-center mt-2">
            VACATION
          </p>
        </div>
      </div>

      <div className="w-2/3 mx-auto p-4 border border-slate-800 mt-3">
        <div className="border-b border-b-slate-800 pb-5">
          <h2 className="mt-3 font-semibold text-sm">
            46 AMAZING TRAVEL PICTURES
          </h2>
          <p className="text-xs mt-3">VACATION</p>
        </div>

        <div className="border-b border-b-slate-800 pb-5">
          <h2 className="mt-3 font-semibold text-sm">
            46 AMAZING TRAVEL PICTURES
          </h2>
          <p className="text-xs mt-3">VACATION</p>
        </div>

        <div className="border-b border-b-slate-800 pb-5">
          <h2 className="mt-3 font-semibold text-sm">
            46 AMAZING TRAVEL PICTURES
          </h2>
          <p className="text-xs mt-3">VACATION</p>
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
