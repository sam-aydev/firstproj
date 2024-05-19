import Image from "next/image";
import Bag from "@/public/assets/bag.png";

export default function FirstHero() {
  return (
    <div className="bg-yellow-50 pb-14">
      <div className="pt-20">
        <p className="text-center">MY TRAVEL ESSENTIALS</p>
        <p className="w-3/4 mx-auto text-center mt-7 text-sm">
          We are the Backpack Traveler, your favourite travel assistants!
        </p>
        <div className="flex items-center flex-col mt-8 md:grid md:grid-cols-3 md:place-items-center md:w-3/4 xl:w-2/3 md:mx-auto">
          <div>
            <Image
              src={Bag}
              width={500}
              height={500}
              alt="bag"
              className="size-40 "
            />
          </div>
          <div>
            <Image
              src={Bag}
              width={500}
              height={500}
              alt="bag"
              className="size-40 "
            />
          </div>

          <div>
            <Image
              src={Bag}
              width={500}
              height={500}
              alt="bag"
              className="size-40 "
            />
          </div>

          <div>
            <Image
              src={Bag}
              width={500}
              height={500}
              alt="bag"
              className="size-40 "
            />
          </div>

          <div>
            <Image
              src={Bag}
              width={500}
              height={500}
              alt="bag"
              className="size-40 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
