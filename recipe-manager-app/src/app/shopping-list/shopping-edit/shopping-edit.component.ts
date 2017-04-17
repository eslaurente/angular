import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientSelected.subscribe((ingredient: Ingredient) => {
      this.nameInput.nativeElement.value = ingredient.name;
      this.amountInput.nativeElement.value = ingredient.amount;
    });
  }

  added() {
    const nameTemp: string = this.nameInput.nativeElement.value;
    const amount: string = this.amountInput.nativeElement.value;
    const name: string = nameTemp.charAt(0).toUpperCase() + nameTemp.substring(1);
    if (this.isValid(name, amount)) {
      this.shoppingListService.addIngredient(new Ingredient(name, Number(amount)));
    }
  }

  removed() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: string = this.amountInput.nativeElement.value;
    if (this.isValid(name, amount)) {
      this.shoppingListService.removeIngredient(new Ingredient(name, Number(amount)));
    }
  }

  clearForm() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }

  private isValid(name: string, amount: string): boolean {
    return name !== '' && amount !== '';
  }
}
