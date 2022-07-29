import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoProductosComponent } from './contenidoProductos/contenidoProductos.component';
import { DetalleProductosComponent } from './detalleProductos/detalleProductos.component';
import { FormProductosComponent } from './formProductos/formProductos.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductosHomeComponent } from './productosHome/productosHome.component';




@NgModule({
  declarations: [
    ContenidoProductosComponent,
    DetalleProductosComponent,
    FormProductosComponent,
    ProductosHomeComponent
  ],
  exports:[
    DetalleProductosComponent,
    ContenidoProductosComponent,
    FormProductosComponent,
    ProductosHomeComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
