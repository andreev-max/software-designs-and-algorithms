export class Point {
  readonly x: number;
  readonly y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;
  public distance(x?: Point | number, y?: number): number {
    let otherX = 0;
    let otherY = 0;
    if (typeof x === "number" && typeof y === "number") {
      otherX = x;
      otherY = y;
    } else if (x && typeof x !== "number") {
      otherX = x.x;
      otherY = x.y;
    }

    return (
      Math.round(
        Math.sqrt((this.x - otherX) ** 2 + (this.y - otherY) ** 2) * 1000
      ) / 1000
    );
  }
}
