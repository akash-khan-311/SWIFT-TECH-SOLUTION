import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="banner h-screen flex items-center justify-start">
      <div className="flex  container mx-auto">
        <div className=" w-1/2">
          <h2
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="text-4xl md:text-5xl lg:text-7xl text-white capitalize"
          >
            Your ideas, make it <span className="text-[#66FCF1]">happen</span>
          </h2>
          <p
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="text-white mt-4 text-lg w-full md:w-1/2 "
          >
            The sky was cloudless and of a deep dark blue. The spectacle before
            us was indeed sublime.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <Button
              size="lg"
              className="bg-[#66FCF1] hover:bg-[#3BB7AE] uppercase text-black font-bold px-8"
            >
              Hire Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:bg-gray-300 px-8"
            >
              Arrange Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
