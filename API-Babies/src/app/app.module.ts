import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// HTTP Module needed for HTTP REQUESTS
import { HttpClientModule} from '@angular/common/http';

// Components
import { AccountsComponent } from './components/accounts/accounts.component';
// Services
import { CustomerService } from "./services/customer.service";
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
