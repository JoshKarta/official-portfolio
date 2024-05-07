import AboutBlock from "@/blocs/about-block";
import { HeroBlock } from "@/blocs/hero-block";
import { ExperienceBlock } from "@/blocs/experiences-block";
import ProjectsBlock from "@/blocs/projects-block";
import ContactBlock from "@/blocs/contact-block";

export default function Home() {

  return (
    <main className="flex flex-col bg-primary-two-500">

      {/* Hero */}
      <div className="w-full" id="home">
        <HeroBlock />
      </div>

      {/* About */}
      <div className="w-full" id="about">
        <AboutBlock />
      </div>

      {/* Services */}
      {/* <div className="w-full" id="services">
        <BentobBlock />
      </div> */}

      {/* Experience */}
      <div className="pb-16" id="experience">
        <ExperienceBlock />
      </div>

      {/* Projects */}
      <div className="w-full py-16 bg-primary-two-600" id="projects">
        <ProjectsBlock />
      </div>

      {/* Marquees */}
      <div>
        {/* <MarqueeBlock /> */}
      </div>

      {/* NewsLetter */}
      <div className="py-16" id="contact">
        <ContactBlock />
      </div>
    </main>
  );
}
