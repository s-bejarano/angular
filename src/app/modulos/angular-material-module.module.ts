import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { StudentContentComponent } from '../componentes/dashboard/student-content/student-content.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';

import { AppModule } from '../app.module';
import { RouterModule, Routes } from '@angular/router';
import { ClasesContentComponent } from '../componentes/dashboard/clases-content/clases-content.component';
import { CursosContentComponent } from '../componentes/dashboard/cursos-content/cursos-content.component';
import { DashboardHComponent } from '../componentes/dashboard/dashboard-h/dashboard-h.component';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearEstudianteComponent } from '../componentes/dashboard/student-content/crear-estudiante/crear-estudiante.component';


const routes: Routes = [

  { path: "", redirectTo: 'login', pathMatch: 'full' },

  {
    path: "", component: NavbarComponent, children: [
      { path: "dashboard-h", component: DashboardHComponent },
      { path: "estudiantes", component: StudentContentComponent },
      { path: "clases", component: ClasesContentComponent },
      { path: "cursos", component: CursosContentComponent },
      { path: "crear-estudiante", component: CrearEstudianteComponent },
      { path: "crear-estudiante/:id", component: CrearEstudianteComponent }
    ]
  },]

@NgModule({
  declarations: [
    LoginComponent,
    StudentContentComponent,
    CrearEstudianteComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,


  ],
  exports: [


  ]
})




export class AngularMaterialModuleModule {




}
