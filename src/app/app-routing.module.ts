import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoggedGuard } from '@shared/guards/check-logged.guard';
import { AdminGuard } from '@shared/guards/admin.guard';
import { ComercialGuard } from '@shared/guards/comer.guard';

import {NotFoundComponent } from '@pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule)},
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),canActivate: [CheckLoggedGuard,AdminGuard]},
  { path: 'categorias', loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule),canActivate: [CheckLoggedGuard,AdminGuard],},
  { path: 'configuracion', loadChildren: () => import('./pages/admin/configuracion/configuracion.module').then(m => m.ConfiguracionModule),canActivate: [CheckLoggedGuard,AdminGuard]},
  { path: 'clientes', loadChildren: () => import('./pages/admin/Customers/clientes.module').then(m => m.ClientesModule),canActivate: [CheckLoggedGuard,ComercialGuard] },

  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),canActivate: [CheckLoggedGuard] },
  { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule),canActivate: [CheckLoggedGuard] },
  { path: 'portada', loadChildren: () => import('./pages/portada/portada.module').then(m => m.PortadaModule),canActivate: [CheckLoggedGuard] },
  { path: 'promociones', loadChildren: () => import('./pages/promociones/promociones.module').then(m => m.PromocionesModule),canActivate: [CheckLoggedGuard]},
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),canActivate: [CheckLoggedGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
