import { Queue } from "./Queue";
import { PriorityQueue } from "./PriorityQueue";
import { OptimizedPriorityQueue } from "./OptimizedPriorityQueue";

const pq = new PriorityQueue();
const opq = new OptimizedPriorityQueue();

// pq.enqueue("10");
// pq.enqueue("50", 10);
// pq.enqueue("30", 11);
// pq.enqueue("40", 144);
// pq.enqueue("50", 3);
// pq.print();
// pq.enqueue("0", 20);
// pq.enqueue("10", 45);
// pq.dequeue();
// pq.enqueue("10", 3);
// pq.enqueue("10", 34);
// pq.dequeue();
// pq.print();

// opq.enqueue("10", 10);
// opq.enqueue("10", 1);
// opq.enqueue("10", 445);
// opq.enqueue("10", 35);
// opq.enqueue("10", 90);
// opq.enqueue("10", 2);
// opq.enqueue("10", 19);
// opq.enqueue("10", 100);
// opq.enqueue("10");
// opq.dequeue();
// opq.enqueue('10')
// opq.print();

// let pqStart = Date.now();

// for (let i = 0; i < 100001; i++) {
//   pq.enqueue("10", Math.floor(Math.random() * 10000));
// }
// const pqEnd = Date.now() - pqStart;

let opqStart = Date.now();

for (let i = 0; i < 11; i++) {
  const x = Math.floor(Math.random() * 100);
  opq.enqueue(() => console.log(`Item with index: ${i}; x - ${x}`), x);
}
while (opq.size) {
  opq.print();
  opq.dequeue();
}

const opqEnd = Date.now() - opqStart;
// opq.print();
console.log({ opqEnd });
