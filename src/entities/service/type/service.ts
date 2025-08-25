type DisplayConditioon = {
  language: "all" | "ko" | "en";
  os: "all" | "ios" | "android";
  env: "all" | "dev" | "stage" | "prod";
};

export type serviceItem = {
  id: number;
  name: string;
  icon: string;
  url?: string;
  englishDescription: string;
  koreanDescription: string;
  useableNetwork: string[];
  displayCondition: DisplayConditioon;
};
