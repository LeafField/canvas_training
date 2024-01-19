export type P = {
  x: number;
  y: number;
};

export class Utils {
  /** p0とp1をt:1-tで内分するメソッド
   * p = {x:10,y:10}、
   * 0<= t <=1
   */
  lerp(p0: P, p1: P, t: number) {
    const x = (1 - t) * p0.x + t * p1.x;
    const y = (1 - t) * p0.y + t * p1.y;
    return { x, y };
  }
}
