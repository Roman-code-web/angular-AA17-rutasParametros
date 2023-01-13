import { Component } from '@angular/core';
import { DataTableService } from 'src/app/servicios/data-table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dataservices:DataTableService){}
}
