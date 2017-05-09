import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from "app/services/recipe.service";
import { ShoppingListService } from "app/services/shopping-list.service";
import { AppRoutesModule } from "app/app-routes/app-routes.module";
import { DataStorageService } from "app/services/data-storage.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from "app/services/auth.service";
import { AuthGuardService } from "app/services/auth-guard.service";
import { RecipesModule } from "app/recipes/recipes.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    RecipesModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DataStorageService,
    RecipeService,
    ShoppingListService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
