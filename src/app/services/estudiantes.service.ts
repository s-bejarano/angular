import { Injectable } from '@angular/core';
import { estudiantes } from '../interfaces/estudiantes';
import { Observable } from 'rxjs/internal/Observable';
import { start } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {



  listEstudiantes: estudiantes[] = [
    { position: 1, nombre: 'Delinda Stuke', cedula: 494526906, edad: 8, correo: 'dstuke0@wikimedia.org', direccion: '515 Vahlen Pass' },
    { position: 2, nombre: 'Ingmar Longfoot	', cedula: 986942292, edad: 12, correo: 'ilongfoot1@prlog.org', direccion: '38118 Hermina Pass' },
    { position: 3, nombre: 'Cly Dibb', cedula: 331617426, edad: 14, correo: 'cdibb2@skyrock.com', direccion: '	9129 Atwood Alley' },
    { position: 4, nombre: 'Marlowe Trevear', cedula: 154434422, edad: 15, correo: 'mtrevear3@a8.net', direccion: '	7 Gale Center' },
    { position: 5, nombre: '	Drucill Ganny', cedula: 115793747, edad: 12, correo: 'dganny4@abc.net.au', direccion: '52026 Bobwhite Lane' },
    { position: 6, nombre: 'Reba Levings', cedula: 400841216, edad: 13, correo: 'rlevings5@xing.com', direccion: '	4582 Elgar Hill' },
    { position: 7, nombre: 'Valentino Hayne', cedula: 859068522, edad: 15, correo: 'vhayne6@chronoengine.com', direccion: '649 Old Shore Lane' },
    { position: 8, nombre: 'Ardis Drysdell', cedula: 740586585, edad: 10, correo: 'adrysdell7@archive.org', direccion: '71856 1st Trail' },
    { position: 9, nombre: 'Myron Mifflin', cedula: 710307924, edad: 8, correo: 'mmifflin8@technorati.com', direccion: '11 Mayfield Pass' },
    { position: 10, nombre: 'Madelon Klousner', cedula: 254343405, edad: 15, correo: 'mklousner9@ustream.tv', direccion: '3 Sunbrook Plaza' },
  ];


  constructor() { }


  getEstudiantes() {

    return this.listEstudiantes.slice();


  }

  eliminarEstudiantes(index: number) {
    this.listEstudiantes.splice(index, 1)

  }

  agregarEstudiante(estudiante: estudiantes) {

    this.listEstudiantes.unshift(estudiante)
  }


  getEstudiante(index: number) {


    return this.listEstudiantes[index];
  }

  editarEstudiante(estudiante: estudiantes, idEstudiante: number) {
    //   this.listEstudiantes.splice(index, 1)
    //return this.listEstudiantes.slice();


    this.listEstudiantes[idEstudiante].position = estudiante.position;
    this.listEstudiantes[idEstudiante].cedula = estudiante.cedula;
    this.listEstudiantes[idEstudiante].nombre = estudiante.nombre;
    this.listEstudiantes[idEstudiante].edad = estudiante.edad;
    this.listEstudiantes[idEstudiante].correo = estudiante.correo;
    this.listEstudiantes[idEstudiante].direccion = estudiante.direccion;


  }



}
