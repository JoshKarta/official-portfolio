"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function HeroBlock() {
    // https://dribbble.com/shots/16712560-Website-UI

    return (
        <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="container-screen text-white py-20 min-h-screen grid">
            <div className="grid md:grid-cols-2">
                <div className="w-full flex flex-col justify-center gap-8">
                    <div className="flex items-center gap-4">
                        <Badge className="w-fit flex items-center gap-2">Software Engineer <div className="h-2 w-2 animate-pulse rounded-full bg-foreground" /></Badge>
                        <Separator className="w-14" />
                    </div>
                    <h1 className="capitalize font-bold text-5xl tracking-wider">Kartadiwirja <br /> Josh</h1>
                    <Button className="w-fit rounded-full">Read More</Button>
                </div>
                <div className="relative h-full">
                    <img src="/graph.png" alt="svg" className="absolute inset-0 z-0" />
                    <div className="grid grid-cols-2 gap-4 mt-28">
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
        </motion.div>
    );
}
