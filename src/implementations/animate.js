import { getRandomColor } from "../helpers/random-color";

let functionId;

export function animate(element) {
  element.addEventListener("click", (_) => {
    _startAnimation();
  });
}

export function stopAnimation() {
  if (functionId) clearInterval(functionId);
}

function _styleBody() {
  document.body.style.background = `#${getRandomColor()}`;
}

function _startAnimation() {
  functionId = setInterval(() => _styleBody(), 500);
}
