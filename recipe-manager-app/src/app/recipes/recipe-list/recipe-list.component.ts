import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Recipe } from "app/shared/recipe.model";
import { RecipeDetails } from "app/shared/recipe-details.model";
import { Ingredient } from "app/shared/ingredient.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeListChanged.subscribe((recipes: Recipe[]) => {
      let recipeRemoved = recipes.length < this.recipes.length;
      this.recipes = recipes;

      if (recipeRemoved) {
        this.router.navigate(['/recipes']);
      }
    });
  }
}
