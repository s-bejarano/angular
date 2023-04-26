import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from 'src/app/interfaces/clases';


@Component({
  selector: 'app-crear-editar',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.css']
})
export class CrearEditarComponent {



  loading: boolean = false;
  form: FormGroup;
  id: number;
  accion = 'Crear';

  constructor(private fb: FormBuilder,
    private _ClasesService: ClasesService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      Nombre: ['', Validators.required],
      CantidadHoras: ['', Validators.required],
      CantidadClases: ['', Validators.required],
      Profesor: ['', Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {

    if(this.id != 0) {
      this.accion = 'Editar';
      this.obtenerClase(this.id)
    }
  }


/*

*/
  obtenerClase(id: number) {
    this.loading = true;
    this._ClasesService.getClase(id).subscribe(data => {
      this.form.setValue({
        id: data.id ,
        Nombre: data.Nombre ,
        CantidadHoras: data.CantidadHoras ,
        CantidadClases: data.CantidadClases ,
        Profesor: data.Profesor
      })
      this.loading = false;
    })
  }


  agregarEditarClase() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const clase: Clases = {
      id: this.form.value.id ,
      Nombre: this.form.value.Nombre ,
      CantidadHoras: this.form.value.CantidadHoras,
      CantidadClases: this.form.value.CantidadClases,
      Profesor: this.form.value.Profesor
    }

    if(this.id != 0) {
      clase.id = this.id;
      this.editarClase(this.id, clase);
    } else {
      this.agregarClase(clase);
    }
  }

  editarClase(id: number, clase: Clases) {
    this.loading = true;
    this._ClasesService.updateClase(id, clase).subscribe(() => {
      this.loading = false;
      console.log('llegue')
      this.mensajeExito('actualizada');
      this.router.navigate(['/clases']);
    })
  }

  agregarClase(clase: Clases) {
      this._ClasesService.addClase(clase).subscribe(data => {
        this.mensajeExito('registrada');
        this.router.navigate(['/clases']);
      })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`La Clase fue ${texto} con exito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
