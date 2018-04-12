import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Livro} from "../../data/livroInterface";

@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro: Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.livro = this.navParams.data;
  }

}
