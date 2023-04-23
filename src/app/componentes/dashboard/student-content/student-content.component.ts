import { outputAst } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { estudiantes } from 'src/app/interfaces/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service';




@Component({
  selector: 'app-student-content',
  templateUrl: './student-content.component.html',
  styleUrls: ['./student-content.component.css']
})
export class StudentContentComponent {
  id: number | undefined;

  /*
  public estudiantes:(number | string) [][] = [[15, 16,17],['José', 'Juan', 'Julio']];


  arrayEstudiantes: any[] = [

    {
      cedula: 124412455,
      nombre: "Juan Fernandez",
      edad: 15 , 
      correo: "juan.fernandez@gmail.com" , 
      direccion: "calle 13 # 88 c 90",
    },

    {
      cedula: 243765483,
      nombre: "Christian Mendez",
      edad: 16, 
      correo: "Christian.mendez@gmail.com", 
      direccion: "Calle 67 # 23 d 43" ,
    },
    {
      cedula: 235623666,
      nombre: "Julian Manrique",
      edad: 18 , 
      correo: "Julian.manriquee@gmail.com", 
      direccion: "calle 48 a 56 B",
    }
  ]
  */

  constructor(private _estudianteService: EstudiantesService, private _snackBar: MatSnackBar, private router: Router)  {}


  ngOnInit(): void {

    this.cargarEstudiantes();
  }



  listEstudiantes: estudiantes[] = []; 

  public hoy = new Date();
  displayedColumns: string[] = ['position', 'Cedula', 'Nombre', 'Edad', 'Correo', 'Direccion', 'Acciones'];

  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  @ViewChild(MatSort) sort!: MatSort;



  cargarEstudiantes() {
    this.listEstudiantes = this._estudianteService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listEstudiantes);

  }

  eliminarEstudiante(index: number) {
    this._estudianteService.eliminarEstudiantes(index);
    this.cargarEstudiantes();


    this._snackBar.open('El estudiante fue eliminado con exito', '', {

      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }
  
 



}
