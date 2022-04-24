import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultcertificadoPageRoutingModule } from './resultcertificado-routing.module';

import { ResultcertificadoPage } from './resultcertificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultcertificadoPageRoutingModule
  ],
  declarations: [ResultcertificadoPage]
})
export class ResultcertificadoPageModule {}
