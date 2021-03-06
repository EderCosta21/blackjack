import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
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
  public desabilita: boolean = true;
  public desabilitaAposta: boolean = false;
  public comecarGame: boolean = false;

  public dinheiroMesa: number = 100000000000000000; // dinheiro inicial
  public dinheiroPessoa: number = 1000; // dinheiro inicial
  public apostaMesa: number = 0;
  public apostaPessoa: number = 0;



  constructor(
    public gerarCarts: gerarCartas,
    public alertController: AlertController,
    public toastController: ToastController) { }


  async ionViewWillEnter() {
    await this.info()
    this.startGame();

  }

  async info() {

    const toast = await this.toastController.create({
      message: 'Para começar jogar, faça uma aposta :)',
      position: "middle",
      cssClass: 'setInicial',
      duration: 3500
    });
    toast.present();

  }

  async startGame() {
    this.pessoa = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]
    this.maquina = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()]

    // this.pessoa = ['A', 'K']
    // this.maquina = ['A', 'J']

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

    if (this.apostaPessoa != 0) {
      this.desabilitaAposta = true;
      this.pessoa.push(this.gerarCarts.sorteioCartas())
      console.log("pessoa", this.pessoa)

      await this.countValorPessoa();
      await this.verificaValor();
    } else {

      const toast = await this.toastController.create({
        message: 'Para começar faça uma aposta :)',
        position: "middle",
        cssClass: 'set',
        duration: 2000
      });
      toast.present();

    }
  }

  async goToMaquina() {

    if (this.apostaPessoa != 0) {
      this.desabilita = true;
      this.desabilitaAposta = true;
      this.maquina[1][2] = false;
      let idInterval;
      let message;
      await this.verificaValor();


      console.log("Cartas fimGameMaquina", this.fimGameMaquina)
      console.log("Cartas fimGameEmpate", this.fimGameEmpate)
      console.log("Cartas fimGamePessoa", this.fimGamePessoa)

      // 2 blackjack
      if (this.fimGameEmpate) {
        this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa
        this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa

        message = 'Empatado'
        this.presentAlert(message)
      } else {

        if (this.fimGameMaquina && !this.fimGamePessoa) {
          this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);

          message = 'Você perdeu :('
          this.presentAlert(message)
        }
        else {

          if (this.saldoMaquina >= 19) {
            if (this.saldoMaquina > this.saldoPessoa) {
              this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);

              message = 'Você perdeu :('
              this.presentAlert(message)
            }else if( this.saldoMaquina == this.saldoPessoa){
              this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa
              this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa
      
              message = 'Empatado'
              this.presentAlert(message)
            }
              else {
              this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2)

              message = 'Você ganhou :) '
              this.presentAlert(message)
            }
          } else {
            if (this.fimGamePessoa || !this.fimGamePessoa) {

              idInterval = setInterval(() => {
                this.maquina.push(this.gerarCarts.sorteioCartas());
                this.countValorMaquina();
                console.log("Cartas maquina", this.maquina)

                if (this.saldoMaquina == 21 && this.saldoPessoa == 21) {
                  this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa
                  this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa

                  message = 'Empatado :/'
                  this.presentAlert(message)
                  clearInterval(idInterval);
                }
                else
                  if (this.saldoMaquina == 21 || this.saldoPessoa < this.saldoMaquina && this.saldoMaquina < 21) {

                    if (this.saldoMaquina == 21 && this.fimGamePessoa) {
                      this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2)
                      console.log("count", this.saldoMaquina)
                      message = 'Você ganhou :)'
                      this.presentAlert(message)
                      clearInterval(idInterval);
                    } else {
                      console.log("count", this.saldoMaquina)
                      this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);

                      message = 'Você perdeu :('
                      this.presentAlert(message)
                      clearInterval(idInterval);
                    }

                  } else {
                    if (this.saldoMaquina >= 21 || this.saldoMaquina > 18) {
                      console.log("count", this.saldoMaquina)
                      this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2)
                      message = 'Você ganhou :)'
                      this.presentAlert(message)
                      clearInterval(idInterval);
                    }

                    else if (this.saldoMaquina == this.saldoPessoa) {
                      this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa
                      this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa

                      message = 'Empatado :/'
                      this.presentAlert(message)
                      clearInterval(idInterval);
                    }
                  }

              }, 2000);
            }
          }

        }
      }


    }
    else {

      const toast = await this.toastController.create({
        message: 'Para começar faça uma aposta :)',
        position: "middle",
        cssClass: 'set',
        duration: 2000
      });
      toast.present();

    }


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
      if (!this.pessoa[2]) {
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
    else {

      console.log("toaqui")

      if (this.saldoPessoa == 21) {
        this.fimGamePessoa = true;

      }
      if (this.saldoPessoa > 21) {
        this.fimGameMaquina = true;

        this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);
        console.log("dinheiro da mesa", this.dinheiroMesa, this.apostaPessoa)
        message = 'Você perdeu :( '
        await this.presentAlert(message)
      }


    }



  }


  async presentAlert(messsage) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: messsage,
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          handler: res => {
            setTimeout(async res => {
              this.apostaMesa = 0;
              this.apostaPessoa = 0;
              this.comecarGame = false;
              this.desabilita = true;
              this.desabilitaAposta = false;
              this.gerarCarts.baralhoNovo();
            }, 500)


            setTimeout(async res => {
              await this.startGame();
            }, 1500)

          }


        }],

    });

    await alert.present();



  }

  async aposta(valor) {


    console.log("aposta", valor)
    if (this.dinheiroMesa == 0 || this.dinheiroPessoa == 0) {
      if (!this.desabilitaAposta && this.dinheiroPessoa == 0 && this.apostaPessoa == 0) {
        let alert = this.alertController.create({
          header: 'Seu dinheiro Acabou!',
          subHeader: 'Deseja adicionar mais dinheiro',
          mode: 'ios',

          buttons: [
            {
              text: 'Não, obrigado!',
              role: 'cancel',
              handler: data => {


              }
            },
            {
              text: 'Sim',
              handler: data => {

                this.dinheiroPessoa = 100000

              }
            }
          ]
        });

        (await alert).present();

      } else {
        this.desabilitaAposta = true;
      }




    } else {
      this.dinheiroMesa = this.dinheiroMesa - parseInt(valor);
      this.dinheiroPessoa = this.dinheiroPessoa - parseInt(valor);
      this.apostaPessoa = this.apostaPessoa + parseInt(valor);
      this.apostaMesa = this.apostaMesa + parseInt(valor);

      if (this.dinheiroPessoa < 0) {
        this.dinheiroPessoa = 0

      }


    }
    console.log("apostaPessoa", this.apostaPessoa)
    console.log("dinheiro mesa", this.dinheiroMesa)
    console.log("dinheiro pessoa", this.dinheiroPessoa)
  }

  async dobrarAposta() {
    console.log("dinheiro, pessoa", this.dinheiroPessoa)
    if (this.dinheiroPessoa <= 0 || this.apostaPessoa >= this.dinheiroPessoa) {
      const toast = await this.toastController.create({
        message: 'Não possui dinheiro suficiente para dobrar aposta :)', 
        position: "middle",
        cssClass: 'set',
        duration: 2000
      });
      toast.present();
    }
    else {
      this.dinheiroMesa = this.dinheiroMesa - this.apostaMesa;
      this.dinheiroPessoa = this.dinheiroPessoa - this.apostaPessoa;
      this.apostaPessoa = this.apostaPessoa * 2;
      this.apostaMesa = this.apostaMesa * 2;

      await this.maisUma();
       this.comecarGame = true;
        this.desabilitaAposta = true;
        this.desabilita = false;
      this.goToMaquina();
    }


  }

  async comecar() {

    if (this.apostaPessoa != 0) {

      this.comecarGame = true;
      this.desabilitaAposta = true;
      this.desabilita = false;

    } else {

      const toast = await this.toastController.create({
        message: 'Para começar faça uma aposta :).',
        position: "middle",
        cssClass: 'set',
        duration: 2000
      });
      toast.present();

    }
  }


}


