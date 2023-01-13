import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  //1. Declaro variable
  titulodetalle="Detalle Producto";
  codigo!:string;
  productoEncontrado=[{id:'',codigo:'',descripcion:'',preciocompra:'',precioventa:'',ganancia:'',existencia:''}];
  indice!:number;
  //2.construtor
  constructor(public dataservices:DataTableService, private route: ActivatedRoute, private router:Router){}

  //3.implementamos el onInit para obtener el id del url ni bien inicia el componente
  ngOnInit(): void {
    this.dataservices.hidden=false;
    this.codigo=String (this.route.snapshot.paramMap.get('id'));
    this.cargarDatos(this.codigo);
  }

  //4. funcion cargar el resgistro donde codigo===codigo
  cargarDatos(codigo:string){
    this.productoEncontrado= this.dataservices.listaProductos.filter((element) => element.codigo === codigo);
  }
  //eliminar
  eliminarProducto(codigo:string){
    this.dataservices.listaProductos=this.dataservices.listaProductos.filter(elemets=> elemets.codigo!=codigo);
    this.router.navigate(['/']);
  }
  /*en proceso
  actuzalizarDatos(codigo:string){
    //this.dataservices.listaProductos[0].descripcion= String( this.productoEncontrado[0].descripcion='hola');
    //encontramos el indice
    this.indice=this.dataservices.listaProductos.findIndex(producto=> producto.codigo===codigo);
    //actualizamos los datos
    
    //lo enviamos al dataservice
    this.dataservices.listaProductos[this.indice].descripcion
  }*/
}
