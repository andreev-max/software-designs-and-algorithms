import { Queue } from "./Queue";
import { PriorityQueue } from "./PriorityQueue";

const pq = new PriorityQueue();

pq.enqueue("10");
pq.enqueue("50", 10);
pq.enqueue("30", 11);
pq.enqueue("40", 144);
pq.enqueue("50", 3);
pq.print();
pq.enqueue("0", 20);
pq.enqueue("10", 45);
pq.dequeue();
pq.enqueue("10", 3);
pq.enqueue("10", 34);
pq.dequeue();
pq.print();
