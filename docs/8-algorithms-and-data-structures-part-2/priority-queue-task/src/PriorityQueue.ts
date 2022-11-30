import { PrioritizedItem } from "./types";

export class PriorityQueue {
  public list: PrioritizedItem[];
  constructor() {
    this.list = [];
  }

  get size() {
    return this.list.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(value: string, priority = 0) {
    if (this.isEmpty || priority >= this.list[this.size - 1].priority) {
      this.list.push({ value, priority });
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (priority < this.list[i].priority) {
          this.list.splice(i, 0, { value, priority });
          break;
        }
      }
    }
  }

  dequeue() {
    return this.list.shift();
  }

  peek() {
    return this.list[0];
  }

  print() {
    console.log(this.list);
  }
}
