export interface WeightedGraph {
  addVertex(key: string): void;
  addEdge(vertex1: string, vertex2: string, weight: number): void;
}

export interface Edge {
  v1: string;
  v2: string;
  weight: number;
}

export interface GraphVertex {
  vertex: {
    to: string;
    weight: number;
  }
}

export interface Path {
  path: string[];
  distance: number;
}

export type AdjacencyList = Record<string, Record<string, number>>

export interface Dijkstra {
  findShortestPath(vertex1: string, vertex2: string): Path;
  findAllShortestPaths(vertex: string): Record<string, Path>;
}