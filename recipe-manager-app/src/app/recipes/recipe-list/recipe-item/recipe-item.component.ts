import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/shared/recipe.model";

@Component({
  selector: '[app-recipe-item]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {
    console.log(this);
    
  }

  ngOnInit() {    
  }
}
