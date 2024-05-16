"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/constants/variants";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

export const HeroParallax = ({
    products,
    text
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
    text: {
        title: string
        description: any
    }
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(0, 5).reverse();
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: .75 }}
            ref={ref}
            className="h-[220vh] lg:h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header text={text} />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export const Header = ({ text }: {
    text: {
        title: string
        description: any
    }
}) => {
    return (
        <div className="max-w-7xl relative mx-auto px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-5xl font-bold text-zinc-100 dark:text-white">
                {text.title}
            </h1>
            {/* <p className="max-w-2xl text-sm md:text-base mt-8 text-zinc-100 dark:text-neutral-200">
                These are some projects I worked on when I was a intern at TAD. After my intern period I got affored a full-time position as a Front-End Developer within the company.That is were I learned a lot of new stuff and some design basics. I also worked on many Wordpress projects which one of them is Sharpview.
            </p> */}
            <div className="text-zinc-100 mt-8 prose">
                <PortableText value={text.description} />
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-md overflow-hidden"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl"
                target="_blank"
            >
                <Image
                    src={urlFor(product.thumbnail).url()}
                    height="1440"
                    width="1440"
                    className="object-cover object-left absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
