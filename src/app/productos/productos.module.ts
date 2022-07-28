import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ContenidoProductosComponent } from './contenido-productos/contenidoProductos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { FormProductosComponent } from './form-productos/form-productos.component';



@NgModule({
  declarations: [
    ContenidoProductosComponent,
    DetalleProductosComponent,
    FormProductosComponent
  ],
  exports:[
    DetalleProductosComponent,
    ContenidoProductosComponent,
    FormProductosComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
