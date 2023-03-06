import { Shippable } from "../types";

export class FragileShipment implements Shippable {
  protected wrappee: Shippable;
  constructor(shipment: Shippable) {
    this.wrappee = shipment;
  }

  public ship(): string {
    return this.wrappee.ship() + "\n" + "**MARK FRAGILE**";
  }
}
