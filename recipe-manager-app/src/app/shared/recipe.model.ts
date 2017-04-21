import { RecipeDetails } from "app/shared/recipe-details.model";

export class Recipe {
  constructor(public id: string,
              public name: string,
              public description: string,
              public imagePath: string,
              public details: RecipeDetails) {}
}