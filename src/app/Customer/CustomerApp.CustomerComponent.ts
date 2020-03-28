import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model';
import { async } from '@angular/core/testing';
//import {HttpClient} from '@angular/common/http'


@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['./CustomerApp.CustomerView.css']
})
export class CustomerComponent {
  title = 'CustApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
//  http: HttpClient = null;

  Add(){
    this.CustomerModels.push(this.CustomerModel);          //this.CustomerModel.form.value
    this.CustomerModel = new Customer();    // Clear UI
  }

  SelectCustomer(_selected:Customer){
    this.CustomerModel = _selected;
  }

  // PosttoServer(){
  //   // http://localhost:3000/Customers
  //   var custdto:any ={};
  //   custdto.Code = this.CustomerModel.Code
  //   custdto.Name = this.CustomerModel.Name
  //   custdto.Amount = this.CustomerModel.Amount
  //   this.http.post('http://localhost:300/customers',custdto).subscribe(res=>this.Sucess(res), res=>this.Error(res));
  // }

  // GetFromServer(){

  //   this.http.get('http://localhost:300/customers').subscribe(res=>this.SucessGet(res), res=>this.Error(res))
  // }

  // Error(res){
  //   console.debug(res);
  // }
  // Sucess(res){
  //   this.GetFromServer();
  // }
  // SucessGet(res){
  //   this.CustomerModel = res;
  // }
}
