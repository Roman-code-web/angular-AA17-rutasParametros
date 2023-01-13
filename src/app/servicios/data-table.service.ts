import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  hidden=true;
  listaProductos=[
    {
      id:'1',
      codigo:'PRO001',
      descripcion:'Galletas chokis',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'2',
      codigo:'PRO002',
      descripcion:'A gogo',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'3',
      codigo:'PRO003',
      descripcion:'gaseosa inka kola',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'4',
      codigo:'PRO004',
      descripcion:'Mentitas',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'5',
      codigo:'PRO005',
      descripcion:'Alfajores',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },


]
  constructor() { }
}
