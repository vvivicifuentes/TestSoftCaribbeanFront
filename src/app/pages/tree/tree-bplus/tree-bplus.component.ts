import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-tree-bplus',
  templateUrl: './tree-bplus.component.html',
  styles: [
  ]
})
export class TreeBPlusComponent implements OnInit {

  public customers_result: Customer[] = [];
  public total: number = -1;

  constructor(private fb: FormBuilder, private serviceSearch: SearchService) { }

  public searchById = this.fb.group({
    id: ['',[Validators.required]],
  })

  ngOnInit(): void {
  
  }

  search(){
    if( this.searchById.invalid ){
      return ;
    }
    this.serviceSearch.searchById( this.searchById.value.id )
    .subscribe( customers => {
      console.log(customers);
      this.customers_result = customers;
      
    }, (err) => alert( err.error.error ) );
  }

}
