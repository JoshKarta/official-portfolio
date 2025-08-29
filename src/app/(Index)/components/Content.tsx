"use client";
import SummaryCards from "@/components/summary-cards";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import AboutJourney from "@/components/about-journey";

export default function Content() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      // Scroll event handler - can be used for scroll-based animations
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Listen for dialog state changes to pause/resume Lenis
    const handleDialogOpen = () => {
      lenis.stop();
    };

    const handleDialogClose = () => {
      lenis.start();
    };

    // Add event listeners for dialog state
    document.addEventListener("dialog-open", handleDialogOpen);
    document.addEventListener("dialog-close", handleDialogClose);

    return () => {
      lenis.destroy();
      document.removeEventListener("dialog-open", handleDialogOpen);
      document.removeEventListener("dialog-close", handleDialogClose);
    };
  }, []);

  return (
    <div className="space-y-4 px-4 pb-8">
      <SummaryCards />
      <AboutJourney />
    </div>
  );
}
