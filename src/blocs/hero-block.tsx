"use client"
import { TypewriterEffect } from "@/components/typewriter-effect";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Circle, Square, Triangle, X } from "lucide-react";

export function HeroBlock() {
    // https://dribbble.com/shots/16712560-Website-UI
    const words = [{ text: "Kartadiwirja" }, { text: "Josh" }]
    return (
        <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
            <div className="container-screen text-white py-20 min-h-screen grid">
                <div className="grid md:grid-cols-2">
                    <div className="w-full relative flex flex-col justify-center gap-8">
                        <X className="absolute right-14 top-14 text-zinc-300" />
                        <Square className="absolute left-2/3 top-2/3 text-accent-two" />
                        <Triangle className="hidden lg:inline-block absolute bottom-0 text-zinc-300" />
                        <div className="flex items-center gap-2">
                            <Badge className="w-fit animate-pulse flex items-center gap-2">Software Engineer <div className="h-2 w-2 rounded-full bg-foreground" /></Badge>
                            <Separator className="w-12" />
                        </div>
                        <TypewriterEffect words={words} />
                        {/* <h1 className="capitalize font-bold text-5xl tracking-wider">Kartadiwirja <br /> Josh</h1> */}
                        <Button className="hidden md:inline-block w-fit rounded-full">Read More</Button>
                    </div>
                    <div className="relative h-full">
                        <Circle className="absolute bottom-0 right-0 text-zinc-300" />
                        <Triangle className="hidden md:inline-block absolute top-8 inset-x-1/2 text-zinc-300" />
                        <img src="/graph.png" alt="svg" className="absolute inset-0 z-0" />
                        <div className="grid grid-cols-2 gap-4 mt-10 md:mt-28">
                            <Card className="flex-1 w-full row-span-2 shadow-md shadow-slate-500 z-20">
                                <CardHeader></CardHeader>
                                <CardContent></CardContent>
                            </Card>
                            <Card className="flex-1 w-full shadow-md shadow-slate-500">
                                <CardHeader></CardHeader>
                                <CardContent></CardContent>
                            </Card>
                            <Card className="flex-1 w-full shadow-md shadow-slate-500 z-20">
                                <CardHeader></CardHeader>
                                <CardContent></CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/waves.png" alt="waves" className="w-full h-fit mt-24 md:mt-0" />
        </motion.div>
    );
}
