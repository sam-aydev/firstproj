"use client";
import Image from "next/image";
import NavBar from "../ui/NavBar";
import AboutUs from "@/public/assets/about-slide2.jpg";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";
import CenterImg from "@/public/assets/h1-post-5-img-2-207x300.jpg";

export default function GetInTouch() {
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
        <p className="text-white font-semibold absolute bottom-14 right-[40%] md:static md:text-center md:-mt-28">
          GET IN TOUCH
        </p>
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

      <div className="px-4  md:pt-24 md:mx-auto md:w-2/3">
        <h2 className="pt-8">GET IN TOUCH</h2>
        <p className="pt-4">
          For all business and collaboration enquiries please contact
          backpacktraveler@example.com For any other enquiries please use the
          form below.?
        </p>
        <div className="flex flex-col space-y-5 pt-5 w-2/3">
          <input
            type="text"
            placeholder="Name"
            className="border border-black p-2 italic"
          />

          <input
            type="text"
            placeholder="Email Address"
            className="border border-black p-2 italic"
          />

          <textarea
            placeholder="Your Message."
            className="py-16 resize-none px-2 border border-black"
          ></textarea>

          <button className="bg-black px-4 py-2 w-1/2 text-white">
            SUBMIT
          </button>
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
