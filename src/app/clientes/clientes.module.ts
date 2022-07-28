import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form-cliente/form-cliente.component';
import { DetalleComponent } from './detalle-cliente/detalle-cliente.component';
import { ContenidoComponent } from './contenido-clientes/contenido-clientes.component';

@NgModule({
  declarations: [
    FormComponent,
    DetalleComponent,
    ContenidoComponent
  ],
  exports:[
    FormComponent,
    DetalleComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
