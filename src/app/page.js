import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Teams from "@/components/Team/Teams";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto px-3 md:px-2 lg:px-0">
        <Services />
        <Projects />
        <Testimonials />
      </div>
      <Teams />
      <div className="container mx-auto px-3 md:px-2 lg:px-0">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
