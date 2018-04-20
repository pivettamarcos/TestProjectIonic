import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import { DomSanitizer } from '@angular/platform-browser';
import {LivroEditPage} from "../livro-edit/livro-edit";
import {File} from "@ionic-native/file";
import {FileOpener} from "@ionic-native/file-opener";




@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;

  constructor(
    public domSanitizationService: DomSanitizer,
    public livrosService: LivroService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public fileOpener: FileOpener) {
  }

  ngOnInit(){
    this.livro = this.navParams.data;
  }

  onVerPDF(){

    //SÓ FUNCIONA NO ANDROID
    this.fileOpener.open(this.livro.pdf, 'application/pdf').then(value =>{
      console.log('File exists and is beeing opened...');
    }).catch(err =>console.log('error on opening the file ->' + err));

    //SÓ FUNCIONA NO IOS
    //TODO
  }


  deleteLivro(id:number){
    console.log(id + "vddd");
    this.livrosService.deleteLivro(id);
    this.navCtrl.pop();
  }

  editLivro() {
    this.navCtrl.push(LivroEditPage, {livro: this.livro});

  }

  sanitizeBase64(capa: string) {
    this.domSanitizationService.bypassSecurityTrustUrl(capa);
  }
}
