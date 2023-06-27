import COLORS from "../data/colors";

export function getRandomColor() {
  let random = Math.round(Math.random() * (COLORS.length - 1));
  if (random > COLORS.length - 1) return COLORS[0];
  return COLORS[random];
}
