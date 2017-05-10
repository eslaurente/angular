import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutesModule } from "app/app-routes/app-routes.module";

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
  ]
})
export class CoreModule { }
