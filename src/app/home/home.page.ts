import { gerarCartas } from './../services/gerarCartas';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pessoa: any;
  public maquina: any;
  public saldoPessoa: any;
  public saldoMaquina: any;

  constructor(public gerarCarts: gerarCartas, public alertController: AlertController) { }


  ionViewWillEnter() {

    this.startGame()
  }

  async startGame() {
    this.pessoa = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]
    this.maquina = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]

    await this.countValorPessoa();
    await this.countValorMaquina();

    console.log("pessoa", this.pessoa)
    console.log("maquina", this.maquina)
  }

  countValorPessoa() {
    let count = 0;
    this.pessoa.map(res => {

      if (res[0] == 'A') {
        count += 1
      }
      if (res[0] == 'Q') {
        count = count + 8
      }
      if (res[0] == 'J') {
        count = count + 9
      }
      if (res[0] == 'K') {
        count = count + 10
      }
      if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
        count = count + parseInt(res[0])

      }
      this.saldoPessoa = count;
    })


    this.verificaValor();
    console.log("Saldo pessoa", this.saldoPessoa)

  }

  countValorMaquina() {
    let count = 0;
    this.maquina.map(res => {

      if (res[0] == 'A') {
        count += 1
      }
      if (res[0] == 'Q') {
        count = count + 8
      }
      if (res[0] == 'J') {
        count = count + 9
      }
      if (res[0] == 'K') {
        count = count + 10
      }
      if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
        count = count + parseInt(res[0])

      }
      this.saldoMaquina = count;
    })


    this.verificaValor();
    console.log("Saldo maquina", this.saldoMaquina)

  }

  async maisUma() {
    this.pessoa.push(this.gerarCarts.sorteioCartas())
    console.log("pessoa", this.pessoa)

    await this.countValorPessoa();


  }

  async goToMaquina() {
    let idInterval;
    if (this.saldoPessoa < 17 || this.saldoPessoa != 21) {

      idInterval = setInterval(() => {
        this.maquina.push(this.gerarCarts.sorteioCartas());
        this.countValorMaquina();
        console.log( "Cartas maquina", this.maquina)
        if(this.saldoMaquina >=21)
        {
          console.log("count", this.saldoMaquina)
          clearInterval(idInterval);
        }
        
      }, 2000);

    }

  }


  verificaValor() {
    let message;
    if (this.saldoPessoa < 21) {
      console.log("Voce continua ")
    }
    else if (this.saldoPessoa == 21) {
      console.log("voce ganhou")
      message = 'Você ganhou'
      this.presentAlert(message)
    }
    else {
      console.log("Voce perdeu ")
      message = 'Você perdeu'
      this.presentAlert(message)

    }
  }


  async presentAlert(messsage) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: messsage,
      buttons: ['OK'],
      mode: 'ios',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.startGame();
    console.log('onDidDismiss resolved with role', role);
  }



}
