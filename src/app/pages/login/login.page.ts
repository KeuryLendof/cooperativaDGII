import { Component, OnInit } from '@angular/core';

//formularios
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
//API
import { ApiService } from 'src/app/shared/services/api/api.service';
//INTERFACE
import { ILogueado } from './../../core/interfaces/logueado';
import { ILogin } from './../../core/interfaces/login.interface';

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
              private api: ApiService) { }

  ngOnInit() {
  }

  onLogin(form: ILogin){
    console.log(form);
    this.api.postLog(form).subscribe(data => {
      console.log(data);
    });
  }

}
