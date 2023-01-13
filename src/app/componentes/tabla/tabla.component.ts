import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  titulotabla="Lista de productos";
  //1.declaro constructor para utilizar la data del servicio y router para navegar
  constructor(public dataservices:DataTableService, private router:Router){}

  //funcion para obtener el id del producto y navegar
  getProductos(codigo:string){
    this.router.navigate(['/detalle',codigo]);
  }

  eliminarProducto(codigo:string){
    this.dataservices.listaProductos=this.dataservices.listaProductos.filter(elemts=> elemts.codigo!=codigo);
  }
  ngOnInit(): void {
    this.dataservices.hidden=true;
  }
}
