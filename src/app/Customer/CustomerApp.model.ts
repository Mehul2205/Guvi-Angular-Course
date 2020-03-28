import {NgControl, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import {NgModule} from '@angular/core'

// Create   : We Create the validation object model
// Connect  : We connect the validation to the UI
// Check    : IsValid, IdDirty

export class Customer{
    Code:string = "";
    Name:string = "";
    Amount:number = 0;


    form = new FormGroup({
        CustomerCodeControl: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4,4}$')]),
        CustomerNameControl: new FormControl('', Validators.required),
        CustomerAmountControl: new FormControl('', Validators.pattern('[0-9]*$'))
    });

    get Code1(){
        return this.form.get('CustomerCodeControl');
    }
    get Name1(){
        return this.form.get('CustomerNameControl');
    }
    get Amount1(){
        return this.form.get('CustomerAmountControl')
    }
}

    // formCustomerGroup: FormGroup = null;    // Create object of FormGroup



    // constructor(){
    //     var _builder = new FormBuilder();
    //     this.formCustomerGroup = _builder.group({});    // Use the builder to create

    //     // control --> validation
    //     // Customer Name Control-->
    //     // Required
    //     this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

    //     //Customer Code Control -->
    //     // required, 4 letter numeric
    //     var validationcollection = [];
    //     validationcollection.push(Validators.required)
    //     validationcollection.push(Validators.pattern('[0-9]{4,4}$'))

    //     this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)))
    // }
