import { Component } from '@angular/core';
import {ShopListPage} from "../shopList/shopList";
import {ListaLivrosPage} from "../lista-livros/lista-livros";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  shopListPage = ShopListPage;
  listaLivrosPage = ListaLivrosPage;



}
