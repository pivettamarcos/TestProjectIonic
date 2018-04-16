import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";


@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;

  constructor(public livrosService: LivroService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.livro = this.navParams.data;
  }

  deleteLivro(id:number){
    this.livrosService.deleteLivro(id);
    this.navCtrl.pop();
  }

}
