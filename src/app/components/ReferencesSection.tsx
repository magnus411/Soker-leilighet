import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ReferencesSection = () => {
  // Animation settings for the cards
  const cardVariants = {
    offscreen: { scale: 0.95, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Sample data for references
  const references = [
    {
      id: 1,
      name: "Pappa",
      review: "Han er helt konge å bo med!",
      rating: 5,
    },
    {
      id: 2,
      name: "Kong Harald",
      review: "Både mangus og maren er episke å bo med! ",
      rating: 4,
    },
    {
      id: 3,
      name: "Randi hansen",
      review: "Det var en glede å bo med Magnus og Maren!",
      rating: 4,
    },
    // Add more references as needed
  ];

  return (
    <div className="bg-background w-full pt-12 pb-6 px-4 md:px-24">
      <div className="bg-green-300 p-6 md:p-9 rounded-xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
          Våre referanser
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {references.map((reference) => (
            <motion.div
              key={reference.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {reference.name}
              </h3>
              <p className="mb-3 md:mb-4">{reference.review}</p>
              <div className="flex">
                {Array.from({ length: reference.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferencesSection;
