import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    const firstWeight = first.weight;
    const secondWeight = second.weight;

    if (firstWeight > secondWeight) {
      return 1;
    } else if (firstWeight < secondWeight) {
      return -1;
    } else {
      return first.compareTo(second);
    }
  }
}
