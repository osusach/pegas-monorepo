import { z } from "zod";
import { areaTags, seniorityTags } from "./../shared/types";

const preferenceSchema = z.object({
  seniority: z.enum(seniorityTags),
  areas: z.enum(areaTags).array(),
});
// TODO: fix this cuz window.localStorage and JSON.stringify / parse can throw, use errors as values
export function usePreferences() {
  const identifier = "preferences";
  return {
    set(seniority: unknown, areas: unknown) {
      const preferences = preferenceSchema.safeParse({ areas, seniority });
      if (preferences.error) return { ok: false };
      window.localStorage.setItem(identifier, JSON.stringify(preferences.data));
      return { ok: true };
    },
    get() {
      const values = window.localStorage.getItem(identifier);
      if (!values) return { ok: false };
      const preferences = preferenceSchema.safeParse(JSON.parse(values));
      if (preferences.success === false) {
        console.debug("bad preference schema in localstorage, the fuck");
        return { ok: false };
      }
      return { ok: true, data: preferences.data };
    },
  };
}
