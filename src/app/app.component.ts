import { Component } from '@angular/core';
import {CurrencyApiService} from "./currency-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currJson:any = [];
  eur:number = 1;
  usd:number = 1;
  constructor(private currancy: CurrencyApiService) {
    this.currancy.getCurrencyData('EUR').subscribe(data => {
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      this.eur = this.currJson.rates.UAH;
    })

    this.currancy.getCurrencyData('USD').subscribe(data => {
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      this.usd = this.currJson.rates.UAH;
    })
  }
}
