"use client";

import { useEffect, useState } from "react";
import NavBar from "../ui/NavBar";
import HeaderSlide from "../ui/HeaderSlide";
import FirstHero from "../ui/Firsthero";
import SecondHero from "../ui/SecondHero";
import ThirdHero from "../ui/ThirdHero";
import FormHero from "../ui/FormHero";
import FifthHero from "../ui/FifthHero";
import SixthHero from "../ui/SixthHero";
import Footer from "../ui/Footer";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <HeaderSlide />
      <FirstHero />
      <SecondHero />
      <ThirdHero />
      <FormHero />
      <FifthHero />
      <SixthHero />
      <Footer />
    </div>
  );
}
