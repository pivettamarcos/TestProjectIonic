import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import {LivroPage} from "../livro/livro";
import livros from "../../data/livros";
import {ShopRegisterPage} from "../shopRegister/shopRegister";
import {LivroRegisterPage} from '../livro-register/livro-register';

@Component({
  selector: 'page-lista-livros',
  templateUrl: 'lista-livros.html',
})
export class ListaLivrosPage {
  livros: Livro[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private livrosService: LivroService) {
  }

  ngOnInit(){
    this.livros = this.livrosService.getAllLivros();
  }

  onVerMais(id: number) {
    this.navCtrl.push(LivroPage,this.livrosService.getLivro(id));
  }

  deleteLivro(id:number){
       this.livrosService.deleteLivro(id);
  }

  addLivro() {
    let profileModal = this.modalCtrl.create(LivroRegisterPage, { userId: 8675309 });
    profileModal.present();
  }
}
