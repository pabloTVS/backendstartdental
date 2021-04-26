import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoginGuard } from '@shared/guards/check-login.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),canActivate: [!CheckLoginGuard] },
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),canActivate: [!CheckLoginGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),canActivate: [!CheckLoginGuard]},
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule), canActivate: [CheckLoginGuard], },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),canActivate: [!CheckLoginGuard] },
  { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule),canActivate: [!CheckLoginGuard] },
  { path: 'portada', loadChildren: () => import('./pages/portada/portada.module').then(m => m.PortadaModule),canActivate: [!CheckLoginGuard] },
  { path: 'clientes', loadChildren: () => import('./pages/admin/clientes/clientes.module').then(m => m.ClientesModule),canActivate: [!CheckLoginGuard] },
  { path: 'promociones', loadChildren: () => import('./pages/promociones/promociones.module').then(m => m.PromocionesModule),canActivate: [!CheckLoginGuard] },
  { path: 'categorias', loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule),canActivate: [!CheckLoginGuard], },
  { path: 'configuracion', loadChildren: () => import('./pages/admin/configuracion/configuracion.module').then(m => m.ConfiguracionModule),canActivate: [!CheckLoginGuard] },
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
