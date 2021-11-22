import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionService } from '../../services/nutrition.service'
@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss']
})
export class ItemListingComponent implements OnInit {
  ingrResult: any = '';
  totalDaily: any = [];
  titles_Arr: any = [];
  ingr: any;
  loading:boolean= true;
  constructor(private getnutrition: NutritionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ingr = this.route.snapshot.paramMap.get('ingr');
    this.titles_Arr = this.ingr.trim().split('\n');
    this.loading = false;
    // this.Analyze();
  }
  Analyze() {
    // let arr =this.ingr.split('\n');
    let IngrediantsObj = {
      "title": "",
      "ingr": this.titles_Arr,
      "url": "",
      "summary": "",
      "yield": "",
      "time": "",
      "img": "",
      "prep": "",
      "cuisine": "",
      "mealtype": "",
      "dishtype": ""
    };
    // const findArr = [
    const nutritionFacts_Arr = [
      'Fat', 'Cholesterol', 'Sodium', 'Carbs', 'Calories', 'Carbohydrate', 'Protein', 'Vitamin', 'Calcium', 'Iron', 'Potassium', 'Vitamin E', 'Vitamin A', 'Vitamin B6', 'Vitamin B12', 'Vitamin C', 'Vitamin D', 'Vitamin K'
    ];

    this.getnutrition.getAnalyze(IngrediantsObj).subscribe((i: any) => {
      this.ingrResult = i;
      this.totalDaily = Object.values(i.totalDaily).filter((x: any) => nutritionFacts_Arr.includes(x.label));
      // this.totalDaily = Object.values(i.totalDaily).filter((x: any) => {
      //   let m = nutritionFacts_Arr.find(x.label)
      //   m ? true : false;
      // } );
      this.loading = false;
    }, error => {
      console.log('error', error.status);
      console.log('error', error.error);
      this.loading = false;
    });

  }
}
