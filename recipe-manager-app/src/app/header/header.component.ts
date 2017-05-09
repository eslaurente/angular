import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from "app/services/data-storage.service";
import { Recipe } from "app/shared/recipe.model";
import { RecipeService } from "app/services/recipe.service";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Response) => {
        console.log('onSaveData: SUCCESS', response);
      });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes()
      .subscribe((recipes: Recipe[]) => {
        console.log('onFetchData: SUCCESS', recipes);
        this.recipeService.setRecipeList(recipes);
      });
  }
}
