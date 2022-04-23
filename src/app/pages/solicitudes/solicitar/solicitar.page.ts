import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  TipoDeSolicitud: string;
  Codigo: string;
}

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage {
  users: User[] = [
    {
      id: 1,
      TipoDeSolicitud: 'Solicitud Préstamos',
      Codigo :'20308',
      
    },
    {
      id: 2,
      TipoDeSolicitud: 'Solicitud Préstamo Gerencial',
      Codigo :'20308',
    },
    {
      id: 3,
      TipoDeSolicitud: 'Solicitud De Servicio De Tienda',
      Codigo :'20308',
    },
    {
      id: 4,
      TipoDeSolicitud: 'Orden De Compras Farmacia',
      Codigo :'20308',
    },
    {
      id: 5,
      TipoDeSolicitud: 'Solicitud de Inscripción En El Ahorro Educativo',
      Codigo :'20308',
    },
    {
      id: 6,
      TipoDeSolicitud: 'Solicitud de Inscripción Ahorro Navideño',
      Codigo :'20308',
    },
    {
      id: 7,
      TipoDeSolicitud: 'Aumento de Aportación',
      Codigo :'20308',
    }
    ,
    {
      id: 8,
      TipoDeSolicitud: 'Plan Funeral (FSF)',
      Codigo :'20308',
    }
    ,
    {
      id: 9,
      TipoDeSolicitud: 'Pago',
      Codigo :'20308',
    }
    ,
    {
      id: 10,
      TipoDeSolicitud: 'Carta Consular',
      Codigo :'20308',
    }
    ,
    {
      id: 11,
      TipoDeSolicitud: 'Solicitud Préstamo Pignorado',
      Codigo :'20308',
    },
  ];

  compareWith(o1: User, o2: User) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
