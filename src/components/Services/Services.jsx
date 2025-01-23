import SectionTitle from "../shared/SectionTitle";
import { SmartphoneIcon as AndroidLogo, PenIcon as PenNib } from "lucide-react";
const Services = () => {
  return (
    <section>
      <SectionTitle
        label={"Our Services"}
        title={"Find out our services"}
        text={
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        }
      />
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-once="true"
        data-aos-duration="500"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 "
      >
        {/* Web Development */}
        <div className="group p-8 hover:scale-105 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl ">
          <div className="w-16 h-16 bg-[#6366F1] text-white rounded-lg flex items-center justify-center mb-6">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4H3ZM3 6H21V18H3V6Z" />
              <path d="M8.5 14.5L11 12L8.5 9.5L9.5 8.5L13 12L9.5 15.5L8.5 14.5Z" />
              <path d="M15.5 14.5L13 12L15.5 9.5L14.5 8.5L11 12L14.5 15.5L15.5 14.5Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4">Web Development</h3>
          <p className="text-gray-600 mb-4">
            Great hindrance to my speed resolved, contrary to my first intention
            Great hindrance to my speed contrary.
          </p>
          <a href="#" className="text-[#6366F1] font-medium hover:underline">
            Read More...
          </a>
        </div>

        {/* App Development */}
        <div className="group p-8 hover:scale-105 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl ">
          <div className="w-16 h-16 bg-[#3B82F6] text-white rounded-lg flex items-center justify-center mb-6">
            <AndroidLogo className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-4">App Development</h3>
          <p className="text-gray-600 mb-4">
            Great hindrance to my speed resolved, contrary to my first intention
            Great hindrance to my speed contrary.
          </p>
          <a href="#" className="text-[#3B82F6] font-medium hover:underline">
            Read More...
          </a>
        </div>

        {/* Web Design */}
        <div className="group p-8 hover:scale-105 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl ">
          <div className="w-16 h-16 bg-[#FF6B6B] text-white rounded-lg flex items-center justify-center mb-6">
            <PenNib className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold mb-4">Web Design</h3>
          <p className="text-gray-600 mb-4">
            Great hindrance to my speed resolved, contrary to my first intention
            Great hindrance to my speed contrary.
          </p>
          <a href="#" className="text-[#FF6B6B] font-medium hover:underline">
            Read More...
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
