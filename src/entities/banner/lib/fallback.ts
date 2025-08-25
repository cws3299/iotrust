import type { Language, LocalizedOptional, ImageSet } from "../type/banner";

export const pickByLocale = (
  dict: (LocalizedOptional & { default?: string }) | undefined,
  lang: Language
): string | undefined => {
  if (!dict) return undefined;

  const current = dict[lang];
  if (current) return current;

  if (dict.default) return dict.default;

  const other: Language = lang === "ko" ? "en" : "ko";
  return dict[other];
};

export const pickImage = (
  img: ImageSet,
  lang: Language
): string | undefined => {
  return pickByLocale(img, lang);
};
