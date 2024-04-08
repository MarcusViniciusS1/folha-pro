import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListarPage } from './usuario-listar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListarPageRoutingModule {}
