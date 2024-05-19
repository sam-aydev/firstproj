import Image from "next/image";
import BeachCategory from "@/public/assets/beach-category.png";

export default function FifthHero() {
  return (
    <div>
      <div className="pt-20">
        <div className="w-3/4 mx-auto text-center">
          <h2>TOP CATEGORIES</h2>
          <p className="mt-4">
            We are That BackPacker, Melissa and Jonathan(that's us)
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center flex-col space-y-14 md:grid md:grid-cols-3 md:place-items-center md:w-2/3 md:mx-auto">
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
    </div>
  );
}
