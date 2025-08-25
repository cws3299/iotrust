import Skeleton from "react-loading-skeleton";

export function BookMarkItemSkeleton() {
  return (
    <li className="px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl overflow-hidden ring-1 ring-black/5 bg-white grid place-items-center">
          <Skeleton width={24} height={24} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <Skeleton height={16} width={140} />
          </div>
          <Skeleton height={12} width="70%" />
        </div>
        <div className="shrink-0 ml-2">
          <div className="h-6 w-6 rounded-md bg-muted grid place-items-center">
            <Skeleton width={12} height={12} />
          </div>
          <div className="mt-1">
            <Skeleton width={24} height={10} />
          </div>
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-border" />
    </li>
  );
}
