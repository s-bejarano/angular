import { Component } from '@angular/core';

@Component({
  selector: 'app-student-content',
  templateUrl: './student-content.component.html',
  styleUrls: ['./student-content.component.css']
})
export class StudentContentComponent {


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

  public hoy = new Date();
  
}
