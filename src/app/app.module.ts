import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {ShopListPage} from "../pages/shopList/shopList";
import {ShopRegisterPage} from "../pages/shopRegister/shopRegister";
import {LivroPage} from "../pages/livro/livro";
import {ListaLivrosPage} from "../pages/lista-livros/lista-livros";
import {LivroService} from "../services/livros";
import {TabsPage} from "../pages/tabs/tabs";
import {ShopService} from "../services/shops";
import {LivroRegisterPage} from "../pages/livro-register/livro-register";
import {LivroEditPage} from "../pages/livro-edit/livro-edit";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ShopListPage,
    ShopRegisterPage,
    LivroPage,
    LivroRegisterPage,
    ListaLivrosPage,
    TabsPage,
    LivroEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ShopListPage,
    ShopRegisterPage,
    LivroPage,
    LivroRegisterPage,
    ListaLivrosPage,
    TabsPage,
    LivroEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Camera,
    LivroService,
    ShopService
  ]
})
export class AppModule {}
