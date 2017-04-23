import { Injectable } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  public ingredientSelected = new Subject<Ingredient>();
  public listChanged = new Subject<Ingredient[]>();

  constructor() { }

  getShoppingList(): Ingredient[] {
    return this.ingredients.slice();
  }
  
  addIngredient(anIngredient: Ingredient) {
    this._addIngredient(anIngredient);
    this.listChanged.next(this.ingredients.slice());
  }

  removeIngredient(anIngredient: Ingredient) {
    const ingredientFromList = this.getFromList(anIngredient);
    if (ingredientFromList && (ingredientFromList.amount - anIngredient.amount) > 0) {
      // Already exists: add to amount
      ingredientFromList.amount -= anIngredient.amount;
      this.listChanged.next(this.ingredients.slice());
    }
    else {
      // Remove from the list if it exists
      this.removeFromList(anIngredient);
    }
  }

  addAll(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient: Ingredient) => {
      this._addIngredient(ingredient.clone());
    });
    
    this.listChanged.next(this.ingredients.slice());
  }

  getByIndex(index: number): Ingredient | undefined {
    return this.ingredients[index];
  }

  updateValues(name: string, values: { name?: string, amount?: number }): void {
    const ingredient: Ingredient = this.getByName(name);
    if (ingredient) {
      if (values.name) {
        ingredient.name = values.name;
      }
      if (values.amount) {
        ingredient.amount = values.amount;
      }
    }
  }

  getByName(name: string): Ingredient | undefined {
    for (let item of this.ingredients) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        return item;
      }
    }
    return undefined;
  }

  existsByReference(ingredient: Ingredient): boolean {
    for (let item of this.ingredients) {
      if (item === ingredient) {
        return true;
      }
    }
    return false;
  }

  private _addIngredient(anIngredient: Ingredient) {
    const ingredientFromList = this.getFromList(anIngredient);
    if (ingredientFromList) {
      // Already exists: add to amount
      ingredientFromList.amount += anIngredient.amount; 
    }
    else {
      // Does not exist, add to list
      this.ingredients.push(anIngredient);
    }
  }


  private getFromList(ingredient: Ingredient): Ingredient | undefined {
    for (let item of this.ingredients) {
      if (item.name.toLowerCase() === ingredient.name.toLowerCase()) {
        return item;
      }
    }
    return undefined;
  }

  private removeFromList(ingredient: Ingredient | undefined): void {
    let index = 0;
    if (!ingredient) {
      // Do nothing if ingredient does not exist
      return;
    }

    for (let item of this.ingredients) {
      if (item.name.toLowerCase() === ingredient.name.toLowerCase()) {
        break;
      }
      index++;
    }
    
    if (index < this.ingredients.length) {
      // If index is within array range, remove element at 'index' from the list
      this.ingredients.splice(index, 1);      
      this.listChanged.next(this.ingredients.slice());
    }
  }
}
