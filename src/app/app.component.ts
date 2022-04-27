import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' },
    { title: 'Videos', url: '/videos', icon: 'film' },
    { title: 'Contactos', url: '/contacto', icon: 'mail' },
  ];
  public appPagesAll = [
    { title: 'Cuentas', url: '/home', icon: 'wallet' },
    // { title: 'Prestamos', url: '/prestamo', icon: 'cash' },
    { title: 'Inversiones', url: '/formcertificado', icon: 'pie-chart' },//por verificar o ese o diamond
    { title: 'Solicitudes', url: '/solicitud', icon: 'receipt' },
    { title: 'Descuentos', url: '/descuento', icon: 'calculator' },
    { title: 'Noticias', url: '/noticia', icon: 'newspaper' },
    { title: 'Sugerencias', url: '/infosugerencia', icon: 'folder' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' },
    { title: 'Videos', url: '/videos', icon: 'film' },
    { title: 'Contactos', url: '/contacto', icon: 'mail' },
    { title: 'Configuración', url: '/configuracion', icon: 'cog' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];

  nombre = localStorage.getItem('nombre');

  private token: string;

  constructor() {this.token = localStorage.getItem('token');}

  reloadPage(){
    location.reload();
  }

  cerrarSesion(inf){
    if(inf === 'Cerrar Sesión'){
      console.log('llego'+inf);
      window.localStorage.clear();
      // localStorage.clear();
      // localStorage.removeItem('token');
      setInterval(() => {
        this.reloadPage();
      }, 600);
    }
    else{
      console.log(inf);
    }
  }
}
