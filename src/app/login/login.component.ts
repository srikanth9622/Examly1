import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  name = '';
  password = '';

  error_msg = '';
  ngOnInit() {
  }
  login(usr, pas) {

    // alert('asjdhj' + usr + ' ' + pas);
    if ( usr === 'Admin' && pas === 'hello') {
      console.log('true');
      window.location.href = '/Admin';
    } else if (usr === 'Staff' && pas === 'hello') {
      window.location.href = '/Staff';
    } else {
          alert('user name is invalide');
    }
  }
}
