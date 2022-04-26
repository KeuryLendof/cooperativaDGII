import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticias/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'infonoticia',
    loadChildren: () => import('./pages/noticias/infonoticia/infonoticia.module').then( m => m.InfonoticiaPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'solicitar',
    loadChildren: () => import('./pages/solicitudes/solicitar/solicitar.module').then( m => m.SolicitarPageModule)
  },
  {
    path: 'infosugerencia',
    loadChildren: () => import('./pages/sugerencias/infosugerencia/infosugerencia.module').then( m => m.InfosugerenciaPageModule)
  },
  {
    path: 'formsugerencia',
    loadChildren: () => import('./pages/sugerencias/formsugerencia/formsugerencia.module').then( m => m.FormsugerenciaPageModule)
  },
  {
    path: 'infonoticia/:ID/:TITLE/:IMAGEN/:DATE/:CONTENT',
    loadChildren: () => import('./pages/noticias/infonoticia/infonoticia.module').then( m => m.InfonoticiaPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/productos/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'prestamo',
    loadChildren: () => import('./pages/productos/prestamo/prestamo.module').then( m => m.PrestamoPageModule)
  },
  {
    path: 'descuento',
    loadChildren: () => import('./pages/descuento/descuento.module').then( m => m.DescuentoPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./pages/ayuda/preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'infopregunta',
    loadChildren: () => import('./pages/ayuda/infopregunta/infopregunta.module').then( m => m.InfopreguntaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuraciones/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/configuraciones/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./pages/solicitudes/solicitud/solicitud.module').then( m => m.SolicitudPageModule)
  },
  {
    path: 'formcertificado',
    loadChildren: () => import('./pages/inversiones/formcertificado/formcertificado.module').then( m => m.FormcertificadoPageModule)
  },
  {
    path: 'resultcertificado/:monto/:plazo/:taza',
    loadChildren: () => import('./pages/inversiones/resultcertificado/resultcertificado.module').then( m => m.ResultcertificadoPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

