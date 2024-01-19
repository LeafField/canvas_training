export declare class Ripple {
    private canvas;
    private ctx;
    x: number;
    y: number;
    r: number;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D);
    draw(): void;
}
