import {
  LetterPacificParcelWithExtraInfo,
  LetterWithIDChicagoSprint,
  OversizedWithoutIDAndWithExtraChargeAirEast,
  PackageWithIDPacificParcelWithExtraInfo,
} from "../mocks";
import { SimpleShipment, ShipmentWithExtraInfo } from "./Shipment";

const shipmentWithID = new SimpleShipment(LetterWithIDChicagoSprint);
const shipmentWithoutID = new SimpleShipment(
  OversizedWithoutIDAndWithExtraChargeAirEast
);
const shipmentWithExtraInfo1 = new SimpleShipment(
  LetterPacificParcelWithExtraInfo
);
const shipmentWithExtraInfo2 = new SimpleShipment(
  PackageWithIDPacificParcelWithExtraInfo
);

console.log(shipmentWithID.ship());
console.log(shipmentWithoutID.ship());
console.log(shipmentWithExtraInfo1.ship());
console.log(shipmentWithExtraInfo2.ship());

const shipmentDecorator1 = new ShipmentWithExtraInfo(shipmentWithExtraInfo1);
const shipmentDecorator2 = new ShipmentWithExtraInfo(shipmentWithExtraInfo2);

console.log(shipmentDecorator1.ship());
console.log(shipmentDecorator2.ship());
