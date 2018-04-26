import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {LivroPage} from "../livro/livro";
import {LivroRegisterPage} from '../livro-register/livro-register';
import {LivroEditPage} from "../livro-edit/livro-edit";
import {DomSanitizer} from "@angular/platform-browser";
import { ActionSheetController } from 'ionic-angular'
import {LivroServiceFirebase} from "../../services/livros";
import {Livro} from "../../data/livroInterface";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'page-lista-livros',
  templateUrl: 'lista-livros.html',
})
export class ListaLivrosPage {

  livros$: Observable<Livro[]>;
  CAPA_DEFAULT: string = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";


  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private livrosService: LivroServiceFirebase,
    private domSanitizationService: DomSanitizer,
    private actionSheetCtrl: ActionSheetController,
    private db: AngularFireDatabase) {

    this.livros$ = this.livrosService
      .getAllLivros() //DB LIST
      .snapshotChanges()// KEY AND VALUE
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
          }));
        }
      )
  }

  ngOnInit(){
  }


  onVerMais(livro: Livro) {
    this.navCtrl.push(LivroPage,{livro: livro});
  }

  deleteLivro(livro: Livro){
       this.livrosService.deleteLivro(livro);
  }

  addLivro() {
    let profileModal = this.modalCtrl.create(LivroRegisterPage, { userId: 8675309 });
    profileModal.present();
  }

  editarLivro(livro) {
    this.navCtrl.push(LivroEditPage, {livro: livro});
  }

  // filterItems(ev: any) {
  //
  //   function arrayUnique(array) {
  //     var a = array.concat();
  //     for(var i=0; i<a.length; ++i) {
  //       for(var j=i+1; j<a.length; ++j) {
  //         if(a[i] === a[j])
  //           a.splice(j--, 1);
  //       }
  //     }
  //     return a;
  //   }
  //
  //   let livros: Livro[] = this.livros$.map;
  //
  //   let nomeLivro = ev.target.value;
  //
  //   if (nomeLivro && nomeLivro.trim() !== '') {
  //     let filtradosPorAutor = this.livros.filter(function(item) {
  //       return item.autor.toLowerCase().includes(nomeLivro.toLowerCase());
  //     });
  //     let filtradosPorTitulo = this.livros.filter(function(item) {
  //       return item.titulo.toLowerCase().includes(nomeLivro.toLowerCase());
  //     });
  //
  //     livros = arrayUnique(filtradosPorAutor.concat(filtradosPorTitulo));
  //
  //   }
  // }

  // filterItems(ev: any){}

  onCancel(ev: any) {
  }

  sanitizeBase64(capa: string) {
    this.domSanitizationService.bypassSecurityTrustUrl(capa);
  }

  mostrarOpcoes(livro) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.deleteLivro(livro);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.editarLivro(livro);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  validaCapa(capa: string) {
    if(!capa)
      return this.CAPA_DEFAULT;
    else
      return capa;
  }
}
