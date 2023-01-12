import { Component } from '@angular/core';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  //declaro constructor para utilizar la data del servicios
  constructor(public dataservices:DataTableService){}
  //funcion para obtener el id del producto y direccionar
  getProductos(id:string){
    //console.log(id)
  }
}
