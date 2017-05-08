import { Ingredient } from "app/shared/ingredient.model";

export class RecipeDetails {
    constructor(public ingredients: Ingredient[] = [],
                public instructions?: string[]) {}
}