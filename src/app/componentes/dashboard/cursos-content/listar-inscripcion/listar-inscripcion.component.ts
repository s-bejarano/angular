import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EliminarInscripcion } from 'src/app/componentes/store/inscripciones.actions';
import { inscripciones } from 'src/app/interfaces/inscripciones';

@Component({
  selector: 'app-listar-inscripcion',
  templateUrl: './listar-inscripcion.component.html',
  styleUrls: ['./listar-inscripcion.component.css']
})
export class ListarInscripcionComponent {


  listInscripciones: inscripciones[] = [

    /*
    {
      id: '124125125',
      id_alumno: '2',
      id_clase: '2',
      fecha: 
    },
    {
      id: '124125126',
      id_alumno: '3',
      id_clase: '3',
      fecha: '1'
    }
*/
  ] 

  inscripciones$: Observable<inscripciones[]>
  constructor(private store: Store) {

    this.inscripciones$ = this.store.select(state => state.inscricpiones.listInscripciones)
  }

  eliminarInscripcion(id: string){

   // console.log(id)
   //  this.listInscripciones =  this.listInscripciones.filter(listInscripciones =>  listInscripciones.id !== id)

   this.store.dispatch(new EliminarInscripcion(id));
   alert("Inscripcion eliminada")
  }
}
