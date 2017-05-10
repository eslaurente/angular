import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import { DataStorageService } from "app/services/data-storage.service";
import { RecipeService } from "app/services/recipe.service";
import { Recipe } from "app/shared/recipe.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const displayName = form.value.name;
    this.authService.signupUser(email, password, displayName)
      .then((res: any) => {
        console.log('onSignup() SUCCESS', res);
        return this.authService.signinUser(email, password)
      }).then(() => {
        return this.router.navigate(['/recipes']);
      }).then(() => {
        this.dataStorageService.fetchRecipes().subscribe((recipes: Recipe[]) => {
          console.log('onFetchData: SUCCESS', recipes);
          this.recipeService.setRecipeList(recipes);
        });
      });
  }
}
