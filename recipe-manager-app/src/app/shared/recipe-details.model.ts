import { Ingredient } from "app/shared/ingredient.model";

export class RecipeDetails {
  constructor(public ingredients: Ingredient[],
              public instructions?: string[]) {
    this.ingredients = this.copyIngredients(ingredients);
  }

  private copyIngredients(ingredients: Ingredient[]): Ingredient[] {
    return ingredients.map((ingredient: Ingredient) => {
      return new Ingredient(ingredient.name, ingredient.amount, ingredient.unit);
    });
  }
}