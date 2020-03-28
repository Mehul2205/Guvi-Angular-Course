import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {HttpClient, HttpClientModule} from '@angular/common/http';

import { CustomerRoutingModule } from '../Routing/CustomerApp.CustomerRoute';
import { CustomerComponent } from './CustomerApp.CustomerComponent';


import {GridComponent} from '../Utilities/CustomerApp.GridComponent';


@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule, 
    ReactiveFormsModule
//    HttpClientModule,
//    HttpClient
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})

export class CustomerModule { }
