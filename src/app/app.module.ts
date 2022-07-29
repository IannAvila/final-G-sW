import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { ContenidoModule } from './contenido/contenido.module';


import { ProductosModule } from './productos/productos.module';
import { TiendaComponent } from './tienda/tienda.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ClientesModule,
    ProductosModule,
    ContenidoModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
