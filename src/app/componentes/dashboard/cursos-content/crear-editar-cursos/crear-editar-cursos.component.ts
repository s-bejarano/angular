import { Component } from '@angular/core';
import { inscripciones } from 'src/app/interfaces/inscripciones';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import { Store } from '@ngxs/store';
import { AgregarInscripcion } from 'src/app/componentes/store/inscripciones.actions';

@Component({
  selector: 'app-crear-editar-cursos',
  templateUrl: './crear-editar-cursos.component.html',
  styleUrls: ['./crear-editar-cursos.component.css']
})
export class CrearEditarCursosComponent {

  id: string = '';
  id_alumno: string  = '';
  id_clase: string  = '';
  fecha: Date = new Date;
  constructor(private store: Store){}

   //Swal = require('sweetalert2')

agregarInscripcion(){

if(this.id_alumno == '' || this.id_clase == ''  ) {
alert("Todos los campos son obligatorios")

}


const inscripcion: inscripciones = {

  id: uuidv4(),
  id_alumno: this.id_alumno,
  id_clase: this.id_clase,
  fecha: this.fecha
}
this.store.dispatch(new AgregarInscripcion(inscripcion))

/*
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
*/
alert("agregado con exito")


this.resetForm();

}


resetForm(){

  this.id = '';
  this.id_alumno = '';
  this.id_clase = '';
  this.fecha 
}



}
