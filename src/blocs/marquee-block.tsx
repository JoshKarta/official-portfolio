"use client"
import { marqueeImages } from "@/constants/marquee-images";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/variants";

export default function MarqueeBlock() {
    return (
        <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: .75 }}
            className="pt-16 mx-auto max-w-screen-xl w-full px-8">
            <h3 className="text-center text-3xl  font-semibold">
                Our trusted partners
            </h3>
            <Marquee autoFill className="w-full mt-12">
                {marqueeImages.map((image, i) => (
                    <Image src={image} key={i} alt="" width={100} height={100} className="ml-20" />
                ))}
            </Marquee>
        </motion.div>
    )
}
