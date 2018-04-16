import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";

@Component({
  selector: 'page-livro-register',
  templateUrl: 'livro-register.html',
})
export class LivroRegisterPage {

  livroService: LivroService;

  livro: Livro;

  registerLivro(livro) {
    this.livro = livro;
    this.livro.id = this.livroService.getProximoId();
    this.livroService.getAllLivros().push(livro);

  }
}
