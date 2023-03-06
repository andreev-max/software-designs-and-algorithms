import { Point } from "./Point";

const defaultColor = "green";
const defaultFilled = true;

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("You should set at least 3 points");
    } else {
      this.points = points;
    }

    this.color = color ?? defaultColor;
    this.filled = filled ?? defaultFilled;
  }

  public toString() {
    const isShapeFilled = this.filled ? "filled" : "not filled";
    const pointsInfo = this.points.join(", ");

    return `A Shape with color of ${this.color} and ${isShapeFilled}. Points: ${pointsInfo}.`;
  }

  public getPerimeter(): number {
    let perimeter = 0;
    const firstPoint = this.points[0];

    for (let i = 0; i < this.points.length; i++) {
      const nextPoint = this.points[i + 1];
      const currentPoint = this.points[i];
      if (nextPoint) {
        perimeter = perimeter + currentPoint.distance(nextPoint);
      } else {
        perimeter = perimeter + currentPoint.distance(firstPoint);
      }
    }

    return perimeter;
  }

  abstract getType(): string;
}
