import { IResponse } from './../../core/interfaces/response.interface';
import { Component, OnInit } from '@angular/core';

//formularios
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
//API
import { ApiService } from 'src/app/shared/services/api/api.service';
//INTERFACE
import { ILogueado } from './../../core/interfaces/logueado';
import { ILogin } from './../../core/interfaces/login.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm = new FormGroup({
  //   user: new FormControl('', Validators.required),
  //   pass: new FormControl('', Validators.required)
  // });

  loginForm = this.formBuilder.group({
    usuario: ['', Validators.required],
    clave: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private api: ApiService,
              private router: Router) { }

  ngOnInit() {
    // this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }
  reloadPage(){
    location.reload();
  }

  onLogin(form: ILogin){
    console.log(form);
    this.api.postLog(form).subscribe(data => {
      console.log(data);

      const dataResponse: IResponse = data;
      if(data.success){
        console.log('entre al true');
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('nombre', data.data.nombre);
        localStorage.setItem('puesto', data.data.puesto);
        localStorage.setItem('gmail', data.data.email);
        this.router.navigate(['/home']);
        setInterval(() => {
          this.reloadPage();
        }, 500);
      }
      console.log(data.success);
      console.log(data.data.token);
      console.log('DATOS DEL TOKEM ----');
      console.log(localStorage.getItem('token'));
      console.log(localStorage.getItem('nombre'));
    });
  }

}
