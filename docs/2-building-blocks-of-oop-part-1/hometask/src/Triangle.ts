import { Point } from "./Point";
import { Shape } from "./Shape";

enum TriangleType {
  equilateral = "equilateral triangle",
  isosceles = "isosceles triangle",
  scalene = "scalene triangle",
}

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(
    point1: Point,
    point2: Point,
    point3: Point,
    color?: string,
    filled?: boolean
  ) {
    super([point1, point2, point3], color, filled);
  }

  public toString(): string {
    return `Triangle[v1=(${this.points[0].x}, ${this.points[0].y}),v2=(${this.points[1].x}, ${this.points[1].y}),v3=(${this.points[2].x}, ${this.points[2].y})]`;
  }

  getType(): string {
    const firstSide = this.points[0].distance(this.points[1]);
    const secondSide = this.points[1].distance(this.points[2]);
    const thirdSide = this.points[2].distance(this.points[0]);

    if (firstSide === secondSide && secondSide === thirdSide) {
      return TriangleType.equilateral;
    } else if (firstSide === secondSide || secondSide === thirdSide) {
      return TriangleType.isosceles;
    }

    return TriangleType.scalene;
  }
}
