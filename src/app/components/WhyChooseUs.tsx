import { motion } from "framer-motion";

export default function WhyChooseUs() {
  // Animation settings for the items
  const itemVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-background w-screen  p-7 md:p-24  text-center">
      <div className="bg-[#8ad4d2] container rounded-xl p-8 md:p-12 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Hvorfor velge oss?
        </h2>

        <p className=" text-lg md:text-2xl ">
          Vi er et ansvarlig par som liker rolige kvelder hjemme. Vi liker å ha
          det rent og ryddig, og verdsetter å ha det fint rundt oss. Vi er begge
          imøtekommende og tar hensyn til menneskene rundt oss. Vi er pålitlige,
          har et godt økonomisk utgangspunkt og betaler alltid leien i god tid.
          Ved å velge oss som leietakere, kan du forvente ansvarlighet,
          pålitelighet og noen som tar godt vare på eiendommen din.
        </p>
      </div>
    </div>
  );
}
