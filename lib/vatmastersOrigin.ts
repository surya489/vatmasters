/** Remote assets served from production (same filenames as https://vatmasters.com ) */
export const VATMASTERS_ORIGIN = "https://vatmasters.com";

export function vatmastersAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${VATMASTERS_ORIGIN}${normalized}`;
}
