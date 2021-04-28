import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoginGuard } from '@shared/guards/check-login.guard';
import { CheckLoggedGuard } from '@shared/guards/check-logged.guard'


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),canActivate: [CheckLoggedGuard]},
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),canActivate: [CheckLoggedGuard]},
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule), canActivate: [CheckLoginGuard], },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),canActivate: [CheckLoggedGuard] },
  { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule),canActivate: [CheckLoggedGuard] },
  { path: 'portada', loadChildren: () => import('./pages/portada/portada.module').then(m => m.PortadaModule),canActivate: [CheckLoggedGuard] },
  { path: 'clientes', loadChildren: () => import('./pages/admin/clientes/clientes.module').then(m => m.ClientesModule),canActivate: [CheckLoggedGuard] },
  { path: 'promociones', loadChildren: () => import('./pages/promociones/promociones.module').then(m => m.PromocionesModule),canActivate: [CheckLoggedGuard]},
  { path: 'categorias', loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule),canActivate: [CheckLoggedGuard],},
  { path: 'configuracion', loadChildren: () => import('./pages/admin/configuracion/configuracion.module').then(m => m.ConfiguracionModule),canActivate: [CheckLoggedGuard]},
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
