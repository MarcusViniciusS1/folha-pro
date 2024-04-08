import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormPage } from './usuario-form.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioFormPageRoutingModule {}
