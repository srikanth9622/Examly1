import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Car} from './car';





@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: Http) {}

  getCarsSmall() {
    return this.http.get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => data);
}}
