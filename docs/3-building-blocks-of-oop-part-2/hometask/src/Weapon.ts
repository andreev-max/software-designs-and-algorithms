import { Item } from "./Item";

export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE: number = 0.05;
  private _baseDamage: number;
  private _baseDurability: number;
  private _damageModifier: number = 0;
  private _durabilityModifier: number = 0;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);

    this._baseDamage = baseDamage;
    this._baseDurability = baseDurability;
  }

  abstract polish(): void;

  use(): string {
    if (this.durabilityModifier + this.baseDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    let resultString = `You use the ${this.name}, dealing ${(
      this.damageModifier + this.baseDamage
    ).toFixed(2)} points of damage.`;

    this.durabilityModifier =
      this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;

    if (this.durabilityModifier + this.baseDurability <= 0) {
      resultString += `\nThe ${this.name} breaks.`;
    }

    return resultString;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${(this.damageModifier + this.baseDamage).toFixed(
      2
    )}, Durability: ${this.durabilityModifier + this.baseDurability * 100}%`;
  }

  get baseDamage(): number {
    return this._baseDamage;
  }

  get baseDurability(): number {
    return this._baseDurability;
  }

  get damageModifier(): number {
    return this._damageModifier;
  }

  set damageModifier(newDamageModifier: number) {
    this._damageModifier = newDamageModifier;
  }

  get durabilityModifier(): number {
    return this._durabilityModifier;
  }

  set durabilityModifier(newDurabilityModifier: number) {
    this._durabilityModifier = newDurabilityModifier;
  }
}
