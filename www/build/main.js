webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_shops__ = __webpack_require__(422);

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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livros__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LivroEditPage = /** @class */ (function () {
    function LivroEditPage(domSanitizationService, navParams, livroService, camera, viewCtrl, file, fileChooser, filePath, base64) {
        this.domSanitizationService = domSanitizationService;
        this.navParams = navParams;
        this.livroService = livroService;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.file = file;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.base64 = base64;
        this.CAPA_DEFAULT = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";
    }
    LivroEditPage.prototype.escolherPDF = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            console.log('Relative Path: ' + uri);
            _this.filePath.resolveNativePath(uri).then(function (resolvedFilePath) {
                _this.base64.encodeFile(resolvedFilePath).then(function (base64File) {
                    var selectedPDF = _this.dataURItoBlob(base64File, true);
                    _this.uploadToDB(selectedPDF, true);
                    _this.outlineIconeLivro = true;
                }, function (err) {
                    console.log(err);
                });
            });
        })
            .catch(function (e) { return console.log(e); });
    };
    LivroEditPage.prototype.ionViewDidLoad = function () {
        this.livro = this.navParams.get('livro');
        if (!this.livro.pdf)
            this.outlineIconeLivro = true;
        else
            this.outlineIconeLivro = false;
    };
    LivroEditPage.prototype.ngOnInit = function () {
        this.livro = this.navParams.get('livro');
    };
    LivroEditPage.prototype.salvarLivro = function (form) {
        var novoLivro = this.livro;
        novoLivro.titulo = form.value.titulo;
        novoLivro.autor = form.value.autor;
        novoLivro.dtLancamento = form.value.dtLancamento;
        //DEBUG
        console.log('this.livro');
        console.log(this.livro);
        console.log('novoLivro');
        console.log(novoLivro);
        this.livroService.atualizarLivro(novoLivro);
        this.viewCtrl.dismiss();
    };
    LivroEditPage.prototype.onMudarCapa = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var selectedPhoto = _this.dataURItoBlob(base64Image, false);
            _this.uploadToDB(selectedPhoto, false);
            _this.mudarImagemCapa(base64Image);
        }, function (err) {
            // Handle error
            console.log("erro ao capturar imagen");
            console.log(err);
        });
    };
    LivroEditPage.prototype.onMudarCapaGaleria = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var selectedPhoto = _this.dataURItoBlob(base64Image, false);
            _this.uploadToDB(selectedPhoto, false);
            _this.mudarImagemCapa(base64Image);
        }, function (err) {
            // Handle error
            console.log("erro ao capturar imagem");
            console.log(err);
        });
    };
    LivroEditPage.prototype.mudarImagemCapa = function (img64) {
        this.livro.capa = img64;
    };
    LivroEditPage.prototype.sanitizeBase64 = function (capa) {
        this.domSanitizationService.bypassSecurityTrustUrl(capa);
    };
    LivroEditPage.prototype.validaCapa = function (capa) {
        if (!capa)
            return this.CAPA_DEFAULT;
        else
            return capa;
    };
    LivroEditPage.prototype.dataURItoBlob = function (dataURI, pdf) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        if (!pdf)
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        else
            return new Blob([new Uint8Array(array)], { type: 'application/pdf' });
    };
    ;
    LivroEditPage.prototype.uploadToDB = function (selectedFile, pdf) {
        if (selectedFile) {
            var self_1 = this;
            var uploadTask = void 0;
            if (!pdf)
                uploadTask = __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"]().ref().child('/' + this.livro.key.toString() + '/image').put(selectedFile);
            else
                uploadTask = __WEBPACK_IMPORTED_MODULE_9_firebase__["storage"]().ref().child('/' + this.livro.key.toString() + '/pdf').put(selectedFile);
            uploadTask.then(function (snapshot) {
                if (!pdf) {
                    self_1.livroService.atualizarAtributo('capa', self_1.livro.key, snapshot.downloadURL);
                    self_1.capaAtual = snapshot.downloadURL;
                }
                else {
                    self_1.livroService.atualizarAtributo('pdf', self_1.livro.key, snapshot.downloadURL);
                    self_1.pdfAtual = snapshot.downloadURL;
                }
            }, function () {
                console.log("erro");
            });
        }
    };
    LivroEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro-edit',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro-edit\livro-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Editar Livro\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="contentMain">\n      <ion-row justify-content-center padding>\n        <img style="max-height: 200px; width:auto"\n             [src]="validaCapa(livro.capa)"/>\n      </ion-row>\n\n\n      <ion-row justify-content-center padding>\n          <button\n                  ion-button\n                  icon-only\n                  width="120"\n                  height="180"\n                  (click)="onMudarCapa()"\n          >\n            <ion-icon name="camera"></ion-icon>\n          </button>\n\n          <button\n            ion-button\n            (click)="onMudarCapaGaleria()"\n            icon-only>\n            <ion-icon name="image"></ion-icon>\n          </button>\n\n          <button ion-button\n                  [outline]="outlineIconeLivro"\n                  icon-only\n                  width="120"\n                  height="180"\n                  color="danger2"\n                  (click)="escolherPDF()"\n                  style="margin-left: 30px;padding-left: 10px"\n          >\n            Arquivo PDF\n            <ion-icon color="danger" name="document"></ion-icon>\n          </button>\n      </ion-row>\n\n  <form (ngSubmit)="salvarLivro(f)" #f="ngForm">\n  <ion-list>\n    <ion-item>\n      <ion-label inset>Título</ion-label>\n      <ion-input type="text" placeholder="Título" name="titulo" ngModel required [(ngModel)]="livro.titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label inset>Autor</ion-label>\n      <ion-input type="text" placeholder="Autor" name="autor" ngModel required [(ngModel)]="livro.autor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Data de Lançamento</ion-label> <ion-datetime [placeholder]="livro.dtLancamento" name="dtLancamento" displayFormat="DD/MM/YYYY"  [(ngModel)]="livro.dtLancamento" required></ion-datetime>\n    </ion-item>\n\n    <ion-row justify-content-between padding>\n      <button ion-button class="submit-btn centralized" type="submit" centralized [disabled]="!f.valid">Salvar</button>\n    </ion-row>\n  </ion-list>\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro-edit\livro-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_livros__["a" /* LivroServiceFirebase */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */]])
    ], LivroEditPage);
    return LivroEditPage;
}());

