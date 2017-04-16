import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(newIngredient: Ingredient) {
    const ingredientFromList = this.getFromList(newIngredient);
    if (ingredientFromList) {
      // Already exists: add to amount
      ingredientFromList.amount += newIngredient.amount; 
    }
    else {
      // Does not exist, add to list
      this.ingredients.push(newIngredient);
    }
  }

  onRemoveIngredient(anIngredient: Ingredient) {
    const ingredientFromList = this.getFromList(anIngredient);
    if (ingredientFromList && (ingredientFromList.amount - anIngredient.amount) > 0) {
      // Already exists: add to amount
      ingredientFromList.amount -= anIngredient.amount; 
    }
    else {
      // Remove from the list if it exists
      this.removeFromList(anIngredient);
    }
  }

  setSelectedIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
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
    }
  }
}
