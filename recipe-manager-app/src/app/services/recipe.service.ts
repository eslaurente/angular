import { Injectable } from '@angular/core';
import { Recipe } from "app/shared/recipe.model";
import { RecipeDetails } from "app/shared/recipe-details.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  // private recipes: Recipe[] = [
  //     new Recipe(
  //       'Pork Guisantes',
  //       'Pork Guisantes is a hearty stew made with pork, green peas, and bell peppers cooked in a tomato sauce. Hearty and delicious, it’s best served with steamed rice.',
  //       'http://www.kawalingpinoy.com/wp-content/uploads/2016/01/pork-guisantes-1.jpg',
  //       new RecipeDetails(
  //         [new Ingredient('Olive oil', 1, 'tbsp'),
  //          new Ingredient('Red bell pepper', 1.5, 'pcs'),
  //          new Ingredient('Garlic', 3, 'pcs'),
  //          new Ingredient('Onion', 1, 'pcs'),
  //          new Ingredient('Fish sauce', 1, 'tbsp'),
  //          new Ingredient('Bay leaf', 1, 'pcs'),
  //          new Ingredient('Tomato sauce', 1, 'cup'),
  //          new Ingredient('Pork butt', 2, 'lbs'),
  //          new Ingredient('Sweet peas', 1, 'cup'),
  //          new Ingredient('Water', 2, 'cup')
  //         ],
  //         ['In a pan over medium heat, heat oil. Add bell peppers and cook for about 30 to 40 seconds. Remove from pan and set aside.',
  //         'In the pan, add onions and garlic and cook until softened. Add pork and cook for about 4 to 5 minutes or until lightly browned. Add fish and sauce and cook for about 1 to 2 minutes.',
  //         'Add tomato sauce, water, and bay leaf. Bring to a boil. Lower heat, cover and continue to cook for about 20 to 30 minutes or until pork is fork-tender and sauce is reduced.',
  //         'Add sweet peas and cook for about 2 to 3 minutes or until heated through. Season with salt and pepper to taste. Add bell peppers and cook for another 1 to 2 minutes or until tender yet crisp. Serve hot.']
  //       ),
  //       '1'
  //     ),
  //     new Recipe(
  //       'Chicken and Pork Adobo',
  //       'Adobo has many regional variations and chicken and pork adobo is just one of the common interpretations of our quintessential Filipino stew.',
  //       'http://www.kawalingpinoy.com/wp-content/uploads/2014/09/chickenadobo-a.jpg',
  //       new RecipeDetails(
  //         [new Ingredient('Olive oil', 1, 'tbsp'),
  //          new Ingredient('Onion', 1, 'pcs'),
  //          new Ingredient('Garlic', 1, 'pcs'),
  //          new Ingredient('Chicken', 1.5, 'lbs'),
  //          new Ingredient('Pork', 1.5, 'lbs'),
  //          new Ingredient('Vinegar', 1.5, 'cup'),
  //          new Ingredient('Soy sauce', 1.5, 'cup'),
  //          new Ingredient('Water', 1, 'cup'),
  //          new Ingredient('Bay leaves', 2, 'pcs')
  //         ],
  //         ['In a pot over medium heat, heat oil. Add onions and garlic and cook until limp. Add pork and cook, stirring occasionally, until lightly browned. Add chicken and cook, stirring occasionally, until lightly browned and juices run clear.',
  //         'Add vinegar and bring to a boil, uncovered and without stirring, for about 3 to 5 minutes. Add soy sauce, water and bay leaves. Continue to boil for about 2 to 3 minutes. Lower heat, cover and continue to cook until meat is tender and sauce is reduced. Season with salt and pepper to taste. Serve hot.']
  //       ),
  //       '2'
  //     )
  //   ];
  private recipes: Recipe[] = [];
  recipeListChanged = new Subject<Recipe[]>();
      
  constructor(private shoppingListService: ShoppingListService) { }

  setRecipeList(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipeListChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: string): Recipe | undefined {
    let recipe;
    let length = this.recipes.length;
    for (let i = 0; i < length; i++) {
      recipe = this.recipes[i];
      if (recipe.id === id) {
        return recipe;
      }
    }
  }

  getRecipeIndexById(id: string): number | undefined {
    let recipe;
    let length = this.recipes.length;
    for (let i = 0; i < length; i++) {
      recipe = this.recipes[i];
      if (recipe.id === id) {
        return i;
      }
    }
    return undefined;
  }
  
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addAll(ingredients);
  }

  addRecipe(recipe: Recipe): string {
    recipe.id = this.getRandomIntInclusive(0, 9999).toString();
    this.recipes.push(recipe);
    this.recipeListChanged.next(this.recipes.slice());
    return recipe.id;
  }

  removeRecipe(id: string) {
    const index = this.getRecipeIndexById(id);
    if (index !== undefined) {
      this.recipes.splice(index, 1);
      this.recipeListChanged.next(this.recipes.slice());
    }
  }

  updateRecipe(id: string, recipe: Recipe) {
    const index = this.getRecipeIndexById(id);
    const targetRecipe = this.recipes[index];
    recipe.id = targetRecipe.id;
    this.recipes[index] = recipe;
    this.recipeListChanged.next(this.recipes.slice());
  }

  private getRandomIntInclusive(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