//# sourceMappingURL=livro-edit.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopList_shopList__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_livros_lista_livros__ = __webpack_require__(281);
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
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="shopListPage" tabIcon="basket" tabTitle="Lojas"></ion-tab>\n  <ion-tab [root]="listaLivrosPage" tabIcon="book" tabTitle="Livros"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopRegister_shopRegister__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shops__ = __webpack_require__(153);
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
            selector: 'page-shopList',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\shopList\shopList.html"*/'<ion-header>\n  <ion-navbar>\n\n        <ion-title>\n          Lista de lojas\n        </ion-title>\n\n        <ion-buttons hideWhen="android, core" end>\n          <button ion-button icon-only (click)="addShop()">\n            <ion-icon ios="ios-add" md="md-add"></ion-icon>\n          </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content  padding class="contentMain">\n  <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n  <ion-list padding>\n    <ion-item *ngFor="let shop of shops">\n      <h2>{{shop.nome}}</h2>\n      <p>{{shop.site}}</p>\n      <button ion-button clear item-end>Ver</button>\n    </ion-item>\n  </ion-list>\n\n  <button padding showWhen="core" class="button-add-core centralized" ion-button (click)="addShop()">\n      Adicionar loja\n  </button>\n\n  <button showWhen="android" class="button-add-android"  ion-fab (click)="addShop()">\n      <ion-icon md="md-add"></ion-icon>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\shopList\shopList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_shops__["a" /* ShopService */]])
    ], ShopListPage);
    return ShopListPage;
}());

