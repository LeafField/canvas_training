"use strict";
let canvas, ctx;
setup();
draw();
window.addEventListener("resize", () => {
    setup();
    draw();
});
function setup() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "#222";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function draw() { }
