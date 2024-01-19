export class Lint {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.isErased = false;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.l = Math.random() * 20 + 10;
        this.lep = Math.floor(Math.random() * 20 + 1);
        this.ctx.strokeStyle = "#fff";
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        for (let i = 0; i < this.lep; i++) {
            const x = this.x + this.l * (Math.random() * 2 - 1);
            const y = this.y + this.l * (Math.random() * 2 - 1);
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }
    update(x, y) {
        const dist = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        if (dist < 50) {
            this.isErased = true;
        }
    }
}
