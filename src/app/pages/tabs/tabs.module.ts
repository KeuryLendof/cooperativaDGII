import { ContactoPageModule } from './../contacto/contacto.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'solicitud',
        // loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./../contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: '',
        // loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
