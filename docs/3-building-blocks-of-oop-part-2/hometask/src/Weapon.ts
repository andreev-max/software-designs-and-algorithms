import { Item } from "./Item";

export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE: number = 0.05;
  private baseDamage: number;
  private baseDurability: number;
  private damageModifier: number = 0;
  private durabilityModifier: number = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  abstract polish(): void;

  use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    let resultString = `You use the ${
      this.name
    }, dealing ${this.getDamage().toFixed(2)} points of damage.`;

    this.setDurabilityModifier =
      this.getDurabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

    if (this.getDurability() <= 0) {
      resultString += `\nThe ${this.name} breaks.`;
    }

    return resultString;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.getDamage().toFixed(2)}, Durability: ${
      this.getDurability() * 100
    }%`;
  }

  get getBaseDamage(): number {
    return this.baseDamage;
  }

  get getBaseDurability(): number {
    return this.baseDurability;
  }

  get getDamageModifier(): number {
    return this.damageModifier;
  }

  set setDamageModifier(newDamageModifier: number) {
    this.damageModifier = newDamageModifier;
  }

  get getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  set setDurabilityModifier(newDurabilityModifier: number) {
    this.durabilityModifier = newDurabilityModifier;
  }

  getDamage(): number {
    return this.getBaseDamage + this.getDamageModifier;
  }

  getDurability(): number {
    return this.getBaseDurability + this.getDurabilityModifier;
  }
}
