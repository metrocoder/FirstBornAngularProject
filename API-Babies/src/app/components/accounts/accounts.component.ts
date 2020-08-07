import { Component, OnInit } from '@angular/core';

// Custom created Services + Model
import { CustomerService } from "src/app/services/customer.service";
import { Customers } from "src/app/models/customers";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private cserv:CustomerService) { }

  customers:Array<Customers>;

  ngOnInit(): void {
      this.getAllCustomers();
  }

  async getAllCustomers():Promise<void>
  {
    this.customers = await this.cserv.getCustomers();
  }

}
