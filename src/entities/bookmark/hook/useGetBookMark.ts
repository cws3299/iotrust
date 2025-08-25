import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { BookMarkItemDto, BookMarkItem } from "../type/bookmark";
import { getBookMarkDatas } from "../api/getBookMarkDatas";
import { toBookMarkItem } from "../lib/bookmarkAdapter";
import { normalizeCtx, shouldDisplay } from "../lib/fallback";

type Opts = Omit<
  UseSuspenseQueryOptions<BookMarkItemDto[], Error, BookMarkItem[]>,
  "queryKey" | "queryFn" | "select"
>;

export const useGetBookMark = (options?: Opts) => {
  const ctx = normalizeCtx();

  return useSuspenseQuery<BookMarkItemDto[], Error, BookMarkItem[]>({
    queryKey: ["bookmarks", ctx.language, ctx.os, ctx.env],
    queryFn: getBookMarkDatas,
    select: (rows) =>
      (Array.isArray(rows) ? rows : [])
        .filter((dto) => shouldDisplay(dto.displayCondition, ctx))
        .map((dto) => toBookMarkItem(dto, ctx.language)),
    retry: 2,
    ...options,
  });
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => id,
    onMutate: async (id) => {
      const keys = queryClient
        .getQueryCache()
        .findAll({ queryKey: ["bookmarks"] })
        .map((q) => q.queryKey);
      const prev = keys.map(
        (k) => [k, queryClient.getQueryData<BookMarkItem[]>(k as any)] as const
      );
      keys.forEach((k) => {
        const cur = queryClient.getQueryData<BookMarkItem[]>(k as any) ?? [];
        queryClient.setQueryData<BookMarkItem[]>(
          k as any,
          cur.filter((x) => x.id !== id)
        );
      });
      return { prev };
    },
    onError: (_e, _id, ctx) => {
      ctx?.prev?.forEach(([k, v]) => {
        if (v) queryClient.setQueryData(k, v);
      });
    },
  });
};
