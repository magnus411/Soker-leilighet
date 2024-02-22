"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const handleDownloadVCard = () => {
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Magnus Gjerstad",
      "EMAIL:magnusgjerstad00@gmail.com",
      "TEL:+47 482 18 789",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MagnusGjerstad.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-background   md:pt-24 md:pl-24 md:pr-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <motion.div
          className="  p-8  md:p-24"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold italic">
              MAGNUS OG MAREN SØKER
            </h1>
            <p className="text-6xl md:text-7xl font-bold italic bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              LEILIGHET!
            </p>
          </motion.div>
          <p className="text-lg mt-5 md:mt-2 mb-3">
            Vi er Magnus og Maren, et par på jakt etter en leilighet i
            Trondheim. Vi er begge studenter ved NTNU. Magnus går Dataingeniør
            og Maren er snart ferdig med en Bachlorgrad i Engelsk.
          </p>
          <p className="text-lg mt-5 md:mt-2">
            Vi er på utkikk etter en leilighet som kan være vårt nye hjem, med
            nok plass til våre hobbyer og daglige aktiviteter. Vi ser etter et
            komfortabelt hjem med god standard, og tilgang til nødvendige
            hvitevarer.
          </p>
          <p className="text-lg mt-5 md:mt-2 font-semibold text-black">
            Vi ønsker å starte leieforholdet i Juli
          </p>

          <div className="mt-5 gap-4 grid grid-cols-2 md:pr-24 pr-3">
            <motion.button
              className="bg-[#8ad4d2] text-gray-900 text-md md:text-xl p-3 rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
              Les mer om oss
            </motion.button>
            <Popover>
              <PopoverTrigger>
                <Button
                  className="bg-primary text-gray-900 text-md md:text-xl p-3 rounded-lg"
                  _hover={{ transform: "scale(1.03)" }}
                  _active={{ transform: "scale(0.99)" }}
                >
                  Kontaktinformasjon
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody className="bg-primary p-3 rounded-xl text-md font-semibold">
                  <p>
                    E-post:{" "}
                    <a
                      href="mailto:magnusgjerstad00@gmail.com"
                      className="text-black hover:text-blue-700"
                    >
                      magnusgjerstad00@gmail.com
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a href="tel:+4748218789" className="hover:text-blue-700">
                      +47 482 18 789
                    </a>
                  </p>
                  <Button
                    className="bg-pink-300 hover:bg-pink-500 p-2 rounded-md"
                    size="sm"
                    onClick={handleDownloadVCard}
                  >
                    Last ned kontakt
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </motion.div>

        <div className="">
          <div className=" p-7 mr-3 md:w-8/12">
            <motion.div
              className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 "
              initial={{ opacity: 0.0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"https://i.imgur.com/UOfmzog.jpeg"}
                alt={"Maren"}
                className="rounded-2xl shadow-xl"
                width={700} // Reduced size for better fitting
                height={300} // Reduced size for better fitting
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