//# sourceMappingURL=shopList.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shops__ = __webpack_require__(153);
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
            selector: 'page-shopregister',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\shopRegister\shopRegister.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n\n\n        <ion-buttons left>\n\n          <button ion-button icon-only (click)="dismiss()">\n\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>\n\n          Cadastre uma loja\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="contentMain">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <form (ngSubmit)="registerShop(f.value)" #f="ngForm">\n\n        <ion-row style="border-bottom: 1px solid #cccccc">\n\n          <ion-col>\n\n            <ion-list inset>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Nome" name="shopName" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="number" placeholder="Número" name="shopNumber" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Website" name="shopSite" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Endereço" name="shopAddress" ngModel required></ion-input>\n\n              </ion-item>\n\n\n\n\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!f.valid">Adicionar nova loja</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n    </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\shopRegister\shopRegister.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shops__["a" /* ShopService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ShopRegisterPage);
    return ShopRegisterPage;
}());

//# sourceMappingURL=shopRegister.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_livro__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_register_livro_register__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_edit_livro_edit__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_livros__ = __webpack_require__(67);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function ListaLivrosPage(navCtrl, modalCtrl, livrosService, domSanitizationService, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.livrosService = livrosService;
        this.domSanitizationService = domSanitizationService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.CAPA_DEFAULT = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";
        this.livros$ = this.livrosService
            .getAllLivros() //DB LIST
            .snapshotChanges() // KEY AND VALUE
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ListaLivrosPage.prototype.ngOnInit = function () {
    };
    ListaLivrosPage.prototype.onVerMais = function (livro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_livro__["a" /* LivroPage */], { livro: livro });
    };
    ListaLivrosPage.prototype.deleteLivro = function (livro) {
        this.livrosService.deleteLivro(livro);
    };
    ListaLivrosPage.prototype.addLivro = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__livro_register_livro_register__["a" /* LivroRegisterPage */], { userId: 8675309 });
        profileModal.present();
    };
    ListaLivrosPage.prototype.editarLivro = function (livro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livro_edit_livro_edit__["a" /* LivroEditPage */], { livro: livro });
    };
    // filterItems(ev: any) {
    //
    //   function arrayUnique(array) {
    //     var a = array.concat();
    //     for(var i=0; i<a.length; ++i) {
    //       for(var j=i+1; j<a.length; ++j) {
    //         if(a[i] === a[j])
    //           a.splice(j--, 1);
    //       }
    //     }
    //     return a;
    //   }
    //
    //   let livros: Livro[] = this.livros$.map;
    //
    //   let nomeLivro = ev.target.value;
    //
    //   if (nomeLivro && nomeLivro.trim() !== '') {
    //     let filtradosPorAutor = this.livros.filter(function(item) {
    //       return item.autor.toLowerCase().includes(nomeLivro.toLowerCase());
    //     });
    //     let filtradosPorTitulo = this.livros.filter(function(item) {
    //       return item.titulo.toLowerCase().includes(nomeLivro.toLowerCase());
    //     });
    //
    //     livros = arrayUnique(filtradosPorAutor.concat(filtradosPorTitulo));
    //
    //   }
    // }
    // filterItems(ev: any){}
    ListaLivrosPage.prototype.onCancel = function (ev) {
    };
    ListaLivrosPage.prototype.sanitizeBase64 = function (capa) {
        this.domSanitizationService.bypassSecurityTrustUrl(capa);
    };
    ListaLivrosPage.prototype.mostrarOpcoes = function (livro) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opções',
            buttons: [
                {
                    text: 'Excluir',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteLivro(livro);
                    }
                },
                {
                    text: 'Editar',
                    handler: function () {
                        _this.editarLivro(livro);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ListaLivrosPage.prototype.validaCapa = function (capa) {
        if (!capa)
            return this.CAPA_DEFAULT;
        else
            return capa;
    };
    ListaLivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-livros',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\lista-livros\lista-livros.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>Lista de Livros</ion-title>\n\n\n\n    <ion-buttons hideWhen="android, core" end>\n\n      <button ion-button icon-only (click)="addLivro()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n<ion-toolbar>\n\n  <ion-searchbar\n\n    placeholder="Procurar"\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="filterItems($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n</ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="contentMain">\n\n\n\n  <ion-list>\n\n    <ion-item\n\n      *ngFor="let livro of livros$ | async">\n\n\n\n      <ion-thumbnail\n\n        item-start\n\n        (click)="onVerMais(livro)">\n\n        <img [src]="validaCapa(livro.capa)">\n\n      </ion-thumbnail>\n\n\n\n      <h2 (click)="onVerMais(livro)"> {{livro.titulo}}</h2>\n\n      <p (click)="onVerMais(livro)">{{livro.autor}}</p>\n\n\n\n      <button ion-button clear item-end icon-only (click)="mostrarOpcoes(livro)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <button showWhen="core" class="button-add-core centralized" ion-button (click)="addLivro()">\n\n    Adicionar Livro\n\n  </button>\n\n\n\n  <button showWhen="android" class="button-add-android" ion-fab (click)="addLivro()">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\lista-livros\lista-livros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__services_livros__["a" /* LivroServiceFirebase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ListaLivrosPage);
    return ListaLivrosPage;
}());

