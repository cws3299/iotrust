import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/shared/components/ui/carousel";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import type { BannerItem } from "../type/banner";

type Props = {
  slides: BannerItem[];
  className?: string;
  intervalMs?: number;
};

export function BannerCarousel({
  slides,
  className,
  intervalMs = 5000,
}: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [index, setIndex] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({
      delay: intervalMs,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!slides?.length) return null;

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={() => autoplay.current?.stop()}
      onMouseLeave={() => autoplay.current?.play()}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplay.current]}
        opts={{
          loop: true,
          align: "start",
          dragFree: false,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {slides.map((s) => (
            <CarouselItem key={s.itemId} className="basis-full">
              <article className="relative h-40 overflow-hidden rounded-2xl select-none touch-pan-y cursor-grab active:cursor-grabbing bg-black">
                <img
                  src={s.image}
                  className="absolute inset-0 h-full w-full object-contain object-center pointer-events-none"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                  <div className="space-y-1">
                    {s.description && (
                      <p className="text-white/90 text-sm md:text-base">
                        {s.description}
                      </p>
                    )}
                  </div>

                  {s.buttonText && s.link && (
                    <div className="select-auto">
                      <a href={s.link}>
                        <Button size="lg" variant="secondary">
                          {s.buttonText}
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute right-4 bottom-3 text-white/90 text-xs">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}

export default BannerCarousel;
