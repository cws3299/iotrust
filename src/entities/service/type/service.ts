export type Language = "ko" | "en";
export type OS = "ios" | "android";
export type Env = "dev" | "stage" | "prod";

export type DisplayCondition = {
  language: Language[];
  os: OS[];
  env: Env[];
};

export type ServiceItemDto = {
  id: number;
  name: string;
  icon: string;
  url?: string;
  englishDescription: string;
  koreanDescription: string;
  useableNetwork: string[];
  displayCondition: DisplayCondition;
};

export type ServiceItem = {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
};
