import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  //1.declaro constructor para utilizar la data del servicios
  //2.router
  constructor(public dataservices:DataTableService, private router:Router){}
  //funcion para obtener el id del producto y direccionar
  getProductos(id:string){
    //console.log(id)
    this.router.navigate(['/detalle',id]);
  }
}
