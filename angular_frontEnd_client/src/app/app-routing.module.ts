import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {BillingComponent} from './billing/billing.component';
import {InventoryComponent} from './inventory/inventory.component';

const routes: Routes = [
  {path:"customers",component : CustomersComponent},
  {path:"billings",component:BillingComponent},
  {path:"inventory",component:InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
