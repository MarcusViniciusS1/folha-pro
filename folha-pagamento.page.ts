// folha-pagamento.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folha-pagamento',
  templateUrl: './folha-pagamento.page.html',
  styleUrls: ['./folha-pagamento.page.scss'],
})
export class FolhaPagamentoPage {
  selectedYear: string = 'ano-2018';
  selectedMonth: string = 'janeiro';
  private toast: any;

  constructor(private router: Router, private toastController: ToastController) {}

  navigateToSelectedMonth() {
    if (!this.selectedMonth || !this.selectedYear || this.selectedMonth === 'Todos') {
      this.presentToast('Selecione um mês e um ano antes de navegar.');
    } else {
      const route = `/${this.selectedMonth}`;
      this.router.navigate([route]);
    }
  }

  async presentToast(message: string) {
    this.toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger',
    });
    this.toast.present();
  }
}
