import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component'
import { ItemDetailsComponent } from './item-details/item-details.component'
import {ItemListingComponent} from './item-listing/item-listing.component'
const routes: Routes = [{ path: '', component: AddIngredientsComponent }, {
    path: 'details/:title', component: ItemDetailsComponent

},{path:'listing/:ingr',component:ItemListingComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NutritionRoutingModule { }
