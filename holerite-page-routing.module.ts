import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoleritePagePage } from './holerite-page.page';

const routes: Routes = [
  {
    path: '',
    component: HoleritePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoleritePagePageRoutingModule {}
