import { Cost, ShipmentType } from "./types";

export interface Shipper {
  getCost: () => Cost;
}

export class AirEastShipper implements Shipper {
  public getCost(): Cost {
    return {
      [ShipmentType.Letter]: { charge: 0.39, extraCharge: 0 },
      [ShipmentType.Package]: { charge: 0.25, extraCharge: 0 },
      [ShipmentType.Oversized]: { charge: 0.25, extraCharge: 10 },
    };
  }
}

export class ChicagoSprintShipper implements Shipper {
  public getCost(): Cost {
    return {
      [ShipmentType.Letter]: { charge: 0.42, extraCharge: 0 },
      [ShipmentType.Package]: { charge: 0.2, extraCharge: 0 },
      [ShipmentType.Oversized]: { charge: 0.2, extraCharge: 0 },
    };
  }
}

export class PacificParcelShipper implements Shipper {
  public getCost(): Cost {
    return {
      [ShipmentType.Letter]: { charge: 0.51, extraCharge: 0 },
      [ShipmentType.Package]: { charge: 0.19, extraCharge: 0 },
      [ShipmentType.Oversized]: { charge: 0.21, extraCharge: 0 },
    };
  }
}

export class ShipperContext {
  private shipper: Shipper;

  constructor(zipcode: string | undefined) {
    this.shipper = this.getAppropriateShipper(zipcode);
  }

  setShipper(zipcode: string | undefined) {
    this.shipper = this.getAppropriateShipper(zipcode);
  }

  getAppropriateShipper(zipcode: string | undefined) {
    if (Number(zipcode) >= 70000) {
      return new PacificParcelShipper();
    } else if (Number(zipcode) >= 40000) {
      return new ChicagoSprintShipper();
    }

    return new AirEastShipper();
  }

  getCost() {
    return this.shipper.getCost();
  }
}
