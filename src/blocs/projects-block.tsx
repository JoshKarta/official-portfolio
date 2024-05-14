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

export default function ProjectsBlock() {
    const projects = [
        {
            img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            name: "Priority",
            url: "#",
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus ariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        },
        {
            img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            name: "Priority",
            url: "#",
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus ariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.Molestias explicabo corporis voluptatem?"
        },
    ]
    return (
        <div className="container-screen">
            <Heading title="Projects">
                These are some of my personal projects that I build myself&#46;
            </Heading>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects.map((item, i) => (
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
                                    <DrawerDescription>{item.introduction}</DrawerDescription>
                                </DrawerHeader>
                                <ScrollArea className="h-full">
                                    <div className="w-full px-4 mt-2 grid lg:grid-cols-3 gap-4 text-muted-foreground text-sm">
                                        <img
                                            alt=""
                                            src={item.img}
                                            className="h-56 lg:h-96 w-full object-cover rounded-lg lg:col-span-2"
                                        />
                                        <div className="flex flex-col gap-4">
                                            <p>
                                                {item.description}
                                            </p>
                                            <Button asChild className="rounded-full !w-fit group" variant={"outline"}>
                                                <Link href={item.url} className="w-fit">
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
