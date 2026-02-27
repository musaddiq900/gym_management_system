// app/(agency)/theme.ts
import { themes } from "@/data/themes";

export function getCurrentTheme() {
  const saved = localStorage.getItem("agencyTheme") || "red";
  return themes[saved as keyof typeof themes]?.gradient || "from-red-500 to-yellow-400";
}