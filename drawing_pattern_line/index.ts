import { Lint } from "./lint.js";

let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
let lints: Lint[] = [];

setup();
draw();

window.addEventListener("resize", () => {
  setup();
  draw();
});

function setup() {
  canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
  ctx = canvas.getContext("2d")!;

  canvas.style.backgroundColor = "#222";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  lints = createLints(canvas, ctx, 10);

  window.addEventListener("click", (e) => {
    erase(e.clientX, e.clientY, ctx);
    lints.forEach((lint) => {
      lint.update(e.clientX, e.clientY);
    });
    lints = lints.filter((lint) => !lint.isErased);
    console.log(lints);
  });
}

function draw() {
  lints.forEach((lint) => {
    lint.draw();
  });
}

function createLints(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  n: number
) {
  const lints = [];
  for (let i = 0; i < n; i++) {
    const lint = new Lint(canvas, ctx);
    lints.push(lint);
  }
  return lints;
}

function erase(x: number, y: number, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(x, y, 50, 50);
}
