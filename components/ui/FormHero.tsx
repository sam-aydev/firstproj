export default function FormHero() {
  return (
    <div className="bg-yellow-100 mt-32  pb-10 ">
      <div className="pt-10 md:w-2/3 md:mx-auto">
        <h2 className="text-xl text-center ">
          BEST MONEY - SAVING TRAVEL TIPS!
        </h2>
        <p className="w-3/4 mx-auto text-center pt-7">
          See how I helped real readers plan, save and go on the trip of a
          lifetime. And get actionable steps you can use to travel anywhere - no
          matter your income or where you're from!
        </p>
      </div>

      <div className="flex justify-center space-y-4 flex-col w-2/3 mx-auto pt-8 md:w-2/3 lg:w-1/2 ">
        <input type="text" className="p-4 rounded" placeholder="Name" />
        <input type="text" className="p-4 rounded" placeholder="Email" />
        <input type="text" className="p-4 rounded" placeholder="Country" />
        <button className="bg-black text-white p-3 rounded">SUBSCRIBE</button>
      </div>
    </div>
  );
}
