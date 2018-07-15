import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {


  qu = [];
  list = [ 0];
  qu_value = [];
  i = 0;
  qup = [];
  t_value = [0];
  ba = [] ;
  ba_value = [0];

  constructor() { }

  ngOnInit() {



  }

  func(ic) {
     // alert('ok' + this.qu[ic] + this.qu_value[ic] + this.qup[ic] );
    this.qu_value[ic] = this.qup[ic] * this.qu[ic];
    this.t_value[ic] = this.qu_value[ic] +  this.t_value[ic];
  }

  changadd() {
   // alert('ok');
   this.list[this.i++] = this.i;

  }

  changminus() {
    // alert('ok');
    this.list[this.i--] = this.i;

  }

}
