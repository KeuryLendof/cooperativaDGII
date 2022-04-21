import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaPage } from './noticia.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaPageRoutingModule {}
