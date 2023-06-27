import "./src/styles/style.css";
import viteLogo from "/vite.svg";
import { reset, colorize, animate } from "./src";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Random Colorizer</h1>
    <div class="card">
      <button type="button" id="animate">Animate It</button>
      <button type="button" id="colorize">Colorize It</button>
      <button type="button" id="reset">Reset It</button>
    </div>
  </div>
`;

reset(document.getElementById("reset"));
animate(document.getElementById("animate"));
colorize(document.getElementById("colorize"));
