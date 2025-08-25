import axios from "axios";
import type { BookMarkItemDto } from "../type/bookmark";

export const getBookMarkDatas = async (): Promise<BookMarkItemDto[]> => {
  if (Math.random() > 0.5) {
    throw new Error();
  }

  const res = await axios.get("/mockupData/bookmarkList.json");
  const data = res.data;

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.data)) return data.data;

  return [];
};
