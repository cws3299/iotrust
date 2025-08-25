import type { BookMarkItemDto, BookMarkItem, Language } from "../type/bookmark";

export const toBookMarkItem = (
  dto: BookMarkItemDto,
  lang: Language
): BookMarkItem => {
  const description =
    lang === "ko"
      ? dto.koreanDescription || dto.englishDescription || ""
      : dto.englishDescription || dto.koreanDescription || "";

  return {
    id: dto.id,
    name: dto.name,
    url: dto.url ?? "",
    icon: dto.icon,
    description,
  };
};
