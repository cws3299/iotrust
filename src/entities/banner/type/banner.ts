type Language = "en" | "ko";

type LocalizedOptional = Partial<Record<Language, string>>;

type ImageSet = {
  default?: string;
} & Partial<Record<Language, string>>;

export type BannerItem = {
  itemId: number;
  itemName: string;
  description?: LocalizedOptional;
  link?: LocalizedOptional;
  buttonText?: LocalizedOptional;
  image: ImageSet; // 이미지는 반드시 존재
  isBookmark: boolean;
};
