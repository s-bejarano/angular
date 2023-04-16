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
import { Router, Routes,  RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';



const routes: Routes  = [

  /*{path:'',component: NavbarComponent},*/
  { path: "dashboard-h", component: DashboardHComponent },
  { path: "estudiantes", component: StudentContentComponent},
  { path: "clases", component: ClasesContentComponent },
  { path: "cursos", component: CursosContentComponent }
 
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
   


  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    /**
    MaterialExampleModule, 
    ToolbarBasicExample, */
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    
    RouterModule.forRoot(routes),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
