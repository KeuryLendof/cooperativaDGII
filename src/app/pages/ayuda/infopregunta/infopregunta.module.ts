import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopreguntaPageRoutingModule } from './infopregunta-routing.module';

import { InfopreguntaPage } from './infopregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopreguntaPageRoutingModule
  ],
  declarations: [InfopreguntaPage]
})
export class InfopreguntaPageModule {}
