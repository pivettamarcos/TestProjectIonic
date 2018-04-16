webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_shops__ = __webpack_require__(277);

var ShopService = /** @class */ (function () {
    function ShopService() {
        this.shops = __WEBPACK_IMPORTED_MODULE_0__data_shops__["a" /* default */];
    }
    ShopService.prototype.getShop = function (id) {
        return this.shops.find(function (shop) {
            return shop.id == id;
        });
    };
    ShopService.prototype.getAllShops = function () { return this.shops; };
    ;
    ShopService.prototype.addShop = function (shop) {
        __WEBPACK_IMPORTED_MODULE_0__data_shops__["a" /* default */].push(shop);
    };
    ShopService.prototype.getNextId = function () {
        return __WEBPACK_IMPORTED_MODULE_0__data_shops__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0__data_shops__["a" /* default */].length - 1].id + 1;
    };
    return ShopService;
}());

//# sourceMappingURL=shops.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_livros__ = __webpack_require__(278);

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
    LivroService.prototype.addLivro = function (livro) {
        __WEBPACK_IMPORTED_MODULE_0__data_livros__["a" /* default */].push(livro);
    };
    LivroService.prototype.deleteLivro = function (id) {
        for (var i = 0; i < this.livros.length; i++) {
            if (this.livros[i].id == id)
                this.livros.splice(i, 1);
        }
    };
    LivroService.prototype.getProximoId = function () {
        return __WEBPACK_IMPORTED_MODULE_0__data_livros__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0__data_livros__["a" /* default */].length - 1].id + 1;
    };
    return LivroService;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopList_shopList__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_livros_lista_livros__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.shopListPage = __WEBPACK_IMPORTED_MODULE_1__shopList_shopList__["a" /* ShopListPage */];
        this.listaLivrosPage = __WEBPACK_IMPORTED_MODULE_2__lista_livros_lista_livros__["a" /* ListaLivrosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="shopListPage" tabIcon="basket" tabTitle="Lojas"></ion-tab>\n\n  <ion-tab [root]="listaLivrosPage" tabIcon="book" tabTitle="Livros"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopRegister_shopRegister__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shops__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopListPage = /** @class */ (function () {
    function ShopListPage(modalCtrl, shopService) {
        this.modalCtrl = modalCtrl;
        this.shopService = shopService;
    }
    ShopListPage.prototype.addShop = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__shopRegister_shopRegister__["a" /* ShopRegisterPage */], { userId: 8675309 });
        profileModal.present();
        console.log(__WEBPACK_IMPORTED_MODULE_2__shopRegister_shopRegister__["a" /* ShopRegisterPage */]);
    };
    ShopListPage.prototype.ngOnInit = function () {
        this.shops = this.shopService.getAllShops();
    };
    ShopListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopList',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\shopList\shopList.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n        <ion-title>\n\n          Lista de lojas\n\n        </ion-title>\n\n\n\n        <ion-buttons hideWhen="android, core" end>\n\n          <button ion-button icon-only (click)="addShop()">\n\n            <ion-icon ios="ios-add" md="md-add"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content  padding class="contentMain">\n\n  <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let shop of shops">\n\n      <h2>{{shop.nome}}</h2>\n\n      <p>{{shop.site}}</p>\n\n      <button ion-button clear item-end>Ver</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button padding showWhen="core" class="button-add-core centralized" ion-button (click)="addShop()">\n\n      Adicionar loja\n\n  </button>\n\n\n\n  <button showWhen="android" class="button-add-android"  ion-fab (click)="addShop()">\n\n      <ion-icon style="color: black" md="md-add"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\shopList\shopList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_shops__["a" /* ShopService */]])
    ], ShopListPage);
    return ShopListPage;
}());

//# sourceMappingURL=shopList.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shops__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopRegisterPage = /** @class */ (function () {
    function ShopRegisterPage(shopService, viewCtrl) {
        this.shopService = shopService;
        this.viewCtrl = viewCtrl;
    }
    ShopRegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShopRegisterPage.prototype.registerShop = function (values) {
        console.log(values.shopName);
        this.shopService.addShop({ id: this.shopService.getNextId(), nome: values.shopName, telefone: values.shopNumber, site: values.shopSite, endereco: values.shopAddress });
        // let data = new Shop(f.value.shopName, f.value.shopNumber, f.value.shopSite, f.value.shopAddress);
        //this.viewCtrl.dismiss(data);
        console.log(this.shopService.getAllShops());
    };
    ShopRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopregister',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\shopRegister\shopRegister.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n\n\n        <ion-buttons left>\n\n          <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>\n\n          Cadastre uma loja\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="contentMain">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <form (ngSubmit)="registerShop(f.value)" #f="ngForm">\n\n        <ion-row style="border-bottom: 1px solid #cccccc">\n\n          <ion-col>\n\n            <ion-list inset>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Nome" name="shopName" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="number" placeholder="Número" name="shopNumber" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Website" name="shopSite" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Endereço" name="shopAddress" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!f.valid">Adicionar nova loja</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n    </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\shopRegister\shopRegister.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shops__["a" /* ShopService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], ShopRegisterPage);
    return ShopRegisterPage;
}());

