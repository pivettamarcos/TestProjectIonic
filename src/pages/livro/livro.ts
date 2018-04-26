import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import { DomSanitizer } from '@angular/platform-browser';
import {LivroEditPage} from "../livro-edit/livro-edit";
import {File} from "@ionic-native/file";
import {FileOpener} from "@ionic-native/file-opener";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {LivroServiceFirebase} from "../../services/livros";

@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;
  pdfAvailable: boolean;
  CAPA_DEFAULT: string = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";



  constructor(
    public domSanitizationService: DomSanitizer,
    public livrosService: LivroServiceFirebase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public fileOpener: FileOpener,
    private platform: Platform,
    private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad(){
    if(this.livro.pdf === "" || this.livro.pdf === null)
      this.pdfAvailable = true;
    else
      this.pdfAvailable = false;

    if(this.livro.capa ==="" || this.livro.capa === null){
      this.livro.capa = this.CAPA_DEFAULT;
    }

  }

  ngOnInit(){
    this.livro = this.navParams.get('livro');
  }

  onVerPDF(){

    const browser = this.inAppBrowser.create(this.livro.pdf,'_system');

  }


  deleteLivro(livro: Livro){
    this.livrosService.deleteLivro(livro);
    this.navCtrl.pop();
  }

  editLivro() {
    this.navCtrl.push(LivroEditPage, {livro: this.livro});

  }

  sanitizeBase64(capa: string) {
    this.domSanitizationService.bypassSecurityTrustUrl(capa);
  }

  validaCapa(capa: string) {
    if(!capa)
      return this.CAPA_DEFAULT;
    else
      return capa;
  }
}
