import { stopAnimation } from "./animate";
import { getRandomColor } from "../helpers/random-color";

export function colorize(element) {
  element.addEventListener("click", (_) => {
    stopAnimation();
    document.body.style.background = `#${getRandomColor()}`;
  });
}
