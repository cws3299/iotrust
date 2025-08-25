import { useDeleteBookmark, useGetBookMark } from "../hook/useGetBookmark";
import { BookMarkCard } from "./BookMarkItem";

export function BookMarkList() {
  const { data: items } = useGetBookMark();
  const del = useDeleteBookmark();

  if (!items?.length) {
    return (
      <div className="px-4 py-6 text-sm text-muted-foreground">
        즐겨찾기가 비어있어요
      </div>
    );
  }

  return (
    <ul className="divide-y divide-border">
      {items.map((b) => (
        <li key={b.id}>
          <BookMarkCard
            icon={b.icon}
            name={b.name}
            url={b.url}
            onDelete={() => del.mutate(b.id)}
          />
        </li>
      ))}
    </ul>
  );
}
