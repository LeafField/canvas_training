let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
let animationId: number | null, lasttime: number, fps: number, interval: number;

setup();
animate(0);

window.addEventListener("resize", () => {
  setup();
  draw();
});

window.addEventListener("click", () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  } else {
    animate(0);
  }
});

function setup() {
  canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
  ctx = canvas.getContext("2d")!;

  canvas.style.backgroundColor = "#222";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  animationId = null;
  lasttime = 0;
  fps = 30;
  interval = 1000 / fps;
}

function draw() {}

function update() {}

function animate(timestamp: number) {
  if (timestamp - lasttime > interval) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    update();
    lasttime = timestamp;
  }
  animationId = requestAnimationFrame(animate);
}
