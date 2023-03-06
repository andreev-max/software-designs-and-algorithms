import { DoNotLeaveShipment } from "./marks-type/DoNotLeave";
import { FragileShipment } from "./marks-type/Fragile";
import { ReturnReceiptRequestedShipment } from "./marks-type/ReturnReceiptRequested";
import { Shipment } from "./Shipment";
import { MarkType, ShipmentData } from "./types";

export class ShipmentFactory {
  createShipment(data: ShipmentData) {
    return new Shipment(data);
  }

  createShipmentWithMarks(data: ShipmentData, marks: MarkType[]) {
    const shipment = new Shipment(data);

    if (marks.includes(MarkType.Fragile)) {
      return new FragileShipment(shipment);
    }

    if (marks.includes(MarkType.DoNotLeave)) {
      return new DoNotLeaveShipment(shipment);
    }

    if (marks.includes(MarkType.ReturnReceiptRequested)) {
      return new ReturnReceiptRequestedShipment(shipment);
    }

    return shipment;
  }
}
