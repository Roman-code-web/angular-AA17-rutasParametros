import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  listaProductos=[
    {
      id:'PRO001',
      descripcion:'Galletas chokis',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'PRO002',
      descripcion:'A gogo',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'PRO003',
      descripcion:'gaseosa inka kola',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'PRO004',
      descripcion:'Mentitas',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },
    {
      id:'PRO005',
      descripcion:'Alfajores',
      preciocompra:'10.00',
      precioventa:'15.00',
      ganancia:'5',
      existencia:'100.00'
    },


]
  constructor() { }
}
