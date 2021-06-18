import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list.component';
import { MaterialModule } from '@app/material.module';
import { ProductComponent } from './Form/products/product.component';


@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
