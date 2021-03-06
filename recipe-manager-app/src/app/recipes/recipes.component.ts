import { Component, OnInit } from '@angular/core';
import { RecipeDetails } from "app/shared/recipe-details.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
