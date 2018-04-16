
import {Livro} from "../data/livroInterface";
import livros from '../data/livros';


export class LivroService{
  private livros: Livro[] = livros;

  getLivro(id: string){
    return this.livros.find((livroEl: Livro) => {
      return livroEl.id == id;
    });
  }

  getAllLivros(){return this.livros};

  addLivro(livro: Livro){

    livros.push(livro);

  }

  getProximoId(){
    return Number(livros[livros.length-1].id+1).toString();
  }

}
