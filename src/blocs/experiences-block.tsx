"use client";
import { HeroParallax } from "@/components/hero-parallex";
import React from "react";

type Props = {
    experienceSection: {
        title: string
        description: any
    },
    experience: {
        title: string
        link: string
        thumbnail: any
    }[]
}

export function ExperienceBlock({ experience, experienceSection }: Props) {
    return <HeroParallax products={experience} text={experienceSection} />;
}

// export const products = [
//     {
//         title: "Smart ConneXXionZ N.V.",
//         link: "https://www.smartconnexxionz.com/",
//         thumbnail:
//             "/smartconnexxionz.png",
//     },
//     {
//         title: "Kings Enterprises N.V",
//         link: "https://www.kings.sr/",
//         thumbnail:
//             "/kings.png",
//     },
//     {
//         title: "TAD",
//         link: "https://tad.sr/",
//         thumbnail:
//             "/tad.png",
//     },

//     {
//         title: "Queens Hotel",
//         link: "https://www.queenshotelsuriname.com/",
//         thumbnail:
//             "/queenshotel.png",
//     },
// ];
