import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasPage } from './preguntas.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasPageRoutingModule {}
