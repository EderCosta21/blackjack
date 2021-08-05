(self["webpackChunkblackjack_eder"] = self["webpackChunkblackjack_eder"] || []).push([["src_app_game_game_module_ts"],{

/***/ 4629:
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageRoutingModule": () => (/* binding */ GamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.page */ 1925);




const routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_0__.GamePage
    }
];
let GamePageRoutingModule = class GamePageRoutingModule {
};
GamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamePageRoutingModule);



/***/ }),

/***/ 7361:
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageModule": () => (/* binding */ GamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 4629);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 1925);







let GamePageModule = class GamePageModule {
};
GamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePageRoutingModule
        ],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage]
    })
], GamePageModule);



/***/ }),

/***/ 1925:
/*!***********************************!*\
  !*** ./src/app/game/game.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePage": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./game.page.html */ 6255);
/* harmony import */ var _game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.scss */ 806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_gerarCartas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gerarCartas */ 955);






let GamePage = class GamePage {
    constructor(gerarCarts, alertController, toastController) {
        this.gerarCarts = gerarCarts;
        this.alertController = alertController;
        this.toastController = toastController;
        this.fimGamePessoa = false; // blackjack pessoa
        this.fimGameMaquina = false; // blackjack maquina
        this.fimGameEmpate = false; // blackjack empate
        this.desabilita = true;
        this.desabilitaAposta = false;
        this.comecarGame = false;
        this.dinheiroMesa = 100000000000000000; // dinheiro inicial
        this.dinheiroPessoa = 1000; // dinheiro inicial
        this.apostaMesa = 0;
        this.apostaPessoa = 0;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.info();
            this.startGame();
        });
    }
    info() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Para começar jogar, faça uma aposta :)',
                position: "middle",
                cssClass: 'setInicial',
                duration: 3500
            });
            toast.present();
        });
    }
    startGame() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.pessoa = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()];
            this.maquina = [this.gerarCarts.sorteioCartas(), this.gerarCarts.sorteioCartas()];
            // this.pessoa = ['A', 'K']
            // this.maquina = ['A', 'J']
            yield this.countValorPessoa();
            yield this.countValorMaquina();
            let tag = true;
            this.maquina[1].push(true);
            console.log("pessoa", this.pessoa);
            console.log("maquina", this.maquina);
        });
    }
    countValorPessoa() {
        let count = 0;
        if (this.pessoa[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.pessoa[1][0]) || ['Q', 'J', 'K'].includes(this.pessoa[0][0]) && this.pessoa[1][0] === 'A') {
            if (this.pessoa[2]) {
                this.pessoa.map(res => {
                    if (res[0] == 'A') {
                        count += 1;
                    }
                    if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
                        count = count + 10;
                    }
                    if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
                        count = count + parseInt(res[0]);
                    }
                });
            }
            else {
                count = 21;
            }
        }
        else {
            this.pessoa.map(res => {
                if (res[0] == 'A') {
                    count += 1;
                }
                if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
                    count = count + 10;
                }
                if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
                    count = count + parseInt(res[0]);
                }
            });
        }
        this.saldoPessoa = count;
        // })
        console.log("Saldo pessoa", this.saldoPessoa);
    }
    countValorMaquina() {
        let count = 0;
        if (this.maquina[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.maquina[1][0]) || ['Q', 'J', 'K'].includes(this.maquina[0][0]) && this.maquina[1][0] === 'A') {
            count = 21;
        }
        else {
            this.maquina.map(res => {
                if (res[0] == 'A') {
                    count += 1;
                }
                if (res[0] == 'J' || res[0] == 'Q' || res[0] == 'K') {
                    count = count + 10;
                }
                if (!['A', 'Q', 'J', 'K'].includes(res[0])) {
                    count = count + parseInt(res[0]);
                }
            });
        }
        this.saldoMaquina = count;
        this.verificaValor();
        console.log("Saldo maquina", this.saldoMaquina);
    }
    maisUma() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.apostaPessoa != 0) {
                this.desabilitaAposta = true;
                this.pessoa.push(this.gerarCarts.sorteioCartas());
                console.log("pessoa", this.pessoa);
                yield this.countValorPessoa();
                yield this.verificaValor();
            }
            else {
                const toast = yield this.toastController.create({
                    message: 'Para começar faça uma aposta :)',
                    position: "middle",
                    cssClass: 'set',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    goToMaquina() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.apostaPessoa != 0) {
                this.desabilita = true;
                this.desabilitaAposta = true;
                this.maquina[1][2] = false;
                let idInterval;
                let message;
                yield this.verificaValor();
                console.log("Cartas fimGameMaquina", this.fimGameMaquina);
                console.log("Cartas fimGameEmpate", this.fimGameEmpate);
                console.log("Cartas fimGamePessoa", this.fimGamePessoa);
                // 2 blackjack
                if (this.fimGameEmpate) {
                    this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa;
                    this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa;
                    message = 'Empatado';
                    this.presentAlert(message);
                }
                else {
                    if (this.fimGameMaquina && !this.fimGamePessoa) {
                        this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);
                        message = 'Você perdeu :(';
                        this.presentAlert(message);
                    }
                    else {
                        if (this.saldoMaquina >= 19) {
                            if (this.saldoMaquina > this.saldoPessoa) {
                                this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);
                                message = 'Você perdeu :(';
                                this.presentAlert(message);
                            }
                            else {
                                this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2);
                                message = 'Você ganhou :)';
                                this.presentAlert(message);
                            }
                        }
                        else {
                            if (this.fimGamePessoa || !this.fimGamePessoa) {
                                idInterval = setInterval(() => {
                                    this.maquina.push(this.gerarCarts.sorteioCartas());
                                    this.countValorMaquina();
                                    console.log("Cartas maquina", this.maquina);
                                    if (this.saldoMaquina == 21 && this.saldoPessoa == 21) {
                                        this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa;
                                        this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa;
                                        message = 'Empatado :/';
                                        this.presentAlert(message);
                                        clearInterval(idInterval);
                                    }
                                    else if (this.saldoMaquina == 21 || this.saldoPessoa < this.saldoMaquina && this.saldoMaquina < 21) {
                                        if (this.saldoMaquina == 21 && this.fimGamePessoa) {
                                            this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2);
                                            console.log("count", this.saldoMaquina);
                                            message = 'Você ganhou :)';
                                            this.presentAlert(message);
                                            clearInterval(idInterval);
                                        }
                                        else {
                                            console.log("count", this.saldoMaquina);
                                            this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);
                                            message = 'Você perdeu :(';
                                            this.presentAlert(message);
                                            clearInterval(idInterval);
                                        }
                                    }
                                    else {
                                        if (this.saldoMaquina >= 21 || this.saldoMaquina > 18) {
                                            console.log("count", this.saldoMaquina);
                                            this.dinheiroPessoa = this.dinheiroPessoa + (this.apostaPessoa * 2);
                                            message = 'Você ganhou :)';
                                            this.presentAlert(message);
                                            clearInterval(idInterval);
                                        }
                                        else if (this.saldoMaquina == this.saldoPessoa) {
                                            this.dinheiroMesa = this.dinheiroMesa + this.apostaMesa;
                                            this.dinheiroPessoa = this.dinheiroPessoa + this.apostaPessoa;
                                            message = 'Empatado :/';
                                            this.presentAlert(message);
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
                const toast = yield this.toastController.create({
                    message: 'Para começar faça uma aposta :)',
                    position: "middle",
                    cssClass: 'set',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    verificaValor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
                console.log("Pessoa possui um blackjack", this.fimGamePessoa);
            }
            if (this.maquina[0][0] === 'A' && ['Q', 'J', 'K'].includes(this.maquina[1][0]) || ['Q', 'J', 'K'].includes(this.maquina[0][0]) && this.maquina[1][0] === 'A') {
                this.fimGameMaquina = true;
                console.log("maquina possui um blackjack", this.fimGameMaquina);
            }
            // três condições para da blackjack
            if (this.fimGamePessoa == true && this.fimGameMaquina == true) {
                this.fimGameEmpate = true;
            }
            else {
                console.log("toaqui");
                if (this.saldoPessoa == 21) {
                    this.fimGamePessoa = true;
                }
                if (this.saldoPessoa > 21) {
                    this.fimGameMaquina = true;
                    this.dinheiroMesa = this.dinheiroMesa + (this.apostaPessoa * 2);
                    console.log("dinheiro da mesa", this.dinheiroMesa, this.apostaPessoa);
                    message = 'Você perdeu :( ';
                    yield this.presentAlert(message);
                }
            }
        });
    }
    presentAlert(messsage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Atenção',
                // subHeader: 'Subtitle',
                message: messsage,
                mode: 'ios',
                buttons: [
                    {
                        text: 'OK',
                        handler: res => {
                            setTimeout((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                                this.apostaMesa = 0;
                                this.apostaPessoa = 0;
                                this.comecarGame = false;
                                this.desabilita = true;
                                this.desabilitaAposta = false;
                                this.gerarCarts.baralhoNovo();
                            }), 500);
                            setTimeout((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                                yield this.startGame();
                            }), 1500);
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    aposta(valor) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log("aposta", valor);
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
                                    this.dinheiroPessoa = 100000;
                                }
                            }
                        ]
                    });
                    (yield alert).present();
                }
                else {
                    this.desabilitaAposta = true;
                }
            }
            else {
                this.dinheiroMesa = this.dinheiroMesa - parseInt(valor);
                this.dinheiroPessoa = this.dinheiroPessoa - parseInt(valor);
                this.apostaPessoa = this.apostaPessoa + parseInt(valor);
                this.apostaMesa = this.apostaMesa + parseInt(valor);
                if (this.dinheiroPessoa < 0) {
                    this.dinheiroPessoa = 0;
                }
            }
            console.log("apostaPessoa", this.apostaPessoa);
            console.log("dinheiro mesa", this.dinheiroMesa);
            console.log("dinheiro pessoa", this.dinheiroPessoa);
        });
    }
    dobrarAposta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log("dinheiro, pessoa", this.dinheiroPessoa);
            if (this.dinheiroPessoa <= 0 || this.apostaPessoa >= this.dinheiroPessoa) {
                const toast = yield this.toastController.create({
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
                yield this.maisUma();
                this.comecarGame = true;
                this.desabilitaAposta = true;
                this.desabilita = false;
                this.goToMaquina();
            }
        });
    }
    comecar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.apostaPessoa != 0) {
                this.comecarGame = true;
                this.desabilitaAposta = true;
                this.desabilita = false;
            }
            else {
                const toast = yield this.toastController.create({
                    message: 'Para começar faça uma aposta :).',
                    position: "middle",
                    cssClass: 'set',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
};
GamePage.ctorParameters = () => [
    { type: _services_gerarCartas__WEBPACK_IMPORTED_MODULE_2__.gerarCartas },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-game',
        template: _raw_loader_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GamePage);



/***/ }),

/***/ 806:
/*!*************************************!*\
  !*** ./src/app/game/game.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-title {\n  text-align: center;\n  padding-top: 4px;\n  color: var(--ion-color-light);\n}\n.imgCenter {\n  background-size: cover;\n  background: url('fundo2.png') no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n  min-width: 100%;\n  min-height: 100%;\n}\nion-grid {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n.semApostas {\n  height: 340px;\n}\n.dobrar {\n  position: absolute;\n  top: 25px;\n  font-weight: bold;\n  --background:#f2f679;\n  --color:#000;\n  box-shadow: 0 0 1em #000;\n}\n.começar {\n  position: absolute;\n  top: 62px;\n  font-weight: bold;\n  --background:#f2f679;\n  --color:#000;\n  box-shadow: 0 0 1em #000;\n}\n.parar {\n  position: absolute;\n  left: 75vw;\n  font-weight: bold;\n  --background:#f2f679;\n  --color:#000;\n  box-shadow: 0 0 1em #000;\n}\n.maisUma {\n  font-weight: bold;\n  position: absolute;\n  left: 70vw;\n  top: 40px;\n  bottom: 15px;\n  --background:#f2f679;\n  --color:#000;\n  box-shadow: 0 0 1em #000;\n}\n.info {\n  padding-top: 5px;\n}\n.carta {\n  background-color: white;\n  height: 80px;\n  width: 50px;\n  border-radius: 5px;\n  padding: 15px;\n  box-sizing: content-box;\n  position: relative;\n  float: left;\n  margin: 20px -10px 3px -30px;\n  box-shadow: inset 0 0 0.5em gold;\n}\n.cartaPostion {\n  margin-left: 40px;\n}\n.naip-area {\n  height: 45px;\n  width: 110%;\n}\n.naip-area:nth-child(2) {\n  transform: rotate(180deg);\n}\n.naip-number, .naip-sign {\n  display: block;\n  width: 15px;\n  text-align: center;\n}\n.naip-number {\n  font-size: 15px;\n  font-family: \"  \", serif;\n  font-weight: 400;\n  width: 17px;\n}\n.naip-sign {\n  font-size: 20px;\n}\n.carta-miolo {\n  position: absolute;\n  top: 0;\n  width: 50px;\n}\n/*--------- Miolo 1 -----------*/\n.miolo-1 {\n  text-align: center;\n  line-height: 120px;\n  font-size: 25px;\n}\n.hearts {\n  color: red;\n}\n.cartaVerso {\n  background-color: white;\n  height: 100px;\n  width: 70px;\n  border-radius: 5px;\n  padding: 5px;\n  box-sizing: content-box;\n  position: relative;\n  float: left;\n  margin: 20px -10px 3px -30px;\n  box-shadow: inset 0 0 0.5em gold;\n}\n.balao2 {\n  background: white;\n  border-radius: 15px;\n  width: 42px;\n  height: 32px;\n  padding-left: 13px;\n  padding-top: 10px;\n  font-weight: bold;\n  position: relative;\n}\n.balao2:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-left: 20px solid transparent;\n  border-right: 12px solid transparent;\n  border-top: 10px solid white;\n  bottom: -6px;\n  left: 11%;\n}\n.positionBalao {\n  z-index: 100;\n  position: absolute;\n  top: 10px;\n  left: 5px;\n}\nion-fab {\n  padding-top: 15px;\n}\nion-fab-list {\n  margin-top: 15px;\n}\n.fichasPosition {\n  padding-top: 150px;\n}\n.saldo {\n  background-color: black;\n  height: 70px;\n}\n.saldoPessoa {\n  padding: 25px;\n  text-align: center;\n}\n.apostaPessoa {\n  border-radius: 5px;\n  z-index: 100;\n  position: absolute;\n  top: 510px;\n  left: 43vw;\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n}\n.botaoFicha {\n  height: 100px;\n  --padding-end:0px;\n  --padding-start:0px;\n}\np {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUF1QkE7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXJCRjtBQXVCQTtFQUNFLFdBQUE7QUFwQkYiLCJmaWxlIjoiZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIFxuICAgIGNvbG9yOiAjOGM4YzhjO1xuICBcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG4gIFxuICAvLy9JbWFnZW0gZGUgRnVuZG9cbiAgLmltZ0NlbnRlciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2Vucy9mdW5kbzIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBpb24tZ3JpZHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlbUFwb3N0YXN7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgfVxuICBcbiAgLy8vIGJvdMOjbyBkb2JyYXJcbiAgXG4gIC5kb2JyYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgLy8gLS1ib3JkZXItcmFkaXVzOjEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiNmMmY2Nzk7XG4gICAgLS1jb2xvcjojMDAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDtcbiAgfVxuXG4gIC5jb21lw6dhcntcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NjJweDsgIFxuICAgIC8vIC0tYm9yZGVyLXJhZGl1czoxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tYmFja2dyb3VuZDojZjJmNjc5O1xuICAgIC0tY29sb3I6IzAwMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDA7XG5cbiAgfVxuICAvL2JvdMOjbyBwYXJhclxuICAucGFyYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3NXZ3O1xuICAgIC8vIHRvcDogMTUwcHg7XG4gICAgLy8gLS1ib3JkZXItcmFkaXVzOjUwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6I2YyZjY3OTtcbiAgICAtLWNvbG9yOiMwMDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwO1xuICB9XG4gIC8vYm90YW8gbWFpcyB1bWEgY2FydGFcbiAgLm1haXNVbWEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3MHZ3O1xuICAgIHRvcDogNDBweDsgIFxuICAgIGJvdHRvbTogIDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiNmMmY2Nzk7XG4gICAgLS1jb2xvcjojMDAwO1xuICAgXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwO1xuICAgIC8vIC0tYm9yZGVyLXJhZGl1czo1MCVcbiAgfVxuICAvLyBib3TDo28gaW5mb1xuICAuaW5mb3tcbiAgICBwYWRkaW5nLXRvcDogIDVweDtcbiAgfVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgXG4gIC5jYXJ0YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDIwcHggLTEwcHggM3B4IC0zMHB4O1xuICAgIC8vIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMC41ZW0gZ29sZDtcbiAgfVxuXG4gIC5jYXJ0YVBvc3Rpb257XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICBcbiAgXG4gIC5uYWlwLWFyZWEge1xuICAgIGhlaWdodDo0NXB4O1xuICAgIHdpZHRoOiAxMTAlO1xuICB9XG4gIFxuICAubmFpcC1hcmVhOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIFxuICAubmFpcC1udW1iZXIsIC5uYWlwLXNpZ24ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubmFpcC1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCIgIFwiLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHdpZHRoOiAxN3B4O1xuICB9XG4gIFxuICAubmFpcC1zaWduIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJ0YS1taW9sbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0gTWlvbG8gMSAtLS0tLS0tLS0tLSovXG4gIC5taW9sby0xIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAvLyBsZWZ0OiAyNXB4O1xuICB9XG4gIFxuICAuaGVhcnRze1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmNhcnRhVmVyc297XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDIwcHggLTEwcHggM3B4IC0zMHB4O1xuICAgIC8vIGJveC1zaGFkb3c6IC0xcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAuNWVtIGdvbGQ7XG4gICAgXG4gIH1cblxuICAvLyBjcmlhw6fDo28gZG8gYmFsw6NvXG4gIC5iYWxhbzJ7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHR3aWR0aDogNDJweDtcblx0aGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbGFvMjphZnRlcntcblxuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgd2hpdGU7XG4gIGJvdHRvbTogLTZweDtcbiAgbGVmdDogMTElO1xufVxuLnBvc2l0aW9uQmFsYW97XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogNXB4O1xufVxuaW9uLWZhYntcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5pb24tZmFiLWxpc3R7XG4gbWFyZ2luLXRvcDogMTVweDtcbn1cblxuXG4vLy8gRmljaGFzIFxcXFxcXFxcXFxcblxuLmZpY2hhc1Bvc2l0aW9ue1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbi8vIERpbmhlaXJvIFxcXFxcblxuLnNhbGRve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uc2FsZG9QZXNzb2F7XG4gIFxuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXBvc3RhUGVzc29he1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUxMHB4O1xuICBsZWZ0OiA0M3Z3O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcblxufVxuLmJvdGFvRmljaGF7XG5cbiAgaGVpZ2h0OiAxMDBweDtcbiAgLS1wYWRkaW5nLWVuZDowcHg7XG4gIC0tcGFkZGluZy1zdGFydDowcHg7XG59XG5we1xuICBtYXJnaW46IDVweDtcbn1cblxuIl19 */");

/***/ }),

