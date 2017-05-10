import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeService } from "app/services/recipe.service";
import { ShoppingListService } from "app/services/shopping-list.service";
import { AppRoutesModule } from "app/app-routes/app-routes.module";
import { DataStorageService } from "app/services/data-storage.service";
import { AuthService } from "app/services/auth.service";
import { AuthGuardService } from "app/services/auth-guard.service";
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutesModule,
    CoreModule,
    AuthModule,
    ShoppingListModule
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
