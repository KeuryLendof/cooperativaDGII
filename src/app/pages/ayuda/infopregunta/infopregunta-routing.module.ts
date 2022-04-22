import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfopreguntaPage } from './infopregunta.page';

const routes: Routes = [
  {
    path: '',
    component: InfopreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopreguntaPageRoutingModule {}
