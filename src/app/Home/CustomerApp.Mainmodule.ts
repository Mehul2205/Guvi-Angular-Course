import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from '../Routing/CustomerApp.MainRoute';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterComponent } from './CustomerApp.MasterComponent';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
