import { Suspense } from "react";
import { ServiceList } from "./ServiceList";
import { ServiceListSkeleton } from "./serviceListSkeleton";

export function Service() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[40px] flex justify-start items-center border-b border-gray-200">
        목록
      </div>
      <Suspense fallback={<ServiceListSkeleton />}>
        <ServiceList />
      </Suspense>
    </div>
  );
}
