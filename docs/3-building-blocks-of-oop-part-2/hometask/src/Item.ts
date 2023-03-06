import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  weight: number;
  name: string;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.id = id++;
  }

  abstract use(): void;

  public compareTo(other: Item): number {
    const { value, name } = other;
    if (this.value > value) {
      return 1;
    }
    
    if (this.value < value) {
      return -1;
    }

    if (this.name.toLowerCase() > name.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  getName(): string {
    return this.name;
  }

  getWeight(): string {
    return String(this.weight);
  }

  setValue(price: number): void {
    this.value = price;
  }

  setName(name: string): void {
    this.name = name;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  static reset(): void {
    id = 0;
  }

  static get numberOfItems(): number {
    return id;
  }
}
