import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from '@app/material.module';
import { ProductModalComponent } from './components/modal/product.modal/product.modal.component';
import { CustomersModalComponent } from './components/modal/customers.modal/customers.modal.component';

@NgModule({
  declarations: [AdminComponent, ModalComponent, ProductModalComponent, CustomersModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
