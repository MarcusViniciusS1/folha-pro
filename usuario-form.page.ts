///usuario-form.page.ts
import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.page.html',
  styleUrls: ['./usuario-form.page.scss'],
})
export class UsuarioFormPage implements OnInit {

  public id: number = 0;
  public nome:string = '';
  public login:string = '';
  public senha:string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router: ActivatedRoute,
    private navCtrl: NavController,
    
    
  ) {
    this.activated_router.params
    .subscribe(
      (params: any) => {  
        this.id = params.id == undefined ? 0 : params.id;
        this.requisicao_service.get({
          controller: 'usuario-get',
          id:this.id
        })
        .subscribe(
          (_dados: any) => {
            this.nome  = _dados.nome;
            this.login  =_dados.login;
          }
        );
      }
    );
  }
  
  ngOnInit() {

  }

  entrar(){
    this.navCtrl.navigateForward('home')
  }

  async salvar(){
    
    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });

    await loading.present();    

    const fd = new FormData();
    fd.append('controller','usuario');
    fd.append('id',String (this.id));
    fd.append('nome',this.nome);
    fd.append('login',this.login);
    fd.append('senha',this.senha);

    this.requisicao_service
    .post(fd)
    .subscribe(
      async () => {
        await loading.dismiss();
      }      
    );

  }

}