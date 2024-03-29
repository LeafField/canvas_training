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

function draw() {
  // ctx.strokeStyle = "#FFF";
  // ctx.beginPath();
  // ctx.rect(100, 100, 100, 100);
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.rect(300, 300, 100, 100);
  // ctx.stroke();
  // ctx.fillStyle = "#FFF";
  // ctx.beginPath();
  // ctx.rect(100, 100, 100, 100);
  // ctx.fill();
  // ctx.beginPath();
  // ctx.rect(300, 300, 100, 100);
  // ctx.fill();
  // ctx.fillStyle = "#FFF";
  // ctx.beginPath();
  // ctx.fillRect(100, 100, 100, 100);
  // ctx.beginPath();
  // ctx.strokeStyle = "#FFF";
  // ctx.arc(300, 300, 100, 0, -Math.PI / 2, true);
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.fillStyle = "#FFF";
  // ctx.arc(300, 300, 100, 0, Math.PI / 2);
  // ctx.fill();
  // ctx.strokeStyle = "#FFF";
  // ctx.beginPath();
  // ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  // ctx.stroke();
  // ctx.save();
  // ctx.strokeStyle = "#0fa";
  // ctx.lineWidth = 10;
  // ctx.beginPath();
  // ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2);
  // ctx.stroke();
  // ctx.restore();
  // ctx.beginPath();
  // ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2);
  // ctx.stroke();
  // ctx.strokeStyle = "#0fa";
  // ctx.beginPath();
  // ctx.ellipse(
  //   canvas.width / 2,
  //   canvas.height / 2,
  //   150,
  //   50,
  //   Math.PI / 2,
  //   0,
  //   Math.PI * 2
  // );
  // ctx.stroke();
  // ctx.strokeStyle = "#fff";
  // ctx.fillStyle = "#00f";
  // ctx.lineWidth = 3;
  // ctx.beginPath();
  // ctx.moveTo(200, 200);
  // ctx.lineTo(500, 500);
  // ctx.lineTo(700, 300);
  // ctx.closePath();
  // ctx.fill();
  // ctx.stroke();
  // ctx.strokeStyle = "#fff";
  // ctx.lineWidth = 2;
  // ctx.fillStyle = "#0fa";
  // ctx.font = "80px Candara";
  // ctx.strokeText("Hello", 300, 300);
  // ctx.fillText("canvas", 300, 500);

  ctx.strokeStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(400, 100);
  ctx.lineTo(400, 500);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(600, 300);
  ctx.stroke();
  ctx.fillStyle = "#0fa";
  ctx.font = "80px Candara";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("canvas", 400, 300);
}
