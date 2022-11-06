import { getShipmentTypeAccordingToThisWeight, printExtraInfo } from "../utils";
import { PackageType } from "./Package";
import { ShipperContext } from "./Shipper";
import { ClientShipment } from "./types";

interface Shipment {
  getInstance: () => ClientShipment;
  getShipmentID: () => number;
  ship: () => string;
}

export class SimpleShipment implements Shipment {
  shipmentID: number = 1;
  clientShipment: ClientShipment;

  constructor(clientShipment: ClientShipment) {
    this.clientShipment = clientShipment;
  }

  public getInstance(): ClientShipment {
    return this.clientShipment;
  }

  public getShipmentID(): number {
    return this.shipmentID++;
  }

  public ship(): string {
    const { fromAddress, toAddress, weight, fromZipCode, shipmentID } =
      this.clientShipment;

    const packageType = new PackageType(
      weight,
      new ShipperContext(fromZipCode)
    );
    return `Shipment with the ID ${
      shipmentID || this.getShipmentID()
    } will be picked up from ${fromAddress} and shipped to ${toAddress}\nCost = ${packageType.getPackageCost()}`;
  }
}

export class SimpleShipmentDecorator implements Shipment {
  protected wrappedShipment: Shipment;

  constructor(shipment: Shipment) {
    this.wrappedShipment = shipment;
  }

  public getShipmentID(): number {
    return this.wrappedShipment.getShipmentID();
  }

  public ship(): string {
    return this.wrappedShipment.ship();
  }

  public getInstance(): ClientShipment {
    return this.wrappedShipment.getInstance();
  }
}

export class ShipmentWithExtraInfo extends SimpleShipmentDecorator {
  public ship(): string {
    return `${super.ship()}\n${printExtraInfo(super.getInstance()?.extraInfo)}`;
  }
}
