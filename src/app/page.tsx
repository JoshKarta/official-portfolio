import PricingBlock from "@/blocs/pricing-block";
import SubscribeForm from "@/components/subscribe-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pt-24">
      <PricingBlock />
      {/* NewsLetter */}
      <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-4 lg:gap-10 w-full py-16">
        <div className="p-6 grid place-items-center order-2 lg:order-1">
          <SubscribeForm />
        </div>
        <div className="p-6 order-1 lg:order-2">
          <Image
            src="/newsletter.jpg"
            alt="newsletter"
            width={6000}
            height={4000}
          />
        </div>
      </div>
    </main>
  );
}
