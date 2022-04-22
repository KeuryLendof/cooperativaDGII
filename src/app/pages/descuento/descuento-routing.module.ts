import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescuentoPage } from './descuento.page';

const routes: Routes = [
  {
    path: '',
    component: DescuentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescuentoPageRoutingModule {}
