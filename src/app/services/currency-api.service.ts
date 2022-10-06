import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  constructor(private http:HttpClient) { }

  getCurrencyData(valuta:string){
    let url = `https://api.exchangerate.host/latest?base=${valuta}`;
    return this.http.get(url);
  }
}
