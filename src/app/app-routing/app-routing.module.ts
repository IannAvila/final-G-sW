import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../contenido/inicio/inicio.component';
import { LoginComponent } from '../contenido/login/login.component';
import { ContenidoProductosComponent } from '../productos/contenido-productos/contenidoProductos.component';
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
    path:'productos',
    component:ContenidoProductosComponent
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
