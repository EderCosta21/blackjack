(self["webpackChunkblackjack_eder"] = self["webpackChunkblackjack_eder"] || []).push([["src_app_info_info_module_ts"],{

/***/ 2215:
/*!*********************************************!*\
  !*** ./src/app/info/info-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageRoutingModule": () => (/* binding */ InfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 5726);




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ 3056:
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-routing.module */ 2215);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page */ 5726);







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _info_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoPageRoutingModule
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage]
    })
], InfoPageModule);



/***/ }),

/***/ 5726:
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./info.page.html */ 383);
/* harmony import */ var _info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.page.scss */ 5195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage.ctorParameters = () => [];
InfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-info',
        template: _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InfoPage);



/***/ }),

/***/ 5195:
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h3 {\n  margin-top: 30px;\n  font-weight: bold;\n  text-align: center;\n}\n\np, h3, ul {\n  color: white;\n}\n\nion-toolbar {\n  --background: #032817;\n}\n\nion-toolbar ion-title {\n  text-align: center;\n  color: white;\n}\n\nion-content {\n  --background:#085d33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDRSxvQkFBQTtBQUFGIiwiZmlsZSI6ImluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbnAsaDMsdWx7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMzI4MTc7XG5cbiAgaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiMwODVkMzM7XG59XG4iXX0= */");

/***/ }),

/***/ 383:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" text=\"\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Regras básicas do blackjack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3> Regras Básicas </h3>\n  <p>A Cada rodada de black Jack, você deverá tentar construir uma mão com um valor maior do que a máquina, sem a soma\n    das cartas passar de 21.\n    Sendo os valores das cartas: </p>\n  <ul style=\"text-align: justify;\">\n    <li> A: podem contar como 11 ou 1;</li>\n    <li> Q, J, K: valem 10;</li>\n    <li> 2 a 10: valem o numero correspondente a carta;</li>\n  </ul>\n  <h3>Como Jogar</h3>\n  <p> Para iniciar a rodada, o primeiro passo é fazer uma aposta, para isso você deverá selecionar as fichas na parte\n    inferior de acordo com o valor em que quer apostar. Depois de fazer a sua aposta, pressione o botao de negociação\n    para começar.</p>\n\n  <h3> Mais uma </h3>\n  <p> Selecione esta opção quando desejar solicitar outra carta. Você pode solicitar quantas cartas quiser, porém caso ultrapassar a soma de 21, você perderá a rodada.</p>\n\n  <h3>Parar</h3>\n  <p> Quando visualizar um bom jogo e decidir que não deseja outra carta, poderá parar seu jogo e deixar com que \n    a máquina faça a sua vez.</p>\n\n  <h3>BlackJack</h3>\n  <p>Qualquer mão contendo uma carta A e uma das cartas Q, J ou K é chamada de Black Jack. Se você faz um black Jack, vence a rodada. Se os dois tiver um BlackJack é empate</p>\n  <h3>Dobrar Aposta</h3>\n  <p> Se uma mão tiver 2 cartas, você pode usar esta opção para dobrar sua aposta e receber mais uma carta por sua mão.</p>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_info_info_module_ts.js.map