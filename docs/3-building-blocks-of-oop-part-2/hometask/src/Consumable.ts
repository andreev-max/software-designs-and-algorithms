import { Item } from "./Item";

export class Consumable extends Item {
  private consumed: boolean = false;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
  }

  use(): string {
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.name} to consume.`;
    }

    return this.eat();
  }

  eat(): string {
    let resultString = `You eat the ${this.name}.`;

    if (this.spoiled) {
      resultString += `\n You feel sick.`;
    }

    return resultString;
  }

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Is Spoiled: ${this.spoiled}, Is Consumed: ${this.isConsumed()}`;
  }
}
