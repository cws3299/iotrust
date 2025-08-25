import { Suspense } from "react";
import { BookMarkList } from "./BookMarkList";
import { BookMarkListSkeleton } from "./BookMarkListSkeleton";

export function BookMark() {
  return (
    <section className="w-full">
      <header className="px-4 h-10 flex items-center border-b text-[15px] font-medium">
        즐겨찾기
      </header>
      <Suspense fallback={<BookMarkListSkeleton />}>
        <BookMarkList />
      </Suspense>
    </section>
  );
}
