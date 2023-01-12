import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  //construtor
  constructor(public dataservices:DataTableService, private route: ActivatedRoute){}
//implementamos el onInit para obtener el id del url ni bien inicia el componente
  ngOnInit(): void {
    
  }
}
