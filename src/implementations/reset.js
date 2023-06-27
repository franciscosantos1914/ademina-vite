import { stopAnimation } from "./animate";

export function reset(element) {
  element.addEventListener("click", (_) => {
    stopAnimation();
    document.body.style.background = "#FFFFFF";
  });
}
