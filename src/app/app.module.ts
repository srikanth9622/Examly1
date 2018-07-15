import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { AdminComponent } from './admin/admin.component';
import {DropdownModule} from 'primeng/dropdown';
import {SpinnerModule} from 'primeng/spinner';
import {TableModule} from 'primeng/table';
import { StaffComponent } from './staff/staff.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/primeng';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StaffComponent,

  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    SpinnerModule,
    TableModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
