import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TimelineComponent from "./timeline-component";
import { ExperienceCarousel } from "./ui/experience-carousel";

export default function AboutJourney() {
  return (
    <div className="grid gap-4 lg:grid-cols-6">
      {/* Projects Card */}
      <div className="col-span-6 lg:col-span-4">
        <Card className="!border-neutral-300 bg-gradient-to-r from-zinc-50 from-60% to-white">
          <CardHeader>
            <CardTitle className="text-secondary-two">
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ExperienceCarousel />
          </CardContent>
        </Card>
      </div>

      {/* Journey Card */}
      <div className="col-span-6 lg:col-span-2">
        <Card className="!border-neutral-300 bg-gradient-to-r from-white to-zinc-50">
          <CardHeader>
            <CardTitle className="text-secondary-two lg:text-end">
              Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
