"use client";
import SummaryCards from "@/components/ui/summary-cards";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function Content() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {
      console.log(e);
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="px-4">
      <SummaryCards />
    </div>
  );
}
