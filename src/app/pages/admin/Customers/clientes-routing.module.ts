import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CustomersListComponent } from './clientes-list.component';
import { CustomerComponent } from './Form/customer.component'
import { AdminGuard } from '@shared/guards/admin.guard'


const routes: Routes = [{ path: '', component: CustomersListComponent},
{path: 'Form',component: CustomerComponent, canActivate: [AdminGuard]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
