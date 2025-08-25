import { BookMarkItemSkeleton } from "./BookMarkItemSkeleton";

// 즐겨찾기가 몇개일지 몰라서 기존 1개로 설정
export function BookMarkListSkeleton({ count = 1 }: { count?: number }) {
  return (
    <ul className="animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <BookMarkItemSkeleton key={i} />
      ))}
    </ul>
  );
}
