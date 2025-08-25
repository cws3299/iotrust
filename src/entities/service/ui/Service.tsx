import { Suspense } from "react";
import { ServiceList } from "./ServiceList";
import { ServiceListSkeleton } from "./serviceListSkeleton";
import { ServiceErrorFallback } from "./ServiceErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryClient } from "@tanstack/react-query";

export function Service() {
  const queryClient = useQueryClient();

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[40px] flex justify-start items-center border-b border-gray-200">
        목록
      </div>
      <ErrorBoundary
        FallbackComponent={ServiceErrorFallback}
        onReset={() => {
          queryClient.resetQueries({ queryKey: ["services"], exact: false });
        }}
      >
        <Suspense fallback={<ServiceListSkeleton />}>
          <ServiceList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
