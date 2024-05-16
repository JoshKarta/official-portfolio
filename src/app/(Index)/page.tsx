import AboutBlock from "@/blocs/about-block";
import { HeroBlock } from "@/blocs/hero-block";
import { ExperienceBlock } from "@/blocs/experiences-block";
import ProjectsBlock from "@/blocs/projects-block";
import ContactBlock from "@/blocs/contact-block";
import { query, sanityClient } from "@/lib/sanity";

export default async function Home() {
  const { hero, about, experience, experienceProjects, projects } = await sanityClient.fetch(query)

  return (
    <main className="flex flex-col bg-primary-two-500">

      {/* Hero */}
      <div className="w-full" id="hero">
        <HeroBlock data={hero} />
      </div>

      {/* About */}
      <div className="w-full" id="about">
        <AboutBlock data={about} />
      </div>

      {/* Services */}
      {/* <div className="w-full" id="services">
        <BentobBlock />
      </div> */}

      {/* Experience */}
      <div className="pb-16" id="experience">
        <ExperienceBlock experience={experienceProjects} experienceSection={experience} />
      </div>

      {/* Projects */}
      <div className="w-full py-16 bg-primary-two-600" id="projects">
        <ProjectsBlock projects={projects} />
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
