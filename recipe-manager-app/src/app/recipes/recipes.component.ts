import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/shared/recipe.model";
import { RecipeDetails } from "app/shared/recipe-details.model";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pork Guisantes', 'Pork Guisantes is a hearty stew made with pork, green peas, and bell peppers cooked in a tomato sauce. Hearty and delicious, it’s best served with steamed rice.', 'http://www.kawalingpinoy.com/wp-content/uploads/2016/01/pork-guisantes-1.jpg',
      new RecipeDetails(
        [new Ingredient('Olive oil', 'tbsp', 1),
         new Ingredient('Red bell pepper', 'pcs', 1.5),
         new Ingredient('Garlic', 'pcs', 3),
         new Ingredient('Onion', 'pcs', 1),
         new Ingredient('Fish sauce', 'tbsp', 1),
         new Ingredient('Bay leaf', 'pcs', 1),
         new Ingredient('Tomato sauce', 'cup', 1),
         new Ingredient('Pork butt', 'lbs', 2),
         new Ingredient('Sweet peas', 'cup', 1),
         new Ingredient('Water', 'cup', 2)
        ],
        ['In a pan over medium heat, heat oil. Add bell peppers and cook for about 30 to 40 seconds. Remove from pan and set aside.',
         'In the pan, add onions and garlic and cook until softened. Add pork and cook for about 4 to 5 minutes or until lightly browned. Add fish and sauce and cook for about 1 to 2 minutes.',
         'Add tomato sauce, water, and bay leaf. Bring to a boil. Lower heat, cover and continue to cook for about 20 to 30 minutes or until pork is fork-tender and sauce is reduced.',
         'Add sweet peas and cook for about 2 to 3 minutes or until heated through. Season with salt and pepper to taste. Add bell peppers and cook for another 1 to 2 minutes or until tender yet crisp. Serve hot.'])),
    new Recipe('Chicken and Pork Adobo', 'Adobo has many regional variations and chicken and pork adobo is just one of the common interpretations of our quintessential Filipino stew.', 'http://www.kawalingpinoy.com/wp-content/uploads/2014/09/chickenadobo-a.jpg',
      new RecipeDetails(
        [new Ingredient('Olive oil', 'tbsp', 1),
        new Ingredient('Onion', 'pcs', 1),
        new Ingredient('Garlic', 'pcs', 1),
        new Ingredient('Chicken', 'lbs', 1.5),
        new Ingredient('Pork', 'lbs', 1.5),
        new Ingredient('Vinegar', 'cup', 1),
        new Ingredient('Soy sauce', 'cup', 0.5),
        new Ingredient('Water', 'cup', 1),
        new Ingredient('Bay leaves', 'pcs', 2)
        ],
        ['In a pot over medium heat, heat oil. Add onions and garlic and cook until limp. Add pork and cook, stirring occasionally, until lightly browned. Add chicken and cook, stirring occasionally, until lightly browned and juices run clear.',
         'Add vinegar and bring to a boil, uncovered and without stirring, for about 3 to 5 minutes. Add soy sauce, water and bay leaves. Continue to boil for about 2 to 3 minutes. Lower heat, cover and continue to cook until meat is tender and sauce is reduced. Season with salt and pepper to taste. Serve hot.']))
  ];
  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    this.currentRecipe = this.recipes[0];
  }

  onRecipeSelected(recipe: Recipe) {
    this.currentRecipe = recipe;    
  }

}
