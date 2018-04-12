webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_livros_lista_livros__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /*loginWithGoogle(){
      this.googlePlus.login(
          {
          'webClientId': 'unasus.ufcspa.testProjectIonic', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
          }).then(res => console.log(res))
        .catch(err => console.error(err));
    }*/
    LoginPage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.loginRegular = function (f) {
        console.log(f.form.controls.password.valid);
        if (f.form.controls.password.valid)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lista_livros_lista_livros__["a" /* ListaLivrosPage */]);
        /*if(value.email == "admin" && value.password=="admin"){
            console.log(value);
            this.onLogin();
        }*/
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\login\login.html"*/'<ion-content class="contentMain" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col class="imgCol" width-67>\n      <img src="../assets/imgs/bookLogo2.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="loginBox">\n\n    <ion-card>\n      <ion-card-content>\n        <form (ngSubmit)="loginRegular(f)" #f="ngForm">\n          <ion-row style="border-bottom: 1px solid #cccccc">\n            <ion-col>\n              <ion-list inset>\n\n                <ion-item>\n                  <ion-input\n                    type="email"\n                    email\n                    [(ngModel)]="email"\n                    placeholder="Email"\n                    name="email"\n                    required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-input\n                    type="password"\n                    placeholder="Senha"\n                    name="password"\n                    ngModel\n                    required></ion-input>\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class="signup-col">\n              <button\n                ion-button\n                class="submit-btn"\n                full\n                type="submit"\n                [disabled]="!f.valid">Login</button>\n\n              <button\n                ion-button\n                class="register-btn"\n                block\n                clear>Criar nova conta</button>\n            </ion-col>\n          </ion-row>\n\n      </form>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row>\n      <ion-col  style="display:block; margin: 0 auto" class="signup-col" col-auto>\n        <p style="color:#ffffffbb"> Ou autentique-se com </p>\n        <div style="display:flex; justify-content: center;">\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button icon-only>\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button round icon-only>\n            <ion-icon name="logo-google"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livros__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_livro__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaLivrosPage = /** @class */ (function () {
    function ListaLivrosPage(navCtrl, navParams, livrosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livrosService = livrosService;
    }
    ListaLivrosPage.prototype.ngOnInit = function () {
        this.livros = this.livrosService.getAllLivros();
    };
    ListaLivrosPage.prototype.onVerMais = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_livro__["a" /* LivroPage */], this.livrosService.getLivro(id));
    };
    ListaLivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-livros',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\lista-livros\lista-livros.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Lista de Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding\n  *ngFor="let livro of livros">\n\n    <ion-card-header> {{livro.titulo}}</ion-card-header>\n    <ion-card-content>\n        <p>{{livro.autor}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col text-right>\n        <button\n          ion-button\n          clear\n          small\n          (click)="onVerMais(livro.id)"> Ver Mais </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\lista-livros\lista-livros.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */]) === "function" && _c || Object])
    ], ListaLivrosPage);
    return ListaLivrosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=lista-livros.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_livros__ = __webpack_require__(274);

var LivroService = /** @class */ (function () {
    function LivroService() {
        this.livros = __WEBPACK_IMPORTED_MODULE_0__data_livros__["a" /* default */];
    }
    LivroService.prototype.getLivro = function (id) {
        return this.livros.find(function (livroEl) {
            return livroEl.id == id;
        });
    };
    LivroService.prototype.getAllLivros = function () { return this.livros; };
    ;
    return LivroService;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivroPage = /** @class */ (function () {
    function LivroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LivroPage.prototype.ngOnInit = function () {
        this.livro = this.navParams.data;
    };
    LivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro\livro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{livro.titulo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row justify-content-center padding>\n    <ion-img\n      src={{livro.capa}}\n      width="120"\n      height="180"\n    ></ion-img>\n  </ion-row>\n\n\n  <ion-list>\n    <ion-item>Titulo <p>{{livro.titulo}}</p></ion-item>\n    <ion-item>Autor <p>{{livro.autor}}</p></ion-item>\n    <ion-item>Lançamento <p>{{livro.dtLancamento}}</p></ion-item>\n  </ion-list>\n\n  <ion-row justify-content-between padding>\n  <button\n    ion-button\n    outline\n    align-self-start\n    icon-left\n    item-start>\n      <ion-icon name="document"></ion-icon>\n      Ver PDF\n  </button>\n\n  <button\n    ion-button\n    outline align-self-end\n    color="danger"\n    icon-left\n    item-end>\n      <ion-icon name="trash"></ion-icon>\n      Excluir\n  </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro\livro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
    ], LivroPage);
    return LivroPage;
    var _a, _b;
}());

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_livros_lista_livros__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_livros__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__["a" /* LivroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__["a" /* LivroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_10__services_livros__["a" /* LivroService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        id: '1',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/51XasHYG3eL.jpg',
        titulo: 'Metamorfose',
        autor: 'Fraz Kafka',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: '2',
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=1574783&qld=90&l=430&a=-1',
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: '3',
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2655792&qld=90&l=430&a=-1',
        titulo: '1984',
        autor: 'George Orwell',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: '4',
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=158643&qld=90&l=430&a=-1',
        titulo: 'Laranja Mecânica',
        autor: 'Brugees',
        dtLancamento: "18/04/1968",
        pdf: null
    }
]);
//# sourceMappingURL=livros.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map