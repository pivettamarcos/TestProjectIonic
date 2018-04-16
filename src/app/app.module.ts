import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {ListaLivrosPage} from "../pages/lista-livros/lista-livros";
import {LivroPage} from "../pages/livro/livro";
import {ShopListPage} from "../pages/shopList/shopList";
import {ShopRegisterPage} from "../pages/shopRegister/shopRegister";
import {ShopService} from "../services/shops";
import {LivroService} from "../services/livros";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListaLivrosPage,
    LivroPage,
    ShopListPage,
    ShopRegisterPage
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
    ListaLivrosPage,
    LivroPage,
    ShopListPage,
    ShopRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    LivroService,
    ShopService
  ]
})
export class AppModule {}
