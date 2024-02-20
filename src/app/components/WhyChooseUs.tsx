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
    <div className="bg-background w-screen  p-24  text-center">
      <div className="bg-[#8ad4d2] container rounded-xl p-12 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose Us?</h2>
        <p className="mb-3 text-xl md:text-2xl">
          Discover what sets us apart and makes us the right choice for you.
        </p>
        <p className="text-xl ">
          Vi har gode kvaliteter lorum ipsom test test test korasd asgode
          kvaliteter lorum ipsom test test test korasd asgode kvaliteter lorum
          ipsom test test test korasd as kvaliteter lorum ipsom test test test
          korasd asgode kvaliteter lorum ipsom test test test korasd as
        </p>
      </div>
    </div>
  );
}
