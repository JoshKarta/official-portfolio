"use client"

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/variants";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import RichText from "@/components/rich-text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export type TPropject = {
    name: string
    introduction: any
    url: string
    description: any
    thumbnail: any
    mockup: any
    image: any
}

export default function ProjectsBlock({ projects }: any) {

    return (
        <div className="container-screen">
            <Heading title="Projects">
                These are some of my personal projects that I build myself&#46;
            </Heading>
            {/* <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((item: TPropject, i: number) => (
                    <motion.div key={i}
                        variants={fadeUp}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="animate"
                        transition={{ delay: .25 * i, duration: 0.75, type: "spring" }}
                    >
                        <Drawer>
                            <DrawerTrigger className={cn("focus:!ring-0 focus:border-none w-full", i % 2 === 0 && "sm:translate-y-4")}>
                                <HyperUiCard item={item} />
                                <Card className="text-zinc-100 hover:-translate-y-4 hover-effect bg-accent-two/50">
                                    <div className="w-full flex justify-center py-4">
                                        <Image src={urlFor(item.thumbnail).url()} alt={item.name} width={100} height={50} />
                                    </div>
                                    <CardContent>
                                        <div>
                                            <p className="font-semibold text-lg">{item.name}</p>
                                            <p className="text-sm">
                                                <RichText value={item.introduction} className="line-clamp-2" />
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
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
                                            <Image src={urlFor(item.thumbnail).url()} fill alt="img" className="object-contain rounded-lg" />
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
            </div> */}
            <div className="grid gap-6 mt-10">
                {projects.map((item: TPropject, i: number) => {
                    console.log(item)
                    return <motion.div key={i}
                        variants={fadeUp}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="animate"
                        transition={{ delay: .25 * i, duration: 0.75, type: "spring" }}
                    >
                        <Card className="group hover:scale-105 hover-effect hover:shadow-lg hover:shadow-accent-two/75 bg-accent-two/50">
                            <CardContent className="px-8 py-12 text-zinc-100">
                                {/* Text Block */}
                                <div className={cn("flex flex-col-reverse justify-between items-center gap-8", i === 0 || i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
                                    <div className="flex flex-col gap-4 flex-1">
                                        <p className="font-medium text-lg">{item.name}</p>
                                        <p className="text-sm">
                                            <RichText value={item.description} />
                                        </p>
                                        <Button variant={"outline"} className="lg:w-fit flex items-center" asChild>
                                            <Link href={item.url}>
                                                View <ExternalLink className="h-4 w-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                    {/* Device */}
                                    <div className="flex-1 flex w-full justify-center">
                                        <div className="relative w-[300px] h-[150px] lg:w-[400px] lg:h-[200px] rotate-3 group-hover:rotate-0 hover-effect drop-shadow-[0_10px_8px_rgba(0,53,102,1)]">
                                            <Image src={'/macbook-mockup.png'} fill alt="thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                })}
            </div>
        </div>
    )
}
