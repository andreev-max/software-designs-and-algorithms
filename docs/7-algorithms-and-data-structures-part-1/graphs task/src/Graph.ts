import { AdjacencyList, Edge } from "./types";

export class Graph {
  public adjList: AdjacencyList;
  constructor() {
    this.adjList = {};
  }

  addVertex(key: string): void {
    this.adjList[key] = {};
  }

  addEdge({ v1, v2, weight }: Edge): void {
    this.adjList[v1][v2] = weight;
    this.adjList[v2][v1] = weight;
  }

  printGraph() {
    console.log(this.adjList);
  }
}
