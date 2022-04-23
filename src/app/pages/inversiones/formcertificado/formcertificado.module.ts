import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcertificadoPageRoutingModule } from './formcertificado-routing.module';

import { FormcertificadoPage } from './formcertificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormcertificadoPageRoutingModule
  ],
  declarations: [FormcertificadoPage]
})
export class FormcertificadoPageModule {}
