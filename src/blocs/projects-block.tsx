"use client"

import Heading from "@/components/heading";
import HyperUiCard from "@/components/hyper-ui-card";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/variants";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import RichText from "@/components/rich-text";

export type TPropject = {
    name: string
    introduction: any
    url: string
    description: any
    thumbnail: any
}

export default function ProjectsBlock({ projects }: any) {

    return (
        <div className="container-screen">
            <Heading title="Projects">
                These are some of my personal projects that I build myself&#46;
            </Heading>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((item: TPropject, i: number) => (
                    <motion.div key={i}
                        variants={fadeUp}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="animate"
                        transition={{ delay: .25 * i, duration: 0.75, type: "spring" }}
                    >
                        <Drawer>
                            <DrawerTrigger className={cn("focus:!ring-0 focus:border-none", i % 2 === 0 && "sm:translate-y-4")}>
                                <HyperUiCard item={item} />
                            </DrawerTrigger>
                            <DrawerContent className="min-h-dvh text-zinc-100 bg-primary-two-500 border-primary-two-500">
                                <DrawerHeader className="text-left mt-4">
                                    <DrawerTitle>{item.name}</DrawerTitle>
                                    <DrawerDescription>
                                        <RichText value={item.introduction} />
                                    </DrawerDescription>
                                </DrawerHeader>
                                <ScrollArea className="h-full">
                                    <div className="w-full px-4 mt-2 grid lg:grid-cols-3 gap-4 text-muted-foreground text-sm">
                                        <div className="relative h-56 lg:h-96 w-full lg:col-span-2">
                                            <Image src={urlFor(item.thumbnail).url()} fill alt="img" className="object-cover rounded-lg" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <RichText value={item.description} />
                                            <Button asChild className="rounded-full w-full group" variant={"outline"}>
                                                <Link href={item.url} target="_blank" className="w-fit">
                                                    Visit <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 duration-150 ease-linear transition" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollArea>
                            </DrawerContent>
                        </Drawer>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
