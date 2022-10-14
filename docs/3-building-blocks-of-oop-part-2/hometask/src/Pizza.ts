import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;

  constructor(
    numberOfSlices: number,
    spoiled: boolean,
    value: number,
    weight: number,
  ) {
    super("pizza", value, weight, spoiled);

    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return "You eat a slice of the pizza";
    } else {
      return "";
    }
  }
}
