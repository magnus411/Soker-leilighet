import {
  FaBath,
  FaUtensils,
  FaWallet,
  FaRulerCombined,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ApartmentCriteria() {
  return (
    <div className="bg-background w-full pt-12 pb-6 px-6 md:px-48">
      <h2 className="text-4xl text-center md:text-left  md:text-6xl font-bold mb-8 md:mb-12">
        Hva vi ser etter
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Decent Standard */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Decent Standard</h3>
          <p>We seek a comfortable living space with modern amenities.</p>
        </div>

        {/* Bathroom */}
        <div className="flex flex-col items-center text-center">
          <FaBath className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Bathroom</h3>
          <p>A clean, functional bathroom is a must.</p>
        </div>

        {/* Kitchen */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Kitchen</h3>
          <p>A kitchen where we can cook and enjoy meals together.</p>
        </div>

        {/* Budget */}
        <div className="flex flex-col items-center text-center">
          <FaWallet className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Budget</h3>
          <p>Up to 12,000 NOK/month, including electricity.</p>
        </div>

        {/* Size */}
        <div className="flex flex-col items-center text-center">
          <FaRulerCombined className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Size</h3>
          <p>Seeking spaces over 30m² for comfort and freedom.</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Location</h3>
          <p>Central to Trondheim, for ease of access to daily needs.</p>
        </div>
      </div>
    </div>
  );
}
