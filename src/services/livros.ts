
import {Livro} from "../data/livroInterface";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

import * as firebase from 'firebase';


@Injectable()
export class LivroServiceFirebase{

  private livroRef = this.db.list('livros');
  public livros: Livro[];

  constructor(private db: AngularFireDatabase) { }

  getLivro(id: string) {
    let livro =  this.db.database.ref('/'+id);
    return livro;
  }

  getAllLivros(){
    return this.livroRef;
  }

  addLivro(livro: Livro, capaTemp, pdfTemp) {
    livro.key = this.livroRef.push(null).key;
    console.log("ADICIONANDO - >"+livro.key);
    this.livroRef.update('/'+livro.key,livro);
    this.uploadToDB(capaTemp, livro.key, false);
    this.uploadToDB(pdfTemp, livro.key, true);
  }

    deleteLivro(livro: Livro){
    console.log("EXCLUINDO - >"+livro.key);
    let updates = {};
    updates['/livros/' + livro.key] = null;
    this.db.database.ref().update(updates);
  }

  atualizarLivro(livroEditado: Livro){
    console.log("EDITANDO - >"+livroEditado.key);
    let updates = {};
    updates['/livros/' + livroEditado.key] = livroEditado;
    this.db.database.ref().update(updates);
  }

  atualizarAtributo(atributo, keyLivro, novoValor){
    console.log("ATUALIZANDO ATRIBUTO "+atributo+" de - >"+keyLivro);
    let updates = {};
    updates['/livros/' + keyLivro +"/"+atributo] = novoValor;
    this.db.database.ref().update(updates);
  }

  uploadToDB(selectedFile, livroKey, pdf) {
    if (selectedFile) {
      let self = this;
      let uploadTask;

      if(!pdf)
        uploadTask = firebase.storage().ref().child('/'+livroKey.toString()+'/image').put(selectedFile);
      else
        uploadTask = firebase.storage().ref().child('/'+livroKey.toString()+'/pdf').put(selectedFile);

      uploadTask.then(
        function(snapshot) {
          if(!pdf)
            self.atualizarAtributo('capa', livroKey, snapshot.downloadURL)
          else
            self.atualizarAtributo('pdf', livroKey, snapshot.downloadURL)
        }, function() {
          console.log("erro")
        });
    }
  }

}
