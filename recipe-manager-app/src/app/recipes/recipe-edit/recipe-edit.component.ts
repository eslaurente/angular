import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn } from "@angular/forms";

import { Recipe } from "app/shared/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { RecipeService } from "app/services/recipe.service";
import { RecipeDetails } from "app/shared/recipe-details.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  recipeForm: FormGroup;
  ingredientFormArray: FormArray;
  instructionsFormArray: FormArray;
  newMode = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

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
    if (this.newMode) {
      // new recipe
      let recipeId: string = undefined;
      recipeId = this.recipeService.addRecipe(this.getRecipeObject());
      this.router.navigate(['/recipes', recipeId]);
    }
    else {
      // update recipe
      this.recipeService.updateRecipe(this.recipe.id, this.getRecipeObject());
      this.router.navigate(['/recipes', this.recipe.id]);

    }
  }

  onAddIngredient() {
    this.ingredientFormArray.push(
      new FormGroup({
        'name':   new FormControl(null, this.getIngredientNameValidators()),
        'amount': new FormControl(null, this.getIngredientAmountValidators()),
        'unit':   new FormControl(null, this.getUnitValidators())
      })
    );
  }

  onAddInstruction() {
    this.instructionsFormArray.push(
      new FormGroup({
        'instructionText':   new FormControl(null, Validators.required)
      })
    );
  }

  onCancel() {
    if (this.recipe) {
      this.router.navigate(['/recipes', this.recipe.id]);
    }
    else {
      this.router.navigate(['/recipes']);
    }
  }

  onDeleteIngredient(index: number) {
    this.ingredientFormArray.removeAt(index);
  }

  onDeleteInstruction(index: number) {
    this.instructionsFormArray.removeAt(index);
  }

  isInvalid(formName: string): boolean {
    const formCtrl = this.recipeForm.get(formName);
    return formCtrl.invalid && formCtrl.touched;
  }

  private getRecipeObject(): Recipe {
    return new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      new RecipeDetails(
        this.getIngredientsArray(this.recipeForm.value['ingredients']),
        this.getInstructionsArray(this.recipeForm.value['instructions'])
      ),
    );
  }

  private getIngredientsArray(formArray: any[]): Ingredient[] {
    const ingredientList = [];
      formArray.forEach((form) => {
        ingredientList.push(new Ingredient(
          form['name'],
          Number(form['amount']),
          form['unit']
        ));
      });
    return ingredientList;
  }

  private getInstructionsArray(formArray: any[]): string[] {
    const instructionList = [];
      formArray.forEach((form) => {
        instructionList.push(form['instructionText']);
      });
    return instructionList;
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
      ),
      'instructions': new FormArray(
        this.newMode ? [] : this.getInstructionsFormGroup(this.recipe.details.instructions),
      )
    });

    this.ingredientFormArray = <FormArray>this.recipeForm.get('ingredients');
    this.instructionsFormArray = <FormArray>this.recipeForm.get('instructions');
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

  private getInstructionsFormGroup(instructions: string[]): FormGroup[] {
    const formArray: FormGroup[] = [];
    instructions.forEach((instruction) => {      
      formArray.push(new FormGroup({
        'instructionText': new FormControl(instruction, Validators.required)
      }))
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
