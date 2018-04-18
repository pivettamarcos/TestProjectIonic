
import {Livro} from "../data/livroInterface";
import livros from '../data/livros';


export class LivroService{
  private livros: Livro[] = livros;

  getLivro(id: number){
    return this.livros.find((livroEl: Livro) => {
      return livroEl.id == id;
    });
  }

  getAllLivros(){return this.livros};

  addLivro(livro: Livro){

    livros.push(livro);

  }

  deleteLivro(id){
      for(var i = 0; i < this.livros.length; i++){
         if(this.livros[i].id == id)
            this.livros.splice(i,1);
      }
  }

  getProximoId(){

    return livros[livros.length-1].id+1;
  }

  atualizarLivro(livroEditado: Livro){
    let livroAntigo = this.getLivro(livroEditado.id);
    let index = this.livros.indexOf(livroAntigo);
    this.livros[index] = livroEditado;
  }

}
