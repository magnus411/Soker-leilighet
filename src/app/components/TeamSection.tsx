import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      title: "Magnus",
      introduction:
        "Driven by an insatiable curiosity, Magnus thrives on the thrill of discovery, whether it's in the digital realm or the great outdoors.",
      imageUrl: "https://i.imgur.com/UOfmzog.jpeg",
      altText: "Magnus",
      sections: [
        {
          heading: "Background & Ambitions",
          content:
            "With a background in computer science and a passion for sustainable technologies, Magnus is not just about bits and bytes but also about making a tangible impact on the environment.",
        },
        {
          heading: "Interests & Hobbies",
          content:
            "From scaling rugged mountains to coding innovative software solutions, Magnus's interests are as varied as they are dynamic.",
        },
        {
          heading: "Professional Path",
          content:
            "Currently navigating the world of tech startups, Magnus brings a blend of technical expertise and creative problem-solving to the table.",
        },
        {
          heading: "Ability to pay",
          content:
            "Yes, I can pay the rent. I have a stable job and a good income",
        },
      ],
    },
    {
      title: "Maren",
      introduction:
        "With a palette as vibrant as her personality, Maren finds joy in every hue of life, painting her days with creativity and inspiration.",
      imageUrl: "https://i.imgur.com/UOfmzog.jpeg",
      altText: "Maren",
      sections: [
        {
          heading: "Artistic Endeavors",
          content:
            "A skilled artist and designer, Maren's work is a testament to her ability to blend colors and concepts in mesmerizing ways.",
        },
        {
          heading: "Passions & Pursuits",
          content:
            "Whether it's experimenting with new art techniques or curating the perfect playlist, Maren's passions are a reflection of her eclectic tastes.",
        },
        {
          heading: "Career & Creativity",
          content:
            "Balancing a career in graphic design with personal art projects, Maren navigates the creative process with grace and gusto.",
        },
        {
          heading: "Ability to pay",
          content: "Yes, I am stackd. ",
        },
      ],
    },
  ];

  return (
    <div className="">
      {teamMembers.map((member, i) => (
        <AboutUs key={i} content={member} flip={i % 2 !== 0} bg={i % 2 !== 0} />
      ))}
    </div>
  );
}

function AboutUs({ content, flip }: any) {
  if (!content) {
    return <div>Content is not available</div>;
  }

  const sectionVariants = {
    initial: { opacity: 0, x: flip ? 50 : -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: flip ? -50 : 50 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex flex-col md:flex-row  ${
        flip ? "md:flex-row-reverse  md:pr-48" : "md:pl-48 md:pr-48"
      } bg-background  p-4 `}
    >
      <motion.div
        className="flex-1 p-4  "
        variants={sectionVariants}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-4xl md:text-8xl font-bold text-black mb-4 italic">
          {content.title}
        </h2>
        <p className="text-md md:text-lg text-gray-900 mb-6">
          {content.introduction}
        </p>
        {content.sections.map((section: any, index: any) => (
          <div key={index} className="mb-4 md:mb-8">
            <h3 className="text-xl md:text-3xl font-semibold text-black mb-2">
              {section.heading}
            </h3>
            <p className="text-sm md:text-lg text-gray-900">
              {section.content}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center items-center p-4 md:p-12  "
        variants={sectionVariants}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="rounded-xl  h-full bg-[#cbffe7] p-16">
          <div className="w-full max-w-xs md:max-w-sm  mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 ">
              <Image
                src={content.imageUrl}
                alt={content.altText}
                className="rounded-lg shadow-xl"
                width={700} // Adjust based on layout responsiveness
                height={100} // Adjust based on layout responsiveness
                objectFit="cover" // Changed to cover for better mobile viewing
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
