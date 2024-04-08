///app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'usuario-form',
    pathMatch: 'full'
  },
  {
    path: 'usuario-form',
    loadChildren: () => import('./usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },
  {
    path: 'folha-pagamento',
    loadChildren: () => import('./folha-pagamento/folha-pagamento.module').then( m => m.FolhaPagamentoPageModule)
  },
  {
    path: 'holerite-page',
    loadChildren: () => import('./holerite-page/holerite-page.module').then( m => m.HoleritePagePageModule)
  },
  { path: 'mes-janeiro', loadChildren: () => import('./mes/janeiro/janeiro.module').then(m => m.JaneiroPageModule) },
  { path: 'mes-fevereiro', loadChildren: () => import('./mes/fevereiro/fevereiro.module').then(m => m.FevereiroPageModule) },
  { path: 'mes-marco', loadChildren: () => import('./mes/marco/marco.module').then(m => m.MarcoPageModule) },
  { path: 'mes-abril', loadChildren: () => import('./mes/abril/abril.module').then(m => m.AbrilPageModule) },
  { path: 'mes-maio', loadChildren: () => import('./mes/maio/maio.module').then(m => m.MaioPageModule) },
  { path: 'mes-junho', loadChildren: () => import('./mes/junho/junho.module').then(m => m.JunhoPageModule) },
  { path: 'mes-julho', loadChildren: () => import('./mes/julho/julho.module').then(m => m.JulhoPageModule) },
  { path: 'mes-agosto', loadChildren: () => import('./mes/agosto/agosto.module').then(m => m.AgostoPageModule) },
  { path: 'mes-setembro', loadChildren: () => import('./mes/setembro/setembro.module').then(m => m.SetembroPageModule) },
  { path: 'mes-outubro', loadChildren: () => import('./mes/outubro/outubro.module').then(m => m.OutubroPageModule) },
  { path: 'mes-novembro', loadChildren: () => import('./mes/novembro/novembro.module').then(m => m.NovembroPageModule) },
  { path: 'mes-dezembro', loadChildren: () => import('./mes/dezembro/dezembro.module').then(m => m.DezembroPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
