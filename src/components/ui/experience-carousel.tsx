import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

// Example data array - replace with your actual data
const items = [
  { id: 1, title: "Card 1", content: "Detailed content for card 1" },
  { id: 2, title: "Card 2", content: "Detailed content for card 2" },
  { id: 3, title: "Card 3", content: "Detailed content for card 3" },
  { id: 4, title: "Card 4", content: "Detailed content for card 4" },
];

export function ExperienceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      updateButtons();
    });

    emblaApi.on("init", updateButtons);
    emblaApi.on("reInit", updateButtons);

    updateButtons();
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  // Animation variants for fade-up with stagger
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5, delay: i * 0.1 },
        y: { duration: 0.5, delay: i * 0.25 },
      },
    }),
  };

  // Separate variants for the selected card effect
  const getCardStyle = (index: number) => ({
    opacity: index === selectedIndex ? 1 : 0.7,
    scale: index === selectedIndex ? 1 : 0.95,
    filter: index === selectedIndex ? "blur(0px)" : "blur(4px)",
  });

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex py-8">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={`embla__slide min-w-0 flex-[0_0_80%] px-2`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                style={getCardStyle(index)}
                transition={{
                  scale: { duration: 0.3 },
                  filter: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full cursor-pointer shadow-lg transition-shadow hover:shadow-xl">
                      <CardContent className="flex h-48 items-center justify-center">
                        <p className="text-lg font-semibold">{item.title}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="p-4">
                      <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
                      <p>{item.content}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === selectedIndex ? "bg-secondary-two" : "bg-zinc-200"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
        >
          <IconChevronLeft className="icon-size" />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={!canScrollNext}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
        >
          <IconChevronRight className="icon-size" />
        </Button>
      </div>
    </div>
  );
}
