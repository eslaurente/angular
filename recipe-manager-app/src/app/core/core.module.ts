import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutesModule } from "app/app-routes/app-routes.module";
import { AuthService } from "app/services/auth.service";
import { AuthGuardService } from "app/services/auth-guard.service";
import { DataStorageService } from "app/services/data-storage.service";
import { RecipeService } from "app/services/recipe.service";
import { ShoppingListService } from "app/services/shopping-list.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutesModule
  ],
  exports: [
    AppRoutesModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DataStorageService,
    RecipeService,
    ShoppingListService,
  ]
})
export class CoreModule { }
