import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn } from "@angular/forms";

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
  recipeFormArray: FormArray;
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

  onAddIngredient() {
    this.recipeFormArray.push(
      new FormGroup({
        'name':   new FormControl(null, this.getIngredientNameValidators()),
        'amount': new FormControl(null, this.getIngredientAmountValidators()),
        'unit':   new FormControl(null, this.getUnitValidators())
      })
    );
  }

  isInvalid(formName: string): boolean {
    const formCtrl = this.recipeForm.get(formName);
    return formCtrl.invalid && formCtrl.touched;
  }

  private initForm() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(
        this.newMode ? '' : this.recipe.name,
        this.getNameValidators()
      ),
      'imagePath': new FormControl(
        this.newMode ? '' : this.recipe.imagePath,
        this.getImagePathValidators()
      ),
      'description': new FormControl(
        this.newMode ? '' : this.recipe.description,
        this.getDescriptionValidators()
      ),
      'ingredients': new FormArray(
        this.newMode ? [] : this.getIngredientsFormGroup(this.recipe.details.ingredients),
      )
    });

    this.recipeFormArray = <FormArray>this.recipeForm.get('ingredients');
  }

  private getIngredientsFormGroup(ingredients: Ingredient[]): FormGroup[] {
    const formArray: FormGroup[] = [];    
    ingredients.forEach((ingredient) => {
      formArray.push(new FormGroup({
        'name':   new FormControl(ingredient.name, this.getIngredientNameValidators()),
        'amount': new FormControl(ingredient.amount, this.getIngredientAmountValidators()),
        'unit':   new FormControl(ingredient.unit, this.getUnitValidators())
      }));
    });
    return formArray;
  }

  private getNameValidators(): ValidatorFn[] {
    return [Validators.required];
  }

  private getImagePathValidators(): ValidatorFn[] {
    return [Validators.required];
  }

  private getDescriptionValidators(): ValidatorFn[] {
    return [Validators.required];
  }

  private getIngredientNameValidators(): ValidatorFn[] {
    return [Validators.required];
  }

  private getIngredientAmountValidators(): ValidatorFn[] {
    return [Validators.required, Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/)];
  }

  private getUnitValidators(): ValidatorFn[] {
    return [Validators.required];
  }
}
