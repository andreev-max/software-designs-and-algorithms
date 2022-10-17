import { Weapon } from "./Weapon";

const MAXIMUM_DURABILITY_MODIFIER_VALUE = 1;

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    if (
      this.durabilityModifier +
        this.baseDurability +
        Sword.MODIFIER_CHANGE_RATE >
      MAXIMUM_DURABILITY_MODIFIER_VALUE
    ) {
      this.durabilityModifier =
        MAXIMUM_DURABILITY_MODIFIER_VALUE - this.baseDurability;
      return;
    }

    this.durabilityModifier =
      this.durabilityModifier + Sword.MODIFIER_CHANGE_RATE;
  }
}
