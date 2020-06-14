(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    width:100%;\r\n    height: 100%;\r\n    background-image: url('1.jpg');\r\n    background-size:100%;\r\n    position: absolute;\r\n    margin-left:-16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy8xLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-learning';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _regist_regist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regist/regist.component */ "./src/app/regist/regist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quick-start/quick-start.component */ "./src/app/quick-start/quick-start.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./games/game-details/game-details.component */ "./src/app/games/game-details/game-details.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _regist_regist_component__WEBPACK_IMPORTED_MODULE_7__["RegistComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _guide_guide_component__WEBPACK_IMPORTED_MODULE_10__["GuideComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_12__["SuccessComponent"],
                _quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_13__["QuickStartComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_14__["GamesComponent"],
                _games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_15__["GameDetailsComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_16__["PersonalComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_11__["StartComponent"] },
                    { path: 'guidepage', component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_10__["GuideComponent"] },
                    { path: 'successpage', component: _success_success_component__WEBPACK_IMPORTED_MODULE_12__["SuccessComponent"] },
                    { path: 'registpage', component: _regist_regist_component__WEBPACK_IMPORTED_MODULE_7__["RegistComponent"] },
                    { path: 'loginpage', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                    { path: 'quickStart', component: _quick_start_quick_start_component__WEBPACK_IMPORTED_MODULE_13__["QuickStartComponent"] },
                    { path: 'personalpage', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_16__["PersonalComponent"] },
                    { path: 'gamesList', component: _games_games_component__WEBPACK_IMPORTED_MODULE_14__["GamesComponent"] },
                    { path: 'gamesList/:gameId', component: _games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_15__["GameDetailsComponent"] }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games/game-details/game-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/games/game-details/game-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    width: 100%;\r\n    height: 1024px;\r\n    background-color: white;\r\n    /*position: relative;*/\r\n    background-size: 100%;\r\n}\r\n\r\n.left-div{\r\n    width: 35%;\r\n    height: 100%;\r\n    /*position: absolute;*/\r\n    padding-left: 20px;\r\n    background-color: #eeeeee;\r\n    border: #616161 solid 1px;\r\n    background-size: 100%;\r\n}\r\n\r\n.right-div{\r\n    width: 65%;\r\n    height: 100%;\r\n    /*position: absolute;*/\r\n    border: #616161 solid 1px;\r\n    background-size: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZS1kZXRhaWxzL2dhbWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9nYW1lLWRldGFpbHMvZ2FtZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWZ0LWRpdntcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIGJvcmRlcjogIzYxNjE2MSBzb2xpZCAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuLnJpZ2h0LWRpdntcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4gICAgYm9yZGVyOiAjNjE2MTYxIHNvbGlkIDFweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/games/game-details/game-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/games/game-details/game-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>SimpleBlockly</title>\r\n\r\n\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n<!-- 1.先定义页面的html -->\r\n<div id=\"blocklyDiv\" style=\"float:left;height: 480px;width:600px;\">\r\n</div>\r\n<div id=\"display\" style=\"float:left;border:3px solid #F00;height: 480px;width:600px;\">\r\n  <div style=\"float:left;border:3px solid #000;margin-left:50px;margin-top:50px;height: 300px;width:50px;\">\r\n    <img  id=\"a\" src=\"../../assets/game/a.png\" style=\"position:relative;left:10px;top:10px\">\r\n    <img  id=\"b\" src=\"../../assets/game/b.png\" style=\"position:relative;left:10px;top:30px\">\r\n    <img  id=\"c\" src=\"../../assets/game/c.png\" style=\"position:relative;left:10px;top:50px\">\r\n  </div>\r\n\r\n\r\n  <div style=\"float:right;border:3px solid #000;margin-right:50px;margin-top:50px;height: 300px;width:50px;\">\r\n\r\n  </div>\r\n\r\n  <img id=\"people\" src=\"../../assets/game/1.jpg\" style=\"width:50px;height:50px;position:relative;left:150px;top:200px\">\r\n</div>\r\n<!-- 2.定义xml文件 -->\r\n<!-- 用来定义工具栏-->\r\n<xml id=\"toolbox\" style=\"display: none\">\r\n  <category name=\"基本动作\"  colour=\"%{BKY_PROCEDURES_HUE}\">\r\n    <block type=\"stage1_get\"></block>\r\n    <block type=\"stage1_set\"></block>\r\n  </category>\r\n  <sep></sep>\r\n</xml>\r\n\r\n<video id=\"video\" width=\"640\" height=\"480\" style=\"background:#000;\" autoplay></video>\r\n<canvas   id=\"canvas\" width=\"320\" height=\"320\"></canvas>\r\n<canvas  style=\"display:none\" id=\"canvas_opponent\" width=\"320\" height=\"320\"></canvas>\r\n<input type=\"text\" id=\"roomid\">\r\n<button (click)=\"start()\">进入房间</button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<button  (click)=\"compile()\">运行</button>\r\n<button  onclick=\"reset()\">重置</button>\r\n\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/games/game-details/game-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/games/game-details/game-details.component.ts ***!
  \**************************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameDetailsComponent = /** @class */ (function () {
    function GameDetailsComponent() {
    }
    GameDetailsComponent.prototype.ngOnInit = function () {
        this.workspace = Blockly.inject('blocklyDiv', {
            media: '../../assets/blockly/media/',
            toolbox: document.getElementById('toolbox'),
            //放大，缩小，还原和垃圾箱位置
            horizontalLayout: false,
            toolboxPosition: 'start',
            comments: false,
            disable: false,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1,
                maxScale: 1.5,
                minScale: 0.8,
                scaleSpeed: 1.2
            },
            trashcan: true
        });
        Blockly.Blocks['stage1_get'] = {
            init: function () {
                this.appendDummyInput().appendField("从左边拿取排在第一的邮件");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['stage1_get'] = function (block) {
            var code = 'move_to_pick();\n';
            return code;
        };
        Blockly.Blocks['stage1_set'] = {
            init: function () {
                this.appendDummyInput().appendField("将拿到的邮件放在右边");
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setColour(255);
                this.setTooltip("");
                this.setHelpUrl("");
            }
        };
        Blockly.JavaScript['stage1_set'] = function (block) {
            var code = 'move_to_down();\n';
            return code;
        };
    };
    GameDetailsComponent.prototype.compile = function () {
        clear();
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        code = code + "check();\n";
        //  alert(code);
        eval(code);
    };
    GameDetailsComponent.prototype.start = function () {
        var video = document.getElementById("video");
        var canvas = document.getElementById("canvas"), context = canvas.getContext("2d");
        var canvas_opponent = document.getElementById("canvas_opponent"), context_opponent = canvas_opponent.getContext("2d");
        var roomid = document.getElementById("roomid").value;
        var getUserMedia = window.navigator['getUserMedia'] || window.navigator['webkitGetUserMedia '] || window.navigator['mozGetUserMedia'] || window.navigator['msGetUserMedia'];
        var options = ({
            "video": true,
            "audio": true
        });
        var host = 'localhost';
        var port = 8888;
        var url = 'ws://' + host + ':' + port + '/';
        var w;
        getUserMedia.call(navigator, options, function (stream) {
            video.srcObject = stream;
            video.play();
            w = new WebSocket(url);
            w.onopen = function () {
                var data = {
                    "type": "init",
                    "roomid": roomid
                };
                w.send(JSON.stringify(data));
                sendImg();
            };
            w.onmessage = function (e) {
                console.log(e);
                sendImg();
            };
        }, function () {
            console.log("video error");
        });
        function sendImg() {
            context.drawImage(video, 0, 0, 320, 320);
            var imgData = canvas.toDataURL();
            var data = {
                msg: imgData,
                roomid: roomid
            };
            w.send(JSON.stringify(data));
        }
    };
    GameDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-details',
            template: __webpack_require__(/*! ./game-details.component.html */ "./src/app/games/game-details/game-details.component.html"),
            styles: [__webpack_require__(/*! ./game-details.component.css */ "./src/app/games/game-details/game-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameDetailsComponent);
    return GameDetailsComponent;
}());



/***/ }),

/***/ "./src/app/games/game-list.ts":
/*!************************************!*\
  !*** ./src/app/games/game-list.ts ***!
  \************************************/
/*! exports provided: games */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "games", function() { return games; });
var games = [
    {
        id: 1,
        name: '关卡1',
        type: '2D',
        difficulty: '简单',
    },
    {
        id: 2,
        name: '关卡2',
        type: '2D',
        difficulty: '简单',
    },
    {
        id: 3,
        name: '关卡3',
        type: '2D',
        difficulty: '中等',
    },
    {
        id: 4,
        name: '关卡4',
        type: '3D',
        difficulty: '困难',
    },
    {
        id: 5,
        name: '关卡5',
        type: '3D',
        difficulty: '困难',
    },
];


/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border-collapse: collapse;\r\n    background-color: #ffffff;\r\n    border-radius: 10px;\r\n    height: 15px;\r\n    width: 700px;\r\n    text-align: center;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    margin-left: 80%;\r\n    margin-top: 25%;\r\n\r\n}\r\n\r\ntr{\r\n    height: 50px;\r\n}\r\n\r\ntd{\r\n    border-top: #eeeeee solid 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsZ0JBQWdCOztDQUVuQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9nYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuXHJcbn1cclxuXHJcbnRye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbnRke1xyXG4gICAgYm9yZGVyLXRvcDogI2VlZWVlZSBzb2xpZCAycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class = \"list\">\r\n  <tr>\r\n    <th>关卡序号</th>\r\n    <th>游戏名称</th>\r\n    <th>游戏类型</th>\r\n    <th>难度</th>\r\n  </tr>\r\n  <tr *ngFor=\"let game of games; index as gameId\" [routerLink]=\"['/gamesList',gameId]\" [title] = \"game.name\">\r\n    <td>{{game.id}}</td>\r\n    <td>{{game.name}}</td>\r\n    <td>{{game.type}}</td>\r\n    <td>{{game.difficulty}}</td>\r\n  </tr>\r\n</table>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-list */ "./src/app/games/game-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
        this.games = _game_list__WEBPACK_IMPORTED_MODULE_1__["games"];
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/guide/guide.component.css":
/*!*******************************************!*\
  !*** ./src/app/guide/guide.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header\r\n{\r\n    margin-left:600px;\r\n    margin-top:300px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGUvZ3VpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ3VpZGUvZ3VpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6NjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMwMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/guide/guide.component.html":
/*!********************************************!*\
  !*** ./src/app/guide/guide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\r\n    <button [routerLink]=\"['/loginpage']\">点击登录</button>\r\n    <button [routerLink]=\"['/registpage']\">点击注册</button>\r\n    <button (click)=\"test()\">测试</button>\r\n</div>"

/***/ }),

/***/ "./src/app/guide/guide.component.ts":
/*!******************************************!*\
  !*** ./src/app/guide/guide.component.ts ***!
  \******************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent.prototype.test = function () {
        localStorage.setItem("login", "true");
    };
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.css */ "./src/app/guide/guide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">\r\n  <h1 (click)=\"test()\">Happy Coding</h1>\r\n</a>\r\n<div style=\"width:800px\">\r\n  <a  [routerLink]=\"['/']\"  class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>主页</a>\r\n  <a  [routerLink]=\"['/gamesList']\" class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>进入游戏</a>\r\n  <a  class=\"button fancy-button\" style=\"margin-right:50px\" [routerLink]=\"['/quickStart']\"><i class=\"material-icons\">shopping_cart</i>新手教程</a>\r\n\r\n  <a  [routerLink]=\"['/personalpage']\" *ngIf=\"login==true\" class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>个人信息</a>\r\n  <a  *ngIf=\"login==true\" (click)=\"checkout()\" class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>登出</a>\r\n\r\n  <a  [routerLink]=\"['/loginpage']\" *ngIf=\"login==false\" class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>登录</a>\r\n  <a  [routerLink]=\"['/registpage']\" *ngIf=\"login==false\" class=\"button fancy-button\" style=\"margin-right:50px\"><i class=\"material-icons\">shopping_cart</i>注册</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.login = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.login = Boolean(localStorage.getItem("login"));
    };
    HeaderComponent.prototype.checkout = function () {
        alert("成功退出登录");
        localStorage.removeItem("login");
        localStorage.removeItem("username");
        window.open('/', '_self');
    };
    HeaderComponent.prototype.test = function () {
        localStorage.setItem("login", "true");
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    font-family:sans-serif;\r\n    background-size:cover;\r\n}\r\n.box{\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    /*实现块元素百分比下居中*/\r\n    width:450px;\r\n    padding:50px;\r\n    background: rgba(0,0,0,.8);\r\n    box-sizing:border-box;\r\n    box-shadow: 0px 15px 25px rgba(0,0,0,.5);\r\n    border-radius:15px;\r\n}\r\n.box h2{\r\n    margin:0 0 30px;\r\n    padding:0;\r\n    color: #fff;\r\n    text-align:center;\r\n}\r\n.box .inputbox{\r\n    position:relative;\r\n}\r\n.box .inputbox input{\r\n    width: 100%;\r\n    padding:10px 0;\r\n    font-size:16px;\r\n    color:#fff;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 30px;\r\n    border:none;\r\n    border-bottom: 1px solid #fff;\r\n    outline:none;\r\n    background: transparent;\r\n}\r\n.box .inputbox label{\r\n    position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n    padding:10px 0;\r\n    font-size: 16px;\r\n    color:#fff;\r\n    pointer-events:none;\r\n    transition:.5s;\r\n}\r\n.box .inputbox input:focus ~ label,\r\n.box .inputbox input:valid ~ label\r\n{\r\n    top:-18px;\r\n    left:0;\r\n    color:#03a9f4;\r\n    font-size:14px;\r\n}\r\n.box input[type=\"submit\"]\r\n{\r\n    background: transparent;\r\n    border:none;\r\n    outline:none;\r\n    font-size: 16px;\r\n    color:#fff;\r\n    background: #03a9f4;\r\n    padding:15px 20px;\r\n    cursor: pointer;\r\n    border-radius:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7QUFDRDs7O0lBR0ksVUFBVTtJQUNWLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG59XHJcbi5ib3h7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIC8q5a6e546w5Z2X5YWD57Sg55m+5YiG5q+U5LiL5bGF5LitKi9cclxuICAgIHdpZHRoOjQ1MHB4O1xyXG4gICAgcGFkZGluZzo1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAyNXB4IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcbi5ib3ggaDJ7XHJcbiAgICBtYXJnaW46MCAwIDMwcHg7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5ib3ggLmlucHV0Ym94e1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmJveCAuaW5wdXRib3ggaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJveCAuaW5wdXRib3ggbGFiZWx7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOi41cztcclxufVxyXG4uYm94IC5pbnB1dGJveCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4uYm94IC5pbnB1dGJveCBpbnB1dDp2YWxpZCB+IGxhYmVsXHJcbntcclxuICAgIHRvcDotMThweDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGNvbG9yOiMwM2E5ZjQ7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG4uYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1cclxue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDNhOWY0O1xyXG4gICAgcGFkZGluZzoxNXB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <link rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n<div class=\"box\">\r\n  <h2>Login</h2>\r\n\r\n    <div class=\"inputbox\">\r\n      <input  type=\"text\" [(ngModel)]=\"username\">\r\n      <label>Username</label>\r\n    </div>\r\n    <div class=\"inputbox\">\r\n      <input  type=\"password\" [(ngModel)]=\"password\">\r\n      <label>Password</label>\r\n    </div>\r\n    <button (click)=\"login()\">登录</button>\r\n    <br>\r\n    <br>\r\n    <span>No account?</span>&nbsp;&nbsp;&nbsp;<a [routerLink]=\"['/registpage']\">click here to create</a>\r\n\r\n</div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var url = "/login";
        var ajax_this = this;
        var name = this.username;
        var post_data = { "username": this.username, "password": this.password };
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            console.log(temp);
            var bol = temp['success'];
            localStorage.setItem("login", bol);
            if (bol) {
                localStorage.setItem("username", ajax_this.username);
                window.open('/', '_self');
            }
            else {
                alert("用户名或密码不正确");
            }
        }, function (err) {
            console.log(err['_body']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    width:100%;\r\n    height:auto;\r\n    background-size:100%;\r\n    position: absolute;\r\n    background-image: url('1.jpg');\r\n    background-repeat:repeat-y;\r\n}\r\n.left-div{\r\n    width:20%;\r\n    height:100%;\r\n    background-size:100%;\r\n    position: absolute;\r\n    padding-left: 20px;\r\n}\r\n.right-div{\r\n    width:80%;\r\n    height: 100%;\r\n    background-size:100%;\r\n\r\n    position: absolute;\r\n    margin-left: 20%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-bottom: 30px;\r\n}\r\n.nav {\r\n    overflow: hidden;\r\n    color:darkgrey;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: solid ;\r\n}\r\n.nav a{\r\n    float: left;\r\n    display: block;\r\n    width: 150px;\r\n    color: darkgrey;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n.nav a:hover{\r\n    background-color: gray;\r\n    color: black;\r\n}\r\n.list1 ul{\r\n    list-style-type: none;\r\n}\r\n.list1 li{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 4px 5px;\r\n}\r\ntable{\r\n    border-collapse: collapse;\r\n    background-color: #ffffff;\r\n    border-radius: 10px;\r\n    height: 15px;\r\n    width: 700px;\r\n    text-align: center;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n\r\n}\r\ntr{\r\n    height: 50px;\r\n}\r\ntd{\r\n    border-top: #eeeeee solid 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsK0JBQTZDO0lBQzdDLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7O0lBRXJCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0RBQWdEOztDQUVuRDtBQUVEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzdGF0aWMvYXNzZXRzLzEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteTtcclxufVxyXG4ubGVmdC1kaXZ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtZGl2e1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4ubmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjpkYXJrZ3JleTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgO1xyXG59XHJcbi5uYXYgYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm5hdiBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubGlzdDEgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmxpc3QxIGxpe1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xyXG59XHJcbnRhYmxle1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbnRye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbnRke1xyXG4gICAgYm9yZGVyLXRvcDogI2VlZWVlZSBzb2xpZCAycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"body\" >\r\n\r\n<div class=\"left-div\"></div>\r\n\r\n<div class=\"right-div\">\r\n    <div class=\"nav\">\r\n        <a (click)=\"setStepNum('1')\">个人信息</a>\r\n        <a (click)=\"setStepNum('2')\">游玩情况</a>\r\n        <a (click)=\"setStepNum('3')\">历史操作</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"stepNum=='1'\">\r\n       <div class=\"list1\" *ngFor=\"let account of accounts \" [title] = \"account.name\">\r\n           <ul>\r\n               <img style=\"display: inline;margin-right: 10px\" src=\"../../assets/personal/icon-psnl-1.JPG\">\r\n               <h2 style=\"color: black;display:inline\">用户名：{{account.name}}</h2>\r\n               <li>注册时间：{{account.rgstime}}</li>\r\n               <li>注册邮箱：{{account.email}}</li>\r\n           </ul>\r\n       </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"stepNum=='2'\">\r\n        <p>游戏进度面板</p>\r\n        <table class = \"list\">\r\n            <tr>\r\n                <th>No</th>\r\n                <th>设计模式</th>\r\n                <th>进度</th>\r\n            </tr>\r\n            <tr *ngFor=\"let gameload of gameloads\" [title] = \"gameload.name\">\r\n                <td>{{gameload.id}}</td>\r\n                <td>{{gameload.name}}</td>\r\n                <td>{{gameload.finish}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n    <div *ngIf=\"stepNum=='3'\">\r\n        <table class = \"list\">\r\n            <tr>\r\n                <th>游戏名</th>\r\n                <th>时间</th>\r\n                <th>是否通过</th>\r\n            </tr>\r\n            <tr *ngFor=\"let gamerecord of gamerecords\" [title] = \"gamerecord.name\">\r\n                <td>{{gamerecord.name}}</td>\r\n                <td>{{gamerecord.playtime}}</td>\r\n                <td>{{gamerecord.pass}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_personal_account_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/personal/account-list */ "./src/assets/personal/account-list.ts");
/* harmony import */ var _assets_personal_game_load_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/personal/game-load-list */ "./src/assets/personal/game-load-list.ts");
/* harmony import */ var _assets_personal_game_record_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/personal/game-record-list */ "./src/assets/personal/game-record-list.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.stepNum = "1";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Content-Type': 'application/json' });
        this.stage_list = ['收发室初级', '收发室高级', '十倍放大镜', '光线检测', '绿野仙踪'];
        this.accounts = _assets_personal_account_list__WEBPACK_IMPORTED_MODULE_1__["accounts"];
        this.gameloads = _assets_personal_game_load_list__WEBPACK_IMPORTED_MODULE_2__["gameloads"];
        this.gamerecords = _assets_personal_game_record_list__WEBPACK_IMPORTED_MODULE_3__["gamerecords"];
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.find_user_info();
        this.find_play_result();
        this.find_play_history();
    };
    PersonalComponent.prototype.find_user_info = function () {
        var url = "/find_user_info";
        var ajax_this = this;
        var username = localStorage.getItem("username");
        var post_data = { "username": username };
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            var msg = temp['msg'];
            ajax_this.accounts[0].name = msg['username'];
            ajax_this.accounts[0].rgstime = msg['createTime'];
            ajax_this.accounts[0].email = msg['email'];
        }, function (err) {
            console.log(err['_body']);
        });
    };
    PersonalComponent.prototype.find_play_result = function () {
        var url = "/find_play_result";
        var ajax_this = this;
        var username = localStorage.getItem("username");
        var post_data = { "username": username };
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            var msg = temp['msg'];
            for (var i = 0; i < msg.length; i++) {
                if (msg[i]) {
                    ajax_this.gameloads[i].finish = "已完成";
                }
                else {
                    ajax_this.gameloads[i].finish = "未完成";
                }
            }
        }, function (err) {
            console.log(err['_body']);
        });
    };
    PersonalComponent.prototype.find_play_history = function () {
        var url = "/find_play_history";
        var ajax_this = this;
        var username = localStorage.getItem("username");
        var post_data = { "username": username };
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            var msg = temp['msg'];
            for (var i = 0; i < msg.length; i++) {
                var pass = msg[i]['pass'] == 0 ? "未通过" : "已通过";
                var res = {
                    name: ajax_this.stage_list[msg[i]['stage']],
                    playtime: [msg[i]['createTime']],
                    pass: pass
                };
                ajax_this.gamerecords.push(res);
            }
        }, function (err) {
            console.log(err['_body']);
        });
    };
    PersonalComponent.prototype.setStepNum = function (step) {
        switch (step) {
            case "2":
                {
                    this.stepNum = "2";
                }
                break;
            case "3":
                {
                    this.stepNum = "3";
                }
                break;
            default: {
                this.stepNum = "1";
            }
        }
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Jsonp"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/quick-start/quick-start.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quick-start/quick-start.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    width:100%;\r\n    height:2000px;\r\n    background-size:100%;\r\n    background-color: #EEEEEE;\r\n    position: absolute;\r\n}\r\n.left-div{\r\n    width:20%;\r\n    height:100%;\r\n    background-size:100%;\r\n    /*background-color: #EEEEEE;*/\r\n    position: absolute;\r\n    padding-left: 20px;\r\n}\r\n.right-div{\r\n    width:80%;\r\n    height: 100%;\r\n    background-size:100%;\r\n    background-color: white;\r\n    position: absolute;\r\n    margin-left: 20%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-bottom: 30px;\r\n}\r\n.image{\r\n    width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpY2stc3RhcnQvcXVpY2stc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3F1aWNrLXN0YXJ0L3F1aWNrLXN0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keVxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjIwMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubGVmdC1kaXZ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFOyovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1kaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/quick-start/quick-start.component.html":
/*!********************************************************!*\
  !*** ./src/app/quick-start/quick-start.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"body\">\r\n  <div class=\"left-div\">\r\n    <div style=\"position: fixed\">\r\n      <h1>目录</h1>\r\n      <p><a (click)=\"scrollTo('step')\">操作步骤</a></p>\r\n      <p><a (click)=\"scrollTo('heading1')\">学习计算思维</a></p>\r\n      <p><a (click)=\"scrollTo('heading2')\">视频求助功能</a></p>\r\n      <P><a (click)=\"scrollTo('heading3')\">查看个人信息</a></P>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"right-div\">\r\n    <strong><h1>新手教程</h1></strong>\r\n    <div id=\"step\">\r\n      <strong>操作步骤</strong>\r\n      <a class=\"button fancy-button\" (click)=\"getStep('1')\">选择游戏</a>\r\n      <a class=\"button fancy-button\" (click)=\"getStep('2')\">工具栏</a>\r\n      <a class=\"button fancy-button\" (click)=\"getStep('3')\">拖动积木</a>\r\n      <p>{{stepMessage}}</p>\r\n      <img src=\"{{stepImg}}\" alt=\"操作步骤\">\r\n    </div>\r\n\r\n\r\n    <strong><h2 id=\"heading1\">一. 学习计算思维</h2></strong>\r\n    <p>1. 注册登陆之后只需要点击主页的\r\n      <a  class=\"button fancy-button\" [routerLink]=\"['/start']\">\r\n        <i class=\"material-icons\">shopping_cart</i>进入游戏\r\n      </a>\r\n      按钮即可开始轻松快乐的计算思维训练了。\r\n      <br><br>\r\n      2. 在此处您可以任意选择一个游戏来开始游玩。\r\n      <br><br>\r\n      3. 在游玩界面，左侧是画布，在画布内，您可以通过拖动积木来实现代码的拼接.<br>\r\n      如果觉得不需要某块积木， 可以拖动到垃圾箱中以清除，若之后又觉得不该丢弃，还可以捡回来哦，划重点！\r\n      <br>\r\n      中间上方是游戏场景的背景描述以及 hints，中间下方是游戏场景。右侧则是提供给您进行视频聊天求助的界面。\r\n      <br>\r\n      点击运行之后，系统会向您展示游戏过程，方便您发现问题。\r\n    </p>\r\n    <img class=\"image\" src=\"../../assets/guide/1.PNG\" alt=\"游戏界面\">\r\n\r\n    <strong><h2 id=\"heading2\">二. 视频救助功能</h2></strong>\r\n    <strong>1. 发起视频求助</strong>\r\n    <p>在此处，您可以点击开房间来开设一个聊天室，您会获得您聊天室的房间号，把房间号告诉您的朋友或老师，他们便可以进入视频聊天室。</p>\r\n    <strong>2. 进入别人的房间</strong>\r\n    <p>您需要知道别人的房间号，在此处输入房间号后点击进房间，再点击开始视频即可加入视频聊天。</p>\r\n    <strong>3. 注意事项</strong>\r\n    <p>若房间内已有两人，您不得进入该房间。开始视频需要一点时间，请您耐心等待。</p>\r\n\r\n    <strong><h2 id=\"heading3\">三. 查看个人信息</h2></strong>\r\n    <strong>1. 个人信息</strong>\r\n    <p>在此处，您可以查看您的个人信息以及切换用户。</p>\r\n    <strong>2. 游玩情况</strong>\r\n    <p>在这个界面中，您可以看到各个游戏场景的游玩情况以及最近七天的游玩时长的折线图统计。</p>\r\n    <strong>3. 历史操作</strong>\r\n    <p>在此处，您可以看到您最近的游玩记录，也可以选择查看之前特定的某一天的游玩记录。</p>\r\n    <img class=\"image\" src=\"../../assets/guide/2.PNG\" alt=\"个人用户界面\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quick-start/quick-start.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quick-start/quick-start.component.ts ***!
  \******************************************************/
/*! exports provided: QuickStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickStartComponent", function() { return QuickStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickStartComponent = /** @class */ (function () {
    function QuickStartComponent() {
        this.stepMessage = "我们提供了7个有关计算思维的游戏场景！我们推荐的游玩顺序是由易到难，当然你可以选择你喜欢的游戏先游玩";
        this.stepImg = "../../assets/guide/step1.PNG";
    }
    QuickStartComponent.prototype.ngOnInit = function () {
    };
    QuickStartComponent.prototype.test = function () {
        localStorage.setItem("login", "true");
    };
    QuickStartComponent.prototype.scrollTo = function (id) {
        var _id = document.getElementById(id);
        window.scrollTo(0, _id.offsetTop);
    };
    QuickStartComponent.prototype.getStep = function (step) {
        switch (step) {
            case "2":
                {
                    this.stepMessage = "这是一个工具栏，我们可以从这里面移出完成右侧的游戏所需要的积木块，进行拼接最后得到我们要的积木";
                    this.stepImg = "../../assets/guide/step2.PNG";
                }
                break;
            case "3":
                {
                    this.stepMessage = "当你用工具栏里的积木拼成你满意的组合， 下面你需要做的就是验证你的组合啦！我们建议每个游戏场景通过之后再进行下一个, " +
                        "但是我们仍然允许你先看一看后面的场景， 你可以在右边的游戏界面看到你的积木组合的运行过程，方便帮助你找出问题";
                    this.stepImg = "../../assets/guide/step3.PNG";
                }
                break;
            default: {
                this.stepMessage = "我们提供了7个有关计算思维的游戏场景！我们推荐的游玩顺序是由易到难，当然你可以选择你喜欢的游戏先游玩";
                this.stepImg = "../../assets/guide/step1.PNG";
            }
        }
    };
    QuickStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-start',
            template: __webpack_require__(/*! ./quick-start.component.html */ "./src/app/quick-start/quick-start.component.html"),
            styles: [__webpack_require__(/*! ./quick-start.component.css */ "./src/app/quick-start/quick-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuickStartComponent);
    return QuickStartComponent;
}());



/***/ }),

/***/ "./src/app/regist/regist.component.css":
/*!*********************************************!*\
  !*** ./src/app/regist/regist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0px;\r\n    padding:0px;\r\n    font-family:sans-serif;\r\n    background-size:cover;\r\n}\r\n.box{\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    /*实现块元素百分比下居中*/\r\n    width:450px;\r\n    padding:50px;\r\n    background: rgba(0,0,0,.8);\r\n    box-sizing:border-box;\r\n    box-shadow: 0px 15px 25px rgba(0,0,0,.5);\r\n    border-radius:15px;\r\n}\r\n.box h2{\r\n    margin:0 0 30px;\r\n    padding:0;\r\n    color: #fff;\r\n    text-align:center;\r\n}\r\n.box .inputbox{\r\n    position:relative;\r\n}\r\n.box .inputbox input{\r\n    width: 100%;\r\n    padding:10px 0;\r\n    font-size:16px;\r\n    color:#fff;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 30px;\r\n    border:none;\r\n    border-bottom: 1px solid #fff;\r\n    outline:none;\r\n    background: transparent;\r\n}\r\n.box .inputbox label{\r\n    position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n    padding:10px 0;\r\n    font-size: 16px;\r\n    color:#fff;\r\n    pointer-events:none;\r\n    transition:.5s;\r\n}\r\n.box .inputbox input:focus ~ label,\r\n.box .inputbox input:valid ~ label\r\n{\r\n    top:-18px;\r\n    left:0;\r\n    color:#03a9f4;\r\n    font-size:14px;\r\n}\r\n.box input[type=\"submit\"]\r\n{\r\n    background: transparent;\r\n    border:none;\r\n    outline:none;\r\n    font-size: 16px;\r\n    color:#fff;\r\n    background: #03a9f4;\r\n    padding:15px 20px;\r\n    cursor: pointer;\r\n    border-radius:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0L3JlZ2lzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQjtBQUNEOzs7SUFHSSxVQUFVO0lBQ1YsT0FBTztJQUNQLGNBQWM7SUFDZCxlQUFlO0NBQ2xCO0FBQ0Q7O0lBRUksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3QvcmVnaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxufVxyXG4uYm94e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAvKuWunueOsOWdl+WFg+e0oOeZvuWIhuavlOS4i+WxheS4rSovXHJcbiAgICB3aWR0aDo0NTBweDtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjVweCByZ2JhKDAsMCwwLC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxufVxyXG4uYm94IGgye1xyXG4gICAgbWFyZ2luOjAgMCAzMHB4O1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uYm94IC5pbnB1dGJveHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5ib3ggLmlucHV0Ym94IGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjEwcHggMDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5ib3ggLmlucHV0Ym94IGxhYmVse1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICBwYWRkaW5nOjEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgdHJhbnNpdGlvbjouNXM7XHJcbn1cclxuLmJveCAuaW5wdXRib3ggaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuLmJveCAuaW5wdXRib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbFxyXG57XHJcbiAgICB0b3A6LTE4cHg7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBjb2xvcjojMDNhOWY0O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuLmJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzAzYTlmNDtcclxuICAgIHBhZGRpbmc6MTVweCAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/regist/regist.component.html":
/*!**********************************************!*\
  !*** ./src/app/regist/regist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <link rel=\"stylesheet\">\n</head>\n<body>\n<div class=\"box\">\n  <h2>Regist</h2>\n\n    <div class=\"inputbox\">\n      <input  type=\"text\" [(ngModel)]=\"username\">\n      <label>Username</label>\n    </div>\n    <div class=\"inputbox\">\n      <input  type=\"password\" [(ngModel)]=\"password\">\n      <label>Password</label>\n    </div>\n    <div class=\"inputbox\">\n      <input  type=\"text\" [(ngModel)]=\"email\">\n      <label>Email</label>\n    </div>\n    <button (click)=\"regist()\">注册</button>\n\n</div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/regist/regist.component.ts":
/*!********************************************!*\
  !*** ./src/app/regist/regist.component.ts ***!
  \********************************************/
/*! exports provided: RegistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistComponent", function() { return RegistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistComponent = /** @class */ (function () {
    function RegistComponent(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    RegistComponent.prototype.ngOnInit = function () {
    };
    RegistComponent.prototype.regist = function () {
        var url = "/regist";
        var post_data = { "username": this.username, "password": this.password, "email": this.email };
        //    var post_data={"username":this.username,"password":this.password};
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            console.log(temp);
            var bol = temp['success'];
            localStorage.setItem("login", bol);
            if (bol) {
                window.open('/', '_self');
            }
            else {
                alert("用户名已经存在,注册失败");
            }
        }, function (err) {
            console.log(err['_body']);
        });
    };
    RegistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regist',
            template: __webpack_require__(/*! ./regist.component.html */ "./src/app/regist/regist.component.html"),
            styles: [__webpack_require__(/*! ./regist.component.css */ "./src/app/regist/regist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"]])
    ], RegistComponent);
    return RegistComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.start*/\r\n/*{*/\r\n/*margin-left:600px;*/\r\n/*margin-top:300px;*/\r\n/*background-color:yellow*/\r\n/*}*/\r\ndiv{\r\n    margin-left:800px;\r\n    margin-top:300px;\r\n}\r\nh1{\r\n    text-align:center\r\n}\r\nbutton{\r\n    margin-left:50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1YsS0FBSztBQUNELHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkJBQTJCO0FBQy9CLEtBQUs7QUFHTDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLnN0YXJ0Ki9cclxuLyp7Ki9cclxuICAgIC8qbWFyZ2luLWxlZnQ6NjAwcHg7Ki9cclxuICAgIC8qbWFyZ2luLXRvcDozMDBweDsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOnllbGxvdyovXHJcbi8qfSovXHJcblxyXG5cclxuZGl2e1xyXG4gICAgbWFyZ2luLWxlZnQ6ODAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjMwMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDo1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <h1> Learning Computational Thinking</h1>\r\n    <br>\r\n   <h2>&nbsp; &nbsp; 基于 Google Blockly 的计算思维训练平台。结合 Google Blockly强大的功能打破编程语言的边界，无需学习编程语言就可进行计算思维的训练，为初入编程大门的人提供一个易于学习的平台。</h2>\r\n\r\n<button *ngIf=\"login==false\" [routerLink]=\"['/loginpage']\">开始游玩</button>\r\n<button *ngIf=\"login==true\" [routerLink]=\"['/gamesList']\">开始游玩</button>\r\n</div>\r\n<!--<img src=\"../../assets/1.jpg\">-->"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.login = false;
        this.url = "/guidepage";
    }
    StartComponent.prototype.ngOnInit = function () {
        this.login = Boolean(localStorage.getItem("login"));
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"test()\">success works</button>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent.prototype.test = function () {
        var url = "/test";
        var post_data = { "id": 1, "username": "刘醒", "password": "梁非凡" };
        this.http.post(url, JSON.stringify(post_data), { headers: this.headers }).subscribe(function (data) {
            var temp = JSON.parse(data['_body']);
            console.log(typeof (temp));
            alert(temp['id']);
            alert(temp['username']);
            alert(temp['password']);
        }, function (err) {
            console.log(err['_body']);
        });
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/assets/personal/account-list.ts":
/*!*********************************************!*\
  !*** ./src/assets/personal/account-list.ts ***!
  \*********************************************/
/*! exports provided: accounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accounts", function() { return accounts; });
var accounts = [
    {
        name: '',
        rgstime: '',
        email: '',
    },
];


/***/ }),

/***/ "./src/assets/personal/game-load-list.ts":
/*!***********************************************!*\
  !*** ./src/assets/personal/game-load-list.ts ***!
  \***********************************************/
/*! exports provided: gameloads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameloads", function() { return gameloads; });
var gameloads = [
    {
        id: 1,
        name: '收发室初级',
        finish: '未完成',
    },
    {
        id: 2,
        name: '收发室高级',
        finish: '未完成',
    },
    {
        id: 3,
        name: '十倍放大镜',
        finish: '未完成',
    },
    {
        id: 4,
        name: '光线检测',
        finish: '未完成',
    },
    {
        id: 5,
        name: '绿野仙踪',
        finish: '未完成',
    },
];


/***/ }),

/***/ "./src/assets/personal/game-record-list.ts":
/*!*************************************************!*\
  !*** ./src/assets/personal/game-record-list.ts ***!
  \*************************************************/
/*! exports provided: gamerecords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamerecords", function() { return gamerecords; });
var gamerecords = [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\大三下\高级web\angulars\test\最新备份\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map