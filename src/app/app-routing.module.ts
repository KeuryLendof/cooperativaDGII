import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
    path: 'infosugerencia',
    loadChildren: () => import('./pages/sugerencias/infosugerencia/infosugerencia.module').then( m => m.InfosugerenciaPageModule)
  },
  {
    path: 'infonoticia',
    loadChildren: () => import('./pages/noticias/infonoticia/infonoticia.module').then( m => m.InfonoticiaPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/productos/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'prestamo',
    loadChildren: () => import('./pages/productos/prestamo/prestamo.module').then( m => m.PrestamoPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

