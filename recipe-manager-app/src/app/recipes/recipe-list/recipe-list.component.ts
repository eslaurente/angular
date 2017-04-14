import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe-list/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This simply a test', 'https://c1.staticflickr.com/1/108/275776506_ecfd29e6cf_b.jpg')
    , new Recipe('A Test Recipe', 'This simply a test', 'https://c1.staticflickr.com/1/108/275776506_ecfd29e6cf_b.jpg')
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
