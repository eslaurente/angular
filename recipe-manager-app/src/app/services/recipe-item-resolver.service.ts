import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Recipe } from "app/shared/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Injectable()
export class RecipeItemResolver implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        let recipe = this.recipeService.getRecipeById(route.params['id']);
        if (recipe) {
            return recipe;
        }
        else {
            this.router.navigate(['']);
            return null;
        }
    }
}
