import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterCustomer } from '../interfaces/register-customer-interface';
import { ResponseCreate } from '../interfaces/response-create-interface';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http: HttpClient ) { }

  createCustomer( formData: RegisterCustomer ){
    
    return this.http.post<ResponseCreate>( base_url , formData );
  }
}
