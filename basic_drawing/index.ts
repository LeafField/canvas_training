let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;

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
}

function draw() {}
