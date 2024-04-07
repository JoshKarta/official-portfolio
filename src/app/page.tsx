"use client"
import PricingBlock from "@/blocs/pricing-block";
import SubscribeForm from "@/components/subscribe-form";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { marqueeImages } from "@/constants/marquee-images";
import AboutBlock from "@/blocs/about-block";
import BentobBlock from "@/blocs/bento-block";
import { HeroBlock } from "@/blocs/hero-block";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1, y: 0
    },
  }

  return (
    <main className="flex flex-col lg:pt-20 overflow-hidden bg-inherit">

      <div className="w-full">
        <HeroBlock />
      </div>

      <motion.div variants={variants} initial="hidden" whileInView="animate" transition={{ duration: 0.5, type: "spring" }} className="w-full" id="about">
        <AboutBlock />
      </motion.div>

      <motion.div variants={variants} initial="hidden" whileInView="animate" transition={{ duration: 0.5, type: "spring" }} className="w-full" id="service">
        <BentobBlock />
      </motion.div>

      {/* Pricing */}
      <motion.div variants={variants} initial="hidden" whileInView="animate" transition={{ duration: 0.5, type: "spring" }} className="w-full bg-neutral-50/55 py-16">
        <PricingBlock />
      </motion.div>

      {/* Marquees */}
      <motion.div variants={variants} initial="hidden" whileInView="animate" transition={{ duration: 0.5, type: "spring" }} className="pt-16 mx-auto max-w-screen-xl w-full px-8">
        <h3 className="text-center text-3xl  font-semibold">
          Our trusted partners
        </h3>
        <Marquee autoFill className="w-full mt-12">
          {marqueeImages.map((image, i) => (
            <Image src={image} key={i} alt="" width={100} height={100} className="ml-20" />
          ))}
        </Marquee>
      </motion.div>

      {/* NewsLetter */}
      <motion.div variants={variants} initial="hidden" whileInView="animate" transition={{ duration: 0.5, type: "spring" }} className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-4 lg:gap-10 w-full py-16">
        <div className="grid place-items-center order-2 lg:order-1 px-4">
          <SubscribeForm />
        </div>
        <div className="order-1 lg:order-2 px-4">
          <Image
            src="/newsletter.jpg"
            alt="newsletter"
            width={6000}
            height={4000}
          />
        </div>
      </motion.div>
    </main>
  );
}
