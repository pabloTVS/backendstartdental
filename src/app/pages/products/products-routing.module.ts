import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-list.component';
import { ProductComponent} from './Form/products/product.component';
import { AdminGuard } from '@shared/guards/admin.guard';

const routes: Routes = [{ path: '', component: ProductsListComponent },
{path: 'Form',component: ProductComponent, canActivate: [AdminGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
