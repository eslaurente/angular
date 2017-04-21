import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from "app/app.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";


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
