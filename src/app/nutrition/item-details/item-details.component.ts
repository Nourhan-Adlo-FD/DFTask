import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionService } from '../../services/nutrition.service'
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  title: any;
  details: any;
  title_arr: any;
  totalNutrients_Arr: any;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private getnutrition: NutritionService) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
    this.getnutrition.getNutritionData(this.title).subscribe((i: any) => {
      this.details = i;
      this.title_arr = this.title.split(' ').filter((x: any) => x);
      console.log(this.details);
      this.loading = false;
    });
  }


  getTotalNutraition() {
    this.totalNutrients_Arr = Object.values(this.details.totalNutrients);
  }
}
