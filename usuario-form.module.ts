/////usuario-form.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioFormPageRoutingModule } from './usuario-form-routing.module';
import { UsuarioFormPage } from './usuario-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioFormPageRoutingModule
  ],
  declarations: [UsuarioFormPage]
})
export class UsuarioFormPageModule {}
