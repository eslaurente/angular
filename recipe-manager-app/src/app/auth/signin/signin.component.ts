import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import { DataStorageService } from "app/services/data-storage.service";
import { Recipe } from "app/shared/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    form.control.disable();
    this.authService.signinUser(email, password).then((res: any) => {
      console.log('onSignin(): SUCCESS', res);
      return this.router.navigate(['/recipes'])
    }).then(() => {
      this.dataStorageService.fetchRecipes().subscribe((recipes: Recipe[]) => {
        console.log('onFetchData: SUCCESS', recipes);
        this.recipeService.setRecipeList(recipes);
      });
    }).catch(() => {
      form.control.enable();
    });
  }
}
