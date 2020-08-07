import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountsComponent } from "./components/accounts/accounts.component";

const routes: Routes = [
  {path:"customers", component:AccountsComponent},
  {path:"**", component:AccountsComponent} //Keep this last as a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
