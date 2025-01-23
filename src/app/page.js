import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Services />
      </div>
    </>
  );
}
