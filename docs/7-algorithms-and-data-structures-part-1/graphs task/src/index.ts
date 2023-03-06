import { GraphTraversal } from "./Dijkstra";
import { Edge } from "./Edge";
import { Graph } from "./Graph";
import { Vertex } from "./Vertex";

const vertexes = [
  new Vertex("1"),
  new Vertex("2"),
  new Vertex("3"),
  new Vertex("4"),
  new Vertex("5"),
];

const edges = [
  new Edge(vertexes[0].vertex, vertexes[3].vertex, 3),
  new Edge(vertexes[0].vertex, vertexes[1].vertex, 5),
  new Edge(vertexes[0].vertex, vertexes[2].vertex, 4),
  new Edge(vertexes[1].vertex, vertexes[3].vertex, 6),
  new Edge(vertexes[1].vertex, vertexes[2].vertex, 5),
];

const graph = new Graph();

vertexes.forEach(({ vertex }) => graph.addVertex(vertex));

edges.forEach((edge) => graph.addEdge(edge));

const dijkstra = new GraphTraversal(graph);
graph.printGraph();

console.log("findAllShortestPaths", dijkstra.findAllShortestPaths("4"));
console.log("findShortestPath", dijkstra.findShortestPath("4", "3"));
// console.log(vertexes);
// console.log(edges);
// console.log("hello");
