import { Component } from '@angular/core';
import { Routes } from '@angular/router';


/**
 *
 * 
 
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  opened = false;
  collapsed = true;
  navData = []



 

cli() {

  
}



 toggleSidebar() {
  this.opened = !this.opened;
}

 
  
}
