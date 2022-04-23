import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
