import { RecipeDetails } from "app/shared/recipe-details.model";

export class Recipe {
  constructor(public name: string,
              public description: string,
              public imagePath: string,
              public details: RecipeDetails,
              public id?: string) {
    this.details = new RecipeDetails(details.ingredients, details.instructions);
  }
}