import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'page-livro-register',
  templateUrl: 'livro-register.html',
})
export class LivroRegisterPage {

  constructor(private viewCtrl: ViewController, private livroService: LivroService){}

  livro: Livro;

  registerLivro(livro) {
    console.log(livro.titulo);
    this.livroService.addLivro({id: this.livroService.getProximoId(), capa: livro.capa, titulo: livro.titulo, autor: livro.autor, dtLancamento: livro.dtLancamento, pdf: livro.pdf});
    console.log(this.livroService.getAllLivros());
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
