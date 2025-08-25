import { Suspense } from "react";
import { BookMarkList } from "./BookMarkList";
import { BookMarkListSkeleton } from "./BookMarkListSkeleton";
import { ErrorBoundary } from "react-error-boundary";
import { BookMarkErrorFallback } from "./BookMarkErrorFallback";
import { useQueryClient } from "@tanstack/react-query";

export function BookMark() {
  const queryClient = useQueryClient();

  return (
    <section className="w-full">
      <header className="px-4 h-10 flex items-center border-b text-[15px] font-medium">
        즐겨찾기
      </header>
      <ErrorBoundary
        FallbackComponent={BookMarkErrorFallback}
        onReset={() => {
          queryClient.resetQueries({ queryKey: ["bookmarks"], exact: false });
        }}
      >
        <Suspense fallback={<BookMarkListSkeleton />}>
          <BookMarkList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
