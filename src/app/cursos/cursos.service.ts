import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";
@Injectable()
export class CursosService{
    emitirCursoCriado = new EventEmitter<string>();

     cursos:string[] = ["Angular", "Java", "C#", "JS", "Cobol"];
    constructor(private logService: LogService ){}
    
    getCursos(){
        this.logService.consoleLog(`Obtendo lista de cursos ${this.cursos}`);
        return this.cursos;
    }

    addCurso(curso:string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}