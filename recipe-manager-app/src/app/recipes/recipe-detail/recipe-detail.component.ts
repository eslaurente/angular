import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

import { Recipe } from "app/shared/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe;
    });
  }

  addIngredientsToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.details.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.recipe.id);
  }
}
