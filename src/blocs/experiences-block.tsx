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
