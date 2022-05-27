import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: [
  ]
})
export class CustomerComponent implements OnInit {

  public stringTree: string = "";

  public registerCustomer = this.fb.group({
    id: ['',[Validators.required]],
    firstName: ['Carlos',[Validators.required]],
    lastName: ['Torres',[Validators.required]],
    direction: ['Call 5 Norte',[Validators.required]],
    movil: ['3005262626',[Validators.required]],
    age: ['20',[Validators.required]],
    dateBirth: ['1990-01-04',[Validators.required]],
  })

  constructor(private fb: FormBuilder,private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(){
    if( this.registerCustomer.invalid ){
      return ;
    }
    this.customerService.createCustomer( this.registerCustomer.value )
    .subscribe( ({ stringTree }) => {
      alert("Customer created successful");
      console.info(stringTree);
      this.stringTree = stringTree;
    }, (err) => alert( err.error.error ) );
  }

}
