import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "../ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "History Website Design",
      image:
        "https://market-resized.envatousercontent.com/previews/files/361314887/preview-1.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=118ac4c86b6ef69fb8f4a0575f8038ce056f04564b2e6b1974122d30c8af43f6",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Indoor Plants App",
      image:
        "https://market-resized.envatousercontent.com/previews/files/543681635/gardenko-590x300.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=29a1c95763558079f77948d9cd51e9e523067983c7a10f6604991761809c448e",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Fitness Web Development",
      image:
        "https://market-resized.envatousercontent.com/previews/files/264557448/01_yoga-fit-preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=ae18520d076467e4e32910cbfe760ca1d29a701ba56c5b167569e9107884f53f",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Flights Management Project",
      image:
        "https://cdn.dribbble.com/userupload/6307754/file/original-1e26d33854d8eaa5c606020dde4f3c3a.png?resize=1024x615&vertical=center",
      category: "Dashboard",
    },
    {
      id: 5,
      title: "Cats Food Website",
      image:
        "https://elements-resized.envatousercontent.com/elements-template-kits-cover-images/files/402638438/main%20preview.jpg?w=710&cf_fit=scale-down&q=85&format=auto&s=360d06920ce7062e73795a3a618a1d241c0a51bae63c189e8ecace75f58ceac3",
      category: "E-commerce",
    },
    {
      id: 6,
      title: "Pollution Statistic Project",
      image:
        "https://hrkit.rometheme.pro/zonagreen/wp-content/uploads/sites/104/2024/06/photo-1-1.jpg",
      category: "Data Visualization",
    },
  ];
  return (
    <section id="project">
      <SectionTitle
        label={"Our Projects"}
        title={"People lie, our works don't"}
        text={
          "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        }
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm font-medium">{project.category}</p>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6">
        <Button variant="link" className="text-[#66FCF1]  text-lg">
          Explore All Projects
        </Button>
        <Button
          size="lg"
          className="bg-[#66FCF1] hover:bg-[#3BB7AE] font-bold text-black px-12"
        >
          Hire Us
        </Button>
      </div>
    </section>
  );
};

export default Projects;
