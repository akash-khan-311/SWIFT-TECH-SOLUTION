const SectionTitle = ({ label, title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center  text-center">
      <p className="text-[#66FCF1] text-lg">{label}</p>
      <h2
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-once="true"
        data-aos-duration="2000"
        className="text-4xl md:text-5xl lg:text-6xl capitalize text-white my-2"
      >
        {title}
      </h2>
      <p className="text-gray-300 w-full md:w-1/2">{text}</p>
    </div>
  );
};

export default SectionTitle;
