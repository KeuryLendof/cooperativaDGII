import { SolicitarPage } from './../solicitar/solicitar.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  solicitud: any[] = [
    {id: 1, titulo: 'Solicitud Préstamo Gerencial', fecha: '21/04/2022', respuesta: 'Pendiente'},
    {id: 2, titulo: 'Disminución de Aportación', fecha: '18/04/2022', respuesta: 'Declinada'},
    {id: 3, titulo: 'Solicitud de Cancelacion San Coopdgii', fecha: '07/04/2022', respuesta: 'Procesada'}
  ];

  tipo = 'Inicial';
  // tipoSolicitud: any[] = [
  //   {id: 1, nombre: 'Solicitud Préstamos'},
  //   {id: 2, nombre: 'Solicitud Préstamo Gerencial'},
  //   {id: 3, nombre: 'Solicitud De Servicio De Tienda'},
  //   {id: 4, nombre: 'Orden De Compras (Farmacia)'},
  //   {id: 5, nombre: 'Solicitud de Inscripción En El Ahorro Educativo'},
  //   {id: 6, nombre: 'Solicitud de Inscripción Ahorro Navideño'},
  //   {id: 7, nombre: 'Aumento de Aportación'},
  //   {id: 8, nombre: 'Plan Funeral (FSF)'},
  //   {id: 9, nombre: 'Pago'},
  //   {id: 10, nombre: 'Carta Consular'},
  //   {id: 11, nombre: 'Solicitud Préstamo Pignorado'},
  //   {id: 12, nombre: 'Solicitud San Coopdgii'},
  //   {id: 13, nombre: 'Solicitud Tour Operador'},
  //   {id: 14, nombre: 'Disminución de Aportación'},
  //   {id: 15, nombre: 'Solicitud de Cancelacion San Coopdgii'},
  // ];

  constructor(public alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
  }

  changeColor(color){
    if(color === 'Declinada'){
      return 'danger';
    }
    else if(color === 'Pendiente'){
      return 'warning';
    }
    else{
      return 'success';
    }
  }
  changeIcon(icon){
    if(icon === 'Declinada'){
      return 'close-circle-outline';
    }
    else if(icon === 'Pendiente'){
      return 'hourglass-outline';//clipboard-outline
    }
    else{
      return 'checkmark-circle-outline';
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SolicitarPage,
      componentProps: {
        nombre: this.tipo
      },
      initialBreakpoint: 0.7,
      breakpoints: [0.4, 0.7, 1]
    });
    return await modal.present();
  }

  async openSelect() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Seleccione!',
      message: 'El tipo de Solictud',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Solicitud Préstamos',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
            this.tipo = 'Solicitud Préstamos';
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Préstamo Gerencial',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
            this.tipo = 'Préstamo Gerencial';
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Servicio De Tienda',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
            this.tipo = 'Servicio De Tienda';
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Orden De Compras (Farmacia)',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
            this.tipo = 'Orden De Compras (Farmacia)';
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Inscripción En El Ahorro Educativo',
          value: 'value5',
          handler: () => {
            console.log('Radio 5 selected');
            this.tipo = 'Inscripción En El Ahorro Educativo';
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Inscripción Ahorro Navideño',
          value: 'value6',
          handler: () => {
            console.log('Radio 6 selected');
            this.tipo = 'Inscripción Ahorro Navideño';
          }
        },
        {
          name: 'radio7',
          type: 'radio',
          label: 'Aumento de Aportación',
          value: 'value7',
          handler: () => {
            console.log('Radio 7 selected');
            this.tipo = 'Aumento de Aportación';
          }
        },
        {
          name: 'radio8',
          type: 'radio',
          label: 'Plan Funeral (FSF)',
          value: 'value8',
          handler: () => {
            console.log('Radio 8 selected');
            this.tipo = 'Plan Funeral (FSF)';
          }
        },
        {
          name: 'radio9',
          type: 'radio',
          label: 'Pago',
          value: 'value9',
          handler: () => {
            console.log('Radio 9 selected');
            this.tipo = 'Pago';
          }
        },
        {
          name: 'radio10',
          type: 'radio',
          label: 'Carta Consular',
          value: 'value10',
          handler: () => {
            console.log('Radio 10 selected');
            this.tipo = 'Carta Consular';
          }
        },
        {
          name: 'radio11',
          type: 'radio',
          label: 'Solicitud Préstamo Pignorado',
          value: 'value11',
          handler: () => {
            console.log('Radio 11 selected');
            this.tipo = 'Solicitud Préstamo Pignorado';
          }
        },
        {
          name: 'radio12',
          type: 'radio',
          label: 'Solicitud San Coopdgii',
          value: 'value12',
          handler: () => {
            console.log('Radio 12 selected');
            this.tipo = 'Solicitud San Coopdgii';
          }
        },
        {
          name: 'radio13',
          type: 'radio',
          label: 'Solicitud Tour Operador',
          value: 'value13',
          handler: () => {
            console.log('Radio 13 selected');
            this.tipo = 'Solicitud Tour Operador';
          }
        },
        {
          name: 'radio14',
          type: 'radio',
          label: 'Disminución de Aportación',
          value: 'value14',
          handler: () => {
            console.log('Radio 14 selected');
            this.tipo = 'Disminución de Aportación';
          }
        },
        {
          name: 'radio15',
          type: 'radio',
          label: 'Cancelacion San Coopdgii',
          value: 'value15',
          handler: () => {
            console.log('Radio 15 selected');
            this.tipo = 'Cancelacion San Coopdgii';
          }
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Cancel');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm valor: ' + this.tipo);
            this.presentModal();
          }
        }
      ]
    });

    await alert.present();

  };

}
