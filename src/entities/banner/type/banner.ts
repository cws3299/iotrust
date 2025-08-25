export type Language = "en" | "ko";

export type LocalizedOptional = Partial<Record<Language, string>>;

export type ImageSet = {
  default?: string;
} & Partial<Record<Language, string>>;

export type BannerItemDto = {
  itemId: number;
  itemName: string;
  description?: LocalizedOptional;
  link?: LocalizedOptional;
  buttonText?: LocalizedOptional;
  image: ImageSet;
};

export type BannerItem = {
  itemId: number;
  itemName: string;
  description: string;
  link: string;
  buttonText: string;
  image: string;
};
