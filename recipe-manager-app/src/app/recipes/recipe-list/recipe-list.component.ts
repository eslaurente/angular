import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/shared/recipe.model";
import { RecipeDetails } from "app/shared/recipe-details.model";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() recipeSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(thisRecipe) {
    this.recipeSelect.emit(thisRecipe);
  }

}
