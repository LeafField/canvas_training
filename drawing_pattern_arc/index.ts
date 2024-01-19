import { Ripple } from "./ripple.js";

let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
let ripple: Ripple, ripples: Ripple[];

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

  ripples = createRipples(8, canvas, ctx);
}

function draw() {
  ripples.forEach((ripple) => {
    ripple.draw();
  });
}

function createRipples(
  n: number,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  const ripples = [];
  for (let i = 0; i < n; i++) {
    const ripple = new Ripple(canvas, ctx);
    ripples.push(ripple);
  }
  return ripples;
}

setInterval(() => {
  setup();
  draw();
}, 1000);
