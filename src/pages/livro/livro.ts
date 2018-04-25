import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
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
  pdfAvailable: boolean;
  PDF_LINK: string = "https://www.ufcspa.edu.br/ufcspa/ensino/posGraduacao/especializacao/2018/edital-01-2018-bolsas-academicas.pdf";


  constructor(
    public domSanitizationService: DomSanitizer,
    public livrosService: LivroService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File,
    public fileOpener: FileOpener,
    private platform: Platform) {
  }

  ionViewDidLoad(){
    if(this.livro.pdf === "" || this.livro.pdf === null)
      this.pdfAvailable = true;
    else
      this.pdfAvailable = false;

  }

  ngOnInit(){
    this.livro = this.navParams.get('livro');
  }

  onVerPDF(){

    if(this.platform.is('android')){
      //SÓ FUNCIONA NO ANDROID

      this.fileOpener.open(this.livro.pdf, 'application/pdf').then(value =>{
        console.log('File exists and is beeing opened...');
      }).catch(err =>console.log('error on opening the file ->' + err));
    }

    //NÃO É POSSÍVEL TESTAR POIS PRECISA DO APP RODANDO NATIVO
    if(this.platform.is('ios')) {
      //SÓ FUNCIONA NO IOS
      this.fileOpener.open(this.livro.pdf, 'application/pdf').then(value =>{
        console.log('File exists and is beeing opened...');
      }).catch(err =>console.log('error on opening the file ->' + err));
    }
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