//# sourceMappingURL=shopRegister.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livros__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_livro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_register_livro_register__ = __webpack_require__(200);
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
    function ListaLivrosPage(navCtrl, navParams, modalCtrl, livrosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.livrosService = livrosService;
    }
    ListaLivrosPage.prototype.ngOnInit = function () {
        this.livros = this.livrosService.getAllLivros();
    };
    ListaLivrosPage.prototype.onVerMais = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_livro__["a" /* LivroPage */], this.livrosService.getLivro(id));
    };
    ListaLivrosPage.prototype.deleteLivro = function (id) {
        this.livrosService.deleteLivro(id);
    };
    ListaLivrosPage.prototype.addLivro = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__livro_register_livro_register__["a" /* LivroRegisterPage */], { userId: 8675309 });
        profileModal.present();
    };
    ListaLivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-livros',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\lista-livros\lista-livros.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Lista de Livros</ion-title>\n\n    <ion-buttons hideWhen="android, core" end>\n      <button ion-button icon-only (click)="addLivro()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="contentMain">\n\n  <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let livro of livros">\n      <ion-row>\n        <ion-col>\n          <h2> {{livro.titulo}}</h2>\n          <p>{{livro.autor}}</p>\n        </ion-col>\n\n        <ion-col class="buttonsCol" (click)="deleteLivro(livro.id)">\n          <ion-buttons end>\n            <button clear ion-button>\n              <ion-icon name="trash"></ion-icon>\n            </button>\n            <button ion-button clear small item-end (click)="onVerMais(livro.id)">\n              <ion-icon name="eye"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n  </ion-list>\n\n\n  <button showWhen="core" class="button-add-core centralized" ion-button (click)="addLivro()">\n    Adicionar Livro\n  </button>\n\n  <button showWhen="android" class="button-add-android" ion-fab (click)="addLivro()">\n    <ion-icon style="color: black" name="add"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\lista-livros\lista-livros.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */]) === "function" && _d || Object])
    ], ListaLivrosPage);
    return ListaLivrosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=lista-livros.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livros__ = __webpack_require__(101);
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
    function LivroPage(livrosService, navCtrl, navParams) {
        this.livrosService = livrosService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LivroPage.prototype.ngOnInit = function () {
        this.livro = this.navParams.data;
    };
    LivroPage.prototype.deleteLivro = function (id) {
        this.livrosService.deleteLivro(id);
        this.navCtrl.pop();
    };
    LivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\livro\livro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{livro.titulo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="contentMain">\n\n  <ion-row justify-content-center padding>\n    <ion-img\n      src={{livro.capa}}\n      width="120"\n      height="180"\n    ></ion-img>\n  </ion-row>\n\n\n  <ion-list>\n    <ion-item>Titulo <p>{{livro.titulo}}</p></ion-item>\n    <ion-item>Autor <p>{{livro.autor}}</p></ion-item>\n    <ion-item>Lançamento <p>{{livro.dtLancamento}}</p></ion-item>\n\n    <ion-row justify-content-between>\n      <button ion-button\n        color="danger">\n        <ion-icon name="trash" (click)="deleteLivro(livro.id)"></ion-icon>\n      </button>\n\n      <button\n        ion-button\n        align-self-start\n        icon-left\n        item-start>\n        <ion-icon name="document"></ion-icon>\n        Ver PDF\n      </button>\n    </ion-row>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\livro\livro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
    ], LivroPage);
    return LivroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_livros__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LivroRegisterPage = /** @class */ (function () {
    function LivroRegisterPage(viewCtrl, livroService) {
        this.viewCtrl = viewCtrl;
        this.livroService = livroService;
    }
    LivroRegisterPage.prototype.registerLivro = function (livro) {
        console.log(livro.titulo);
        this.livroService.addLivro({ id: this.livroService.getProximoId(), capa: livro.capa, titulo: livro.titulo, autor: livro.autor, dtLancamento: livro.dtLancamento, pdf: livro.pdf });
        console.log(this.livroService.getAllLivros());
        this.viewCtrl.dismiss();
    };
    LivroRegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LivroRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro-register',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\livro-register\livro-register.html"*/'<ion-header>\n  <ion-navbar>\n\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      Cadastre um Livro\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="contentMain">\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)="registerLivro(f.value)" #f="ngForm">\n        <ion-row style="border-bottom: 1px solid #cccccc">\n          <ion-col>\n            <ion-list inset>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Título" name="titulo" ngModel required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Autor" name="autor" ngModel required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Capa" name="capa" ngModel required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Lançamento" name="dtLancamento" ngModel required></ion-input>\n              </ion-item>\n\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!f.valid">Adicionar novo livro</button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\livro-register\livro-register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_livros__["a" /* LivroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_livros__["a" /* LivroService */]) === "function" && _b || Object])
    ], LivroRegisterPage);
    return LivroRegisterPage;
    var _a, _b;
}());

