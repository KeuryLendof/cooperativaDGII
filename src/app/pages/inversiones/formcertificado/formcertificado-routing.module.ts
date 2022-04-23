import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormcertificadoPage } from './formcertificado.page';

const routes: Routes = [
  {
    path: '',
    component: FormcertificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormcertificadoPageRoutingModule {}
