import type { ServiceItemDto, ServiceItem, Language } from "../type/service";

export const toServiceItem = (
  dto: ServiceItemDto,
  lang: Language
): ServiceItem => {
  const description =
    lang === "ko"
      ? dto.koreanDescription || dto.englishDescription || ""
      : dto.englishDescription || dto.koreanDescription || "";

  return {
    id: dto.id,
    name: dto.name,
    description,
    url: dto.url ?? "",
    icon: dto.icon,
  };
};
