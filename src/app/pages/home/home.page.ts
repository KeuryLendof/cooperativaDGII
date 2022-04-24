import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides } from '@ionic/angular';  


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  probando = new Date().getHours();

  cuentas = 'block'
  prestamos = 'display:block'

  constructor() { }

  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  
  

  ngOnInit() {

  }

  mostrarCuentas(){
    this.prestamos = 'display:none'
  }

  mostrarPrestamos(vista){

    vista = this.prestamos
    return vista;

  }

  mostrarSaludo(saludo){

    if(saludo<12){
      return 'Buenos Dias'
    }
    if(saludo>12 && saludo<18){
      return 'Buenas Tardes'
    }else{
      return 'Buenas Noches'
    }
  }

  mostrarSaludoImagen(hora){

    if(hora<12){
      return '../../../assets/img/sol.png'
    }
    if(hora>12 && hora<18){
      return '../../../assets/img/atardecer.png'
    }else{
      return '../../../assets/img/luna.png'
    }
  }

}
