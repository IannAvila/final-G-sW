import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoClientesComponent } from '../clientes/contenidoClientes/contenidoClientes.component';
import { DetalleClientesComponent } from '../clientes/detalleCliente/detalleCliente.component';
import { FormClienteComponent } from '../clientes/formCliente/formCliente.component';
import { InicioComponent } from '../contenido/inicio/inicio.component';
import { LoginComponent } from '../contenido/login/login.component';
import { ContenidoProductosComponent } from '../productos/contenidoProductos/contenidoProductos.component';
import { DetalleProductosComponent } from '../productos/detalleProductos/detalleProductos.component';
import { FormProductosComponent } from '../productos/formProductos/formProductos.component';
import { ProductosHomeComponent } from '../productos/productosHome/productosHome.component';
import { TiendaComponent } from '../tienda/tienda.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'tienda',
    component:TiendaComponent
  },
  {
    path:'clientes',
    component: ContenidoClientesComponent
   },
   {
    path:'clientes/crear',
    component:FormClienteComponent
   },
   {
    path:'clientes/editar/:id',
    component:FormClienteComponent
   },
   {
    path:'clientes/ver/:id',
    component:DetalleClientesComponent
   },




  {
    path:'productos',
    component:ContenidoProductosComponent
  },
  {
    path:'productos/crear',
    component:FormProductosComponent
   },
   {
    path:'productos/editar/:id',
    component:FormProductosComponent
   },
   {
    path:'productos/ver/:id',
    component:DetalleProductosComponent
   },
   {
    path:'productos/home',
    component:ProductosHomeComponent
   },




  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
