import { Weapon } from "./Weapon";

const MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE = 1.25;

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("sword", baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    if (
      this.damageModifier + this.MODIFIER_CHANGE_RATE >
      this.baseDamage * MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE
    ) {
      this.damageModifier =
        this.baseDamage * MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE;
      return;
    }

    this.damageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
  }
}
