"use client"
import SubscribeForm from '@/components/subscribe-form'
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeUp } from '@/constants/variants';

export default function NewsBlock() {
    return (
        <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: .75 }}
            className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-4 lg:gap-10 w-full py-16">
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
    )
}
