import { PrioritizedItem } from "./types";

export class OptimizedPriorityQueue {
  public list: PrioritizedItem[];
  constructor() {
    this.list = [
      { value: () => console.log("First Item"), priority: -1000000 },
    ];
  }

  enqueue(value: Function, priority = 0) {
    this.list.push({ value, priority });

    if (this.list.length > 2) {
      let i = this.list.length - 1;
      while (this.list[i].priority < this.list[Math.floor(i / 2)].priority) {
        // console.log(this.list);
        [this.list[Math.floor(i / 2)], this.list[i]] = [
          this.list[i],
          this.list[Math.floor(i / 2)],
        ];

        if (Math.floor(i / 2) > 1) {
          i = Math.floor(i / 2);
        } else {
          break;
        }
      }
    }
  }

  dequeue() {
    let smallest = this.list[1];
    if (this.list.length > 3) {
      this.list[1] = this.list[this.list.length - 1];
      this.list.splice(this.list.length - 1);

      if (this.list.length === 3) {
        if (this.list[1].priority > this.list[2].priority) {
          [this.list[1], this.list[2]] = [this.list[2], this.list[1]];
        }

        return smallest.value();
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (
        this.list[i].priority >= this.list[left].priority ||
        this.list[i].priority >= this.list[right].priority
      ) {
        if (this.list[left].priority < this.list[right].priority) {
          [this.list[i], this.list[left]] = [this.list[left], this.list[i]];
          i = 2 * i + 1;
        } else {
          [this.list[i], (this.list[right] = this.list[right]), this.list[i]];
          i = 2 * i + 1;
        }

        left = 2 * i;
        right = 2 * i + 1;

        if (!this.list[left] || !this.list[right]) {
          break;
        }
      }
    } else if (this.list.length === 3 || this.list.length === 2) {
      this.list.splice(1, 1);
    } else {
      return null;
    }

    return smallest.value();
  }

  print() {
    console.log(this.list);
  }

  get size() {
    return this.list.length > 1 ? this.list.length : 0;
  }
}
