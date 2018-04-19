import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import { DomSanitizer } from '@angular/platform-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import {LivroEditPage} from "../livro-edit/livro-edit";
import {DocumentViewer, DocumentViewerOptions} from "@ionic-native/document-viewer";
import {File} from "@ionic-native/file";




@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;

  constructor(
    private document: DocumentViewer,
    private filePath: FilePath,
    private fileOpener: FileOpener,
    private _DomSanitizationService: DomSanitizer,
    public livrosService: LivroService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public file: File) {
  }

  ngOnInit(){
    this.livro = this.navParams.data;
  }

  onVerPDF(){
    const options: DocumentViewerOptions = {
      title: this.livro.titulo
    }
    this.document.viewDocument(this.file.applicationDirectory+this.livro.pdf, 'application/pdf',options);
  }

  // openPath(){
  //   this.filePath.resolveNativePath(this.livro.pdf)
  //     .then(filePath =>this.openPDF(filePath))
  //     .catch(err => console.log(err));
  // }

  // openPDF(path){
  //   this.fileOpener.open(path, 'application/pdf')
  //     .then(() => console.log('File is opened'))
  //     .catch(e => console.log('Error opening file', e));
  // }

  deleteLivro(id:number){
    console.log(id + "vddd");
    this.livrosService.deleteLivro(id);
    this.navCtrl.pop();
  }

  editLivro() {
    this.navCtrl.push(LivroEditPage, {livro: this.livro});

  }
}
