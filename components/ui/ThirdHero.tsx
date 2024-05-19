import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

export default function ThirdHero() {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-center">NEVER ENDING FOOTSTEPS</h2>
          <p className="mx-auto w-3/4 text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
            ipsa temporibus, suscipit repellat perspiciatis assumenda animi quis
            est.
          </p>
        </div>
      </div>

      <div className="pt-32 px-3 md:mx-auto md:w-2/3">
        <h2>AROUND THE WORLD IN 10 DAYS</h2>
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
    </div>
  );
}
