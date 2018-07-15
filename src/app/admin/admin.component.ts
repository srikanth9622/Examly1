import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;

  list = [];



  constructor() {

    this.list = [
      'No GST',
      '5%',
      '12%',
      '18%',
      '28%'
    ]
    this.cities1 = [
      {label: 'GST %', value: null},
      {label: 'No GST', value: '0'},
      {label: '5%', value: 5},
      {label: '12%', value: 12},
      {label: '18%', value: 18},
      {label: '28%', value: 28}
    ];


    this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
  }

}
