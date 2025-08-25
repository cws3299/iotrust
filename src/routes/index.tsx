import { Banner } from "@/entities/banner/ui/Banner";
import { BannerLoadingSpinner } from "@/entities/banner/ui/BannerLoadingSpinner";
import { BookMark } from "@/entities/bookmark/ui/BookMark";
import { Service } from "@/entities/service/ui/Service";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-full w-full overflow-hidden bg-[#ffffff] antialiased">
      <div className="h-full max-w-[375px] min-w-[375px] mx-auto bg-background flex flex-col">
        <header className="sticky top-0 z-50 h-[48px] mt-2 px-4 font-bold text-[20px] border-b">
          헤더영역
        </header>
        <div className="flex-1 overflow-y-scroll">
          <Suspense fallback={<BannerLoadingSpinner />}>
            <Banner />
          </Suspense>
          <BookMark />

          <Service />
        </div>
        <footer className="h-[48px] border-t bg-white z-50">
          <div className="mx-auto max-w-[480px] h-full flex items-center justify-center">
            푸터영역
          </div>
        </footer>
      </div>
    </div>
  );
}
