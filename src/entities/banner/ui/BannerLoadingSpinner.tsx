import { ClipLoader } from "react-spinners";
import { cn } from "@/shared/lib/utils";

export function BannerLoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-40 rounded-2xl bg-muted/60 flex items-center justify-center",
        className
      )}
    >
      <ClipLoader size={24} color="#666" />
    </div>
  );
}
