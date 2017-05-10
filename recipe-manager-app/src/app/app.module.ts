import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from "app/app-routes/app-routes.module";
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
  bootstrap: [ AppComponent ]
})
export class AppModule { }
