import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamoPage } from './prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamoPageRoutingModule {}
