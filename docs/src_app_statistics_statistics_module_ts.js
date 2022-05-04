"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_statistics_statistics_module_ts"],{

/***/ 5962:
/*!*********************************************************!*\
  !*** ./src/app/statistics/statistics-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageRoutingModule": () => (/* binding */ StatisticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page */ 6024);




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_0__.StatisticsPage
    }
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ 5452:
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPageModule": () => (/* binding */ StatisticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics-routing.module */ 5962);
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page */ 6024);







let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _statistics_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatisticsPageRoutingModule
        ],
        declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_1__.StatisticsPage]
    })
], StatisticsPageModule);



/***/ }),

/***/ 6024:
/*!***********************************************!*\
  !*** ./src/app/statistics/statistics.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsPage": () => (/* binding */ StatisticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.page.html?ngResource */ 6390);
/* harmony import */ var _statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.page.scss?ngResource */ 2489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ 6299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);






let StatisticsPage = class StatisticsPage {
    constructor(gameSvc, routerSvc) {
        this.gameSvc = gameSvc;
        this.routerSvc = routerSvc;
        this.shortestGame = "";
        this.longestGame = "";
        this.avgTurns = "";
        this.avgGoals = "";
        this.avgKeepers = "";
        this.avgCreepers = "";
        this.gamesWon = "";
        this.gamesLost = "";
        this.playAgain = () => {
            // initialize the time stamp
            this.gameSvc.currentGame.start = new Date().toISOString();
            // navigate to play screen
            this.routerSvc.navigateByUrl("/play");
        };
        this.homeButton = () => {
            this.routerSvc.navigateByUrl("/home");
        };
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.shortestGame = (this.gameSvc.calculateShortestGame() / 1000 / 60).toFixed(2);
        this.longestGame = (this.gameSvc.calculateLongestGame() / 1000 / 60).toFixed(2);
        this.avgTurns = this.gameSvc.calculateAvergeNumberOfRules().toFixed(2);
        this.avgGoals = this.gameSvc.calculateAvergeNumberOfGoals().toFixed(2);
        this.avgKeepers = this.gameSvc.calculateAvergeNumberOfKeepers().toFixed(2);
        this.avgCreepers = this.gameSvc.calculateAvergeNumberOfCreepers().toFixed(2);
        this.gamesWon = this.gameSvc.calculateGamesWon().toFixed(0);
        this.gamesLost = this.gameSvc.calculateGamesLost().toFixed(0);
    }
};
StatisticsPage.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
StatisticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-statistics',
        template: _statistics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_statistics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatisticsPage);



/***/ }),

/***/ 2489:
/*!************************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  font-size: 1.1em;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-weight: 300;\n}\n\nion-card-content {\n  font-size: 32px;\n  padding-bottom: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\nion-card {\n  text-align: center;\n  box-shadow: 5px 5px 5px #bca429;\n  border-radius: 20px;\n}\n\nsmall {\n  font-size: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICNiY2E0Mjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogNTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6390:
/*!************************************************************!*\
  !*** ./src/app/statistics/statistics.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Batman <span class=\"fluxx-title\">Fluxx</span></ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\" (click)=\"homeButton()\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h1>Statistics</h1>\r\n  </div>\r\n\r\n  <!-- <h4>Total Games Played: {{ gameSvc.gameResults.length }}</h4>\"-->\r\n\r\n  <ion-grid>\r\n    <!-- <ion-row class=\"ion-align-items-center ion-justify-content-center\">\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ percentWon }}%\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Winning Percentage</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            0.0%\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Losing Percentage</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ gamesWon }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Games Won</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ gamesLost }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Games Lost</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ shortestGame }} <small>min</small>\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Shortest Game</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ longestGame }} <small>min</small>\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Longest Game</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ avgTurns }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Average # of Rules</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ avgGoals }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Average # of Goals</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ avgKeepers }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Average # of Keepers</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-card color=\"new\">\r\n          <ion-card-content>\r\n            {{ avgCreepers }}\r\n          </ion-card-content>\r\n\r\n          <ion-card-header>\r\n            <ion-card-title>Average # of Creepers</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-text-center ion-padding-top\">\r\n    <ion-button (click)=\"playAgain()\" color=\"favorite\">New Game</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_statistics_statistics_module_ts.js.map