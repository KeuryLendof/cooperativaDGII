import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Cuentas', url: '/login', icon: 'wallet' },
    { title: 'Prestamos', url: '/login', icon: 'cash' },
    { title: 'Inversiones', url: '/login', icon: 'pie-chart' },//por verificar o ese o diamond
    { title: 'Solicitudes', url: '/login', icon: 'receipt' },
    { title: 'Descuentos', url: '/login', icon: 'calculator' },
    { title: 'Noticias', url: '/login', icon: 'newspaper' },
    { title: 'Sugerencias', url: '/login', icon: 'folder' },
    { title: 'Ayuda', url: '/login', icon: 'help' },
    { title: 'Tasas', url: '/login', icon: 'stats-chart' },
    { title: 'Videos', url: '/login', icon: 'film' },
    { title: 'Contactos', url: '/login', icon: 'mail' },
    { title: 'Configuracion', url: '/login', icon: 'cog' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
