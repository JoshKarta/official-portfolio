import PricingBlock from "@/blocs/pricing-block";
import AboutBlock from "@/blocs/about-block";
import BentobBlock from "@/blocs/bento-block";
import { HeroBlock } from "@/blocs/hero-block";
import MarqueeBlock from "@/blocs/marquee-block";
import NewsBlock from "@/blocs/news-block";

export default function Home() {

  return (
    <main className="flex flex-col lg:pt-20">

      <div className="w-full" id="home">
        <HeroBlock />
      </div>

      <div className="w-full" id="about">
        <AboutBlock />
      </div>

      <div className="w-full" id="services">
        <BentobBlock />
      </div>

      {/* Pricing */}
      <div className="w-full bg-neutral-50/55 py-16">
        <PricingBlock />
      </div>

      {/* Marquees */}
      <div>
        <MarqueeBlock />
      </div>

      {/* NewsLetter */}
      <div>
        <NewsBlock />
      </div>
    </main>
  );
}
