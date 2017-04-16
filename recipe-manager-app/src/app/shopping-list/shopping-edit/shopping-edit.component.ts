import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() removeIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedIngredient) {
      this.nameInput.nativeElement.value = this.selectedIngredient.name;
      this.amountInput.nativeElement.value = this.selectedIngredient.amount;
    }
  }

  ngOnInit() {
  }

  added() {
    const nameTemp: string = this.nameInput.nativeElement.value;
    const amount: string = this.amountInput.nativeElement.value;
    const name: string = nameTemp.charAt(0).toUpperCase() + nameTemp.substring(1);
    if (this.isValid(name, amount)) {
      this.addIngredient.emit(new Ingredient(name, Number(amount)));
    }
  }

  removed() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: string = this.amountInput.nativeElement.value;
    if (this.isValid(name, amount)) {
      this.removeIngredient.emit(new Ingredient(name, Number(amount)));
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
