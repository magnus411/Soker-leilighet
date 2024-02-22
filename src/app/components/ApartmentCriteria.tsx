import {
  FaBath,
  FaUtensils,
  FaWallet,
  FaRulerCombined,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ApartmentCriteria(ref: any) {
  return (
    <div className="bg-background w-full pt-12 pb-6 px-6 md:px-48">
      <h2 className="text-4xl text-center md:text-left  md:text-6xl font-bold mb-8 md:mb-12">
        Hva vi ser etter
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Decent Standard */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">God Standard</h3>
          <p>Vi søker en komfortabel leilighet med god moderne standard.</p>
        </div>

        {/* Bathroom */}
        <div className="flex flex-col items-center text-center">
          <FaBath className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Baderom</h3>
          <p>
            Et velholdt og funksjonelt baderom med romslig utforming er
            ønskelig.
          </p>
        </div>

        {/* Kitchen */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Kjøkken</h3>
          <p>
            Et praktisk kjøkken hvor vi kan lage mat og nyte måltider sammen.
          </p>
        </div>

        {/* Budget */}
        <div className="flex flex-col items-center text-center">
          <FaWallet className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Budsjett</h3>
          <p>Opp til 12,500 NOK/måneden, inkludert strøm.</p>
        </div>

        {/* Size */}
        <div className="flex flex-col items-center text-center">
          <FaRulerCombined className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Størrelse</h3>
          <p>Vi søker et sted med over 30m².</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Lokasjon</h3>
          <p>
            Helst sentralt i Trondheim, med gode muligheter for buss, og i
            nærheten av dagligvarebutikk.
          </p>
        </div>
      </div>
    </div>
  );
}
