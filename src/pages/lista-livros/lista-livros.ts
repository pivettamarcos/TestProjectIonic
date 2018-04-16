import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import {LivroPage} from "../livro/livro";
import livros from "../../data/livros";

@Component({
  selector: 'page-lista-livros',
  templateUrl: 'lista-livros.html',
})
export class ListaLivrosPage {
  livros: Livro[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private livrosService: LivroService) {
  }

  ngOnInit(){
    this.livros = this.livrosService.getAllLivros();
  }

  onVerMais(id: string) {
    this.navCtrl.push(LivroPage,this.livrosService.getLivro(id));
  }

  addLivro() {

  }
}
