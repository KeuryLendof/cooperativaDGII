import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarPage } from './solicitar.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarPageRoutingModule {}
