import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  dismissModal() {
    console.log('cerrando modal!');
    // if (currentModal) {
    //   currentModal.dismiss().then(() => {
    //     currentModal = null;
    //   });
    // }
  }

  solicitar() {
    console.log('solicitar!');
  }

}
