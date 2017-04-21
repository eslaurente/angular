import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Recipe } from "app/shared/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private activateRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipeById(params['id']);
    });
  }

  addIngredientsToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.details.ingredients);
  }
}
