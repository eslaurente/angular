import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";
import { Subscription } from "rxjs/Subscription";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private ingredientSelectedSubcrptn: Subscription;
  @ViewChild('form') form: NgForm;
  updateMode = false;
  ingredientToUpdate: Ingredient = undefined;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientSelectedSubcrptn = this.shoppingListService.ingredientSelected.subscribe((ingredient: Ingredient | undefined) => {
      if (ingredient) {
        this.form.setValue({
          'name': ingredient.name,
          'amount': ingredient.amount
        });
        this.updateMode = true;
        this.ingredientToUpdate = ingredient;
      }
      else {
        // ingredient === undefined
        // Change this.updateMode => false;
        this.form.reset();
        this.updateMode = false;
        this.ingredientToUpdate = undefined;
      }
    });
  }

  ngOnDestroy() {
    this.ingredientSelectedSubcrptn.unsubscribe();
  }

  onAdded() {
    if (this.form.control.invalid) {
      this.form.controls['name'].markAsTouched();
      this.form.controls['amount'].markAsTouched();
    }
    else {
      const nameTemp: string = this.form.value.name;
      const amount: string = this.form.value.amount;
      if (this.isValid(nameTemp, amount)) {
        const name: string = nameTemp.charAt(0).toUpperCase() + nameTemp.substring(1);
        if (this.updateMode) {
          // Update selected recipe
          this.shoppingListService.updateValues(this.ingredientToUpdate.name, {
            name: name,
            amount: Number(amount)
          });
          this.shoppingListService.ingredientSelected.next(undefined);
        }
        else {
          // Add to recipe list
          this.shoppingListService.addIngredient(new Ingredient(name, Number(amount)));
        }
      }
    }
  }

  onRemoved() {
    const name: string = this.form.value.name;
    const amount: string = this.form.value.amount;
    if (this.isValid(name, amount)) {
      this.shoppingListService.removeIngredient(new Ingredient(name, Number(amount)));
    }
  }

  onCleared() {
    this.shoppingListService.ingredientSelected.next(undefined);
  }

  private isValid(name: string, amount: string): boolean {
    return (name !== '' && name !== null && name !== undefined) && (amount !== '' && amount !== null && amount !== undefined);
  }
}
