import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { gerarCartas } from '../services/gerarCartas';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {


  public pessoa: any; // cartas da pessoa
  public maquina: any; // cartas da maquina
  public saldoPessoa: any; // saldo da pessoa
  public saldoMaquina: any; // saldo da maquina
  public fimGamePessoa: boolean = false; // blackjack pessoa
  public fimGameMaquina: boolean = false; // blackjack maquina
  public fimGameEmpate: boolean = false; // blackjack empate

  constructor(public gerarCarts: gerarCartas, public alertController: AlertController) { }


  ionViewWillEnter() {

    this.startGame();
  }

  async startGame() {
    this.pessoa = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]
    this.maquina = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]

    // this.pessoa = ['A', 'K']
    // this.maquina = ['8', 'Q']

    await this.countValorPessoa();
    await this.countValorMaquina();

    let tag = true
    this.maquina[1].push(true)

    console.log("pessoa", this.pessoa)
    console.log("maquina", this.maquina)
  }

  countValorPessoa() {
    let count = 0;
    if (this.pessoa[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.pessoa[1][0]) || ['Q', 'J', 'K'].includes(this.pessoa[0][0]) && this.pessoa[1][0] === 'A') {
      if (this.pessoa[2]) {
        this.pessoa.map(res => {

          if (res[0] == 'A') {
            count += 1
          }
          if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
            count = count + 10
          }
          if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
            count = count + parseInt(res[0])

          }
        })
      } else {
        count = 21
      }

    } else {
      this.pessoa.map(res => {

        if (res[0] == 'A') {
          count += 1
        }
        if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
          count = count + 10
        }
        if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
          count = count + parseInt(res[0])

        }
      })
    }


    this.saldoPessoa = count;
    // })

    console.log("Saldo pessoa", this.saldoPessoa)

  }

  countValorMaquina() {
    let count = 0;
    if (this.maquina[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.maquina[1][0]) || ['Q', 'J', 'K'].includes(this.maquina[0][0]) && this.maquina[1][0] === 'A') {
      count = 21
    } else {
      this.maquina.map(res => {

        if (res[0] == 'A') {
          count += 1
        }
        if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
          count = count + 10
        }

        if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
          count = count + parseInt(res[0])

        }

      })
    }
    this.saldoMaquina = count;
    this.verificaValor();
    console.log("Saldo maquina", this.saldoMaquina)

  }

  async maisUma() {
    let message;
    this.pessoa.push(this.gerarCarts.sorteioCartas())
    console.log("pessoa", this.pessoa)

    await this.countValorPessoa();
    await this.verificaValor();
    if (this.saldoPessoa > 21) {
      message = 'Você perdeu'
      this.presentAlert(message)
    }



  }

  async goToMaquina() {
    let idInterval;
    let message;
    await this.verificaValor();


    console.log("Cartas fimGameMaquina", this.fimGameMaquina)
    console.log("Cartas fimGameEmpate", this.fimGameEmpate)
    console.log("Cartas fimGamePessoa", this.fimGamePessoa)

    // 2 blackjack
    if (this.fimGameEmpate) {
      message = 'Empatado'
      this.presentAlert(message)
    } else {

      if (this.fimGameMaquina && !this.fimGamePessoa) {
        message = 'Você perdeu :('
        this.presentAlert(message)
      }
      else {

        if (this.saldoMaquina >= 19) {
          if (this.saldoMaquina > this.saldoPessoa) {
            message = 'Você perdeu :('
            this.presentAlert(message)
          } else {
            message = 'Você ganhou :)'
            this.presentAlert(message)
          }
        } else {
          if (this.fimGamePessoa || !this.fimGamePessoa) {
       
            idInterval = setInterval(() => {
              this.maquina.push(this.gerarCarts.sorteioCartas());
              this.countValorMaquina();
              console.log("Cartas maquina", this.maquina)

              if (this.saldoMaquina == 21 && this.saldoPessoa == 21) {
                message = 'Empatado :/'
                this.presentAlert(message)
                clearInterval(idInterval);
              }
              else
                if (this.saldoMaquina == 21 || this.saldoPessoa < this.saldoMaquina && this.saldoMaquina < 21) {

                  if (this.saldoMaquina == 21 && this.fimGamePessoa) {
                    console.log("count", this.saldoMaquina)
                    message = 'Você ganhou :)'
                    this.presentAlert(message)
                    clearInterval(idInterval);
                  } else {
                    console.log("count", this.saldoMaquina)
                    message = 'Você perdeu :('
                    this.presentAlert(message)
                    clearInterval(idInterval);
                  }

                } else
                  if (this.saldoMaquina >= 21 || this.saldoMaquina > 18) {
                    console.log("count", this.saldoMaquina)
                    message = 'Você ganhou :)'
                    this.presentAlert(message)
                    clearInterval(idInterval);
                  }

                  else if (this.saldoMaquina == this.saldoPessoa) {
                    message = 'Empatado :/'
                    this.presentAlert(message)
                    clearInterval(idInterval);
                  }

            }, 2000);
          }
        }



      }


    }

    //   if (this.saldoMaquina > this.saldoPessoa) {
    //     message = 'Você perdeu 2'
    //     this.presentAlert(message)
    //   } else {

    //     if (this.saldoMaquina <= 18) {

    //       idInterval = setInterval(() => {
    //         this.maquina.push(this.gerarCarts.sorteioCartas());
    //         this.countValorMaquina();
    //         console.log("Cartas maquina", this.maquina)

    //         if (this.saldoMaquina == 21 && this.saldoPessoa == 21) {
    //           message = 'Empatado 2'
    //           this.presentAlert(message)
    //           clearInterval(idInterval);
    //         }
    //         else
    //           if (this.saldoMaquina == 21 || this.saldoPessoa < this.saldoMaquina && this.saldoMaquina < 21) {
    //             console.log("count", this.saldoMaquina)
    //             message = 'Você perdeu 1'
    //             this.presentAlert(message)
    //             clearInterval(idInterval);
    //           } else
    //             if (this.saldoMaquina >= 21 || this.saldoMaquina > 18) {
    //               console.log("count", this.saldoMaquina)
    //               message = 'Você ganhou 2'
    //               this.presentAlert(message)
    //               clearInterval(idInterval);
    //             }

    //             else if (this.saldoMaquina == this.saldoPessoa) {
    //               message = 'Empatado 3'
    //               this.presentAlert(message)
    //               clearInterval(idInterval);
    //             }

    //       }, 2000);
    //     } else if (this.saldoMaquina == this.saldoPessoa) {
    //       message = 'Empatado 1'
    //       this.presentAlert(message)
    //     } else {
    //       message = 'Você ganhou 1'
    //       this.presentAlert(message)
    //     }

    //   }



    // }
  }


  async verificaValor() {
    let message;
    // primeira rodada 
    // 1- se pessoa tiver um A e uma figura ela ganha
    // 2- se pessoa tiver um A e uma figura ela ganha e a maquina tambem da empate 
    // 3- se pessoa tiver um A e uma carta normal ele pedir proxima carta o A ira valer 1
    // 4- a  pessoa ganha se tiver 21 ou blackjack e a maquina não 
    // 5- a  maquina ganha se tiver 21 ou blackjack e a pessoa não ou se a pessoa estourar 
    // 6- se a maquina estourar a pessoa ganha
    // 7- se a pessoa estourar a maquina ganha
    // 8- se a pessoa parar e a maquina estourar ou as cartas forem menor do que a da pessoa, a pessoa ganha
    // 9- se a maquina parar e a pessoa estourar ou as cartas forem menor do que a da maquina, a maquina ganha


    // Verificação se alguem possui um blackjack \\

    this.fimGameEmpate = false;
    this.fimGameMaquina = false;
    this.fimGamePessoa = false;

    if (this.pessoa[0][0] == 'A' && ['Q', 'J', 'K'].includes(this.pessoa[1][0]) || ['Q', 'J', 'K'].includes(this.pessoa[0][0]) && this.pessoa[1][0] === 'A') {
      if(!this.pessoa[2])
      {
        this.fimGamePessoa = true;
      }
    
      console.log("Pessoa possui um blackjack", this.fimGamePessoa)
    }
    if (this.maquina[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.maquina[1][0]) || ['Q', 'J', 'K'].includes(this.maquina[0][0]) && this.maquina[1][0] === 'A') {
      this.fimGameMaquina = true;
      console.log("maquina possui um blackjack", this.fimGameMaquina)
    }

    // três condições para da blackjack
    if (this.fimGamePessoa == true && this.fimGameMaquina == true) {
      this.fimGameEmpate = true
  
    }
    else if (!this.fimGamePessoa && this.fimGameMaquina && this.saldoMaquina == 21) {
    }
    else if (this.fimGamePessoa && !this.fimGameMaquina && this.saldoPessoa == 21) {
    } else {

      if (this.saldoPessoa == 21) {
        this.fimGamePessoa = true;

      }
      if (this.saldoPessoa > 21) {
            this.fimGameMaquina = true;
        message = 'Você perdeu'
        await this.presentAlert(message)
      }

      // else {
      //   console.log("Voce perdeu ")
      //   // message = 'Você perdeu'
      //   // this.presentAlert(message)

      // }

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
