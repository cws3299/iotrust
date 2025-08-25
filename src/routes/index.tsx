import { Banner } from "@/entities/banner/ui/Banner";
import { BannerErrorFallback } from "@/entities/banner/ui/BannerErrorFallback";
import { BannerLoadingSpinner } from "@/entities/banner/ui/BannerLoadingSpinner";
import { BookMark } from "@/entities/bookmark/ui/BookMark";
import { Service } from "@/entities/service/ui/Service";
import { useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const queryClient = useQueryClient();
  return (
    <div className="h-full w-full overflow-hidden bg-[#ffffff] antialiased">
      <div className="h-full max-w-[375px] min-w-[375px] mx-auto bg-background flex flex-col">
        <header className="sticky top-0 z-50 h-[48px] mt-2 px-4 font-bold text-[20px] border-b">
          헤더영역
        </header>
        <div className="flex-1 overflow-y-scroll">
          <ErrorBoundary
            FallbackComponent={BannerErrorFallback}
            onReset={() => {
              queryClient.resetQueries({ queryKey: ["banner"] });
            }}
          >
            <Suspense fallback={<BannerLoadingSpinner />}>
              <Banner />
            </Suspense>
          </ErrorBoundary>
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
