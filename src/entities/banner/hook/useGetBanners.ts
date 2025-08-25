import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { getBannerDatas } from "../api/getBannerDatas";
import type { BannerItem, BannerItemDto, Language } from "../type/banner";
import { getSelectConfig } from "@/shared/lib/utils";
import { convertToClientBannerModel } from "../lib/bannerAdapter";

type Opts = Omit<
  UseSuspenseQueryOptions<BannerItemDto[], Error, BannerItem[]>,
  "queryKey" | "queryFn" | "select"
>;

export const useGetBanners = (options?: Opts) => {
  const lang = (getSelectConfig().language as Language) ?? "ko";

  return useSuspenseQuery<BannerItemDto[], Error, BannerItem[]>({
    queryKey: ["banner", lang],
    queryFn: getBannerDatas,
    select: (rows) => rows.map((r) => convertToClientBannerModel(r, lang)),
    ...options,
  });
};
