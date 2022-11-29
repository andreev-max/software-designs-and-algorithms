import { Graph } from "./Graph";
import { Dijkstra, Path } from "./types";

export class GraphTraversal implements Dijkstra {
  public graph;
  constructor(graph: Graph) {
    this.graph = graph;
  }

  findShortestPath(start: string, end: string): any {
    if (!this.graph.adjList[start] || !this.graph.adjList[end]) {
      return { path: [], distance: Infinity };
    }

    if (start === end) {
      return { path: [start], distance: 0 };
    }

    return this.findAllShortestPaths(start)[end];
  }

  findAllShortestPaths(vertex: string): Record<string, Path> {
    const paths: Record<string, Path> = {};
    const processed: string[] = [];
    let neighbors: Record<string, number> = {};

    Object.keys(this.graph.adjList).forEach((from) => {
      if (from !== vertex) {
        paths[from] = {
          path: [from],
          distance: this.graph.adjList[vertex][from] || Infinity,
        };
      }
    });

    let node = findTheLowestWeight(paths, processed);

    while (node) {
      const weight = paths[node].distance;
      neighbors = this.graph.adjList[node];
      Object.keys(neighbors).forEach((neighbor) => {
        let newWeight = weight + neighbors[neighbor];
        if (newWeight < paths[neighbor]?.distance) {
          paths[neighbor].distance = newWeight;
          if (node) {
            paths[neighbor].path.unshift(node);
          }
        }
      });

      processed.push(node);
      node = findTheLowestWeight(paths, processed);
    }

    for (const point in paths) {
      let { path, distance } = paths[point];
      if (distance === Infinity) {
        path.length = 0;
      } else {
        path.unshift(vertex);
      }
    }

    return paths;
  }
}

function findTheLowestWeight(paths: Record<string, Path>, processed: string[]) {
  let lowestWeight = Infinity;
  let lowestNode;

  Object.keys(paths).forEach((node) => {
    let weight = paths[node].distance;
    if (weight < lowestWeight && !processed.includes(node)) {
      lowestWeight = weight;
      lowestNode = node;
    }
  });

  return lowestNode;
}
