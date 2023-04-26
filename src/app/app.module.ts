import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { StudentContentComponent } from './componentes/dashboard/student-content/student-content.component';
import { ClasesContentComponent } from './componentes/dashboard/clases-content/clases-content.component';
import { CursosContentComponent } from './componentes/dashboard/cursos-content/cursos-content.component';
import { DashboardHComponent } from './componentes/dashboard/dashboard-h/dashboard-h.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './modulos/app-routing.module';
import { AngularMaterialModuleModule } from './modulos/angular-material-module.module';
import { CrearEditarComponent } from './componentes/dashboard/clases-content/crear-editar-clases/crear-editar.component';

const routes: Routes = [


  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },

  /*
    { path: "",redirectTo: 'login', pathMatch: 'full'},
 
  { path: "**",redirectTo: 'login', pathMatch: 'full'},
    { path: "",redirectTo: 'login', pathMatch: 'full'},
  { path: "**",redirectTo: 'login', pathMatch: 'full'},
  {path:'',component: NavbarComponent},
    { path: "dashboard-h", component: DashboardHComponent },
  { path: "estudiantes", component: StudentContentComponent },
  { path: "clases", component: ClasesContentComponent },
  { path: "cursos", component: CursosContentComponent },
  {path: "crear-estudiante", component: CrearEstudianteComponent},  

  */
  { path: "navbar", component: NavbarComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    // StudentContentComponent,
   // ClasesContentComponent,
    CursosContentComponent,
    DashboardHComponent,
    //CrearEditarComponent,
    // CrearEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularMaterialModuleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
