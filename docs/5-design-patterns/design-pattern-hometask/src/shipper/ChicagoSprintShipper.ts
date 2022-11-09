import { ShipmentData, ShipmentType, Shipper } from "../types";

export class ChicagoSprintShipper implements Shipper {
  public getCost(data: ShipmentData, shipmentType: ShipmentType): number {
    const { weight } = data;

    switch (shipmentType) {
      case ShipmentType.Oversized:
        return 0.2 * weight;
      case ShipmentType.Package:
        return 0.2 * weight;
      case ShipmentType.Letter:
      default:
        return 0.42 * weight;
    }
  }
}
