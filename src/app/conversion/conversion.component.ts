import { Component,OnInit} from '@angular/core';
import {CurrencyApiService} from "../services/currency-api.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {api} from "../api";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit{

  currencyForm: FormGroup;
  optionValues:string[] = ['USD','EUR','UAH'];
  result:number = 1;
  check:boolean = false;
  currencyType:string = '';
    inputCurrency:number = 1;

  constructor(private currency: CurrencyApiService, private fb:FormBuilder) {  }

  ngOnInit(){
    this.initForm();
  }


  private initForm():void{
    this.currencyForm = this.fb.group({
      base1:'USD',
      base2:'USD',
      inputValue:[1,[Validators.required]],
    })
}
  currJson:api;
  currJsonString:string= '';

  convert():void{
    this.check = true;
    this.inputCurrency = this.currencyForm.value.inputValue;
    this.currency.getCurrencyData(this.currencyForm.value.base1).subscribe(data=>{
      this.currJsonString = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJsonString);
      this.currencyType = this.currencyForm.value.base2;
      this.result = this.currJson.rates[this.currencyType]*this.inputCurrency;
    })
  }

  get inputValue(){
    return this.currencyForm.get('inputValue')
  }
}
