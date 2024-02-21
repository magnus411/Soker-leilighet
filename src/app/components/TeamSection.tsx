import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      title: "Magnus",
      introduction:
        "23 år gammel student, født og oppvokst i trondheim og liker å lære meg nye ting ",
      imageUrl: "https://i.imgur.com/UOfmzog.jpeg",
      altText: "Magnus",
      sections: [
        {
          heading: "Bakgrunn & Ambisjoner",
          content:
            "Jeg er for tiden en engasjert dataingeniør-student ved NTNU, med kun ett år igjen før jeg oppnår min bachelorgrad. Jeg har i tilleg udanning innen nettverk og systemadministrasjon. I tillegg til min utdannelse har jeg opparbeidet meg mye erfaring gjennom en rekke år i arbeidslivet, hvor jeg har jobbet som selger, konsulent, design- og innholdsprodusent samt Teknisk Ansvarlig. Mitt profesjonelle mål er å kontinuerlig utvikle meg innenfor teknologi-bransjen, med et spesielt fokus på å oppnå en stilling som prosjektleder innenfor en teknologibedrift. Jeg er drevet av ønsket om å lede prosjekter som ikke bare utfordrer mine tekniske ferdigheter, men også mine lederegenskaper, og evne til kreativ problemløsning.",
        },
        {
          heading: "Interesser & Hobbier",
          content:
            "Jeg er en person med en bred palett av interesser, alltid nysgjerrig for å utforske nye ting. Fra å spille gitar, sy og buldre, til maling og dykking ned i programmeringsprosjekter, finner jeg glede i et mangfold av aktiviteter. Jeg verdsetter også roligere stunder, enten det er hjemme eller sammen med venner, hvor vi kan nyte en god serie.",
        },
        {
          heading: "Jobb",
          content:
            "Jeg jobber for tiden som Teknisk Ansvarlig på Jotunheimen Esportsenter. I tilleg til dette har jeg litt private prosjekt jeg jobber på og tar av og til på meg konsulentjobber.",
        },
        {
          heading: "Betalingsevne",
          content:
            "Jeg har fast deltidsjobb, stipend og studielån, samt nok penger til å dekke over et år med husleie.",
        },
      ],
    },
    {
      title: "Maren",
      introduction:
        "21 år gammel studentog kommer fra Namsos. Jeg liker å tilbringe tiden ute blant venner, eller se en god krim-serie.",
      imageUrl: "https://i.imgur.com/UOfmzog.jpeg",
      altText: "Maren",
      sections: [
        {
          heading: "Bakgrunn & Ambisjoner",
          content:
            "Jeg er nesten ferdig med en bachelorgrad i engelsk og har også fullført et årsstudium i likestilling og mangfold. Planen min er å ta en Master i Likestilling & Mangfold etter jeg er ferdig med bacheloren. Målet mitt er å bruke min utdannelse til å arbeide i roller som lar meg gjøre en forskjell, spesielt innen utdanning, velferd eller i andre organisasjoner der jeg kan gjøre en forskjell.",
        },
        {
          heading: "Interesser & Hobbier",
          content:
            "Ved siden av studiene liker jeg å fordype meg i ulike hobbyer. Strikking er en avslappende aktivitet for meg, men også en måte å uttrykke min kreative side på. Jeg elsker også å tilbringe tid med mine venner, enten det er gjennom sosiale sammenkomster eller ved å utforske nye steder og kulturer gjennom musikk og festivaler.",
        },
        {
          heading: "Jobb",
          content:
            "I sommermånedene jobber jeg i klesbutikken Cubus i Namsos. Også i år skal jeg jobbe på Cubus over sommeren.",
        },
        {
          heading: "Betalingsevne",
          content:
            "Med fullt stipend og studielån, samt inntekter fra sommerjobben, har jeg en stabil økonomi og erfaring fra tidligere leieforhold, noe som gjør meg til en pålitelig og ansvarlig leietaker.",
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
        className="flex-1 flex justify-center items-center p-4 md:p-8"
        variants={sectionVariants}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="flex justify-center items-center bg-[#cbffe7] rounded-2xl p-12 md:p-16">
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
            <Image
              src={content.imageUrl}
              alt={content.altText}
              className="rounded-2xl shadow-xl"
              width={400} // Reduced size for better fitting
              height={300} // Reduced size for better fitting
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
