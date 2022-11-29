export class Edge {
  v1: string;
  v2: string;
  weight: number;
  constructor(v1: string, v2: string, weight: number) {
    this.v1 = v1;
    this.v2 = v2;
    this.weight = weight;
  }
}
