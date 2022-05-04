"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_play-game_play-game_module_ts"],{

/***/ 4563:
/*!*******************************************************!*\
  !*** ./src/app/play-game/play-game-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageRoutingModule": () => (/* binding */ PlayGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game.page */ 4125);




const routes = [
    {
        path: '',
        component: _play_game_page__WEBPACK_IMPORTED_MODULE_0__.PlayGamePage
    }
];
let PlayGamePageRoutingModule = class PlayGamePageRoutingModule {
};
PlayGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayGamePageRoutingModule);



/***/ }),

/***/ 7156:
/*!***********************************************!*\
  !*** ./src/app/play-game/play-game.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageModule": () => (/* binding */ PlayGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game-routing.module */ 4563);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-game.page */ 4125);







let PlayGamePageModule = class PlayGamePageModule {
};
PlayGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayGamePageRoutingModule
        ],
        declarations: [_play_game_page__WEBPACK_IMPORTED_MODULE_1__.PlayGamePage]
    })
], PlayGamePageModule);



/***/ }),

/***/ 4125:
/*!*********************************************!*\
  !*** ./src/app/play-game/play-game.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePage": () => (/* binding */ PlayGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _play_game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game.page.html?ngResource */ 2972);
/* harmony import */ var _play_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-game.page.scss?ngResource */ 5800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ 6299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);






let PlayGamePage = class PlayGamePage {
    constructor(gameSvc, routerSvc) {
        this.gameSvc = gameSvc;
        this.routerSvc = routerSvc;
        this.rulesNumber = 0;
        this.goalsNumber = 0;
        this.keepersNumber = 0;
        this.creepersNumber = 0;
        this.winOrLose = "win";
        this.endGame = () => {
            // add new game result
            this.gameSvc.addGameResult({
                start: this.gameSvc.currentGame.start,
                end: new Date().toISOString(),
                gamesWon: this.winOrLose === "win",
                gamesLost: this.winOrLose === "lose",
                numberOfRules: this.rulesNumber,
                numberOfGoals: this.goalsNumber,
                numberOfKeepers: this.keepersNumber,
                numberOfCreepers: this.creepersNumber
            });
            // navigate to stats page
            this.routerSvc.navigateByUrl("/stats");
        };
        this.quitGame = () => {
            // naviate to home screen
            this.routerSvc.navigateByUrl("/home");
        };
    }
    rulesIncrement() {
        this.rulesNumber++;
    }
    goalsIncrement() {
        this.goalsNumber++;
    }
    keepersIncrement() {
        this.keepersNumber++;
    }
    creepersIncrement() {
        this.creepersNumber++;
    }
    rulesDecrement() {
        if (this.rulesNumber > 0) {
            this.rulesNumber--;
        }
    }
    goalsDecrement() {
        if (this.goalsNumber > 0) {
            this.goalsNumber--;
        }
    }
    keepersDecrement() {
        if (this.keepersNumber > 0) {
            this.keepersNumber--;
        }
    }
    creepersDecrement() {
        if (this.creepersNumber > 0) {
            this.creepersNumber--;
        }
    }
    ngOnInit() {
    }
};
PlayGamePage.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PlayGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-play-game',
        template: _play_game_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_play_game_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlayGamePage);



/***/ }),

/***/ 5800:
/*!**********************************************************!*\
  !*** ./src/app/play-game/play-game.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "h2 {\n  margin-top: 10px;\n}\n\nion-button {\n  margin: 1.5em;\n  width: 135px;\n}\n\nion-col {\n  display: inline-flex;\n  align-items: center;\n}\n\nion-grid {\n  padding-top: 1.5em;\n  padding-bottom: 0.5em;\n}\n\nion-label {\n  margin-left: 1.1em;\n}\n\nion-row {\n  margin-left: 2em;\n}\n\n.label {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.2em;\n}\n\n.number {\n  font-size: 24px;\n  padding-left: 1.1em;\n  padding-right: 1.1em;\n}\n\n.totalPerGame {\n  text-align: center;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXktZ2FtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJwbGF5LWdhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMS41ZW07XHJcbiAgd2lkdGg6IDEzNXB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjFlbTtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuMWVtO1xyXG59XHJcblxyXG4udG90YWxQZXJHYW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 2972:
/*!**********************************************************!*\
  !*** ./src/app/play-game/play-game.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Batman <span class=\"fluxx-title\">Fluxx</span></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <h1>Game Results</h1>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col>\r\n          <ion-icon name=\"remove-circle\" size=\"large\" color=\"favorite\" (click)=\"rulesDecrement()\"></ion-icon>\r\n          <span class=\"number\">{{ rulesNumber }}</span>\r\n          <ion-icon name=\"add-circle\" size=\"large\" color=\"favorite\" (click)=\"rulesIncrement()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2># of Rules</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col>\r\n          <ion-icon name=\"remove-circle\" size=\"large\" color=\"favorite\" (click)=\"goalsDecrement()\"></ion-icon>\r\n          <span class=\"number\">{{ goalsNumber }}</span>\r\n          <ion-icon name=\"add-circle\" size=\"large\" color=\"favorite\" (click)=\"goalsIncrement()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2># of Goals</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col>\r\n          <ion-icon name=\"remove-circle\" size=\"large\" color=\"favorite\" (click)=\"keepersDecrement()\"></ion-icon>\r\n          <span class=\"number\">{{ keepersNumber }}</span>\r\n          <ion-icon name=\"add-circle\" size=\"large\" color=\"favorite\" (click)=\"keepersIncrement()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2># of Keepers</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col>\r\n          <ion-icon name=\"remove-circle\" size=\"large\" color=\"favorite\" (click)=\"creepersDecrement()\"></ion-icon>\r\n          <span class=\"number\">{{ creepersNumber }}</span>\r\n          <ion-icon name=\"add-circle\" size=\"large\" color=\"favorite\" (click)=\"creepersIncrement()\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h2># of Creepers</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <p class=\"totalPerGame\">Total # per game</p>\r\n\r\n    <ion-list>\r\n      <ion-radio-group [(ngModel)]=\"winOrLose\">\r\n        <ion-item>\r\n          <ion-label><span class=\"label\">Win</span></ion-label>\r\n          <ion-radio value=\"win\" slot=\"start\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><span class=\"label\">Lose</span></ion-label>\r\n          <ion-radio value=\"lose\" slot=\"start\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <div class=\"ion-text-center ion-padding-top\">\r\n      <ion-button (click)=\"endGame()\" color=\"favorite\">End Game</ion-button>\r\n      <ion-button (click)=\"quitGame()\" color=\"favorite\">Quit</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_play-game_play-game_module_ts.js.map