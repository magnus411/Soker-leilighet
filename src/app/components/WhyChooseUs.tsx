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
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Hvorfor velge oss?
        </h2>
        <p className="mb-3 text-lg md:text-2xl">
          Discover what sets us apart and makes us the right choice for you.
        </p>
        <p className=" text-lg md:text-xl ">
          Som et dedikert og ansvarlig par er vi på utkikk etter vårt neste
          hjem, og vi er fast bestemt på å skape et trygt og varmende miljø i
          leiligheten vi leier. Vi verdsetter renslighet og orden høyt og
          forplikter oss til å vedlikeholde eiendommen i topp stand. Som stabile
          yrkesaktive har vi en pålitelig inntekt, noe som sikrer at husleien
          alltid vil bli betalt punktlig. Vi er stille og respektfulle naboer,
          opptatt av å opprettholde et godt forhold til våre omgivelser og
          fellesskapet rundt oss. Ved å velge oss som leietakere, kan du
          forvente ansvarlighet, pålitelighet og respekt for eiendommen din.
        </p>
      </div>
    </div>
  );
}
