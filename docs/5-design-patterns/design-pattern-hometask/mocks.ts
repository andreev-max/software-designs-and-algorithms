import { ShipmentData } from "./src/types";

export const OversizedWithoutIDAndWithExtraChargeAirEast: ShipmentData = {
  shipmentID: 0,
  weight: 161,
  fromAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  fromZipCode: "",
  toAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  toZipCode: "11111",
};

export const LetterWithIDChicagoSprint: ShipmentData = {
  shipmentID: 1,
  weight: 11,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "55555",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "22222",
};

export const PackageWithIDPacificParcelWithExtraInfo: ShipmentData = {
  shipmentID: 3,
  weight: 20,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "89898",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "33333",
};

export const LetterPacificParcelWithExtraInfo: ShipmentData = {
  shipmentID: 3,
  weight: 12,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "77777",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "44444",
};
