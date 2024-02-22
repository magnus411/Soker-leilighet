import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      title: "Magnus",
      introduction:
        "23 år gammel student, født og oppvokst i trondheim og liker å lære meg nye ting ",
      imageUrl: "https://i.imgur.com/ew51bpc.jpg",
      altText: "Magnus",
      sections: [
        {
          heading: "Bakgrunn & Ambisjoner",
          content:
            "Jeg studerer for tiden dataingeniør ved NTNU, med ett år igjen før jeg oppnår min bachelorgrad. Tidligere har jeg tatt udanning innenfor nettverk og systemadministrasjon. Jeg har i tillegg opparbeidet meg mye erfaring fra arbeidslivet da jeg har jobbet som selger, konsulent, design- og innholdsprodusent samt teknisk ansvarlig. Mitt profesjonelle mål er å kontinuerlig utvikle meg innenfor teknologi-bransjen, med et spesielt fokus på å bli prosjektleder i en teknologibedrift. Jeg er drevet av å lede prosjekter som ikke bare utfordrer mine tekniske ferdigheter, men også mine lederegenskaper, og evne til kreativ problemløsning.",
        },
        {
          heading: "Interesser & Hobbier",
          content:
            "Jeg er en person med mange hobbyer og interesser, alltid nyskjerrig på å utforske nye ting. Jeg liker blandt annet å spille gitar, buldre, sy og male. Jeg liker også å dykke ned i programmeringsprosjekter der jeg kan løse kreative problemstillinger. Jeg finner glede i et mangfold av aktiviteter, men versetter også rolige stunder hvor jeg kan nyte en god serie.",
        },
        {
          heading: "Jobb",
          content:
            "Jeg jobber for tiden som Teknisk Ansvarlig på Jotunheimen Esportsenter. I tilleg til dette har jeg noen private prosjekter, og tar av og til på meg konsulentjobber.",
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
        "21 år gammel student og kommer fra Namsos. Jeg liker å tilbringe tiden ute blant venner, eller se en god krim-serie.",
      imageUrl: "https://i.imgur.com/XM7DKUZ.jpeg",
      altText: "Maren",
      sections: [
        {
          heading: "Bakgrunn & Ambisjoner",
          content:
            "Jeg er nesten ferdig med en Bachelorgrad i Engelsk og har også fullført et årsstudium i Likestilling og Mangfold. Planen min er å ta en Mastergrad i Likestilling & Mangfold når jeg er ferdig med bachlorgraden. Mitt mål er å bruke utdannelsen min innenfor et yrke der jeg kan jobbe med mennesker og gjøre en forskjell. Jeg er spesielt interesert i å jobbe innenfor yrker som handler om å ta vare på og tilrettelegge for ulike samfunnsgrupper.",
        },
        {
          heading: "Interesser & Hobbier",
          content:
            "Ved siden av studiene har jeg en rekke hobbyer. Jeg er interesert i musikk og drar på konserter når muligheten byr seg. Jeg liker å lage mat, og setter gjerne på en av mine vinyl-plater fra samlingen når jeg er på kjøkkenet. Liker å være sosial og henger ofte med venner, men er mest glad i rolige kvelder på soffaen med et strikkeprosjekt.",
        },
        {
          heading: "Jobb",
          content:
            "Hvert år i sommermånedene jobber jeg på klesbutikken Cubus i Namsos.",
        },
        {
          heading: "Betalingsevne",
          content:
            "Med fullt stipend og studielån, samt inntekter fra sommerjobben, har jeg en stabil økonomi da jeg er ansvarlig med pengene mine. Under mine tre tidligere leieforhold har alle betalinger blitt utført punktlig og uten unntak.",
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
