import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { StudentContentComponent } from './componentes/dashboard/student-content/student-content.component';
import { ClasesContentComponent } from './componentes/dashboard/clases-content/clases-content.component';
import { CursosContentComponent } from './componentes/dashboard/cursos-content/cursos-content.component';
import { DashboardHComponent } from './componentes/dashboard/dashboard-h/dashboard-h.component';


/* imports de angular material */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { LoginComponent } from './componentes/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [


  { path: "login", component: LoginComponent },
  { path: "",redirectTo: 'login', pathMatch: 'full'},
 
  /* { path: "**",redirectTo: 'login', pathMatch: 'full'},
    { path: "",redirectTo: 'login', pathMatch: 'full'},
  { path: "**",redirectTo: 'login', pathMatch: 'full'},
  {path:'',component: NavbarComponent},*/
  { path: "navbar", component: NavbarComponent },
  { path: "dashboard-h", component: DashboardHComponent },
  { path: "estudiantes", component: StudentContentComponent },
  { path: "clases", component: ClasesContentComponent },
  { path: "cursos", component: CursosContentComponent },
  

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentContentComponent,
    ClasesContentComponent,
    CursosContentComponent,
    DashboardHComponent,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,

    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,

    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
