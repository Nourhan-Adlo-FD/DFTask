import { Component, OnInit, Input } from '@angular/core';
import {NutritionService}from '../../services/nutrition.service'
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() cardTitle: string='title';
  details:any;
  constructor(private getnutrition:NutritionService) { }

  ngOnInit(): void {
  }
   getDetails(){
    this.getnutrition.getNutritionData(this.cardTitle).subscribe((i:any)=>{
      this.details = i;
      console.log(this.details )
    }); 
   }
}
