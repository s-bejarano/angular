import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardHComponent } from './componentes/dashboard/dashboard-h/dashboard-h.component';
import { StudentContentComponent } from './componentes/dashboard/student-content/student-content.component';
import { ClasesContentComponent } from './componentes/dashboard/clases-content/clases-content.component';
import { CursosContentComponent } from './componentes/dashboard/cursos-content/cursos-content.component';

const routes: Routes = [


  { path: "", component: NavbarComponent, children: [
    { path: "dashboard-h", component: DashboardHComponent },
    { path: "estudiantes", component: StudentContentComponent },
    { path: "clases", component: ClasesContentComponent },
    { path: "cursos", component: CursosContentComponent }

  ]},

  /*
    { path: "",redirectTo: 'login', pathMatch: 'full'},
  { path: "**",redirectTo: 'login', pathMatch: 'full'},
  {path:'',component: NavbarComponent},
   { path: "navbar", component: NavbarComponent },
  { path: "dashboard-h", component: DashboardHComponent },
  { path: "estudiantes", component: StudentContentComponent },
  { path: "clases", component: ClasesContentComponent },
  { path: "cursos", component: CursosContentComponent },
  */
 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRoutingModule { }
