"use client"
import AboutBlock from "@/blocs/about-block";
import { HeroBlock } from "@/blocs/hero-block";
import { ExperienceBlock } from "@/blocs/experiences-block";
import ProjectsBlock from "@/blocs/projects-block";
import ContactBlock from "@/blocs/contact-block";
import { useEffect } from "react";
import Lenis from 'lenis'
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/actions/fetchSanity";

export default function Home() {
  const { data, isFetched } = useQuery({
    queryKey: [
      "data"
    ],
    queryFn: getData
  })

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', (e: any) => {
      console.log(e)
    })
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])


  if (isFetched) return (
    <main className="flex flex-col bg-primary-two-500">

      {/* Hero */}
      <div className="w-full" id="hero">
        <HeroBlock data={data.hero} />
      </div>

      {/* About */}
      <div className="w-full" id="about">
        <AboutBlock data={data.about} />
      </div>

      {/* Services */}
      {/* <div className="w-full" id="services">
        <BentobBlock />
      </div> */}

      {/* Experience */}
      <div className="pb-16" id="experience">
        <ExperienceBlock experience={data.experienceProjects} experienceSection={data.experience} />
      </div>

      {/* Projects */}
      <div className="w-full py-16 bg-primary-two-600" id="projects">
        <ProjectsBlock projects={data.projects} />
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
