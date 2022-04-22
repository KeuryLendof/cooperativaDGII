import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsugerenciaPage } from './formsugerencia.page';

const routes: Routes = [
  {
    path: '',
    component: FormsugerenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsugerenciaPageRoutingModule {}
