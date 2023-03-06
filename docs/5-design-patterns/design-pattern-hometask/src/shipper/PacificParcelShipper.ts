import { ShipmentData, ShipmentType, Shipper } from "../types";

export class PacificParcelShipper implements Shipper {
  public getCost(data: ShipmentData, shipmentType: ShipmentType): number {
    const { weight } = data;

    switch (shipmentType) {
      case ShipmentType.Oversized:
        return 0.19 * weight;
      case ShipmentType.Package:
        return 0.21 * weight;
      case ShipmentType.Letter:
      default:
        return 0.51 * weight;
    }
  }
}
