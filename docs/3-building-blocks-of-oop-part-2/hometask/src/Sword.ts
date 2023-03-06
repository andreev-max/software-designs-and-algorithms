import { Weapon } from "./Weapon";

const MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE = 0.25;

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
      this.getDamageModifier + Sword.MODIFIER_CHANGE_RATE >
      this.getBaseDamage * MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE
    ) {
      this.setDamageModifier =
        this.getBaseDamage * MAXIMUM_DAMAGE_MODIFIER_PERCENTAGE;
      return;
    }

    this.setDamageModifier =
      this.getDamageModifier + Sword.MODIFIER_CHANGE_RATE;
  }
}
