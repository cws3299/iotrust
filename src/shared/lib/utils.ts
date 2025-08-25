import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSelectConfig() {
  return {
    language: "ko",
    os: "android",
    env: "dev",
  };
}
