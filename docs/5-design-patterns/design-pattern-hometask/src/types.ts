export interface ClientShipment {
  shipmentID: number;
  weight: number;
  fromAddress: string;
  fromZipCode?: string;
  toAddress: string;
  toZipCode: string;
  extraInfo?: string[];
}

export enum CompanyType {
  AirEast = "Air East", // 1, 2, 3 and default
  ChicagoSprint = "Chicago Sprint", // 4, 5, 6
  PacificParcel = "Pacific Parcel", // 7, 8, 9
}

export enum ShipmentType {
  Letter, // <= 15 ounces
  Package, // <= 160 ounces
  Oversized, // > 160 ounces
}

export type Cost = {
  [key in ShipmentType]: {
    charge: number;
    extraCharge: number;
  };
};
