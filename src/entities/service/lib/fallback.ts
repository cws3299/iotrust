import type { DisplayCondition, Env, Language, OS } from "../type/service";
import { getSelectConfig } from "@/shared/lib/utils";

export type RuntimeCtx = {
  language: Language;
  os: OS;
  env: Env;
};

const includes = <T extends string>(arr: readonly T[], v: T) => arr.includes(v);

export const shouldDisplay = (dc: DisplayCondition, ctx: RuntimeCtx): boolean =>
  includes(dc.language, ctx.language) &&
  includes(dc.os, ctx.os) &&
  includes(dc.env, ctx.env);

export const normalizeCtx = (): RuntimeCtx => {
  const raw = getSelectConfig() as any;
  const language = raw?.language === "ko" ? "ko" : "en";
  let os: OS = "android";

  if (String(raw?.os).toLowerCase().includes("ios")) {
    os = "ios";
  } else if (String(raw?.os).toLowerCase().includes("android")) {
    os = "android";
  }

  const e = String(raw?.env).toLowerCase();
  const env: Env = e === "stage" ? "stage" : e === "prod" ? "prod" : "dev";

  return { language, os, env };
};
