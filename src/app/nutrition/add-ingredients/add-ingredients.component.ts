import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../../services/nutrition.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.scss']
})
export class AddIngredientsComponent implements OnInit {
  ingr: string = "";
  isValid: boolean = true;
  lineRows_Arr:any;
  valid_arr: any = ['kilogram', 'gram', 'pound', 'ounce', 'liter', 'milliliter', 'cubic inch', 'quart', 'drop', 'gallon', 'dash', 'fluid', 'pint', 'pinch', 'cup', 'teaspoon', 'tablespoon', 'dessert spoon', 'serving', 'bag', 'whole'];

  constructor(private getnutrition: NutritionService, private router: Router) { }

  ngOnInit(): void {

  }
  valid() {
    
    this.lineRows_Arr = this.ingr?.trim().split('\n'); //All Textbox lines.
    // -----
    this.lineRows_Arr.forEach((line_Str:any) => {
      let words_Arr = line_Str.split(' ').filter((x: any) => x); // Convert line to Array of Words.
      let res = this.valid_arr?.includes(words_Arr[1].toLowerCase()); // check on input unit, if exist in validation list.

      if (!res) {
        this.isValid = false;
        return
      } else {
        this.Analyze();
      }
      // console.log(`is ${words_Arr[1]}, valid unit ?`, res)
    });
  }
  Analyze() {
    let IngrediantsObj = {
      "title": "",
      "ingr": this.lineRows_Arr,
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

    this.getnutrition.getAnalyze(IngrediantsObj).subscribe((i: any) => {
      this.router.navigate(['/listing/', this.ingr]);
      console.log(i)
    }, error => {
      if(error.status == 555) alert("Recipe with insufficient quality to process correctly");
      else if(error.status == 422) alert("Unprocessable Entity - Couldn't parse the recipe or extract the nutritional info");
      else  alert(error.error);
    },);

  }
}
