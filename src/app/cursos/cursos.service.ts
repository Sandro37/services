import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{
     cursos:string[] = ["Angular", "Java", "C#", "JS", "Cobol"];
    constructor(){}
    
    getCursos(){
        return this.cursos;
    }

    addCurso(curso:string){
        this.cursos.push(curso);
    }
}