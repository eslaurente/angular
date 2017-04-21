import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "app/shared/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  newMode = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { recipe: Recipe }) => {
      if (!data.recipe) {
        // 'new' mode
        this.newMode = true;
        this.recipe = undefined;
      }
      else {
        // ':id/edit' mode
        this.newMode = false;
        this.recipe = data.recipe;
      }
    });
  }
}
