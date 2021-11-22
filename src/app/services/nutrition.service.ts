import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="https://api.edamam.com/api/";
const paramsOptions ={ "app_id": "8ecae90b", "app_key": "365ab52699f898c7ee188f9c4eb65c49" } 


@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(private http: HttpClient) { }
  getAnalyze(obj: any) {
    let myReq = this.http.post(baseUrl+"nutrition-details",
      obj
      , { headers: { 'Content-Type': 'application/json' }, params: paramsOptions});

    return myReq
  }

  getNutritionData(title: string) {
    let myReq = this.http.get(baseUrl+"nutrition-data", {
      headers: { 'Content-Type': 'application/json' },
      params: {
        ...paramsOptions,
        "ingr": `${title}`
      }
    });

    return myReq
  }


}
