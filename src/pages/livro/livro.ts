import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import { DomSanitizer } from '@angular/platform-browser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';




@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;

  constructor(private filePath: FilePath, private fileOpener: FileOpener, private _DomSanitizationService: DomSanitizer, public livrosService: LivroService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.livro = this.navParams.data;
  }

  openPath(){
    this.filePath.resolveNativePath(this.livro.pdf)
      .then(filePath =>this.openPDF(filePath))
      .catch(err => console.log(err));
  }

  openPDF(path){
    this.fileOpener.open(path, 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }

  deleteLivro(id:number){
    console.log(id + "vddd");
    this.livrosService.deleteLivro(id);
    this.navCtrl.pop();
  }

}
