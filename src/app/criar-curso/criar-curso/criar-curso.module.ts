import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from '../criar-curso.component';



@NgModule({
  declarations: [CriarCursoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CriarCursoModule
  ]
})
export class CriarCursoModule { }
