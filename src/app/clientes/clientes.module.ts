import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { ContenidoClientesComponent } from './contenidoClientes/contenidoClientes.component';
import { DetalleClientesComponent } from './detalleCliente/detalleCliente.component';
import { FormClienteComponent } from './formCliente/formCliente.component';



@NgModule({
  declarations: [
    ContenidoClientesComponent,
    DetalleClientesComponent,
    FormClienteComponent


  ],
  exports:[
    ContenidoClientesComponent,
    DetalleClientesComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
