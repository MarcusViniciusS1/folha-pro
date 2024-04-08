///home.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';


 

@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {
  constructor(private router: Router) {}
  navigateToHoleritePage() {
    this.router.navigate(['/holerite-page']);
  }
  navigateToFolhaPagamento() {
    this.router.navigate(['/folha-pagamento']);
  } 
  navigateToUsuarioForm() {
    this.router.navigate(['/usuario-form']);
  }

}