//# sourceMappingURL=livro-register.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopList_shopList__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shopRegister_shopRegister__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lista_livros_lista_livros__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_livros__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shops__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_livro_register_livro_register__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_shopList_shopList__["a" /* ShopListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shopRegister_shopRegister__["a" /* ShopRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__["a" /* LivroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_livro_register_livro_register__["a" /* LivroRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
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
                __WEBPACK_IMPORTED_MODULE_9__pages_shopList_shopList__["a" /* ShopListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shopRegister_shopRegister__["a" /* ShopRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_livro_livro__["a" /* LivroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_livro_register_livro_register__["a" /* LivroRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__services_livros__["a" /* LivroService */],
                __WEBPACK_IMPORTED_MODULE_15__services_shops__["a" /* ShopService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        id: 1,
        nome: 'Saraiva',
        telefone: '5134511258',
        site: 'saraiva.com.br',
        endereco: "Rua saraiva, bairro saraiva nº123",
    },
    {
        id: 2,
        nome: 'Amazon',
        telefone: '5134812245',
        site: 'amazon.com.br',
        endereco: "Rua amazon, bairro amazon nº452",
    },
    {
        id: 3,
        nome: 'Submarino',
        telefone: '5136220147',
        site: 'saraiva.com.br',
        endereco: "Rua Submarino, bairro Submarino nº456",
    }
]);
//# sourceMappingURL=shops.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        id: 1,
        capa: 'https://images-na.ssl-images-amazon.com/images/I/51XasHYG3eL.jpg',
        titulo: 'Metamorfose',
        autor: 'Fraz Kafka',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: 2,
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=1574783&qld=90&l=430&a=-1',
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: 3,
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2655792&qld=90&l=430&a=-1',
        titulo: '1984',
        autor: 'George Orwell',
        dtLancamento: "18/04/1968",
        pdf: null
    },
    {
        id: 4,
        capa: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=158643&qld=90&l=430&a=-1',
        titulo: 'Laranja Mecânica',
        autor: 'Brugees',
        dtLancamento: "18/04/1968",
        pdf: null
    }
]);
//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\login\login.html"*/'<ion-content class="contentMain" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col class="imgCol" width-67>\n\n      <img src="../assets/imgs/bookLogo2.png"/>\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <div class="loginBox">\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <form (ngSubmit)="loginRegular(f)" #f="ngForm">\n\n          <ion-row style="border-bottom: 1px solid #cccccc">\n\n            <ion-col>\n\n              <ion-list inset>\n\n\n\n                <ion-item>\n\n                  <ion-input\n\n                    type="email"\n\n                    email\n\n                    [(ngModel)]="email"\n\n                    placeholder="Email"\n\n                    name="email"\n\n                    required></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-input\n\n                    type="password"\n\n                    placeholder="Senha"\n\n                    name="password"\n\n                    ngModel\n\n                    required></ion-input>\n\n                </ion-item>\n\n\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col class="signup-col">\n\n              <button\n\n                ion-button\n\n                class="submit-btn"\n\n                full\n\n                type="submit"\n\n                (click)="onLogin()"\n\n                [disabled]="!f.valid">Login</button>\n\n\n\n              <button\n\n                ion-button\n\n                class="register-btn"\n\n                block\n\n                clear>Criar nova conta</button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n      </form>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-row>\n\n      <ion-col  style="display:block; margin: 0 auto" class="signup-col" col-auto>\n\n        <p style="color:#ffffffbb"> Ou autentique-se com </p>\n\n        <div style="display:flex; justify-content: center;">\n\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button icon-only>\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n\n\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button round icon-only>\n\n            <ion-icon name="logo-google"></ion-icon>\n\n          </button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos\Desktop\testProjectIonic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map