//# sourceMappingURL=lista-livros.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_edit_livro_edit__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_livros__ = __webpack_require__(67);
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
    function LivroPage(domSanitizationService, livrosService, navCtrl, navParams, file, inAppBrowser) {
        this.domSanitizationService = domSanitizationService;
        this.livrosService = livrosService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.inAppBrowser = inAppBrowser;
        this.CAPA_DEFAULT = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";
    }
    LivroPage.prototype.ionViewDidLoad = function () {
        if (this.livro.pdf === "" || this.livro.pdf === null)
            this.pdfAvailable = true;
        else
            this.pdfAvailable = false;
        if (this.livro.capa === "" || this.livro.capa === null) {
            this.livro.capa = this.CAPA_DEFAULT;
        }
    };
    LivroPage.prototype.ngOnInit = function () {
        this.livro = this.navParams.get('livro');
    };
    LivroPage.prototype.onVerPDF = function () {
        this.inAppBrowser.create(this.livro.pdf, '_system');
    };
    LivroPage.prototype.deleteLivro = function (livro) {
        this.livrosService.deleteLivro(livro);
        this.navCtrl.pop();
    };
    LivroPage.prototype.editLivro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_edit_livro_edit__["a" /* LivroEditPage */], { livro: this.livro });
    };
    LivroPage.prototype.sanitizeBase64 = function (capa) {
        this.domSanitizationService.bypassSecurityTrustUrl(capa);
    };
    LivroPage.prototype.validaCapa = function (capa) {
        if (!capa)
            return this.CAPA_DEFAULT;
        else
            return capa;
    };
    LivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro\livro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{livro.titulo}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editLivro()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="contentMain">\n\n  <ion-row justify-content-center padding>\n    <img style="max-height: 200px; width:auto" [src]="validaCapa(livro.capa)"/>\n  </ion-row>\n\n\n  <ion-list>\n    <ion-item>Titulo <p>{{livro.titulo}}</p></ion-item>\n    <ion-item>Autor <p>{{livro.autor}}</p></ion-item>\n    <ion-item>Lançamento <p>{{livro.dtLancamento}}</p></ion-item>\n\n    <ion-row justify-content-between padding>\n\n      <button\n        (click)="deleteLivro(livro)"\n        ion-button\n        icon-left\n        color="danger">\n        <ion-icon name="trash"></ion-icon>\n        Excluir\n      </button>\n\n      <button\n        (click)="onVerPDF()"\n        [disabled] = "pdfAvailable"\n        ion-button\n        icon-only\n        icon-right\n      style="padding-left: 10px">\n        Ver PDF\n        <ion-icon name="document"></ion-icon>\n      </button>\n    </ion-row>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro\livro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6__services_livros__["a" /* LivroServiceFirebase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LivroPage);
    return LivroPage;
}());

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_livros__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(177);
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
    function LivroRegisterPage(datePicker, camera, viewCtrl, livroService, fileChooser, filePath, base64) {
        this.datePicker = datePicker;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.livroService = livroService;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.base64 = base64;
        this.capaAtual = "";
        this.CAPA_DEFAULT = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";
        this.pdfAtual = "";
    }
    LivroRegisterPage.prototype.ngOnInit = function () {
        this.btnPDFcolor = "danger";
    };
    LivroRegisterPage.prototype.registerLivro = function (livro) {
        console.log(livro);
        this.livroService.addLivro({ key: '', capa: this.capaAtual, titulo: livro.titulo, autor: livro.autor, dtLancamento: livro.dtLancamento, pdf: '' }, this.capaTemp, this.pdfTemp);
        console.log(this.livroService.getAllLivros());
        this.viewCtrl.dismiss();
    };
    LivroRegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LivroRegisterPage.prototype.showDatePicker = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    LivroRegisterPage.prototype.onMudarCapaCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var selectedPhoto = _this.dataURItoBlob(base64Image, false);
            _this.capaAtual = base64Image;
            _this.capaTemp = selectedPhoto;
        }, function (err) {
            // Handle error
            console.log("erro ao capturar imagem");
            console.log(err);
        });
    };
    LivroRegisterPage.prototype.onMudarCapaGaleria = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var selectedPhoto = _this.dataURItoBlob(base64Image, false);
            _this.capaAtual = base64Image;
            _this.capaTemp = selectedPhoto;
        }, function (err) {
            // Handle error
            console.log("erro ao capturar imagem");
            console.log(err);
        });
    };
    LivroRegisterPage.prototype.mudarImagemCapa = function (img64) {
        this.capaAtual = img64;
    };
    LivroRegisterPage.prototype.onAdicionarPDF = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            console.log('Relative Path: ' + uri);
            _this.filePath.resolveNativePath(uri).then(function (resolvedFilePath) {
                _this.base64.encodeFile(resolvedFilePath).then(function (base64File) {
                    _this.pdfTemp = _this.dataURItoBlob(base64File, true);
                    _this.pdfAtual = 'data:application/pdf;base64,' + base64File;
                }, function (err) {
                    console.log(err);
                });
            });
        })
            .catch(function (e) { return console.log(e); });
    };
    LivroRegisterPage.prototype.validaCapa = function (capa) {
        if (!capa)
            return this.CAPA_DEFAULT;
        else
            return capa;
    };
    LivroRegisterPage.prototype.dataURItoBlob = function (dataURI, pdf) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        if (!pdf)
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        else
            return new Blob([new Uint8Array(array)], { type: 'application/pdf' });
    };
    ;
    LivroRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livro-register',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro-register\livro-register.html"*/'<ion-header>\n  <ion-navbar>\n\n\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      Cadastre um Livro\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="contentMain">\n  <ion-card>\n    <ion-card-content>\n      <ion-row justify-content-center padding>\n        <img\n          style="max-height: 200px; width:auto"\n          [src]="validaCapa(this.capaAtual)"/>\n      </ion-row>\n      <ion-row justify-content-center>\n        <button\n\n          ion-button\n          (click)="onMudarCapaCamera()"\n          icon-only>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n        <button\n          ion-button\n          (click)="onMudarCapaGaleria()"\n          icon-only>\n          <ion-icon name="image"></ion-icon>\n        </button>\n\n        <button\n          [outline]="pdfAtual === \'\'"\n          ion-button\n          (click)="onAdicionarPDF()"\n          icon-only\n          [color]="btnPDFcolor">\n          <ion-icon name="document"></ion-icon>\n        </button>\n\n      </ion-row>\n\n\n      <form (ngSubmit)="registerLivro(f.value)" #f="ngForm">\n        <ion-row style="border-bottom: 1px solid #cccccc">\n          <ion-col>\n            <ion-list inset>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Título" name="titulo" ngModel required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-input type="text" placeholder="Autor" name="autor" ngModel required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Data de Lançamento</ion-label> <ion-datetime placeholder="02/02/2018" name="dtLancamento" displayFormat="DD/MM/YYYY" ngModel required></ion-datetime>\n              </ion-item>\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!f.valid">Adicionar novo livro</button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\livro-register\livro-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__services_livros__["a" /* LivroServiceFirebase */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */]])
    ], LivroRegisterPage);
    return LivroRegisterPage;
}());

