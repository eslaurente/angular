import { Router } from "@angular/router";

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
  
  constructor(private router: Router,
              private dataStorageService: DataStorageService,
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

  onLogout() {
    this.authService.logout().then(() => {
      console.log('onLogout(): SUCCESS');
      this.recipeService.setRecipeList([]);
      this.router.navigate(['/']);
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getDisplayName(): string {
    return this.authService.getDisplayName();
  }
}
