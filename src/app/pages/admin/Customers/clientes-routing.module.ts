import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './clientes-list.component';
import { CustomerComponent } from './Form/customer.component'


const routes: Routes = [{ path: '', component: CustomersListComponent},
{path: 'Form',component: CustomerComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
