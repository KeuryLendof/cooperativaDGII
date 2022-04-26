import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {IonSlides } from '@ionic/angular';
import { IResumen } from 'src/app/core/interfaces/resumen';
import { IPrestamos } from 'src/app/core/interfaces/prestamos';
import { ApiService } from 'src/app/shared/services/api/api.service'; 
import {ServicesService} from 'src/app/shared/services/services.service';
import { IPrueba } from 'src/app/core/interfaces/prueba';

import { Router } from '@angular/router';


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

  // cuentas = 'block'
  // prestamos = 'display:block'

  

  public cuentas: IResumen[]=[];
  @Input() prestamos: IPrestamos[]=[];
  prueba: IPrueba[]=[];
  constructor(private api: ApiService, private servicio: ServicesService, private router: Router) { }

  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  
  

  ngOnInit(): void {
    this.api.postResumen().then(res=>{
      console.log(res);
      this.cuentas = res.data['cuentas'];
      console.log(this.cuentas);
    })
    this.api.postPrestamos().then(res=>{
      console.log(res)
      this.prestamos = res.data;
      console.log(this.prestamos)
    })
  }

  redireccionar(){
    this.router.navigate(['/prestamo']);
  }

  imprimirData(datain:any){
    console.log(datain)
    console.log(datain.idprestamo)

    this.router.navigate(['/prestamo',datain.idprestamo, datain.descripcion, datain.monto_prestamo,
      datain.tasa_interes, datain.fecha_prestamo, datain.fecha_vencimiento, datain.monto_interes_calculado,
     datain.valor_cuota, datain.monto_seguro_pagado, datain.balance_prestamo, datain.consecutivo_cuota]);

    //this.prueba = datain;
    // this.servicio.disparador.emit({
    //   data:datain
    // })
    // setTimeout(()=>{
    //   this.redireccionar();
    // },2000)
  }
  imprimirDataCuenta(datain:any){
    this.router.navigate(['/cuenta',datain.idcuenta, datain.tipo, datain.balance_disponible, datain.monto_ult_deposito, datain.monto_ult_retiro])
  }

  // mostrarCuentas(){
  //   this.prestamos = 'display:none'
  // }

  // mostrarPrestamos(vista){

  //   vista = this.prestamos
  //   return vista;

  // }

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
