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
import Lottie from "lottie-react";
import loadingAnimation from '@/constants/lottie-loading.json'

export default function Home() {
  const { data, status } = useQuery({
    queryKey: [
      "data"
    ],
    queryFn: getData
  })

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', (e: any) => {
    })
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])


  if (status === "pending") {
    return <div className="h-[calc(100vh_-_64px)] grid place-content-center">
      <div className="w-full h-1/2">
        <Lottie animationData={loadingAnimation} />
      </div>
    </div>
  }

  if (status === "success") return (
    <main className="flex flex-col bg-primary-two-500">

      {/* Hero */}
      <div className="w-full" id="hero">
        <HeroBlock data={data.hero} />
      </div>

      {/* About */}
      <div className="w-full" id="about">
        <AboutBlock data={data.about} journey={data.journey} skills={data.skills} />
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
