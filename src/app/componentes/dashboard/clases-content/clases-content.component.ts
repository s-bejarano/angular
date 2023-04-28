import { Component, ViewChild } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from 'src/app/interfaces/clases';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { outputAst } from '@angular/compiler';
import { MatInput } from '@angular/material/input';
import { HttpClientTestingModule }from '@angular/common/http/testing'

@Component({
  selector: 'app-clases-content',
  templateUrl: './clases-content.component.html',
  styleUrls: ['./clases-content.component.css']
})
export class ClasesContentComponent {


  constructor(private _ClasesService: ClasesService, private _snackBar: MatSnackBar, private router: Router){ }
  
  ngOnInit(): void{

    this.ObtenerClases();

  }
  listClases: Clases[] = []; 

  public hoy = new Date();
  displayedColumns: string[] = ['id', 'Nombre','CantidadHoras', 'CantidadClases', 'Profesor','Acciones'];
  //dataSource!: MatTableDataSource<Clases>;
  dataSource = new MatTableDataSource<Clases>();
  loading: boolean = false;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @ViewChild(MatSort) sort!: MatSort;
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  
  ObtenerClases(){

    this._ClasesService.listaClases().subscribe( data =>{

      //console.log(data);
      this.dataSource.data = data;
      
    });
  }


  eliminarClase(id: number) {
    this.loading = true;

    this._ClasesService.deleteClase(id).subscribe(() => {
     this.mensajeExito();
     this.loading = false;
     this.ObtenerClases();
    });    
  }

  mensajeExito() {
    this._snackBar.open('La Mascota fue eliminada con exito','', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }


}
