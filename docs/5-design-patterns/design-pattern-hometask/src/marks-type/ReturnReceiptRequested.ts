import { Shippable } from "../types";

export class ReturnReceiptRequestedShipment implements Shippable {
  protected wrappee: Shippable;
  constructor(shipment: Shippable) {
    this.wrappee = shipment
  }

  public ship(): string {
    return this.wrappee.ship() + '\n' + '**MARK RETURN RECEIPT REQUESTED**';
  }
}