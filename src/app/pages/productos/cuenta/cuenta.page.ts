import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  multipleArray = [];

  idcuenta: string;
  tipo: string;
  balanceDisponible: string;
  montoUltDeposito: string;
  montoUltRetiro: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idcuenta = this.activatedRoute.snapshot.params.idcuenta;
    this.tipo = this.activatedRoute.snapshot.params.tipo;
    this.balanceDisponible = this.activatedRoute.snapshot.params.balanceDisponible;
    this.montoUltDeposito = this.activatedRoute.snapshot.params.montoUltDeposito;
    this.montoUltRetiro= this.activatedRoute.snapshot.params.montoUltRetiro;
    this.mostrarData(this.idcuenta,this.tipo,this.balanceDisponible,this.montoUltDeposito,this.montoUltRetiro)
  }

  mostrarData(idcuenta,tipo,balanceDisponible,montoUltDeposito,montoUltRetiro){
    this.multipleArray.push({
      idcuenta:idcuenta,
      tipo:tipo,
      balanceDisponible:balanceDisponible,
      montoUltDeposito:montoUltDeposito,
      montoUltRetiro:montoUltRetiro
    })
  }

  cerrarCuenta(){
    this.router.navigate(['/cuenta'])
  }

}
