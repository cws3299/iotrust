import { ServiceItemSkeleton } from "./ServiceItemSkeleton";

export function ServiceListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <ul className="animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <ServiceItemSkeleton key={i} />
      ))}
    </ul>
  );
}
