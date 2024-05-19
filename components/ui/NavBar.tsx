import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [pages, setPages] = useState(false);
  const [travel, setTravel] = useState(false);
  const [home, setHome] = useState(false);
  // const [blog, setBlog] = useState(false);

  // useEffect(
  //   function () {
  //     function handleOutsideClick(event: any) {
  //       if (event.target.closest("modal")) {
  //         setOpenNav(false);
  //       }
  //     }
  //     document.addEventListener("click", handleOutsideClick);

  //     return function () {
  //       document.removeEventListener("click", handleOutsideClick);
  //     };
  //   },
  //   [openNav]
  // );

  return (
    <div>
      <div className="flex justify-between p-3">
        <Link href="/" className="cursor-pointer">
          <div>
            <h2 className="text-xl italic font-semibold">BackPack Traveler</h2>
            <p className="text-[10px] text-center">NEVER ENDING FOOTSTEP</p>
          </div>
        </Link>
        <div>
          <HiBars3
            onClick={() => setOpenNav(true)}
            className="size-8 cursor-pointer"
          />
        </div>
      </div>

      <div className={`transition-all duration-500 ${openNav ? "" : "hidden"}`}>
        <div className="fixed h-full modal  bg-slate-200 top-0 w-1/2 right-0 md:w-1/3">
          <HiXMark
            onClick={() => setOpenNav(false)}
            className="size-8 absolute cursor-pointer right-2 top-2"
          />
          <ul className="pt-20 px-4">
            <li className=" text-sm cursor-pointer ">
              <div
                onClick={() => setHome((open) => !open)}
                className="flex justify-between"
              >
                <span className="hover:text-slate-500">HOME</span>
                <span>{home ? <BiChevronDown /> : <BiChevronRight />}</span>
              </div>
              <div className={home ? "px-4 pt-4" : "hidden"}>
                <p>
                  <Link href="/">Provence</Link>
                </p>
                <p className="pt-2">
                  <Link href="/madeira">Madeira</Link>
                </p>
                <p className="pt-2">
                  <Link href="/andalusia">Andalusia</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/antigua">Antigua</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/baleares">Baleares</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/trentino">Trentino</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/cordoba">Cordoba</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/sircausa">Sircausa</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/pages/faq">Malaga</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/landing">Landing</Link>
                </p>
              </div>
            </li>

            <li className=" text-sm cursor-pointer mt-6">
              <div
                onClick={() => setPages((open) => !open)}
                className="flex justify-between"
              >
                <span className="hover:text-slate-500">PAGES </span>
                <span>{pages ? <BiChevronDown /> : <BiChevronRight />}</span>
              </div>
              <div className={pages ? "px-4 pt-4" : "hidden"}>
                <p>
                  <Link href="/pages/who-we-are">Who We Are</Link>
                </p>
                <p className="pt-2">
                  <Link href="/pages/about">About Me</Link>
                </p>
                <p className="pt-2">
                  <Link href="/pages/destination-map">Destination Map</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/pages/get-in-touch">Get In Touch</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/pages/faq">FAQ Page</Link>
                </p>
              </div>
            </li>

            <li className=" text-sm cursor-pointer mt-6">
              <div
                onClick={() => setTravel((open) => !open)}
                className="flex justify-between"
              >
                <span className="hover:text-slate-500">TRAVEL </span>
                <span>{travel ? <BiChevronDown /> : <BiChevronRight />}</span>
              </div>
              <div className={travel ? "px-4 pt-4" : "hidden"}>
                <p>
                  <Link href="/travel/list">List</Link>
                </p>
                <p className="pt-2">
                  <Link href="/travel/map">Map</Link>
                </p>
                <p className="pt-2">
                  <Link href="/travel/categories">Categories</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/pages/get-in-touch">Slider</Link>
                </p>
                <p className="pt-2">
                  {" "}
                  <Link href="/pages/faq">SINGLES</Link>
                </p>
              </div>
            </li>

            <li className=" text-sm cursor-pointer mt-6">
              <div className="flex justify-between">
                <span>
                  {" "}
                  <Link href="/blog" className="hover:text-slate-500">
                    BLOG
                  </Link>{" "}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
