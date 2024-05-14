"use client"
import { TypewriterEffect } from "@/components/typewriter-effect";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, Circle, Square, Triangle, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/constants/variants";

export function HeroBlock() {
    // https://dribbble.com/shots/16712560-Website-UI
    const words = [{ text: "Kartadiwirja" }, { text: "Josh" }]
    const images = ["/me-coding.jpeg", "<Code new />", "/code.jpeg"]
    return (
        <div>
            <div className="container-screen text-white py-20 min-h-screen grid">
                <div className="grid md:grid-cols-2">
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="animate"
                        transition={{ duration: .75, type: 'spring' }}
                        className="w-full relative flex flex-col justify-center gap-8">
                        <X className="absolute right-14 top-14 text-zinc-300" />
                        <Square className="absolute left-2/3 top-2/3 text-accent-two z-0" />
                        <Triangle className="hidden lg:inline-block absolute bottom-0 text-zinc-300" />
                        <div className="flex items-center gap-2">
                            <Badge className="w-fit animate-pulse flex items-center gap-2">Software Engineer <div className="h-2 w-2 rounded-full bg-foreground" /></Badge>
                            <Separator className="w-12" />
                        </div>
                        <TypewriterEffect words={words} className="h-12 z-20" />
                        {/* <h1 className="capitalize font-bold text-5xl tracking-wider">Kartadiwirja <br /> Josh</h1> */}
                        <Button className="hidden md:flex w-fit rounded-full">Read More <ArrowRight className="h-4 w-4 ml-2" /></Button>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="animate"
                        transition={{ duration: .75, delay: .15, type: "spring" }}
                        className="relative h-full">
                        <Circle className="absolute bottom-0 right-0 text-zinc-300" />
                        <Triangle className="hidden md:inline-block absolute top-8 inset-x-1/2 text-zinc-300" />
                        <img src="/graph.png" alt="svg" className="absolute inset-0 z-10" />
                        <div className="grid grid-cols-2 gap-4 mt-10 md:mt-28">
                            {images.map((item, i) => (
                                // <Card key={i} className={cn("flex-1 w-full shadow-md shadow-slate-500 z-20 p-0 overflow-hidden border-slate-500 !h-fit", i === 0 && "row-span-2")}>
                                //     <CardContent className="p-0">
                                //         <img src={item} alt="" className={cn("w-full h-[400px] object-cover")} />
                                //     </CardContent>
                                // </Card>
                                <Card key={i} className={cn("flex-1 w-full shadow-md shadow-slate-500 z-20 ", i === 0 ? "row-span-2" : i === 1 ? "!z-0" : "")}>
                                    <CardHeader></CardHeader>
                                    <CardContent></CardContent>
                                </Card>
                            ))}
                            {/* <Card className="flex-1 w-full shadow-md shadow-slate-500">
                                <CardHeader></CardHeader>
                                <CardContent></CardContent>
                            </Card>
                            <Card className="flex-1 w-full shadow-md shadow-slate-500 z-20">
                                <CardHeader></CardHeader>
                                <CardContent></CardContent>
                            </Card> */}
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <img src="/waves.png" alt="waves" className="w-full h-fit mt-24 md:mt-0" /> */}
        </div>
    );
}
