import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private listChangedSubscrptn: Subscription;
  ingredients: Ingredient[];
  currentlySelected: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    // listChanged Observable
    this.listChangedSubscrptn = this.shoppingListService.listChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
      if (!this.shoppingListService.existsByReference(this.currentlySelected)) {        
        this.clearSelectedIngredient();
      }
    });

    // ingredientSelected Observable
    this.shoppingListService.ingredientSelected.subscribe((ingredient: Ingredient | undefined) => {
      if (!ingredient) {
        this.currentlySelected = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.listChangedSubscrptn.unsubscribe();
  }

  setSelectedIngredient(ingredient: Ingredient) {
    this.currentlySelected = ingredient;
    this.shoppingListService.ingredientSelected.next(ingredient);
  }

  private clearSelectedIngredient(): void {
    this.shoppingListService.ingredientSelected.next(undefined);
  }
}
