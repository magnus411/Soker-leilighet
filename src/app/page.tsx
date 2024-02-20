"use client";
import React from "react";

import Image from "next/image";
import Header from "./components/Header";
import ApartmentCriteria from "./components/ApartmentCriteria";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <ApartmentCriteria />
    </div>
  );
}
