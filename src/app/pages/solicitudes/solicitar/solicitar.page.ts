import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit{

  // @Input() tipoSolicitud;

  constructor(private modalController: ModalController,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  solicitar() {
    console.log('solicitar!');
  }

  async canDismiss() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Esta seguro que quiere descartar?',
      buttons: [
        {
          text: 'Descartar Cambios',
          role: 'destructive',
          handler: () => {
            this.modalController.dismiss();
          }
        },
        {
          text: 'Continuar',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();

    // const { role } = await actionSheet.onDidDismiss();
    // if (role === 'destructive') {
    //   return true;
    // }
    // return false;

  }

}
