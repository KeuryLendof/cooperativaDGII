import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides } from '@ionic/angular';
import { ILogin } from 'src/app/core/interfaces/login.interface';
import { ApiService } from 'src/app/shared/services/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  nombre = localStorage.getItem('nombre');
  puesto = localStorage.getItem('puesto');
  gmail = localStorage.getItem('gmail');

  probando = new Date().getHours();

  cuentas = 'block';
  prestamos = 'display:block';

  data: ILogin[]|undefined;

  constructor(private api: ApiService) {}

  reloadPage(){
    window.location.reload();
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  };
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  };


  ngOnInit(): void {

  }

  mostrarCuentas(){
    this.prestamos = 'display:none';
  }

  mostrarPrestamos(vista){

    vista = this.prestamos;
    return vista;

  }

  mostrarSaludo(saludo){

    if(saludo<12){
      return 'Buenos Dias';
    }
    if(saludo>12 && saludo<18){
      return 'Buenas Tardes';
    }else{
      return 'Buenas Noches';
    }
  }

  mostrarSaludoImagen(hora){

    if(hora<12){
      return '../../../assets/img/sol.png';
    }
    if(hora>12 && hora<18){
      return '../../../assets/img/atardecer.png';
    }else{
      return '../../../assets/img/luna.png';
    }
  }

}
