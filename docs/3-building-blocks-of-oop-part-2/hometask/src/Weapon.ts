import { Item } from "./Item";

export class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05;
  baseDamage: number;
  baseDurability: number;
  damageModifier: number = 0;
  durabilityModifier: number = 0;
  effectiveDamage: number;
  effectiveDurability: number;

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
    this.effectiveDamage = this.baseDamage + this.damageModifier;
    this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  polish(): void {}

  use(): string {
    if (this.effectiveDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    let resultString = `You use the ${
      this.name
    }, dealing ${this.effectiveDamage.toFixed(2)} points of damage.`;

    this.effectiveDurability =
      this.effectiveDurability - this.MODIFIER_CHANGE_RATE;

    if (this.effectiveDurability <= 0) {
      resultString += `\n You use the ${
        this.name
      }, dealing ${this.effectiveDamage.toFixed(2)} points of damage. The ${
        this.name
      } breaks.`;
    }

    return resultString;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.effectiveDamage.toFixed(2)}, Durability: ${
      this.effectiveDurability * 100
    }%`;
  }

  getDamage(): number {
    return this.effectiveDamage;
  }

  getDurability(): number {
    return this.effectiveDurability;
  }
}
