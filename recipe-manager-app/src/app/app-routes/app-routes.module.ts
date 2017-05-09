import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full' 
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
