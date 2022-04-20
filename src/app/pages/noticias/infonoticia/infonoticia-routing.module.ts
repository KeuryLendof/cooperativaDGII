import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfonoticiaPage } from './infonoticia.page';

const routes: Routes = [
  {
    path: '',
    component: InfonoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfonoticiaPageRoutingModule {}
