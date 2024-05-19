import { BiUpArrow } from "react-icons/bi";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="pt-20">
        <div className="bg-yellow-100 py-10">
          <div>
            <p className="font-semibold italic text-sm text-center">
              @ 2024 Qode Interactive, All Rights Reserved
            </p>
          </div>
          <div className="pt-10 text-center flex flex-col space-y-4 md:flex-row md:justify-center md:space-x-6 md:w-2/3 md:mx-auto md:pt-4">
            <p className="text-[10px] text-slate-600 md:mt-4">LIFESTYLE</p>
            <p className="text-[10px] text-slate-600">MOMENTS</p>
            <p className="text-[10px] text-slate-600">ADVENTURE</p>
            <p className="text-[10px] text-slate-600">EXPLORE</p>
            <p className="text-[10px] text-slate-600">VACATION</p>
          </div>
        </div>
      </div>

      <div>
        <div className="fixed right-2 bottom-2">
          <BiUpArrow
            onClick={scrollToTop}
            className="size-14 p-3 bg-slate-700 rounded-full cursor-pointer text-white  hover:bg-black"
          />
        </div>
      </div>
    </div>
  );
}
