// service랑 동일한 타입 구조지만, 명시적으로 나누기 위해 새로 파일 작성
export type Language = "ko" | "en";
export type OS = "ios" | "android";
export type Env = "dev" | "stage" | "prod";

export type DisplayCondition = {
  language: Language[];
  os: OS[];
  env: Env[];
};

export type BookMarkItemDto = {
  id: number;
  name: string;
  icon: string;
  url?: string;
  englishDescription: string;
  koreanDescription: string;
  useableNetwork: string[];
  displayCondition: DisplayCondition;
};

export type BookMarkItem = {
  id: number;
  name: string;
  url: string;
  icon: string;
  description: string;
};
