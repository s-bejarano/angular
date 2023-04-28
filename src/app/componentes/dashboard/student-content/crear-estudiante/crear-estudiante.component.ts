import { Component, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { estudiantes } from 'src/app/interfaces/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnExit } from '../../../../guards/salida-formularios.guard'

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})



export class CrearEstudianteComponent implements OnExit {


  form: FormGroup;
  id: any;
  accion = 'Crear';
  constructor(private fb: FormBuilder,
    private _estudiantesService: EstudiantesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private aRoute: ActivatedRoute


  ) {

    this.form = this.fb.group(
      {
        posicion: ['', Validators.required],
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        edad: ['', Validators.required],
        correo: ['', Validators.required],
        direccion: ['', Validators.required],
      });

    const idParam = 'id';
    this.id = this.aRoute.snapshot.params[idParam];

  }

  ngOnInit(): void {

    if (this.id !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  OnExit() {
    if(this.form.dirty) {
      const rta = confirm("Esta seguro que desea salir?")
    return rta;

    }

    return true;
    
  }


  guardarEstudiante() {
    const estudiante: estudiantes = {

      position: this.form.value.position,
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      correo: this.form.value.correo,
      direccion: this.form.value.direccion,

    }
    if (this.id !== undefined) {

      this.editarEstudiante(estudiante)
    } else {

      this.agregarEstudiante(estudiante)
    }

  }

  agregarEstudiante(estudiante: estudiantes) {

    //console.log(this.form);



    this._estudiantesService.agregarEstudiante(estudiante);
    this.router.navigate(['/estudiantes'])

    this._snackBar.open('El estudiante fue agregado con exito', '', {

      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })




  }


  editarEstudiante(estudiante: estudiantes) {


    this._estudiantesService.editarEstudiante(estudiante, this.id);
    this._snackBar.open("El estudiante fue actualizado con exito", '', {

      duration: 3000
    });
    this.router.navigate(['/estudiantes']);


  }

  esEditar() {


    const estudiante: estudiantes = this._estudiantesService.getEstudiante(this.id);
    console.log(estudiante);
    this.form.patchValue({

      posicion: estudiante.position,
      cedula: estudiante.cedula,
      nombre: estudiante.nombre,
      edad: estudiante.edad,
      correo: estudiante.correo,
      direccion: estudiante.direccion,



    });

  }


}

