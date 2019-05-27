export const SHOW_WIP = "SHOW_WIP";

export function toggleShowWIP(showWIP) {
  return { type: SHOW_WIP, showWIP };
}
