import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CustomersListComponent } from './clientes-list.component';
import { MaterialModule } from '@app/material.module';
import { CustomerComponent } from './Form/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomersListComponent, CustomerComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
