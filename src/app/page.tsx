"use client";
import React from "react";

import Image from "next/image";
import Header from "./components/Header";
import ApartmentCriteria from "./components/ApartmentCriteria";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <ApartmentCriteria />
      <WhyChooseUs />
      <TeamSection />
    </div>
  );
}
