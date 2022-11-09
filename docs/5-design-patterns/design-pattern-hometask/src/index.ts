import {
  LetterPacificParcelWithExtraInfo,
  LetterWithIDChicagoSprint,
} from "../mocks";
import { IdProvider } from "./IdProvider";
import { Shipment } from "./Shipment";
import { ShipmentFactory } from "./ShipmentFactory";
import { MarkType } from "./types";

Shipment.IdProvider = IdProvider.getInstance();

const factory = new ShipmentFactory();

const shipmentWithID = factory.createShipment(LetterWithIDChicagoSprint);

const shipmentWithMarks = factory.createShipmentWithMarks(
  LetterPacificParcelWithExtraInfo, [MarkType.DoNotLeave, MarkType.Fragile]
);

console.log(shipmentWithID.ship());
console.log(shipmentWithMarks.ship());

