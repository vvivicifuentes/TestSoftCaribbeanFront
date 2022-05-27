import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http: HttpClient ) { }

  searchById( id: number ){
    
    return this.http.get<Customer[]>( base_url + id );
  }
}
