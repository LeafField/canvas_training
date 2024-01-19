import { Utils } from "./utils.js";
const utils = new Utils();
let canvas, ctx;
let animationId, lasttime, fps, interval;
let unit, limit, growth;
let p0, p1, cp0, cp1, r, points = [], draggablePoint;
let mouse;
setup();
animate(0);
window.addEventListener("resize", () => {
    setup();
    draw();
});
window.addEventListener("mousedown", mouseDown);
window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseup", mouseLeave);
// window.addEventListener("click", () => {
//   if (animationId) {
//     cancelAnimationFrame(animationId);
//     animationId = null;
//   } else {
//     animate(0);
//   }
// });
function setup() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "#222";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#fff";
    animationId = null;
    lasttime = 0;
    fps = 20;
    interval = 1000 / fps;
    p0 = { x: canvas.width / 10, y: canvas.height / 10 };
    p1 = { x: (canvas.width * 2) / 10, y: (canvas.height * 2) / 10 };
    cp0 = { x: (canvas.width * 8) / 10, y: canvas.height / 10 };
    cp1 = { x: (canvas.width * 6) / 10, y: (canvas.height * 9) / 10 };
    r = 5;
    points = [p0, p1, cp0, cp1];
    mouse = { x: null, y: null };
    unit = 0.01;
    limit = 0;
    growth = unit;
}
function draw() {
    ctx.save();
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.bezierCurveTo(cp0.x, cp0.y, cp1.x, cp1.y, p1.x, p1.y);
    ctx.stroke();
    ctx.restore();
    points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
        ctx.fill();
    });
    // p0 → cp1
    // ctx.beginPath();
    // ctx.moveTo(p0.x, p0.y);
    // ctx.lineTo(cp0.x, cp0.y);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(p1.x, p1.y);
    // ctx.lineTo(cp1.x, cp1.y);
    // ctx.stroke();
    bezier(p0, p1, cp0, cp1);
}
function update() {
    if (limit < 0 || 1 <= limit) {
        growth *= -1;
    }
    limit = Math.floor((limit + growth) * 10000) / 10000;
}
function animate(timestamp) {
    if (timestamp - lasttime > interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        update();
        lasttime = timestamp;
    }
    animationId = requestAnimationFrame(animate);
}
function mouseDown(e) {
    mouse = { x: e.clientX, y: e.clientY };
    points.forEach((p) => {
        const mouseOnPoint = Math.sqrt((p.x - e.clientX) ** 2 + (p.y - e.clientY) ** 2) < r;
        if (mouseOnPoint) {
            draggablePoint = p;
            // console.log(draggablePoint);
        }
    });
}
function mouseMove(e) {
    if (draggablePoint) {
        draggablePoint.x = e.clientX;
        draggablePoint.y = e.clientY;
    }
}
function mouseLeave() {
    draggablePoint = null;
}
function bezier(p0, p1, cp0, cp1) {
    let from = p0;
    for (let t = 0; t < limit; t = Math.floor((t + unit) * 10000) / 10000) {
        let q0 = utils.lerp(p0, cp0, t);
        let q1 = utils.lerp(cp0, cp1, t);
        let q2 = utils.lerp(cp1, p1, t);
        let qA = utils.lerp(q0, q1, t);
        let qB = utils.lerp(q1, q2, t);
        let q = utils.lerp(qA, qB, t);
        ctx.save();
        ctx.strokeStyle = `hsl(${t * 360},100%,50%)`;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(q0.x, q0.y);
        ctx.lineTo(q1.x, q1.y);
        ctx.lineTo(q2.x, q2.y);
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = `hsl(${t * 360},100%,50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(qA.x, qA.y);
        ctx.lineTo(qB.x, qB.y);
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = `#FF0000`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
        ctx.restore();
        from = q;
    }
}
