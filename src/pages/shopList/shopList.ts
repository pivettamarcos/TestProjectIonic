import { Component } from '@angular/core';
import {  ModalController } from 'ionic-angular';


import { ShopRegisterPage } from "../shopRegister/shopRegister"
import {ShopService} from "../../services/shops";
import {Shop} from "../../data/shopInterface";



@Component({
  selector: 'page-shopList',
  templateUrl: 'shopList.html'
})
export class ShopListPage {
  shops: Shop[];

  constructor(public modalCtrl: ModalController, private shopService: ShopService) {

  }

  addShop(){
      let profileModal = this.modalCtrl.create(ShopRegisterPage, { userId: 8675309 });
      profileModal.present();
      console.log(ShopRegisterPage);
  }

  ngOnInit(){
    this.shops = this.shopService.getAllShops();
  }
}
