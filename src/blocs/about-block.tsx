"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/variants";

export default function AboutBlock() {
    return (
        <motion.div variants={fadeUp}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            transition={{ duration: .75 }}
            className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col items-center justify-center py-16">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center px-8">
                <h3 className="text-3xl font-bold z-20">
                    About
                </h3>
                <p className="max-w-4xl text-center text-neutral-500 mt-2 z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Image className="mt-8 rounded-xl" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={600} height={200} />
            </div>
        </motion.div>
    )
}
