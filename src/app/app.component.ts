import { Component } from '@angular/core';
import {CurrencyApiService} from "./services/currency-api.service";
import {api} from "./api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currJson:api;
  currJsonString:string= '';
  eur:number = 1;
  usd:number = 1;
  constructor(private currancy: CurrencyApiService) {
    this.currancy.getCurrencyData('EUR').subscribe(data => {
      this.currJsonString = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJsonString);
      this.eur = this.currJson.rates['UAH'];
    })

    this.currancy.getCurrencyData('USD').subscribe(data => {
      this.currJsonString = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJsonString);
      this.usd = this.currJson.rates['UAH'];
    })
  }
}
