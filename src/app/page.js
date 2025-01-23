import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Services />
        <Projects />
      </div>
    </>
  );
}
