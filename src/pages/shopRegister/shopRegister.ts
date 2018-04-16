import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import {HomePage} from "../home/home"
import {Shop} from "../../models/shop"


@Component({
  selector: 'page-shopregister',
  templateUrl: 'shopRegister.html'
})
export class ShopRegisterPage {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
     this.viewCtrl.dismiss();
   }

   registerShop(f: ngForm){
     let data = new Shop(f.value.shopName, f.value.shopNumber, f.value.shopSite, f.value.shopAddress);
     this.viewCtrl.dismiss(data);
   }
}
