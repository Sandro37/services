import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService{
    emitirCursoCriado = new EventEmitter<string>();

     cursos:string[] = ["Angular", "Java", "C#", "JS", "Cobol"];
    constructor(){}
    
    getCursos(){
        return this.cursos;
    }

    addCurso(curso:string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}