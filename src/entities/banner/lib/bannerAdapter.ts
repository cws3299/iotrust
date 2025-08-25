import type { BannerItemDto, BannerItem, Language } from "../type/banner";
import { pickByLocale, pickImage } from "./fallback";
import { getSelectConfig } from "@/shared/lib/utils";

export const convertToClientBannerModel = (
  dto: BannerItemDto,
  lang?: Language
): BannerItem => {
  const language: Language =
    lang ?? (getSelectConfig().language as Language) ?? "ko";

  return {
    itemId: dto.itemId,
    itemName: dto.itemName,
    description: pickByLocale(dto.description, language) ?? "",
    link: pickByLocale(dto.link, language) ?? "",
    buttonText: pickByLocale(dto.buttonText, language) ?? "",
    image: pickImage(dto.image, language) ?? "",
  };
};
