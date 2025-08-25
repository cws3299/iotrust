type Language = "ko" | "en";
type OS = "ios" | "android";
type Env = "dev" | "stage" | "prod";

export type DisplayCondition = {
  language: Language[];
  os: OS[];
  env: Env[];
};

export type ServiceItem = {
  id: number;
  name: string;
  icon: string;
  url?: string;
  englishDescription: string;
  koreanDescription: string;
  useableNetwork: string[];
  displayCondition: DisplayCondition;
};
