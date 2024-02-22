"use client";
import React, { useRef } from "react";

import Image from "next/image";
import Header from "./components/Header";
import ApartmentCriteria from "./components/ApartmentCriteria";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamSection from "./components/TeamSection";
import ContactUs from "./components/ContactUs";
import ReferencesSection from "./components/ReferencesSection";
import ImgSection from "./components/ImgSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <ApartmentCriteria />
      <WhyChooseUs />
      <TeamSection />
      <ContactUs />
    </div>
  );
}
