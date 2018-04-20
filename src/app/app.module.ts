
//BASIC IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//IONIC NATIVE IMPORTS
import { Camera } from '@ionic-native/camera';
import {FileChooser} from '@ionic-native/file-chooser';
import { DatePicker } from '@ionic-native/date-picker';
import { FileOpener } from '@ionic-native/file-opener';
import { ImagePicker } from '@ionic-native/image-picker';
import { Dialogs } from '@ionic-native/dialogs';
import {DocumentViewer} from "@ionic-native/document-viewer";
import {File} from "@ionic-native/file";
import {StatusBar} from "@ionic-native/status-bar";


//PAGE IMPORTS
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
import {FormsPage} from "../pages/login/loginForm";
import {SplashScreen} from "@ionic-native/splash-screen";
import {FilePath} from "@ionic-native/file-path";




@NgModule({
  declarations: [
    FormsPage,
    MyApp,
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
    FormsPage,
    MyApp,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    LivroService,
    ShopService,
    FileChooser,
    DatePicker,
    ImagePicker,
    File,
    DocumentViewer,
    Dialogs,
    StatusBar,
    SplashScreen,
    FileOpener,
    FilePath
  ]
})
export class AppModule {}
