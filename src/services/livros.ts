
import {Livro} from "../data/livroInterface";
import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";

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

  addLivro(livro: Livro) {
    livro.key = this.livroRef.push(null).key;
    console.log("ADICIONANDO - >"+livro.key);
    this.livroRef.update('/'+livro.key,livro);
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

}
