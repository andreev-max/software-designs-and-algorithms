export class Queue {
  public list: string[];
  constructor() {
    this.list = [];
  }

  get size() {
    return this.list.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(item: string) {
    return this.list.push(item);
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
