// holerite-page.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-holerite-page',
  templateUrl: './holerite-page.page.html',
  styleUrls: ['./holerite-page.page.scss'],
})
export class HoleritePagePage {

  constructor(private router: Router, private toastController: ToastController) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Formulário cadastrado com sucesso',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
