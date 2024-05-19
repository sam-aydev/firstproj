import Image from "next/image";

import { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function HeaderSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/firstslider.jpg",
    "/assets/secondslider.jpg",
    "/assets/thirdslider.jpg",
    "/assets/secondslider.jpg",
  ];
  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }
  return (
    <div className="pt-10 px-4 pb-20">
      <div>
        <div>
          <div>
            <div className="flex justify-end space-x-7 pb-2 ">
              <button>
                <BiArrowToRight
                  className="size-8 p-2 rounded-full  bg-slate-200"
                  onClick={handleNext}
                />
              </button>
              <button>
                <BiArrowToLeft
                  className="size-8 p-2 rounded-full  bg-slate-200"
                  onClick={handlePrev}
                />
              </button>
            </div>
            <div>
              <div className="w-full md:hidden ">
                <div className="w-[80%] md:hidden  mx-auto duration-500 transition">
                  <Image
                    src={images[currentIndex]}
                    alt="image-slider"
                    width={600}
                    height={600}
                    className="w-full h-80  rounded pb-2 "
                  />
                </div>
              </div>
              <div className="w-[80%] lg:w-[60%] mx-auto md:flex space-x-4 hidden">
                {images
                  .slice(currentIndex, currentIndex + 3)
                  .map((image, index) => (
                    <div
                      key={index}
                      className="w-[80%]  transition duration-700 ease-in-out mx-auto"
                    >
                      <Image
                        src={image}
                        alt="image-slider"
                        width={600}
                        height={600}
                        className="w-full h-80  rounded  pb-2 "
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
