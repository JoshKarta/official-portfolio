import React from "react";
import { Card, CardContent } from "./ui/card";
import { SpinningText } from "./ui/spinning-text";
import { GridBeams } from "./magicui/grid-beams";
import { AppWindow } from "lucide-react";
import {
  IconCertificate2,
  IconDeviceDesktop,
  IconMapPinCheck,
} from "@tabler/icons-react";

export default function SummaryCards() {
  const data = [
    {
      title: "Experience",
      value: "5 years",
      icon: <IconCertificate2 className="h-4 w-4" />,
    },
    {
      title: "Projects",
      value: "10 projects",
      icon: <AppWindow className="h-4 w-4" />,
    },
    {
      title: "Skills",
      value: "5",
      icon: <IconDeviceDesktop className="h-4 w-4" />,
    },
    {
      title: "Lorem Ipsum",
      value: "5",
      icon: <IconDeviceDesktop className="h-4 w-4" />,
    },
  ];
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Main card */}
      <Card className="relative overflow-hidden rounded-xl shadow-md">
        <GridBeams
          gridSize={0}
          gridColor="rgba(255, 255, 255, 0.2)"
          rayCount={20}
          rayOpacity={0.55}
          raySpeed={1.5}
          rayLength="40vh"
          gridFadeStart={5}
          gridFadeEnd={90}
          className="h-full w-full rounded-xl"
        >
          <CardContent className="pt-6">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
              {/* Text */}
              <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold text-white">
                  Josh Kartadiwirja.
                </h1>
                <p className="flex items-center gap-2 text-zinc-400">
                  <IconMapPinCheck className="icon-size" />
                  <span>Software Engineer</span> based in Paramaribo, Suriname
                </p>
              </div>

              {/* Photo */}
              <div className="relative h-40 w-40 overflow-hidden">
                {/* Central image/div */}
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300" />

                {/* Spinning text orbiting around the image */}
                <SpinningText
                  duration={25}
                  radius={10}
                  fontSize={0.7}
                  className="absolute inset-0 font-medium leading-none text-zinc-300"
                >
                  {`Software • Engineer • Software Engineer • `}
                </SpinningText>
              </div>
            </div>
          </CardContent>
        </GridBeams>
      </Card>

      {/* Summary cards */}
      <div className="flex flex-row flex-wrap gap-4">
        {data.map((item, i) => (
          <Card className="hover-card flex-1 !border-neutral-300" key={i}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 text-zinc-500">
                {item.icon}
                <p className="text-sm">{item.title}</p>
              </div>
              <h3 className="mt-2 text-xl font-bold text-secondary-two">
                {item.value}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
