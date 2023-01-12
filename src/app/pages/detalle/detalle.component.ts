import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  //1.variable
  id!:string;
  productoEncontrado=[{id:'',descripcion:'',preciocompra:'',precioventa:'',ganancia:'',existencia:''}];
  //2.construtor
  constructor(public dataservices:DataTableService, private route: ActivatedRoute){}
  //3.implementamos el onInit para obtener el id del url ni bien inicia el componente
  ngOnInit(): void {
    this.id=String (this.route.snapshot.paramMap.get('id'));
    this.cargarDatos(this.id);
  }
  //4. funcion que retorne los valores de ese id
  cargarDatos(id:string){
    this.productoEncontrado= this.dataservices.listaProductos.filter((element) => element.id === id);
    console.log(this.productoEncontrado);
  }
}
