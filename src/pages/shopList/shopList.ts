import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';

import { HomePage } from "../home/home"
import { ShopRegisterPage } from "../shopRegister/shopRegister"


@Component({
  selector: 'page-shopList',
  templateUrl: 'shopList.html'
})
export class ShopListPage {

  constructor(public modalCtrl: ModalController) {

  }

  addShop(){
      let profileModal = this.modalCtrl.create(ShopRegisterPage, { userId: 8675309 });
      profileModal.present();
      console.log(ShopRegisterPage);
  }
}
