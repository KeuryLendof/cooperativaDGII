import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarPageRoutingModule } from './solicitar-routing.module';

import { SolicitarPage } from './solicitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarPageRoutingModule
  ],
  declarations: [SolicitarPage]
})
export class SolicitarPageModule {}
