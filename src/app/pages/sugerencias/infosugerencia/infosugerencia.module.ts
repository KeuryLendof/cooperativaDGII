import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosugerenciaPageRoutingModule } from './infosugerencia-routing.module';

import { InfosugerenciaPage } from './infosugerencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosugerenciaPageRoutingModule
  ],
  declarations: [InfosugerenciaPage]
})
export class InfosugerenciaPageModule {}