//# sourceMappingURL=livro-register.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);



window["$"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_dialogs__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_document_viewer__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_shopList_shopList__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shopRegister_shopRegister__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_livro_livro__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_lista_livros_lista_livros__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_livros__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_shops__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_livro_register_livro_register__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_livro_edit_livro_edit__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_loginForm__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__firebase_credentials__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_in_app_browser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_storage__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//BASIC IMPORTS




//IONIC NATIVE IMPORTS












//EXTERNAL IMPORTS


//PAGE IMPORTS











//DATABASE IMPORTS





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_28__pages_login_loginForm__["a" /* FormsPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shopList_shopList__["a" /* ShopListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shopRegister_shopRegister__["a" /* ShopRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_livro_livro__["a" /* LivroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_livro_register_livro_register__["a" /* LivroRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_livro_edit_livro_edit__["a" /* LivroEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_31__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_33_angularfire2_storage__["a" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__pages_login_loginForm__["a" /* FormsPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shopList_shopList__["a" /* ShopListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shopRegister_shopRegister__["a" /* ShopRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_livro_livro__["a" /* LivroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_livro_register_livro_register__["a" /* LivroRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_lista_livros_lista_livros__["a" /* ListaLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_livro_edit_livro_edit__["a" /* LivroEditPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__services_livros__["a" /* LivroServiceFirebase */],
                __WEBPACK_IMPORTED_MODULE_25__services_shops__["a" /* ShopService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__["a" /* Base64 */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(278);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 422:
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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Rodrigo\ionic\TestProject\src\pages\login\login.html"*/'<ion-content class="contentMain" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col class="imgCol" width-67>\n      <img src="../assets/imgs/bookLogo2.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="loginBox">\n\n    <ion-card>\n      <ion-card-content>\n        <form (ngSubmit)="loginRegular(f)" #f="ngForm">\n          <ion-row style="border-bottom: 1px solid #cccccc">\n            <ion-col>\n              <ion-list inset>\n\n                <ion-item>\n                  <ion-input\n                    type="email"\n                    email\n                    [(ngModel)]="email"\n                    placeholder="Email"\n                    name="email"\n                    required></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-input\n                    type="password"\n                    placeholder="Senha"\n                    name="password"\n                    ngModel\n                    required></ion-input>\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class="signup-col">\n              <button\n                ion-button\n                class="submit-btn"\n                full\n                type="submit"\n                (click)="onLogin()"\n                [disabled]="!f.valid">Login</button>\n\n              <button\n                ion-button\n                class="register-btn"\n                block\n                clear>Criar nova conta</button>\n            </ion-col>\n          </ion-row>\n\n      </form>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row>\n      <ion-col  style="display:block; margin: 0 auto" class="signup-col" col-auto>\n        <p style="color:#ffffffbb"> Ou autentique-se com </p>\n        <div style="display:flex; justify-content: center;">\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button icon-only>\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n\n          <button style="background-color: #ffffffbb; color:#333388ff" ion-button round icon-only>\n            <ion-icon name="logo-google"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Rodrigo\ionic\TestProject\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsPage = /** @class */ (function () {
    function FormsPage() {
        this.todo = {};
    }
    FormsPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    FormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"todo.title\" name=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Senha</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"todo.title\" name=\"title\"></ion-input>\n      </ion-item>\n      <button ion-button type=\"submit\" block>Entrar</button>\n    </form>\n  "
        })
    ], FormsPage);
    return FormsPage;
}());

