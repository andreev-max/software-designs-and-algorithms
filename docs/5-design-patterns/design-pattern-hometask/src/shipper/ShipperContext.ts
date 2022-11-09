import { ShipmentData, ShipmentType, Shipper } from "../types";
import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper";
import { PacificParcelShipper } from "./PacificParcelShipper";

export class ShipperContext {
  private shipper: Shipper;

  constructor(zipCode: string | undefined) {
    this.shipper = this.getAppropriateShipper(zipCode);
  }

  setShipper(zipCode: string | undefined) {
    this.shipper = this.getAppropriateShipper(zipCode);
  }

  getAppropriateShipper(zipCode: string | undefined) {
    const firstDigit = zipCode?.[0] ?? '0';

    if (firstDigit >= "7") {
      return new PacificParcelShipper();
    } else if (firstDigit >= "4") {
      return new ChicagoSprintShipper();
    }

    return new AirEastShipper();
  }

  getCost(data: ShipmentData, shipmentType: ShipmentType) {
    return this.shipper.getCost(data, shipmentType);
  }
}
