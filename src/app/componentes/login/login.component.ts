import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router, RouterLink } from '@angular/router';
import { timeout } from 'rxjs';
import { DashboardHComponent } from '../dashboard/dashboard-h/dashboard-h.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {

    this.form = this.fb.group({

      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ingresar() {

   // console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'admin123') {

      this.fakeLoading();


    } else {

      this.error();
      this.form.reset();
    }
  }


  error() {

    this._snackBar.open('Usuario o contraseña incorrectos', '', {

      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  fakeLoading() {

    this.loading = true;
    setTimeout(() => {
      //redireccionar a d ash
      this.router.navigate(['navbar']);
      //RouterLink: "estudiantes"
      // this.loading = false
    }, 1500);
  }
}
