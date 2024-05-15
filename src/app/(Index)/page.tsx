import AboutBlock from "@/blocs/about-block";
import { HeroBlock } from "@/blocs/hero-block";
import { ExperienceBlock } from "@/blocs/experiences-block";
import ProjectsBlock from "@/blocs/projects-block";
import ContactBlock from "@/blocs/contact-block";
import { sanityClient } from "@/lib/sanity";

async function getData() {
  const queryHeroSection = `*[_type== "hero"] {badge, name}[0]`
  const queryAboutSection = `*[_type== "about"] {title, description}[0]`
  const queryExperienceSection = `*[_type== "experienceSection"] {title, description}[0]`
  const queryExperience = `*[_type== "experience"] {title, link, thumbnail}`
  const queryProjects = `*[_type== "about"] {title, description}`

  const query = `{
    "hero": ${queryHeroSection},
    "about": ${queryAboutSection},
    "experience": ${queryExperienceSection},
    "experienceProjects": ${queryExperience},
  }`

  const data = await sanityClient.fetch(query)

  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex flex-col bg-primary-two-500">

      {/* Hero */}
      <div className="w-full" id="hero">
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
