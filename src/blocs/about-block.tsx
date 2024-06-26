"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeUp } from "@/constants/variants";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";


export default function AboutBlock({ data }: any) {
    return (
        <div
            className="w-full dark:bg-black bg-primary-two-600 dark:bg-grid-white/[0.1] bg-grid-slate-500/[0.1] relative flex flex-col justify-center py-16">
            {/* Radial gradient for the container to give a faded look */}
            <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary-two-600 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

            {/* Content */}
            <motion.div
                variants={fadeUp}
                initial="initial"
                viewport={{ once: true }}
                whileInView="animate"
                transition={{ duration: .75 }}
                className="container-screen text-zinc-100 w-full">
                <h3 className="text-3xl font-bold z-20">
                    {data.title}
                </h3>
                {/* <p className="text-zinc-100 mt-2 z-20">Software Engineer based in Paramaribo, Suriname. <br />
                    Formerly at TAD as &lt;Front-End Developer/&gt;.</p> */}
                <div className="w-full mt-2 z-20 prose text-zinc-100 prose-strong:font-semibold prose-strong:text-zinc-100">
                    <PortableText value={data.description} />
                </div>
                <div className="relative flex w-full justify-center overflow-hidden h-[550px]">
                    <Image src={urlFor(data.image).url()} alt="img" fill className="h-full w-full rounded-lg border border-primary-two-600 object-cover mt-8" />
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero-section"
                        className="h-full w-full rounded-lg border border-primary-two-600 object-cover mt-8"
                    />
                    <div className="from-1% absolute inset-0 bg-gradient-to-t from-primary-two-600 to-25%" />
                </div>
                <div className="flex justify-center mt-4">
                    <Button asChild className="rounded-full text-zinc-100 bg-transparent" variant={"outline"}><Link href="/about">Read more</Link></Button>
                </div>
            </motion.div>
        </div>
    )
}
