"use strict";
let canvas, ctx;
let animationId, lasttime, fps, interval;
let numOfCols, barWidth, marginX, values;
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
    animationId = null;
    lasttime = 0;
    fps = 30;
    interval = 1000 / fps;
    numOfCols = 300;
    barWidth = Math.floor(canvas.width / numOfCols);
    marginX = canvas.width - barWidth * numOfCols;
    values = new Array(numOfCols).fill(0);
}
function draw() {
    drawBar();
}
function update() {
    updateValues(100);
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
function pickupIndex(rep) {
    let total = 0;
    for (let i = 0; i < rep; i++) {
        total += Math.random();
    }
    const average = total / rep;
    const index = Math.floor(average * numOfCols);
    return index;
}
function updateValues(rep) {
    for (let i = 0; i < 100; i++) {
        const index = pickupIndex(rep);
        values[index] += 1;
    }
}
function drawBar() {
    for (let i = 0; i < numOfCols; i++) {
        const barHeight = values[i];
        ctx.beginPath();
        ctx.fillRect(marginX / 2 + barWidth * i, canvas.height, barWidth, -barHeight);
    }
}
