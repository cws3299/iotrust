import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import type { ServiceItemDto, ServiceItem } from "../type/service";
import { normalizeCtx, shouldDisplay } from "../lib/fallback";
import { toServiceItem } from "../lib/serviceAdapter";
import { getServicesData } from "../api/getServiceDatas";

type Opts = Omit<
  UseSuspenseQueryOptions<ServiceItemDto[], Error, ServiceItem[]>,
  "queryKey" | "queryFn" | "select"
>;

export const useGetServices = (options?: Opts) => {
  const ctx = normalizeCtx();

  return useSuspenseQuery<ServiceItemDto[], Error, ServiceItem[]>({
    queryKey: ["services", ctx.language, ctx.os, ctx.env],
    queryFn: getServicesData,
    select: (rows) => {
      const list = Array.isArray(rows) ? rows : [];
      return list
        .filter((dto) => shouldDisplay(dto.displayCondition, ctx))
        .map((dto) => toServiceItem(dto, ctx.language));
    },
    ...options,
  });
};
