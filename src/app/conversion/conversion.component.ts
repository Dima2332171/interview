import { Component} from '@angular/core';
import {CurrencyApiService} from "../currency-api.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent{

  numberControl:FormControl;

  base1:string = 'USD';
  base2:string = 'USD';
  result:number = 1;
  input:string = '1';
  check:boolean = false;

  inputCurrency:number = 1;
  changeBase1(currency1:string){
    this.base1 = currency1;
  }
  changeBase2(currency2:string){
    this.base2 = currency2;
  }
  constructor(private currancy: CurrencyApiService) {
    this.numberControl = new FormControl('1');
    this.numberControl.valueChanges.subscribe((value)=>{
      return value;
    })
  }
  currJson:any= [];
  convert():void{
    this.check = true;
    this.inputCurrency = this.numberControl.value;
    this.currancy.getCurrencyData(this.base1).subscribe(data=>{
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      if(this.base2==='USD'){
        this.result = this.currJson.rates.USD*this.numberControl.value;
      }
      if(this.base2==='UAH'){
        this.result = this.currJson.rates.UAH*this.numberControl.value;

      }
      if(this.base2==='EUR'){
        this.result = this.currJson.rates.EUR*this.numberControl.value;

      }
    })
  }
}
