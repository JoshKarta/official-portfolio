import MaskedDiv from "@/components/ui/masked-div";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

export default function HeroBlockTwo({ data }: any) {
  return (
    <div className="container-screen flex h-dvh items-center justify-center overflow-x-hidden text-white">
      <div className="relative flex h-full w-full flex-col gap-4 py-20 md:flex-row lg:py-28">
        <MaskedDiv maskType="type-1" size={0.45} className="relative p-0">
          <Image
            fill
            src={urlFor(data.profilePicture).url()}
            alt="img"
            className="object-cover object-bottom"
          />
        </MaskedDiv>

        {/* Card */}
        <div
          className="scale-in group visible flex-1 flex-grow cursor-pointer md:self-end"
          style={{ transform: "transform: translateY(0px) scale(1)" }}
        >
          <div
            className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl group-hover:scale-105"
            style={{
              background:
                "url(https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&amp;q=80)",
              backgroundSize: "cover",
            }}
          >
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="bar-chart"
                  className="lucide lucide-bar-chart h-6 w-6 text-white"
                >
                  <line x1="12" x2="12" y1="20" y2="10"></line>
                  <line x1="18" x2="18" y1="20" y2="4"></line>
                  <line x1="6" x2="6" y1="20" y2="16"></line>
                </svg>
              </div>
              <h3 className="mb-2 font-sans text-lg font-medium text-white">
                Software Engineer
              </h3>
              <p className="mb-4 font-sans text-sm text-white/80">
                Extract insights from complex datasets instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