/***/ 6255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"imgCenter\">\n    <!-- <ion-title>\n      Blackjack\n    </ion-title> -->\n\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"dark\" size=\"small\" mode=\"ios\" translucent=\"true\">\n        <ion-icon name=\"settings\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"start\">\n        <ion-fab-button routerLink=\"/home\">\n\n          <img src=\"../../assets/Imagens/fichavoltar.png\" />\n        </ion-fab-button>\n        <!-- <ion-fab-button>\n\n          <img src=\"../../assets/Imagens/fichasair.png\" />\n        </ion-fab-button> -->\n\n      </ion-fab-list>\n    </ion-fab>\n    <div>\n      <ion-button fill=\"clear\" routerLink=\"/info\" height=\"40px\" width=\"40px\">\n        <ion-icon name=\"information-circle-outline\" color=\"success\" height=\"40px\" width=\"40px\"></ion-icon>\n      </ion-button>\n    </div>\n    <ion-grid>\n      <ion-row  *ngIf=\"!comecarGame\" class=\"semApostas\">\n\n      </ion-row>\n      <ion-row *ngIf=\"comecarGame\">\n        <ion-col size=\"12\">\n          <ion-title>Mesa</ion-title>\n          <div class=\"positionBalao\" *ngIf=\"desabilita\">\n            <div class=\"balao2\"> {{saldoMaquina}}</div>\n          </div>\n          <div *ngFor=\"let maq of maquina; index as i\">\n            <!-- carta -->\n            <div class=\"cartaPostion\">\n              <div class=\"carta\" *ngIf=\"maq[2] != true\">\n                <div class=\"naip-area naip-top\">\n                  <span class=\"naip-number\" [class.hearts]=\"['&hearts', '&diams'].includes(maq[1])\">{{maq[0]}}</span>\n\n                </div>\n\n                <div class=\"naip-area naip-bottom\">\n                  <span class=\"naip-number\" [class.hearts]=\"['&hearts', '&diams'].includes(maq[1])\">{{maq[0]}}</span>\n\n                </div>\n\n                <div class=\"carta-miolo miolo-1\">\n                  <span *ngIf=\"maq[1] === '&clubs'\">&clubs;</span>\n                  <span [ngClass]=\"{'hearts':maq[1]}\" *ngIf=\"maq[1] === '&hearts'\">&hearts;</span>\n                  <span *ngIf=\"maq[1] === '&spades'\">&spades;</span>\n                  <span [ngClass]=\"{'hearts':maq[1]}\" *ngIf=\"maq[1] === '&diams'\">&diams;</span>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"maq[2] == true \">\n              <img src=\"../../assets/Imagens/cartaV.png\" class=\"cartaVerso\" />\n\n            </div>\n\n\n\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-title>Você</ion-title>\n          <div class=\"positionBalao\">\n            <div class=\"balao2\"> {{saldoPessoa}}</div>\n          </div>\n  \n          <!-- <ion-badge color=\"success\" mode=\"ios\">{{saldoPessoa}}</ion-badge> -->\n          <div *ngFor=\"let pes of pessoa\">\n            <!-- carta -->\n            <div class=\"cartaPostion\">\n              <div class=\"carta\">\n                <div class=\"naip-area naip-top\">\n                  <span class=\"naip-number\" [class.hearts]=\"['&hearts', '&diams'].includes(pes[1])\">{{pes[0]}}</span>\n                </div>\n\n                <div class=\"naip-area naip-bottom\">\n                  <span class=\"naip-number\" [class.hearts]=\"['&hearts', '&diams'].includes(pes[1])\">{{pes[0]}}</span>\n                </div>\n\n                <div class=\"carta-miolo miolo-1\">\n                  <span *ngIf=\"pes[1] === '&clubs'\">&clubs;</span>\n                  <span [ngClass]=\"{'hearts':pes[1]}\" *ngIf=\"pes[1] === '&hearts'\">&hearts;</span>\n                  <span *ngIf=\"pes[1] === '&spades'\">&spades;</span>\n                  <span [ngClass]=\"{'hearts':pes[1]}\" *ngIf=\"pes[1] === '&diams'\">&diams;</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button class=\"dobrar\"  (click)=\"dobrarAposta()\" [disabled]=\"desabilita \">\n            Dobrar\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button class=\"começar\"  (click)=\"comecar()\" [disabled]=\"comecarGame\" >\n           Começar\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button class=\"parar\"  (click)=\"goToMaquina()\" [disabled]=\"desabilita\">\n            Parar\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button class=\"maisUma\"  (click)=\"maisUma()\" [disabled]=\"desabilita\">\n            Mais Uma\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"apostaPessoa\" *ngIf=\"apostaPessoa !==0\">\n        <p>Aposta </p> \n        <p> R$ {{apostaPessoa}}</p>\n\n      </div>\n    \n      <ion-row class=\"fichasPosition\">\n        <ion-col size=\"3\">\n          <ion-button class=\"botaoFicha\" fill=\"clear\" [disabled]=\"desabilitaAposta\">\n            <img src=\"../../assets/Imagens/ficha1.png\" (click)=\"aposta('1')\" />\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"botaoFicha\" fill=\"clear\" [disabled]=\"desabilitaAposta\">\n            <img src=\"../../assets/Imagens/ficha5.png\" (click)=\"aposta('5')\" />\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"botaoFicha\" fill=\"clear\" [disabled]=\"desabilitaAposta\">\n            <img src=\"../../assets/Imagens/ficha25.png\" (click)=\"aposta('25')\" />\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"botaoFicha\" fill=\"clear\" [disabled]=\"desabilitaAposta\">\n            <img src=\"../../assets/Imagens/ficha100.png\" (click)=\"aposta('100')\" />\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=12>\n          <div class=\"saldo\">\n            <ion-title class=\"saldoPessoa\"> R${{dinheiroPessoa}}</ion-title>\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_game_game_module_ts.js.map