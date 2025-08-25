import axios from "axios";
import type { ServiceItemDto } from "../type/service";

export const getServicesData = async (): Promise<ServiceItemDto[]> => {
  if (Math.random() > 0.5) {
    throw new Error();
  }

  const res = await axios.get<ServiceItemDto[]>("/mockupData/serviceList.json");
  return res.data;
};
