import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultcertificadoPage } from './resultcertificado.page';

const routes: Routes = [
  {
    path: '',
    component: ResultcertificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultcertificadoPageRoutingModule {}
