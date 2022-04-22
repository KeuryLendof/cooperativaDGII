import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsugerenciaPageRoutingModule } from './formsugerencia-routing.module';

import { FormsugerenciaPage } from './formsugerencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsugerenciaPageRoutingModule
  ],
  declarations: [FormsugerenciaPage]
})
export class FormsugerenciaPageModule {}
