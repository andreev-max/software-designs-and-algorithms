import { Point } from "./Point";

const defaultColor = "green";
const defaultFilled = true;

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("You should set at least 3 points");
    } else {
      this.points = points;
    }

    this.color = typeof color === "string" ? color : defaultColor;
    this.filled = typeof filled === "boolean" ? filled : defaultFilled;
  }

  public toString() {
    const isShapeFilled = this.filled ? "filled" : "not filled";

    const pointsInfo = this.points.map(({ x, y }, index) => {
      if (index === this.points.length - 1) {
        return ` (${x}, ${y}).`;
      }

      return ` (${x}, ${y})`;
    });

    return `A Shape with color of ${this.color} and ${isShapeFilled}. Points:${pointsInfo}`;
  }

  public getPerimeter(): number {
    let test = 0;

    for (let i = 0; i < this.points.length; i++) {
      const firstPoint = this.points[0];
      const nextPoint = this.points[i + 1];
      const currentPoint = this.points[i];
      if (nextPoint) {
        test = test + currentPoint.distance(nextPoint);
      } else {
        test = test + currentPoint.distance(firstPoint);
      }
    }

    return test;
  }

  abstract getType(): string;
}
