import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemResolver } from "app/services/recipe-item-resolver.service";
import { AuthGuardService } from "app/services/auth-guard.service";

const recipesRoutes: Route[] = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: { recipe: RecipeItemResolver }
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [ AuthGuardService ],
        resolve: { recipe: RecipeItemResolver }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule {

}