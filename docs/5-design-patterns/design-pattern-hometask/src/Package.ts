import { Shipper } from "./Shipper";
import { ShipmentType } from "./types";

export class PackageType {
  protected weight: number;
  protected type: ShipmentType;
  protected shipper: Shipper;

  constructor(weight: number, shipper: Shipper) {
    this.weight = weight;
    this.type = this.getShipmentTypeAccordingToThisWeight(weight);
    this.shipper = shipper;
  }

  getShipmentTypeAccordingToThisWeight(weight: number): ShipmentType {
    if (weight <= 15) {
      return ShipmentType.Letter;
    }

    if (weight <= 160) {
      return ShipmentType.Package;
    }

    return ShipmentType.Oversized;
  }

  getPackageCost(): number {
    const { charge, extraCharge } = this.shipper.getCost()[this.type];
    return charge * this.weight + extraCharge;
  }
}
