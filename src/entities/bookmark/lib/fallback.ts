import type { DisplayCondition, Env, Language, OS } from "../type/bookmark";
import { getSelectConfig } from "@/shared/lib/utils";

export type RuntimeCtx = { language: Language; os: OS; env: Env };

const includes = <T extends string>(arr: readonly T[], v: T) => arr.includes(v);

export const shouldDisplay = (dc: DisplayCondition, ctx: RuntimeCtx) =>
  includes(dc.language, ctx.language) &&
  includes(dc.os, ctx.os) &&
  includes(dc.env, ctx.env);

export const normalizeCtx = (): RuntimeCtx => {
  const raw = getSelectConfig() as any;

  const language: Language = raw?.language === "ko" ? "ko" : "en";

  const osStr = String(raw?.os ?? "").toLowerCase();
  const os: OS = osStr.includes("ios") ? "ios" : "android";
  const envStr = String(raw?.env ?? "dev").toLowerCase();
  const env: Env =
    envStr === "stage" ? "stage" : envStr === "prod" ? "prod" : "dev";

  return { language, os, env };
};
