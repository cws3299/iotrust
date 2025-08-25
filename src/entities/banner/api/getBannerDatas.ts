import axios from "axios";
import type { BannerItemDto } from "../type/banner";

export const getBannerDatas = async (): Promise<BannerItemDto[]> => {
  const res = await axios.get<BannerItemDto[]>("/mockupData/bannerList.json");
  return res.data;
};
