export class Ingredient {
  constructor(public name: string,
              public amount: number,
              public unit?: string) {}

  clone(): Ingredient {
    return new Ingredient(this.name, this.amount, this.unit);
  }
}