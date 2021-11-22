import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import {NutritionRoutingModule}from './nutrition-routing.module';
import { ItemListingComponent } from './item-listing/item-listing.component'
import {SharedModule}from '../shared/shared.module';


@NgModule({    
  declarations: [
    AddIngredientsComponent,
    CardItemComponent,
    ItemDetailsComponent,
    ItemListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NutritionRoutingModule
  ]
})
export class NutritionModule { }
                        