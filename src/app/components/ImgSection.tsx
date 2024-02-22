import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
function ImgSection() {
  return (
    <div>
      <motion.div
        className="flex-1 flex justify-center items-center p-4 md:p-8"
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-center items-center bg-[#cbffe7] gap-6 rounded-2xl p-12 md:p-16">
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
            <Image
              src={"/images/15.jpg"}
              alt={"text"}
              className="rounded-2xl shadow-xl"
              width={400} // Reduced size for better fitting
              height={200} // Reduced size for better fitting
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
            <Image
              src={"/images/04.jpg"}
              alt={"text"}
              className="rounded-2xl shadow-xl"
              width={400} // Reduced size for better fitting
              height={300} // Reduced size for better fitting
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
            <Image
              src={"/images/06.png"}
              alt={"text"}
              className="rounded-2xl shadow-xl"
              width={400} // Reduced size for better fitting
              height={300} // Reduced size for better fitting
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ImgSection;
