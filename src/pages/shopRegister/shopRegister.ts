import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import {Shop} from "../../models/shop"
import {ShopService} from "../../services/shops";


@Component({
  selector: 'page-shopregister',
  templateUrl: 'shopRegister.html'
})
export class ShopRegisterPage {

  constructor(public shopService: ShopService, public viewCtrl: ViewController) {

  }

  dismiss() {
     this.viewCtrl.dismiss();
   }

  registerShop(values){

    console.log(values.shopName);
    this.shopService.addShop({id: this.shopService.getNextId(), nome: values.shopName, telefone: values.shopNumber, site: values.shopSite, endereco: values.shopAddress});
    // let data = new Shop(f.value.shopName, f.value.shopNumber, f.value.shopSite, f.value.shopAddress);
     //this.viewCtrl.dismiss(data);

    console.log(this.shopService.getAllShops());
   }
}
