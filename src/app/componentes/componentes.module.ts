import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    TablaComponent,
    RouterModule
  ]
})
export class ComponentesModule { }
