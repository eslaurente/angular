import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import { Recipe } from "app/shared/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  recipeForm: FormGroup;
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

      // Initialize form:
      this.initForm();      
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initForm() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(
        this.newMode ? '' : this.recipe.name
      ),
      'imagePath': new FormControl(
        this.newMode ? '' : this.recipe.imagePath
      ),
      'description': new FormControl(
        this.newMode ? '' : this.recipe.description
      ),
      'ingredients': new FormArray(
        this.newMode ? [] : this.getIngredientsFormGroup(this.recipe.details.ingredients)
      )
    });
  }

  private getIngredientsFormGroup(ingredients: Ingredient[]): FormGroup[] {
    const formArray: FormGroup[] = [];    
    ingredients.forEach((ingredient) => {
      formArray.push(new FormGroup({
        'name':   new FormControl(ingredient.name),
        'amount': new FormControl(ingredient.amount),
        'unit':   new FormControl(ingredient.unit)
      }));
    });
    return formArray;
  }
}
