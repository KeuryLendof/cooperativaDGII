import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formcertificado',
  templateUrl: './formcertificado.page.html',
  styleUrls: ['./formcertificado.page.scss'],
})
export class FormcertificadoPage implements OnInit {

  monto: number;
  plazo: number;
  taza: number;

  constructor(public alertController: AlertController , private router: Router) { }

  ngOnInit() {
  }

  async Calcular(){
    if (this.monto && this.plazo && this.taza) {
      this.router.navigate(['/resultcertificado',this.monto,this.plazo,this.taza]);
    }
    else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingresar valores en las casillas correspondiente',
        buttons: ['OK'],
      });
      
      await alert.present();
    }
    
  }



 /* async getMultiplicationTable(monto , plaza , taza){
    if (monto == "" && plaza == "" && taza == "") {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingresar valores en las casillas correspondiente',
        buttons: ['OK'],
      });
      
      await alert.present();
    }
       else {
      this.multipleArray = [];
      for (let i = 1; i <=plaza; i++) {
        this.multipleArray.push({
          monto: monto,
          i: i,
          taza : taza,
         interes: (parseInt(monto) +  (1+(taza/100))^plaza)
        });
      }
    }
  
  }  */

}
