import { Shippable } from "../types";

export class DoNotLeaveShipment  implements Shippable {
  protected wrappee: Shippable;
  constructor(shipment: Shippable) {
    this.wrappee = shipment
  }

  public ship(): string {
    return this.wrappee.ship() + "\n" + "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**";
  }
}
