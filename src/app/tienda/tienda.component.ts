import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/interface/producto';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos:Producto[]=[];
  imagenSrc:string="";
  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {

    this.imagenSrc='assets/avatar2.jpg';

    this.servicio.getProducto().subscribe(
      resp => this.productos=resp
    );

  }

}
