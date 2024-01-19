"use strict";
let canvas, ctx;
let animationId, lasttime, fps, interval;
let angle;
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
    }
    else {
        animate(0);
    }
});
function setup() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "#222";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#fff";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    animationId = null;
    lasttime = 0;
    fps = 30;
    interval = 1000 / fps;
    angle = 0;
}
function draw() {
    // translateSample();
    // rotateSample();
    // scaleSample();
    transformationSample();
}
function update() {
    angle += 0.05;
}
function animate(timestamp) {
    if (timestamp - lasttime > interval) {
        ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        draw();
        update();
        lasttime = timestamp;
    }
    animationId = requestAnimationFrame(animate);
}
function drawArrow() {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "120px monospace";
    ctx.fillText("→", 300, 0);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
    ctx.stroke();
}
function translateSample() {
    ctx.save();
    ctx.translate(100, 100);
    drawArrow();
    ctx.translate(200, 200);
    drawArrow();
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "#0fa";
    ctx.translate(200, 200);
    drawArrow();
    ctx.restore();
}
function rotateSample() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    drawArrow();
    ctx.rotate(Math.PI / 6);
    drawArrow();
    ctx.rotate(Math.PI / 6);
    drawArrow();
    ctx.arc(-300, 0, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
function scaleSample() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    drawArrow();
    ctx.rotate(Math.PI);
    ctx.scale(2, 2);
    drawArrow();
    ctx.restore();
}
function transformationSample() {
    ctx.save();
    ctx.rotate(angle);
    ctx.translate(300 * Math.sin(angle), 300);
    ctx.scale(Math.sin(angle * 3) + 1, Math.cos(angle) + 1);
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();
}
