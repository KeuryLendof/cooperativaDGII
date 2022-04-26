import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resultcertificado',
  templateUrl: './resultcertificado.page.html',
  styleUrls: ['./resultcertificado.page.scss'],
})
export class ResultcertificadoPage implements OnInit {
  multipleArray = [];
  monto: number;
  plazo: number;
  taza: number;

  constructor(public alertController: AlertController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.monto = parseFloat( this.activatedRoute.snapshot.params.monto);
    this.plazo = parseFloat(this.activatedRoute.snapshot.params.plazo);
    this.taza = parseFloat(this.activatedRoute.snapshot.params.taza);
  this.Calculando(this.monto,this.plazo,this.taza);
  }

Calculando(monto,plazo,taza){
  for (let i = 1; i <=plazo; i++) {
    this.multipleArray.push({
      monto: monto,
      i: i,
      tazas :(1+(taza/100)**plazo),
      total:(monto * (1+taza/100)**i)
    });
  }

  }

  
}
