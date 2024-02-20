import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Magnus",
      role: "Role or Specialization",
      description:
        "Brief description about Magnus, his interests, skills, or background.",
      imageUrl: "/path/to/magnus-temp-image.jpg", // Replace with the path to your temporary image for Magnus
    },
    {
      name: "Maren",
      role: "Role or Specialization",
      description:
        "Brief description about Maren, her interests, skills, or background.",
      imageUrl: "/path/to/maren-temp-image.jpg", // Replace with the path to your temporary image for Maren
    },
  ];

  // Animation variants for the team member cards
  const cardVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-background pt-12 md:pt-24 pb-12 px-6 md:px-48">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map(({ name, role, description, imageUrl }, index) => (
          <motion.div
            className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            key={index}
          >
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
              <Image
                src={imageUrl}
                alt={`Image of ${name}`}
                width={300} // Adjust based on your layout needs
                height={300} // Adjust to maintain aspect ratio
                className="rounded-lg"
                layout="responsive"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-md mb-2">{role}</p>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
