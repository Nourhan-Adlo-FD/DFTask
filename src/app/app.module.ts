import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NutritionModule}from './nutrition/nutrition.module'
import {SharedModule}from './shared/shared.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NutritionModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
