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
      this.getDurabilityModifier +
        this.getBaseDurability +
        Sword.MODIFIER_CHANGE_RATE >
      MAXIMUM_DURABILITY_MODIFIER_VALUE
    ) {
      this.setDurabilityModifier =
        MAXIMUM_DURABILITY_MODIFIER_VALUE - this.getBaseDurability;
      return;
    }

    this.setDurabilityModifier =
      this.getDurabilityModifier + Sword.MODIFIER_CHANGE_RATE;
  }
}
