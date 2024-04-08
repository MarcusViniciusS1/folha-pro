/*holerite-page.module.ts*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoleritePagePageRoutingModule } from './holerite-page-routing.module';

import { HoleritePagePage } from './holerite-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoleritePagePageRoutingModule
  ],
  declarations: [HoleritePagePage]
})
export class HoleritePagePageModule {}
