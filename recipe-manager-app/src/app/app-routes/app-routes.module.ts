import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from "app/app.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeItemResolver } from "app/services/recipe-item-resolver.service";


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full' 
  },
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
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: { recipe: RecipeItemResolver }
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
