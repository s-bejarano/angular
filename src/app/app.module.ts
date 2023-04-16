import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { StudentContentComponent } from './componentes/student-content/student-content.component';

/* imports de angular material */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**
 * import {MaterialExampleModule} from '../material.module';
import {ToolbarBasicExample} from './toolbar-basic-example';
 */

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';


const routes: Routes  = [

  {path:'',component: NavbarComponent}
 
 ];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentContentComponent,
   


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
    SidebarModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
