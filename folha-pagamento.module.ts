
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolhaPagamentoPageRoutingModule } from './folha-pagamento-routing.module';

import { FolhaPagamentoPage } from './folha-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolhaPagamentoPageRoutingModule
  ],
  declarations: [FolhaPagamentoPage]
})
export class FolhaPagamentoPageModule {}
