import { ShipmentData, ShipmentType, Shipper } from "../types";

export class AirEastShipper implements Shipper {
  public getCost(data: ShipmentData, shipmentType: ShipmentType): number {
    const { weight } = data;

    switch (shipmentType) {
      case ShipmentType.Oversized:
        return 0.39 * weight + 10;
      case ShipmentType.Package:
        return 0.25 * weight;
      case ShipmentType.Letter:
      default:
        return 0.39 * weight;
    }
  }
}
