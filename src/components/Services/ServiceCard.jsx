const ServiceCard = ({ Icon, title, descriptions }) => {
  return (
    <div>
      <div className=" w-40 p-10 rounded-xl border text-6xl bg-[#66FCF1]">
        <span className="text-center flex justify-center items-center">
          <Icon />
        </span>
      </div>
      <h3 className="text-2xl mt-5 text-white">{title}</h3>
      <p className="text-gray-400 mt-5">{descriptions}</p>
    </div>
  );
};

export default ServiceCard;
