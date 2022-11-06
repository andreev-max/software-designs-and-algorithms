import { ClientShipment } from "./src/types";

export const OversizedWithoutIDAndWithExtraChargeAirEast: ClientShipment = {
  shipmentID: 0,
  weight: 161,
  fromAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  fromZipCode: "",
  toAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  toZipCode: "11111",
};

export const LetterWithIDChicagoSprint: ClientShipment = {
  shipmentID: 1,
  weight: 11,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "55555",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "22222",
};

export const PackageWithIDPacificParcelWithExtraInfo: ClientShipment = {
  shipmentID: 3,
  weight: 20,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "89898",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "33333",
  extraInfo: ["ship itself", "Do Not Leave"],
};

export const LetterPacificParcelWithExtraInfo: ClientShipment = {
  shipmentID: 3,
  weight: 12,
  fromAddress: "1313 Mockingbird Lane, Tulsa, OK 67721",
  fromZipCode: "77777",
  toAddress: "12292 4th Ave SE, Bellevue, Wa 92021",
  toZipCode: "44444",
  extraInfo: [
    "mark fragile",
    "Do Not Leave If Address not at HOME",
    "mark return receipt requested",
  ],
};
