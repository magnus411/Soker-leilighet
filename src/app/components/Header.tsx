import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
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
            Trondheim. Vi er begge studenter ved NTNU, med Magnus som går
            Dataingeniør og Maren som er snart ferdig med en Bachelor i Engelsk.
          </p>
          <p className="text-lg mt-5 md:mt-2">
            Vi er på utkikk etter en leilighet som kan være vårt nye hjem, med
            nok plass til våre hobbyer daglige aktiviteter. Vi verdsetter et
            ryddig hjem med god standard, og vil behandle din eiendom med stor
            respekt.
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
            <motion.button
              className="bg-primary text-gray-900 text-sm md:text-xl p-3 rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
              Kontaktinformasjon
            </motion.button>
          </div>
        </motion.div>

        <div className="">
          <div className=" p-7 mr-3">
            <motion.div
              className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 "
              initial={{ opacity: 0.0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"https://i.imgur.com/dd1GqLT.jpeg"}
                alt="Description of the image"
                width={800}
                height={100}
                style={{ objectFit: "contain" }}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
