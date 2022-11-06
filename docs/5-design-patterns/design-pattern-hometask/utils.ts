import { ShipmentType } from "./src/types";

export function printExtraInfo(extraInfo?: string[]): string {
  return extraInfo
    ? extraInfo.map((info) => `**${info.toUpperCase()}**`).join("\n")
    : "";
}

export function getShipmentTypeAccordingToThisWeight(weight: number): ShipmentType {
  if(weight <= 15) {
    return ShipmentType.Letter
  }

  if(weight <= 160) {
    return ShipmentType.Package
  }

  return ShipmentType.Oversized
}
