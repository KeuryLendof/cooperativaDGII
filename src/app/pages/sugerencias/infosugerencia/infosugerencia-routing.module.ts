import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosugerenciaPage } from './infosugerencia.page';

const routes: Routes = [
  {
    path: '',
    component: InfosugerenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosugerenciaPageRoutingModule {}
