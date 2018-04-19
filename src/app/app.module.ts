
//BASIC IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//IONIC NATIVE IMPORTS
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';
import {FileChooser} from '@ionic-native/file-chooser';
import { DatePicker } from '@ionic-native/date-picker';
import {FilePath} from "@ionic-native/file-path";
import { FileOpener } from '@ionic-native/file-opener';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { ImagePicker } from '@ionic-native/image-picker';



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
import {File} from "@ionic-native/file";
import {FileTransfer} from "@ionic-native/file-transfer";
import {DocumentViewer} from "@ionic-native/document-viewer";




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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Camera,
    LivroService,
    ShopService,
    FileChooser,
    DatePicker,
    FilePath,
    FileOpener,
    PhotoLibrary,
    ImagePicker,
    File,
    FileTransfer,
    DocumentViewer
  ]
})
export class AppModule {}