//# sourceMappingURL=loginForm.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    //FIREBASE GLOBAL
    // apiKey: "AIzaSyC1vD3B8VDTU33pau6XtbtoSxG1Nr8TXAQ",
    // authDomain: "testappionic-93bec.firebaseapp.com",
    // databaseURL: "https://testappionic-93bec.firebaseio.com",
    // projectId: "testappionic-93bec",
    // storageBucket: "testappionic-93bec.appspot.com",
    // messagingSenderId: "335082067236"
    //FIREBASE SOMENTE IONIC
    apiKey: "AIzaSyAsvBnPlfvPyILEk2VotKX18lmzkg_GQ3s",
    authDomain: "livrosionic.firebaseapp.com",
    databaseURL: "https://livrosionic.firebaseio.com",
    projectId: "livrosionic",
    storageBucket: "livrosionic.appspot.com",
    messagingSenderId: "88127481598"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroServiceFirebase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LivroServiceFirebase = /** @class */ (function () {
    function LivroServiceFirebase(db) {
        this.db = db;
        this.livroRef = this.db.list('livros');
    }
    LivroServiceFirebase.prototype.getLivro = function (id) {
        var livro = this.db.database.ref('/' + id);
        return livro;
    };
    LivroServiceFirebase.prototype.getAllLivros = function () {
        return this.livroRef;
    };
    LivroServiceFirebase.prototype.addLivro = function (livro, capaTemp, pdfTemp) {
        livro.key = this.livroRef.push(null).key;
        console.log("ADICIONANDO - >" + livro.key);
        this.livroRef.update('/' + livro.key, livro);
        this.uploadToDB(capaTemp, livro.key, false);
        this.uploadToDB(pdfTemp, livro.key, true);
    };
    LivroServiceFirebase.prototype.deleteLivro = function (livro) {
        console.log("EXCLUINDO - >" + livro.key);
        var updates = {};
        updates['/livros/' + livro.key] = null;
        this.db.database.ref().update(updates);
    };
    LivroServiceFirebase.prototype.atualizarLivro = function (livroEditado) {
        console.log("EDITANDO - >" + livroEditado.key);
        var updates = {};
        updates['/livros/' + livroEditado.key] = livroEditado;
        this.db.database.ref().update(updates);
    };
    LivroServiceFirebase.prototype.atualizarAtributo = function (atributo, keyLivro, novoValor) {
        console.log("ATUALIZANDO ATRIBUTO " + atributo + " de - >" + keyLivro);
        var updates = {};
        updates['/livros/' + keyLivro + "/" + atributo] = novoValor;
        this.db.database.ref().update(updates);
    };
    LivroServiceFirebase.prototype.uploadToDB = function (selectedFile, livroKey, pdf) {
        if (selectedFile) {
            var self_1 = this;
            var uploadTask = void 0;
            if (!pdf)
                uploadTask = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref().child('/' + livroKey.toString() + '/image').put(selectedFile);
            else
                uploadTask = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref().child('/' + livroKey.toString() + '/pdf').put(selectedFile);
            uploadTask.then(function (snapshot) {
                if (!pdf)
                    self_1.atualizarAtributo('capa', livroKey, snapshot.downloadURL);
                else
                    self_1.atualizarAtributo('pdf', livroKey, snapshot.downloadURL);
            }, function () {
                console.log("erro");
            });
        }
    };
    LivroServiceFirebase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LivroServiceFirebase);
    return LivroServiceFirebase;
}());

//# sourceMappingURL=livros.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map