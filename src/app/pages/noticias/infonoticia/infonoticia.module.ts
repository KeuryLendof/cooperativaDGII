import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfonoticiaPageRoutingModule } from './infonoticia-routing.module';

import { InfonoticiaPage } from './infonoticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfonoticiaPageRoutingModule
  ],
  declarations: [InfonoticiaPage]
})
export class InfonoticiaPageModule {}
