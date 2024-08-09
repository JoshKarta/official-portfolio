"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/constants/variants";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import BlurFade from "@/components/magicui/blur-fade";

// Timeline
import { useInView } from 'react-intersection-observer'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
                <div className="relative flex w-full justify-center h-[550px] overflow-hidden">
                    <Image src={urlFor(data.image).url()} alt="img" fill className="h-full w-full rounded-lg border border-primary-two-600 object-cover mt-8 object-left lg:object-cover hover:scale-110 hover-effect" />
                    <div className="from-1% absolute inset-0 bg-gradient-to-t from-primary-two-600 to-35%" />
                </div>
                <div className="flex justify-center mt-6">
                    <SkillsSheet />
                </div>

                <div className="mt-8">
                    <JourneyTimeline />
                </div>
            </motion.div>
        </div>
    )
}

function SkillsSheet() {
    const images = Array.from({ length: 9 }, (_, i) => {
        const isLandscape = i % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
    });

    return (
        <Sheet>
            <SheetTrigger asChild>
                {/* Button says "< Read more />" */}
                <Button className="rounded-full text-zinc-100 bg-transparent " variant={"outline"}>&lt; Skills &#47;&gt;</Button>
            </SheetTrigger>
            <SheetContent className="bg-primary-two-600 border-primary-two-600 rounded-l-xl text-zinc-100 sm:max-w-4xl px-8">
                <Card className="text-zinc-100 bg-transparent mt-8">
                    <CardHeader>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="columns-2 gap-4 sm:columns-3">
                            {images.map((imageUrl, idx) => (
                                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                                    <img
                                        className="mb-4 size-full rounded-lg object-contain"
                                        src={imageUrl}
                                        alt={`Random stock image ${idx + 1}`}
                                    />
                                </BlurFade>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </SheetContent>
        </Sheet>
    )
}

function JourneyTimeline() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref} id="journey">
            <VerticalTimeline>
                <VerticalTimelineElement
                    visible={inView}
                    contentStyle={{ background: '#f4f4f5', color: 'rgb(39 39 42)' }}
                    contentArrowStyle={{ borderRight: '7px solid #f4f4f5' }}
                    date="2011 - present"
                    iconStyle={{ background: '#003566', color: '#fff' }}
                    // icon={<WorkIcon />}
                    dateClassName="text-zinc-50"
                >
                    <h3 className="font-bold text-lg">Creative Director</h3>
                    <h4 className="text-zinc-500">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={inView}
                    contentStyle={{ background: '#f4f4f5', color: 'rgb(39 39 42)' }}
                    contentArrowStyle={{ borderRight: '7px solid #f4f4f5' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="font-bold text-lg">Creative Director</h3>
                    <h4 className="text-zinc-500">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}