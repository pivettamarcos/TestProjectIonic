import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import {LivroPage} from "../livro/livro";
import livros from "../../data/livros";
import {ShopRegisterPage} from "../shopRegister/shopRegister";
import {LivroRegisterPage} from '../livro-register/livro-register';
import {LivroEditPage} from "../livro-edit/livro-edit";
import {DomSanitizer} from "@angular/platform-browser";

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
    private livrosService: LivroService,
    private _DomSanitizationService: DomSanitizer) {
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

  editarLivro(id: number) {
    this.navCtrl.push(LivroEditPage, {livro: this.livrosService.getLivro(id)});
  }

  filterItems(ev: any) {

    function arrayUnique(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
            a.splice(j--, 1);
        }
      }

      return a;
    }

    this.livros = this.livrosService.getAllLivros();
    let nomeLivro = ev.target.value;

    if (nomeLivro && nomeLivro.trim() !== '') {
      let filtradosPorAutor = this.livros.filter(function(item) {
        return item.autor.toLowerCase().includes(nomeLivro.toLowerCase());
      });
      let filtradosPorTitulo = this.livros.filter(function(item) {
        return item.titulo.toLowerCase().includes(nomeLivro.toLowerCase());
      });

      this.livros = arrayUnique(filtradosPorAutor.concat(filtradosPorTitulo));

    }
  }



  onCancel(ev: any) {
    this.livros = this.livrosService.getAllLivros();
  }
}
