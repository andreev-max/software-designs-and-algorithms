import { getShipmentTypeAccordingToThisWeight } from "../utils";
import { IdProvider } from "./IdProvider";
import { ShipperContext } from "./shipper/ShipperContext";
import { Shippable, ShipmentData, Shipper, ShipmentType } from "./types";

export class Shipment implements Shippable {
  static IdProvider: IdProvider;
  shipmentData: ShipmentData;
  shipmentType: ShipmentType;
  shipper: Shipper;

  constructor(shipmentData: ShipmentData) {
    this.shipmentData = {
      ...shipmentData,
      shipmentID:
        shipmentData.shipmentID || Shipment.IdProvider.getShipmentId(),
    };
    this.shipmentType = getShipmentTypeAccordingToThisWeight(
      shipmentData.weight
    );
    this.shipper = new ShipperContext(shipmentData.fromZipCode);
  }

  public ship(): string {
    const { fromAddress, toAddress, shipmentID } = this.shipmentData;

    return `Shipment with the ID ${shipmentID} will be picked up from ${fromAddress} and shipped to ${toAddress}\nCost = ${this.shipper.getCost(
      this.shipmentData,
      this.shipmentType
    )}`;
  }
}
