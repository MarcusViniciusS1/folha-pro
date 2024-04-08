///folha-pagamento-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolhaPagamentoPage } from './folha-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: FolhaPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolhaPagamentoPageRoutingModule {}
