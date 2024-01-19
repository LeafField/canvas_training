let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
let animationId: number | null, lasttime: number, fps: number, interval: number;
let y: number;

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
  y = 0;
}

function draw() {
  gradientBackground(ctx);
  gradientRect(ctx);
  sphere(ctx);
}

function update() {
  y += 3;
}

function animate(timestamp: number) {
  if (timestamp - lasttime > interval) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    update();
    lasttime = timestamp;
  }
  animationId = requestAnimationFrame(animate);
}

function gradientBackground(ctx: CanvasRenderingContext2D) {
  ctx.save();
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#e3879e");
  gradient.addColorStop(0.4, "#fce0ce");
  gradient.addColorStop(1, "#f1a66a");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function gradientRect(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.filter = "blur(5px)";
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#f00");
  gradient.addColorStop(0.2, "#faa");
  gradient.addColorStop(0.4, "#0f0");
  gradient.addColorStop(0.6, "#afa");
  gradient.addColorStop(0.8, "#aaf");
  gradient.addColorStop(1, "#00f");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.fillRect(0, 0, canvas.width / 10, canvas.height);
  ctx.fillRect(canvas.width / 10, y, canvas.width / 10, 100);
  ctx.restore();
}

function sphere(ctx: CanvasRenderingContext2D) {
  ctx.save();
  // ctx.fillStyle = "rgba(0,0,0,0.1)";
  // ctx.beginPath();
  // ctx.ellipse(
  //   canvas.width / 2 + 20,
  //   canvas.height / 2 + 150,
  //   100,
  //   20,
  //   0,
  //   0,
  //   Math.PI * 2
  // );
  // ctx.fill();
  // ctx.shadowColor = "rgba(0,0,0,0.1)";
  // ctx.shadowOffsetX = 90;
  // ctx.shadowOffsetY = 90;
  // ctx.shadowBlur = 10;

  ctx.filter = "drop-shadow(90px 90px 10px rgba(0,0,0,0.1))";

  const radialGradient = ctx.createRadialGradient(
    canvas.width / 2 - 60,
    canvas.height / 2 - 60,
    25,
    canvas.width / 2 - 45,
    canvas.height / 2 - 45,
    120
  );
  radialGradient.addColorStop(0, "#fff");
  radialGradient.addColorStop(1, "#aaa");
  ctx.fillStyle = radialGradient;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
