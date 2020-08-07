import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Model
import { Customers } from "../models/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }


  // Get All the Customers
  async getCustomers():Promise<Array<Customers>>
  {
    const customers:Array<Customers> = await this.http.get<Array<Customers>>("http://localhost:7000/customers").toPromise();

    return customers;
  }
}
